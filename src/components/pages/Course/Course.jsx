import React from 'react';
import useAllClass from '../../hooks/useAllClass';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Course = () => {
    const [allClasses]= useAllClass();
    return (
        <>
            <Container fluid className='mb-5' >
                <Row>
                {
                 allClasses.map( cls=> 
                
                <Col className='g-5' sm={12} md={6} lg={4}>
                     <Card className='h-100' >
                                    <Card.Img variant="top" src={cls.image} height={'200px'} />
                                    <Card.Body>
                                        <Card.Title className='fs-1'>{cls.name}</Card.Title>
                                        <Card.Text>
                                        <Card.Title className='fs-2 text-primary'>Instructor: {cls.instructor_name}</Card.Title>
                                            <h3>Available seats: {cls.seats}</h3>
                                            <h3 className='bg-warning'>Price: ${cls.price}</h3>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <Button className='btn btn-lg '  variant="success">select</Button>  
                                    </Card.Footer>
                                </Card>
                
                </Col>
                    
                    
               ) }
               </Row>
            </Container>
        </>
    );
};

export default Course;