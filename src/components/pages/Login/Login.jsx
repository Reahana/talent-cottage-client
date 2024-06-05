import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { Link,useLocation, useNavigate  } from 'react-router-dom';
import Swal from 'sweetalert2'
import  useAuth  from "../../hooks/useAuth";
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {signIn}= useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log(data);
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'User Login Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            navigate(from, { replace: true });
        })
    }

    return (
        <div>
            <Helmet>
                <title>Talent Cottage | Login </title>
            </Helmet>
            <h1 className='text-center mt-4'>Login Here..</h1>
            <Container className='w-25  p-5 mb-5 mt-4' style={{backgroundColor:'#e0e7ff'}}>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3 fw-bold fs-5" controlId="formBasicEmail">
                <Form.Label>Email Address :</Form.Label>
                <Form.Control type="email"  {...register("email", { required: true })} name="email" placeholder="Enter email" />
                
            </Form.Group>

            <Form.Group className="mb-3 fw-bold fs-5" controlId="formBasicPassword">
                <Form.Label>Password : </Form.Label>
                <Form.Control type="password"  {...register("password", {required: true,})} name='password' placeholder="Password" />
                {errors.email && errors.password && <span className="text-danger">Wrong Credential</span>} 
            </Form.Group>
           
       
            <Button  variant="primary" type="submit">
             Login
            </Button>
        </Form>
        <p className='text-center py-3 fs-5'>New Here? <br />
         <Link to="/register">
            <Button variant='success'> Create an account</Button>
           
            </Link> </p>
           
           <SocialLogin></SocialLogin>
         </Container>
        </div>
    );
};

export default Login;