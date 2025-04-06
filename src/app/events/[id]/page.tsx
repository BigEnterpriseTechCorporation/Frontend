'use client'

import React, { useState } from 'react'
import { Button, Card, DatePicker, Descriptions, Divider, Form, Input, message, Popconfirm, Select, Space, Spin, Tabs, Typography, Tag } from 'antd'
import { ArrowLeftOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useGetForUpdateEventMutation, useUpdateEventMutation, useDeleteEventMutation, useSearchOrganizationQuery, useSearchVolonteerEventRequestQuery } from '@/__generate/graphql-frontend'
import dayjs from 'dayjs'

const { Title } = Typography
const { TabPane } = Tabs
const { RangePicker } = DatePicker
const { Option } = Select
const { TextArea } = Input

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [form] = Form.useForm()
  const id = params.id

  const [getEvent, { loading: loadingEvent, data }] = useGetForUpdateEventMutation({
    onCompleted: (data) => {
      if (data.packet?.getEvent) {
        const event = data.packet.getEvent
        form.setFieldsValue({
          description: event.description,
          organization: event.organization.id,
          dateRange: event.startDateTime && event.endDateTime ? 
            [dayjs(event.startDateTime), dayjs(event.endDateTime)] : undefined,
          status: event.statusForX.code,
          statusReason: event.statusForX.reason
        })
      }
    },
    onError: (error) => {
      message.error(`Failed to load event: ${error.message}`)
    }
  })

  const [updateEvent, { loading: updatingEvent }] = useUpdateEventMutation({
    onCompleted: () => {
      message.success('Event updated successfully')
      setIsEditing(false)
      getEvent({ variables: { id } })
    },
    onError: (error) => {
      message.error(`Failed to update event: ${error.message}`)
    }
  })

  const [deleteEvent, { loading: deletingEvent }] = useDeleteEventMutation({
    onCompleted: () => {
      message.success('Event deleted successfully')
      router.push('/events')
    },
    onError: (error) => {
      message.error(`Failed to delete event: ${error.message}`)
    }
  })

  const { data: orgsData, loading: loadingOrgs } = useSearchOrganizationQuery({
    variables: { cond: undefined }
  })

  const { data: requestsData, loading: loadingRequests } = useSearchVolonteerEventRequestQuery({
    variables: { cond: `event.entityId = '${id}'` }
  })

  React.useEffect(() => {
    getEvent({ variables: { id } })
  }, [id, getEvent])

  const handleSubmit = async (values: any) => {
    const [startDateTime, endDateTime] = values.dateRange || [null, null]
    
    await updateEvent({
      variables: {
        input: {
          id,
          description: values.description,
          organization: values.organization,
          startDateTime: startDateTime ? startDateTime.toISOString() : undefined,
          endDateTime: endDateTime ? endDateTime.toISOString() : undefined,
          statusForX: {
            code: values.status,
            reason: values.statusReason
          }
        }
      }
    })
  }

  const handleDelete = async () => {
    await deleteEvent({
      variables: { id }
    })
  }

  const event = data?.packet?.getEvent
  const isLoading = loadingEvent || updatingEvent || deletingEvent

  if (isLoading && !event) {
    return <Spin size="large" />
  }

  if (!event && !isLoading) {
    return <div>Event not found</div>
  }

  const organization = orgsData?.searchOrganization.elems.find(
    org => org.id === event?.organization.id
  )

  return (
    <Card>
      <Space direction="vertical" style={{ width: '100%' }} size="large">
        <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Title level={2}>Event Details</Title>
          <Space>
            <Link href="/events">
              <Button icon={<ArrowLeftOutlined />}>Back to Events</Button>
            </Link>
            {!isEditing && (
              <>
                <Button 
                  icon={<EditOutlined />} 
                  type="primary"
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </Button>
                <Popconfirm
                  title="Delete event"
                  description="Are you sure you want to delete this event? All volunteer requests for this event will also be deleted."
                  onConfirm={handleDelete}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button 
                    icon={<DeleteOutlined />} 
                    danger
                    loading={deletingEvent}
                  >
                    Delete
                  </Button>
                </Popconfirm>
              </>
            )}
          </Space>
        </Space>

        {isEditing ? (
          <Form 
            form={form} 
            layout="vertical" 
            onFinish={handleSubmit}
          >
            <Form.Item
              name="description"
              label="Event Description"
              rules={[
                {
                  required: true,
                  message: 'Please enter event description',
                },
              ]}
            >
              <TextArea rows={4} placeholder="Enter event description" />
            </Form.Item>

            <Form.Item
              name="organization"
              label="Organization"
              rules={[
                {
                  required: true,
                  message: 'Please select an organization',
                },
              ]}
            >
              <Select
                loading={loadingOrgs}
                placeholder="Select organization"
              >
                {orgsData?.searchOrganization.elems.map(org => (
                  <Option key={org.id} value={org.id}>
                    {org.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="dateRange"
              label="Event Duration"
            >
              <RangePicker 
                showTime 
                format="YYYY-MM-DD HH:mm:ss"
                placeholder={['Start time', 'End time']}
              />
            </Form.Item>

            <Form.Item
              name="status"
              label="Status"
            >
              <Select placeholder="Select status">
                <Option value="PENDING">Pending</Option>
                <Option value="ACTIVE">Active</Option>
                <Option value="CANCELLED">Cancelled</Option>
                <Option value="COMPLETED">Completed</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="statusReason"
              label="Status Reason"
            >
              <Input placeholder="Enter status reason (optional)" />
            </Form.Item>

            <Form.Item>
              <Space>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  loading={updatingEvent}
                >
                  Save
                </Button>
                <Button 
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
              </Space>
            </Form.Item>
          </Form>
        ) : (
          <Descriptions bordered>
            <Descriptions.Item label="ID" span={3}>{event?.id}</Descriptions.Item>
            <Descriptions.Item label="Description" span={3}>{event?.description}</Descriptions.Item>
            <Descriptions.Item label="Organization" span={3}>
              <Link href={`/organizations/${event?.organization.id}`}>
                {organization?.name || event?.organization.id}
              </Link>
            </Descriptions.Item>
            <Descriptions.Item label="Start Date" span={3}>
              {event?.startDateTime ? new Date(event.startDateTime).toLocaleString() : 'Not set'}
            </Descriptions.Item>
            <Descriptions.Item label="End Date" span={3}>
              {event?.endDateTime ? new Date(event.endDateTime).toLocaleString() : 'Not set'}
            </Descriptions.Item>
            <Descriptions.Item label="Status" span={3}>
              {event?.statusForX.code ? (
                <Tag color={
                  event.statusForX.code === 'ACTIVE' ? 'green' :
                  event.statusForX.code === 'CANCELLED' ? 'red' :
                  event.statusForX.code === 'PENDING' ? 'blue' :
                  event.statusForX.code === 'COMPLETED' ? 'purple' : 
                  'default'
                }>
                  {event.statusForX.code}
                </Tag>
              ) : 'None'}
            </Descriptions.Item>
            {event?.statusForX.reason && (
              <Descriptions.Item label="Status Reason" span={3}>
                {event.statusForX.reason}
              </Descriptions.Item>
            )}
          </Descriptions>
        )}

        <Divider />

        <Tabs defaultActiveKey="volunteers">
          <TabPane tab="Volunteer Requests" key="volunteers">
            <Spin spinning={loadingRequests}>
              {!requestsData || requestsData.searchVolonteerEventRequest.elems.length === 0 ? (
                <div>No volunteer requests found for this event</div>
              ) : (
                <ul>
                  {requestsData.searchVolonteerEventRequest.elems.map(request => (
                    <li key={request.id}>
                      <Link href={`/volunteer-requests/${request.id}`}>
                        Volunteer: {request.volonteer.id} - 
                        Status: {request.statusForX.code || 'None'}
                        {request.description ? ` - ${request.description}` : ''}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </Spin>
          </TabPane>
        </Tabs>
      </Space>
    </Card>
  )
} 