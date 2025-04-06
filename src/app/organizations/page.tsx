'use client'

import React, { useState } from 'react'
import { Button, Card, Input, List, Space, Typography } from 'antd'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { useSearchOrganizationQuery } from '@/__generate/graphql-frontend'
import { useAuthContext } from '../context'

const { Title } = Typography

export default function OrganizationsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const { data, loading, error } = useSearchOrganizationQuery({
    variables: { cond: searchTerm ? `name like '%${searchTerm}%'` : undefined }
  })

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  if (error) return <div>Error loading organizations: {error.message}</div>

  return (
    <Card>
      <Space direction="vertical" style={{ width: '100%' }} size="large">
        <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Title level={2}>Organizations</Title>
          <Link href="/organizations/create">
            <Button type="primary" icon={<PlusOutlined />}>
              Create Organization
            </Button>
          </Link>
        </Space>

        <Input
          placeholder="Search organizations by name"
          prefix={<SearchOutlined />}
          allowClear
          onChange={(e) => handleSearch(e.target.value)}
        />

        <List
          loading={loading}
          itemLayout="horizontal"
          dataSource={data?.searchOrganization.elems || []}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Link key="edit" href={`/organizations/${item.id}`}>
                  View Details
                </Link>,
              ]}
            >
              <List.Item.Meta
                title={item.name}
                description={`ID: ${item.id}`}
              />
            </List.Item>
          )}
        />
      </Space>
    </Card>
  )
} 