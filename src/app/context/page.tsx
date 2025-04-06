import { AuthProvider } from "./auth";
import { MainMenu } from '@/__generate/MainMenu'
import { Layout, Row, Col } from 'antd';

const { Header, Content, Footer } = Layout;

export default function Context() {
  return (
    <AuthProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ padding: 0, background: '#fff' }}>
          <MainMenu />
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360, background: '#fff' }}>
            {/* Content will be rendered here */}
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <h1>Volunteer Management System</h1>
                <p>Welcome to the volunteer management system. Use the menu to navigate.</p>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Volunteer Management System ©{new Date().getFullYear()}</Footer>
      </Layout>
    </AuthProvider>
  )
}