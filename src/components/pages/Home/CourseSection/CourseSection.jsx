import React from 'react';
import useTopClass from '../../../hooks/useTopClass';
import '../Home/Home.css'
import { Card,  Col,  Container, Row} from 'react-bootstrap';

const CourseSection = () => {
    const [topClasses] = useTopClass();
    
    return (
        <div>
             <Container fluid className='mb-5'>
                <Row >
                     {
                        topClasses.map( cls=>
                            <Col className='g-5' sm={12} md={6} lg={4} key={cls._id}>
                                <Card className='card-min-height' >
                                    <Card.Img variant="top" src={cls.image} height={'200px'} />
                                    <Card.Body>
                                        <Card.Title className='fs-1'>{cls.name}</Card.Title>
                                        <Card.Text>
                                            <Card.Title  className='text-primary fs-4'>Instructor: {cls.instructor_name}</Card.Title>  
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <h4>Enrolled Students: {cls.students}</h4>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )
                     }
                </Row>
            </Container>
        </div>
       
    );
};

export default CourseSection;