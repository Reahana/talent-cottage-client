import React from 'react';
import useAuth from '../../../hooks/useAuth';

const InstructorHome = () => {
    const {user} =useAuth();
    return (
        <div>
            <h1 className='mt-3 text-center text'>Instructor Dashboard</h1>
            <h3>Welcome {user.displayName}</h3>
        </div>
    );
};

export default InstructorHome;