'use client'

import React, { useState } from 'react'
import { Button, Card, Descriptions, Divider, Form, Input, message, Popconfirm, Space, Spin, Tabs, Typography } from 'antd'
import { ArrowLeftOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useGetForUpdateOrganizationMutation, useUpdateOrganizationMutation, useDeleteOrganizationMutation, useSearchEventQuery } from '@/__generate/graphql-frontend'

const { Title } = Typography
const { TabPane } = Tabs

export default function OrganizationDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [form] = Form.useForm()
  const id = params.id

  const [getOrganization, { loading: loadingOrg, data }] = useGetForUpdateOrganizationMutation({
    onCompleted: (data) => {
      if (data.packet?.getOrganization) {
        form.setFieldsValue({
          name: data.packet.getOrganization.name
        })
      }
    },
    onError: (error) => {
      message.error(`Failed to load organization: ${error.message}`)
    }
  })

  const [updateOrganization, { loading: updatingOrg }] = useUpdateOrganizationMutation({
    onCompleted: () => {
      message.success('Organization updated successfully')
      setIsEditing(false)
      getOrganization({ variables: { id } })
    },
    onError: (error) => {
      message.error(`Failed to update organization: ${error.message}`)
    }
  })

  const [deleteOrganization, { loading: deletingOrg }] = useDeleteOrganizationMutation({
    onCompleted: () => {
      message.success('Organization deleted successfully')
      router.push('/organizations')
    },
    onError: (error) => {
      message.error(`Failed to delete organization: ${error.message}`)
    }
  })

  const { data: eventsData, loading: loadingEvents } = useSearchEventQuery({
    variables: { cond: `organization.id = '${id}'` }
  })

  React.useEffect(() => {
    getOrganization({ variables: { id } })
  }, [id, getOrganization])

  const handleSubmit = async (values: { name: string }) => {
    await updateOrganization({
      variables: {
        input: {
          id,
          name: values.name
        }
      }
    })
  }

  const handleDelete = async () => {
    await deleteOrganization({
      variables: { id }
    })
  }

  const organization = data?.packet?.getOrganization
  const isLoading = loadingOrg || updatingOrg || deletingOrg

  if (isLoading && !organization) {
    return <Spin size="large" />
  }

  if (!organization && !isLoading) {
    return <div>Organization not found</div>
  }

  return (
    <Card>
      <Space direction="vertical" style={{ width: '100%' }} size="large">
        <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Title level={2}>Organization Details</Title>
          <Space>
            <Link href="/organizations">
              <Button icon={<ArrowLeftOutlined />}>Back to Organizations</Button>
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
                  title="Delete organization"
                  description="Are you sure you want to delete this organization? All associated events will also be deleted."
                  onConfirm={handleDelete}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button 
                    icon={<DeleteOutlined />} 
                    danger
                    loading={deletingOrg}
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
            initialValues={{ name: organization?.name }}
          >
            <Form.Item
              name="name"
              label="Organization Name"
              rules={[
                {
                  required: true,
                  message: 'Please enter organization name',
                },
              ]}
            >
              <Input placeholder="Enter organization name" />
            </Form.Item>

            <Form.Item>
              <Space>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  loading={updatingOrg}
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
            <Descriptions.Item label="ID" span={3}>{organization?.id}</Descriptions.Item>
            <Descriptions.Item label="Name" span={3}>{organization?.name}</Descriptions.Item>
          </Descriptions>
        )}

        <Divider />

        <Tabs defaultActiveKey="events">
          <TabPane tab="Events" key="events">
            <Spin spinning={loadingEvents}>
              {eventsData?.searchEvent.elems.length === 0 ? (
                <div>No events found for this organization</div>
              ) : (
                <ul>
                  {eventsData?.searchEvent.elems.map(event => (
                    <li key={event.id}>
                      <Link href={`/events/${event.id}`}>
                        {event.description} - {event.startDateTime ? new Date(event.startDateTime).toLocaleString() : 'No date'}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <div style={{ marginTop: 16 }}>
                <Link href={`/events/create?organizationId=${id}`}>
                  <Button type="primary">Create Event</Button>
                </Link>
              </div>
            </Spin>
          </TabPane>
        </Tabs>
      </Space>
    </Card>
  )
} 