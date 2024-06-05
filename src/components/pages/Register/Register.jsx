import React ,{ useContext }  from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const axios = useAxiosPublic()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        
            updateUserProfile(data.name, data.photoURL)

                .then(() => {
                    const savedUser = {name: data.name, email: data.email, photo: data.photoURL }
                    console.log(savedUser);
                    const userRes=  axios.post('/users', savedUser)
                    console.log(data);
                    if (data.insertedId) {
                        reset();
                        Swal.fire({
                            title: 'User Created Successful.',
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        });
                        }
                    

                })
                .catch(error => console.log(error))

                navigate('/');
        })
    }

    return (
        <div>
             <Helmet>
                <title>Talent Cottage | Register </title>
            </Helmet>
            <h1 className='mt-3 ms-4 text-primary'>Create an Account for Select a Course</h1>
            <Container className='w-50  p-5 my-5 fw-bold fs-5' style={{backgroundColor: '#fffede'}}>
            <Form onSubmit={handleSubmit(onSubmit)} >
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" {...register("name", { required: true })} name="name" placeholder="Your Name" />
                    {errors.name && <span className="text-danger">Name is required</span>}
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" {...register("email", { required: true })} name="email" placeholder="Enter email" />
                    {errors.email && <span className="text-danger">Email is required</span>}
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/
                                })}  name='password' placeholder="Password" />
                                {errors.password?.type === 'required' && <p className="text-danger">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-danger">Password must be 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-danger">Password must have one Uppercase , one lowercase and one special character.</p>}
                </Form.Group>

               

                <Form.Group className="mb-3" >
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" {...register("photoURL", { required: true })} name='photoURL' placeholder="Photo URL" />
                    {errors.photoURL && <span className="text-danger">Photo URL is required</span>}
                </Form.Group>
        
            <Button variant="success" type="submit">
             Register
            </Button>
        </Form>
        <p className="text-center fs-5 py-3">Already have an account
        {' '}
         <Link to="/login"> 
         <Button >Login</Button>
         </Link></p>
           
           
           <SocialLogin></SocialLogin>
          
           
        </Container>
        </div>
    );
};

export default Register;