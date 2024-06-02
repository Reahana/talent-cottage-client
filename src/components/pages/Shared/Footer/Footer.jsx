import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark text-white py-3'>
            <Container fluid  >
                <Row>
                    <Col>
                        <h1>Talent Cottage</h1>
                    </Col>
                    <Col>Site Map</Col>
                    <Col>Get in Touch</Col>
                    <Col>Visit us</Col>
                </Row>
                <hr />
                <Row >
                    <Col className='text-center'>
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