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
            <CourseSection></CourseSection>
            <InstructorSection></InstructorSection>
        </div>
    );
};

export default Home;