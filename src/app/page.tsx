'use client'

import React from 'react'
import { Button, Card, Col, Row, Space, Typography } from 'antd'
import { CalendarOutlined, TeamOutlined, UserOutlined, FireOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { AuthProvider } from './context'
import { MainMenu } from '@/__generate/MainMenu'

const { Title, Paragraph } = Typography

export default function Home() {
	return (
		<AuthProvider>
			<div style={{ padding: '0 50px' }}>
				<MainMenu />
				
				<div style={{ padding: '40px 0' }}>
					<Row gutter={[16, 16]} justify="center">
						<Col span={24} style={{ textAlign: 'center', marginBottom: 40 }}>
							<Title>Volunteer Management System</Title>
							<Paragraph style={{ fontSize: 18 }}>
								A platform to connect volunteers with organizations and manage events
							</Paragraph>
						</Col>
						
						<Col xs={24} sm={12} md={8} lg={6}>
							<Card 
								hoverable
								style={{ height: '100%' }}
								cover={
									<div style={{ 
										background: '#1890ff', 
										height: 120, 
										display: 'flex', 
										justifyContent: 'center', 
										alignItems: 'center' 
									}}>
										<TeamOutlined style={{ fontSize: 60, color: 'white' }} />
									</div>
								}
							>
								<Card.Meta
									title="Organizations"
									description="Register and manage organizations that host volunteer events"
								/>
								<div style={{ marginTop: 20 }}>
									<Link href="/organizations">
										<Button type="primary" block>
											View Organizations
										</Button>
									</Link>
								</div>
							</Card>
						</Col>
						
						<Col xs={24} sm={12} md={8} lg={6}>
							<Card 
								hoverable
								style={{ height: '100%' }}
								cover={
									<div style={{ 
										background: '#52c41a', 
										height: 120, 
										display: 'flex', 
										justifyContent: 'center', 
										alignItems: 'center' 
									}}>
										<CalendarOutlined style={{ fontSize: 60, color: 'white' }} />
									</div>
								}
							>
								<Card.Meta
									title="Events"
									description="Discover and manage volunteer events from various organizations"
								/>
								<div style={{ marginTop: 20 }}>
									<Link href="/events">
										<Button type="primary" block style={{ background: '#52c41a', borderColor: '#52c41a' }}>
											Browse Events
										</Button>
									</Link>
								</div>
							</Card>
						</Col>
						
						<Col xs={24} sm={12} md={8} lg={6}>
							<Card 
								hoverable
								style={{ height: '100%' }}
								cover={
									<div style={{ 
										background: '#722ed1', 
										height: 120, 
										display: 'flex', 
										justifyContent: 'center', 
										alignItems: 'center' 
									}}>
										<UserOutlined style={{ fontSize: 60, color: 'white' }} />
									</div>
								}
							>
								<Card.Meta
									title="Volunteers"
									description="Register as a volunteer and participate in meaningful events"
								/>
								<div style={{ marginTop: 20 }}>
									<Link href="/volunteers">
										<Button type="primary" block style={{ background: '#722ed1', borderColor: '#722ed1' }}>
											Volunteer Portal
										</Button>
									</Link>
								</div>
							</Card>
						</Col>
					</Row>
				</div>
				
				<div style={{ textAlign: 'center', margin: '50px 0', padding: '20px 0', borderTop: '1px solid #f0f0f0' }}>
					<Typography.Text type="secondary">
						Volunteer Management System © {new Date().getFullYear()}
					</Typography.Text>
				</div>
			</div>
		</AuthProvider>
	)
}
