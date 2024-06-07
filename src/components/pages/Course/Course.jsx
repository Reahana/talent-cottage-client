import React from 'react';
import useAllClass from '../../hooks/useAllClass';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import useCart from '../../hooks/useCart';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Course = () => {
    const [allClasses]= useAllClass();
    const {_id, name ,image,instructor_name,seats,price} = allClasses;
    const [,refetch]= useCart();
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const handleSelect = cls => {
        console.log(cls);
      
         if (user && user.email) {
              //send cart item to the database
              const cartItem = {
                  classID: cls._id,
                  email: user.email,
                  name:cls.name,
                  instructor:cls.instructor_name,
                  image: cls.image,
                  price:cls.price
              }
              console.log(cartItem);
              axiosSecure.post('/carts', cartItem)
                  .then(res => {
                      console.log(res.data)
                      if (res.data.insertedId) {
                          Swal.fire({
                              position: "top-end",
                              icon: "success",
                              title: `${cls.name} selected for you`,
                              showConfirmButton: false,
                              timer: 1500
                          });
                          // refetch cart to update the cart items count
                          refetch();
                      }
  
                  })
          }
          else {
              Swal.fire({
                  title: "You are not Logged In",
                  text: "Please login to add to the cart?",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, login!"
              }).then((result) => {
                  if (result.isConfirmed) {
                      //   send the user to the login page
                      navigate('/login', { state: { from: location } })
                  }
              });
          }
      }


    return (
        <>
         <Helmet>
                <title>Talent Cottage | Courses </title>
            </Helmet>
            <Container fluid className='mb-5' >
                <Row>
                {
                 allClasses.map( cls=> 
                
                <Col key={cls._id} className='g-5' sm={12} md={6} lg={4}>
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
                                    <Button  onClick={()=> handleSelect(cls)} className='btn btn-lg '  variant="success">select</Button>  
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