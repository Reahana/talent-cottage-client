import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark text-white py-3'>
            <Container fluid  >
                <Row >
                    <Col sm={12} md={3}>
                        <h1>Talent Cottage</h1>
                    </Col>
                    <Col  sm={12} md={3}>Site Map</Col>
                    <Col  sm={12} md={3}>Get in Touch</Col>
                    <Col  sm={12} md={3}>Visit us</Col>
                </Row>
                <hr />
                <Row >
                    <Col className='text-center ' sm={12}>
                        <p>Talent Cottage &copy; 
                            <Link to='https://reahanagomes.netlify.app' target='blank'>Amanda Reahana Gomes</Link>;
                        2024 || All Rights Reserved </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;