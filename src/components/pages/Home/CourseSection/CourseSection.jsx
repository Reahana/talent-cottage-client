import React from 'react';
import useTopClass from '../../../hooks/useTopClass';
import '../Home/Home.css'
import { Card,  Container} from 'react-bootstrap';

const CourseSection = () => {
    const [topClasses] = useTopClass();
    return (
        <div className='popular-class-container mb-5'>
    
          
            {
                topClasses.map( pc=> 
                  <div key={pc._id}>
                    <Container fluid>
                    <Card className='card-min-height' >
                        <Card.Img variant="top" src={pc.image} height={'200px'} />
                        <Card.Body>
                        <Card.Title className='fs-1'>{pc.name}</Card.Title>
                        <Card.Text>
                            <h2 className='text-primary'>Instructor: {pc.instructor_name}</h2>  
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                         <h4>Enrolled Students: {pc.students}</h4>
                        </Card.Footer>
                     </Card>
                    </Container>
                  </div>
                   
               
                    )
            }
          
        </div>
    );
};

export default CourseSection;