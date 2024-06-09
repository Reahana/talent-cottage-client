import React from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import useEnrolledCourse from '../../../hooks/useEnrolledCourse';

const EnrolledCourse = () => {
   const [enrolledClasses] = useEnrolledCourse();

//    const courses = enrolledClasses.name.map((name, index) => ({
//     name,
//     instructor: enrolledClasses.instructor[index],
//     image: enrolledClasses.image[index],
//     price: enrolledClasses.price[index]["$numberInt"]
//   }));
//   console.log(courses);

  
    return (
        <div>
            
          <Container fluid className='mb-5'>
          <Row >
            {  
            enrolledClasses.map(cls=>
               
        
            
              
                <Col key={cls._id} className='g-5' sm={12} md={6} >
                    <Card className='h-100'>
                        <Card.Img variant="top" src={cls.image} height={'200px'} />
                        <Card.Body>
                            <Card.Title className='fs-1'>{cls.name}</Card.Title>
                            <Card.Title className='fs-2 text-primary'>Instructor: {cls.instructor}</Card.Title>
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

export default EnrolledCourse;