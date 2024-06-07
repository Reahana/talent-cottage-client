import React from 'react';
import { Button, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAllClass from '../../../hooks/useAllClass';
import useAuth from '../../../hooks/useAuth'
import { FaTrashAlt } from 'react-icons/fa';

const MyClasses = () => {
    const [allClasses]= useAllClass();
    const {user} = useAuth();
    const myClasses = allClasses.filter(cls => cls.instructor_email === user?.email);
   
    const handleDeleteClass = myClasses => {
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
      
                axiosSecure.delete(`/class/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Class has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
      }
    return (
        <div>
            <h1 className='mt-5'>Number of My Classes: {myClasses.length}</h1>
             <Table  bordered hover className='my-5'>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th> Name</th>
                    <th>Instructor</th>
                    <th>Price</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myClasses.map((cls,index)=><tr>
                            <th>{index+1}</th>
                            <td>
                                <img src={cls.image} height={'50px'}/>
                            </td>
                            <td>{cls.name}</td>
                            <td>{cls.instructor_name}</td>
                            <td>{cls.price}</td>
                            <td>
                 <Button
                    onClick={() => handleDeleteClass(myClasses)}
                    className="btn btn-lg" variant='danger'>
                    <FaTrashAlt className="text-white"></FaTrashAlt>
                 </Button>
         </td>


                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyClasses;