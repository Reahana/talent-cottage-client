import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`

const AddCourse = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
          
    const onSubmit = async (data) => {
        console.log(data)

        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_url, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            
            const classData = {
                name: data.name,
                instructor_name: user.displayName,
                instructor_email:user.email,
                seats: data.seats,
                price: parseFloat(data.price),
                image: res.data.data.display_url,
                students: 0
            }
            // 
            const classRes = await axiosSecure.post('/class', classData);
            console.log(classRes.data)
            if(classRes.data.insertedId){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added `,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log( 'with image url', res.data);
     };
    return (
        <div>
            <Container className='w-50 bg-light p-5 my-5 '>
            <Form onSubmit={handleSubmit(onSubmit)}>

            <Form.Group className="mb-3" >
                <Form.Label>Class name</Form.Label>
                <Form.Control type="text"    {...register("name", { required: true })} name="name" placeholder="Class name" />
                
            </Form.Group>
            
            <div className='d-flex justify-content-between'> 
                
            <Form.Group className="mb-3">
                <Form.Label>Instructor name</Form.Label>
                <Form.Control type="text"  {...register("instructor_name")} name="instructor_name" placeholder="Instructor name" defaultValue={user?.displayName} />
               
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Instructor email</Form.Label>
                <Form.Control type="email"  {...register("email")} name="email" placeholder="Instructor email" defaultValue={user?.email} />
                
            </Form.Group>
            </div>

           <div className='d-flex justify-content-between'>
            <Form.Group className="mb-3" >
                    <Form.Label>Available seats</Form.Label>
                    <Form.Control type="number"  {...register("seats", {required: true,})} name='seats' placeholder="Available seats" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number"  {...register("price", {required: true,})} name='price' placeholder="Price" />
                </Form.Group>
           </div>

            <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file"  {...register("image", {required: true,})} name='image' placeholder="Image" />
           
            </Form.Group>

        
            <Button variant="primary" type="submit">
             Add a Course
            </Button>
        </Form>
      
         </Container>
        </div>
    );
};

export default AddCourse;