import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useUser from '../../../hooks/useUser';
import useAllClass from '../../../hooks/useAllClass';

const AdminHome = () => {
    const {user} =useAuth();
    const [users] = useUser();
    const [allClasses] = useAllClass();
    const myClasses = allClasses.filter(cls => cls.instructor_email === user?.email);
    return (
        <div>
            <h1 className='mt-3 text-center text'>Admin Dashboard</h1>
            <h3>Welcome {user.displayName}</h3>
            <h5>Total Users: {users.length}</h5>
            <h5>Total Courses: {allClasses.length}</h5>
        </div>
    );
};

export default AdminHome;