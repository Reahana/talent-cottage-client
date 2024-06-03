import React from 'react';
import useAllInstructor from '../../../hooks/useAllInstructor';
import { Card, Col, Container, Row } from 'react-bootstrap';

const InstructorSection = () => {
    const [allInstructors]= useAllInstructor();
    return (
        <div>
        <Container fluid className='mb-5'>
           <Row >
                {
                   allInstructors.map( i=>
                       <Col className='g-5' sm={12} md={6} lg={4}>
                           <Card  >
                               <Card.Img variant="top" src={i.image} height={'200px'} rounded/>
                               <Card.Body>
                                   <Card.Title className='fs-1 text-center'>{i.instructor_name}</Card.Title>
                                   {/* <Card.Text>
                                       <h2 className='text-primary'>Instructor: {cls.instructor_name}</h2>  
                                   </Card.Text> */}
                               </Card.Body>
                             
                           </Card>
                       </Col>
                   )
                }
           </Row>
       </Container>
   </div>
    );
};

export default InstructorSection;