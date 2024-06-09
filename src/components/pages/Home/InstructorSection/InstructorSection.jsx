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
                   allInstructors.slice(0,3).map( i=>
                       <Col className='g-5 ' sm={12} md={6} lg={4} key={i._id}>
                           <Card  >
                               <Card.Img variant="top" src={i.img} height={'200px'} />
                               <Card.Body>
                                   <Card.Title className='fs-1 text-center'>{i.instructor_name}</Card.Title>
                                   
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