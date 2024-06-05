import React from 'react';
import useAuth from '../../../hooks/useAuth';

const StudentHome = () => {
    const {user} =useAuth();
    return (
        <div>
            <h1 className='mt-3 text-center text'>Student Dashboard</h1>
            <h3>Welcome {user.displayName}</h3>
        </div>
    );
};

export default StudentHome;