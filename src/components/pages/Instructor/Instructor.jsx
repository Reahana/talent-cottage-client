import React from 'react';
import useAllInstructor from '../../hooks/useAllInstructor';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import useAllClass from '../../hooks/useAllClass';


const Instructor = () => {
    const [allInstructors]= useAllInstructor();
    const [allClasses]= useAllClass();
    const classes = allClasses.map(cls=> cls.instructor_email)
    console.log('c',classes);
    const Instructors = allInstructors.map(ins=>ins.instructor_email)
    console.log(Instructors);
  if(classes.filter(c=>c.instructor_email) == Instructors.filter(i=>i.instructor_email)){
    console.log('ol');
  }
       const test =classes.filter(cls=> cls.instructor_email==Instructors.instructor_email)
   
    console.log('t',test);
   
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
                                    <Card.Img variant="top" src={i.image} height={'200px'} />
                                    <Card.Body>
                                    <Card.Title  className='fs-2'>  {i.instructor_name}</Card.Title>
                                    <Card.Title > Email: {i.instructor_email}</Card.Title>
                        {
                            test.map(c=><p>{c.name}</p>)
                        }
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