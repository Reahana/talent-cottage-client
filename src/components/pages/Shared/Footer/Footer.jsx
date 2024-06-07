import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo.png'
import './Footer.css'
import { FaLocationDot, FaPhone,FaEnvelope, FaFacebook, FaInstagram, FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className=' text-white py-3 ' style={{backgroundColor:'#000000'}}>
            <Container fluid  >
                <Row className='pt-4'>
                    <Col sm={12} md={3}>
                        <img src={logo}/>
                        
                    </Col>
                    <Col  sm={12} md={3} className='text-center'>
                        <h4 className='mb-3'>Site Map</h4>
                        <li>Home</li>
                        <li>About</li>
                        <li>Course</li>
                        <li>Instructor</li>
                       
                        
                        
                    </Col>
                    <Col  sm={12} md={3}  className='address'>
                        <h4 className='mb-3' >Get in Touch</h4>
                       
                       <p> <FaPhone /> +880121954231</p>
                       <p> <FaEnvelope /> contact@talentcottage.com</p>
                       <p><FaLocationDot /> 100, Dhaka, Bangladesh</p>
                       
                    </Col>
                    <Col  sm={12} md={3} className='text-center'>
                        <h4>Visit Us</h4>
                        <div className='fs-1 text-white'>
                       <FaFacebook /> <FaInstagram /> <FaSquareYoutube /> <FaSquareXTwitter/>
                       </div>
                    </Col>
                </Row>
                <hr />
                <Row >
                    <Col className='text-center ' sm={12}>
                        <p className='fs-5'>Talent Cottage &copy; 
                            <Link to='https://reahanagomes.netlify.app' target='blank'>  Amanda Reahana Gomes</Link> ;
                        2024 || All Rights Reserved </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;