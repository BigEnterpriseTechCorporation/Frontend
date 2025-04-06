'use client'

import React, { useState } from 'react'
import { Button, Card, Table, Input, Space, Typography, Tag } from 'antd'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { useSearchEventQuery, useSearchOrganizationQuery } from '@/__generate/graphql-frontend'

const { Title } = Typography

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const { data, loading, error } = useSearchEventQuery({
    variables: { cond: searchTerm ? `description like '%${searchTerm}%'` : undefined }
  })

  const { data: orgsData } = useSearchOrganizationQuery({
    variables: { cond: undefined }
  })

  const orgMap = new Map()
  orgsData?.searchOrganization.elems.forEach(org => {
    orgMap.set(org.id, org.name)
  })

  const handleSearch = (value: string) => {
    setSearchTerm(value)
  }

  const columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (_: string, record: any) => (
        <Link href={`/events/${record.id}`}>{record.description}</Link>
      ),
    },
    {
      title: 'Organization',
      dataIndex: 'organization',
      key: 'organization',
      render: (org: any) => {
        const orgName = orgMap.get(org.id) || 'Unknown'
        return <Link href={`/organizations/${org.id}`}>{orgName}</Link>
      },
    },
    {
      title: 'Start Date',
      dataIndex: 'startDateTime',
      key: 'startDateTime',
      render: (date: string) => date ? new Date(date).toLocaleString() : 'Not set',
    },
    {
      title: 'End Date',
      dataIndex: 'endDateTime',
      key: 'endDateTime',
      render: (date: string) => date ? new Date(date).toLocaleString() : 'Not set',
    },
    {
      title: 'Status',
      dataIndex: 'statusForX',
      key: 'status',
      render: (status: { code?: string, reason?: string }) => {
        if (!status.code) return <Tag>None</Tag>
        
        let color = 'default'
        if (status.code === 'ACTIVE') color = 'green'
        if (status.code === 'INACTIVE') color = 'volcano'
        if (status.code === 'PENDING') color = 'geekblue'
        
        return (
          <Tag color={color}>
            {status.code}{status.reason ? ` - ${status.reason}` : ''}
          </Tag>
        )
      },
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <Space>
          <Link href={`/events/${record.id}`}>
            <Button type="link">View</Button>
          </Link>
        </Space>
      ),
    },
  ]

  if (error) return <div>Error loading events: {error.message}</div>

  return (
    <Card>
      <Space direction="vertical" style={{ width: '100%' }} size="large">
        <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Title level={2}>Events</Title>
          <Link href="/events/create">
            <Button type="primary" icon={<PlusOutlined />}>
              Create Event
            </Button>
          </Link>
        </Space>

        <Input
          placeholder="Search events by description"
          prefix={<SearchOutlined />}
          allowClear
          onChange={(e) => handleSearch(e.target.value)}
        />

        <Table
          loading={loading}
          dataSource={data?.searchEvent.elems || []}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Space>
    </Card>
  )
} 