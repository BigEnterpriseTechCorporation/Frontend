'use client'

import React from 'react'
import { Button, Card, Form, Input, message, Space, Typography } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCreateOrganizationMutation } from '@/__generate/graphql-frontend'

const { Title } = Typography

export default function CreateOrganizationPage() {
  const router = useRouter()
  const [form] = Form.useForm()
  const [createOrganization, { loading }] = useCreateOrganizationMutation({
    onCompleted: () => {
      message.success('Organization created successfully')
      router.push('/organizations')
    },
    onError: (error) => {
      message.error(`Failed to create organization: ${error.message}`)
    }
  })

  const handleSubmit = async (values: { name: string }) => {
    await createOrganization({
      variables: {
        input: {
          name: values.name
        }
      }
    })
  }

  return (
    <Card>
      <Space direction="vertical" style={{ width: '100%' }} size="large">
        <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Title level={2}>Create Organization</Title>
          <Link href="/organizations">
            <Button icon={<ArrowLeftOutlined />}>Back to Organizations</Button>
          </Link>
        </Space>

        <Form 
          form={form} 
          layout="vertical" 
          onFinish={handleSubmit}
          autoComplete="off"
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
            <Button type="primary" htmlType="submit" loading={loading}>
              Create Organization
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </Card>
  )
} 