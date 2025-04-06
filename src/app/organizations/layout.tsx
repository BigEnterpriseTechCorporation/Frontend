'use client'

import React from 'react'
import { Layout, Breadcrumb } from 'antd'
import { AuthProvider } from '../context'
import { MainMenu } from '@/__generate/MainMenu'
import Link from 'next/link'

const { Header, Content, Footer } = Layout

export default function OrganizationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ padding: 0, background: '#fff' }}>
          <MainMenu />
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>
              <Link href="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Organizations</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: '#fff' }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Volunteer Management System ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </AuthProvider>
  )
} 