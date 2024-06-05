import React from 'react';
import { Link, useRouteError } from "react-router-dom";
import image from '../../assets/error.gif'
import { Button } from 'react-bootstrap';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='text-center pt-3'>
            <img src={image} alt="" height={'400px'}/>
            <h2 className='text-danger'>Sorry!!! an unexpected error has occurred.
            </h2>
            
            <h4>
            <i>{error.statusText || error.message}</i>
            </h4>
            <br />
            <Link to={'/'}><Button>Back to HOME</Button></Link>
        </div>
    );
};

export default ErrorPage;