import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Header, Sidebar } from '../../components/shared';

const HeaderSidebarLayout = ({ children }) => {
    return (
        <Container fluid className='p-0 d-flex flex-column h-100'>
            <div className='sticky-top'>
                <Header />
            </div>
            <Row noGutters style={{ flex: 1 }}>
                <Col md={1} className='text-dark border-right shadow-sm'>
                    <Sidebar />
                </Col>
                <Col md={11} className='d-flex flex-column'>
                    <div className='mt-3'>
                        {children}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default HeaderSidebarLayout
