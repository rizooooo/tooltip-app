import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap';
import { FaPlay } from 'react-icons/fa';
const Header = () => {
    return (
        <Container className='p-0 bg-white' fluid>
            <Row noGutters className='py-3 px-3 border'>
                <Col className='d-flex align-items-center'>
                    <FaPlay />
                    <h6 className='font-weight-bold mb-0 ml-2'>Playback (logo)</h6>
                </Col>

            </Row>
        </Container>
    )
}

export default Header
