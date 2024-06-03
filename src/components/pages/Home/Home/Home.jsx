import React from 'react';
import Banner from '../Banner/Banner';
import CourseSection from '../CourseSection/CourseSection';
import InstructorSection from '../InstructorSection/InstructorSection';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Talent Cottage | Home</title>
            </Helmet>
            This is home page
            <Banner></Banner>
            <h1 className='fs-1 fw-bold text-center'> Our Top Courses</h1>
            <CourseSection></CourseSection>
            <hr />
            <h1 className='fs-1  text-center mt-5 '> Popular Instructors</h1>
            <InstructorSection></InstructorSection>
        </div>
    );
};

export default Home;