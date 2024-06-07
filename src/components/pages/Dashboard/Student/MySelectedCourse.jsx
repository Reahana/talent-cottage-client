import React from 'react';
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';
import { Button, Table } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MySelectedCourse = () => {
    const [cart,refetch]= useCart();
    const axiosSecure = useAxiosSecure();

    const handleDeleteClass = cart => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
      
                axiosSecure.delete(`/carts/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Course has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
      }
    return (
        <div>
            <div className='d-flex justify-content-between mb-3 mt-3' >
                <h1>Selected Classes: {cart.length}</h1>
                
                <Button className='fs-4' variant='warning'>Pay</Button>
            </div>
             <Table  bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th> Image</th>
                    <th> Name</th>
                    <th>Instructor</th>
                    <th>Price</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                            cart.map((cls, index) =>
                            <tr key={cls._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <img src={cls.image} height={'100px'}/>
                                </td>
                                <td>{cls.name}</td>
                                <td>{cls.instructor}</td>
                                <td>{cls.price}</td>
                                <td>
         <button
              onClick={() => handleDeleteClass(cart)}
              className="btn btn-lg">
              <FaTrashAlt className="text-danger"></FaTrashAlt>
          </button>
         </td>
                                </tr>
                   ) }
                </tbody>
            </Table>
        </div>
    );
};

export default MySelectedCourse;