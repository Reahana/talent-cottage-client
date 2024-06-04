import React from 'react';
import useInstructor from '../components/hooks/useInstructor';
import useAuth from '../components/hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const InstructorRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isInstructor, isInstructorLoading]= useInstructor()
    const location = useLocation();
    
    if(loading || isInstructorLoading){
        return <Spinner animation="border" variant="info" />
    }

    if (user && isInstructor) {
    return [children];
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;