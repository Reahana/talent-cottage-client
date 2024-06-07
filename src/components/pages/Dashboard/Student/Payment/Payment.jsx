import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';

//card test number 4242 4242 4242 4242
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);


const Payment = () => {
    return (
        <div className='m-5'>
        <h1>Payment </h1>
        <h3>Add card info for payment</h3>
        <div className='my-5'>
            <Elements stripe={stripePromise}>
              <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    </div>
    );
};

export default Payment;