'use client'

import React, { useState } from 'react'
import { Button, Card, DatePicker, Form, Input, message, Select, Space, Typography } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCreateEventMutation, useSearchOrganizationQuery } from '@/__generate/graphql-frontend'
import dayjs from 'dayjs'

const { Title } = Typography
const { RangePicker } = DatePicker
const { Option } = Select
const { TextArea } = Input

export default function CreateEventPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const organizationId = searchParams.get('organizationId')
  
  const [form] = Form.useForm()
  const [selectedOrg, setSelectedOrg] = useState<string | null>(organizationId)

  const [createEvent, { loading: creatingEvent }] = useCreateEventMutation({
    onCompleted: () => {
      message.success('Event created successfully')
      router.push('/events')
    },
    onError: (error) => {
      message.error(`Failed to create event: ${error.message}`)
    }
  })

  const { data: orgsData, loading: loadingOrgs } = useSearchOrganizationQuery({
    variables: { cond: undefined }
  })

  const handleSubmit = async (values: any) => {
    const [startDateTime, endDateTime] = values.dateRange || [null, null]
    
    await createEvent({
      variables: {
        input: {
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

  React.useEffect(() => {
    if (organizationId) {
      form.setFieldsValue({ organization: organizationId })
    }
  }, [organizationId, form])

  return (
    <Card>
      <Space direction="vertical" style={{ width: '100%' }} size="large">
        <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Title level={2}>Create Event</Title>
          <Link href="/events">
            <Button icon={<ArrowLeftOutlined />}>Back to Events</Button>
          </Link>
        </Space>

        <Form 
          form={form} 
          layout="vertical" 
          onFinish={handleSubmit}
          initialValues={{
            organization: organizationId || undefined,
            status: 'PENDING'
          }}
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
              onChange={(value) => setSelectedOrg(value)}
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
            <Button type="primary" htmlType="submit" loading={creatingEvent}>
              Create Event
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </Card>
  )
} 