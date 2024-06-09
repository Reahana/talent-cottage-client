import React from 'react';
import { Container, Image } from 'react-bootstrap';
import img from '../../../assets/about.jpg'

const About = () => {
    return (
        <div>
            <Image src={img} className='w-100'/>
            <Container fluid className='my-5'>
                <h3>
                    A website with React Nodejs and Mongodb
                </h3>
            </Container>
        </div>
    );
};

export default About;