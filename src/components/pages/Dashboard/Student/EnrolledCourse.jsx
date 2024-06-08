import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useEnrolledCourse from '../../../hooks/useEnrolledCourse';

const EnrolledCourse = () => {
   const [enrolledClass,  refetch] = useEnrolledCourse();
    return (
        <div>
            <Container fluid className='mb-5' >
                <Row>
                <Col  className='g-5' sm={12} md={6} lg={4}>
                     <Card className='h-100' >
                                    <Card.Img variant="top" src='' height={'200px'} />
                                    <Card.Body>
                                        <Card.Title className='fs-1'></Card.Title>
                                        <Card.Text>
                                        <Card.Title className='fs-2 text-primary'>Instructor: </Card.Title>
                                            <h3>Available seats: </h3>
                                            <h3 className='bg-warning'>Price: $</h3>
                                        </Card.Text>
                                    </Card.Body>
                     
                                </Card>
                
                </Col>
                    
                    
              
               </Row>
            </Container>
        </div>
    );
};

export default EnrolledCourse;