import React from 'react';
import { Table } from 'react-bootstrap';
import useAllClass from '../../../hooks/useAllClass';

const ManageClass = () => {
    const [classes] =useAllClass();
    return (
        <div>
            <h1 className='mt-5'>Total Courses : {classes.length}</h1>
            <Table striped bordered hover variant="secondary" className='my-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Course</th>
          <th> Instructor</th>
          <th>Available Seats</th>
          <th>Price</th>
          <th>Students</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
        classes.map((cls, index) => 
            <tr key={cls._id}>
                <td>{index+1}</td>
                <td>
                    <img src={cls.image} width={'50px'}/>
                </td>
                <td>{cls.name}</td>
                <td>{cls.instructor_name} </td>
                <td>{cls.seats} </td>
                <td>{cls.price} </td>
                <td>{cls.students} </td>
                <td> </td>
                <td></td>
            </tr>
            
            )
       }
        
      </tbody>
    </Table>
        </div>
    );
};

export default ManageClass;