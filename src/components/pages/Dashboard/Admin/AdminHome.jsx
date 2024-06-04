import React from 'react';
import useAuth from '../../../hooks/useAuth';

const AdminHome = () => {
    const {user} =useAuth();
    return (
        <div>
            <h1 className='mt-3'>Admin Dashboard</h1>
            <h3>Welcome </h3>
        </div>
    );
};

export default AdminHome;