import React from 'react';
import useAllInstructor from '../../hooks/useAllInstructor';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import useAllClass from '../../hooks/useAllClass';
import useUser from '../../hooks/useUser';


const Instructor = () => {
    const [allInstructors]= useAllInstructor();
   
    return (
        <div>
            <Helmet>
                <title>Talent Cottage | Instructors</title>
            </Helmet>
            <Container fluid className='my-5'>
                <Row>
                    {
                        allInstructors.map(i=>

                            <Col className='g-5' sm={12} md={6} lg={3}>
                                <Card >
                                    <Card.Img variant="top" src={i.img} height={'200px'} />
                                    <Card.Body>
                                    <Card.Title  className='fs-2'>  {i.instructor_name}</Card.Title>
                                    <Card.Title > Email: {i.instructor_email}</Card.Title>
                      
                                    </Card.Body>
                                </Card>
                            </Col>
                            
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default Instructor;