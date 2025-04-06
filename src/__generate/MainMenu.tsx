"use client"
import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import Link from 'next/link';

const { Header } = Layout;

export const MainMenu: FC = () => {
    return (
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className="logo" style={{ marginRight: '24px' }}>
                <strong>Volunteer System</strong>
            </div>
            <Menu
                theme="light"
                mode="horizontal"
                style={{ flex: 1, minWidth: 0 }}
                defaultSelectedKeys={['organizations']}
            >
                <Menu.Item key="organizations">
                    <Link href="/organizations">Organizations</Link>
                </Menu.Item>
                <Menu.Item key="events">
                    <Link href="/events">Events</Link>
                </Menu.Item>
                <Menu.Item key="persons">
                    <Link href="/persons">Persons</Link>
                </Menu.Item>
                <Menu.Item key="volunteers">
                    <Link href="/volunteers">Volunteers</Link>
                </Menu.Item>
                <Menu.Item key="requests">
                    <Link href="/volunteer-requests">Volunteer Requests</Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
};