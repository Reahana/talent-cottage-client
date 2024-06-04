import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useUser from '../../../hooks/useUser';
import Swal from 'sweetalert2';
import { Container, Table } from 'react-bootstrap';
import { FaUserShield, FaChalkboardUser } from 'react-icons/fa6';
import { FaTrashAlt, FaUserAlt } from 'react-icons/fa';

const ManageUser = () => {
    const [users, loading , refetch]= useUser();
    const axiosSecure = useAxiosSecure();

    const handleMakeAdmin = user =>{
      
         axiosSecure.patch(`/users/admin/${user._id}`)
        //  .then(res =>{
             console.log(user)
            //  if(user.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            // }
        
        //  })
    }
    const handleMakeInstructor = user =>{
      
      axiosSecure.patch(`/users/instructor/${user._id}`)
    //   .then(res =>{
          console.log(user)
        //   if(user.modifiedCount > 0){
             refetch();
             Swal.fire({
                 position: "top-end",
                 icon: "success",
                 title: `${user.name} is an Instructor Now!`,
                 showConfirmButton: false,
                 timer: 1500
               });
        //  }
     
    //   })
 }
 const handleDeleteUser = user => {
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

          axiosSecure.delete(`/users/${user._id}`)
              .then(res => {
                  if (res.data.deletedCount > 0) {
                      refetch();
                      Swal.fire({
                          title: "Deleted!",
                          text: "User has been deleted.",
                          icon: "success"
                      });
                  }
              })
      }
  });
}

    return (
        <div>
            
        <Container fluid>

        <Table  bordered hover variant='primary' className='my-5 mx-3' >
      <thead>
        <tr >
          <th>#</th>
          <th> Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            users.map((user,index)=><tr key={user._id}>
          <th>{index + 1}</th>
         <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
            { user.role === 'admin' ?<button className="btn btn-lg bg-warning"><FaUserShield className="text-white 
                text-2xl"></FaUserShield></button>  : 
                user.role === 'instructor' ?<button className="btn btn-lg bg-info"> <FaChalkboardUser className="text-white 
                text-2xl"></FaChalkboardUser ></button> :
                 <>
                <button className="btn btn-lg bg-success"> <FaUserAlt className="text-white 
                   text-2xl"></FaUserAlt></button>
                   {' '}
                 <button
                onClick={() => handleMakeAdmin(user)}
                className="btn btn-lg bg-warning">
                 Make Admin
            </button>
            {' '}
                 <button
                onClick={() => handleMakeInstructor(user)}
                className="btn btn-lg bg-info">
                Make Instructor
            </button>
                 </>
            }
        </td>
         <td>
         <button
              onClick={() => handleDeleteUser(user)}
              className="btn btn-lg">
              <FaTrashAlt className="text-danger"></FaTrashAlt>
          </button>
         </td>
        </tr>
        )}
      </tbody>
    </Table>
        </Container>
        </div>
    );
};

export default ManageUser;