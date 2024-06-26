import React from 'react';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCart from "../../../../hooks/useCart";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';


const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [cart, refetch] = useCart();
    const navigate = useNavigate();

    const courseName = cart.map(item => item.name)
    console.log(courseName[0]);

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }

    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment in the database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), // utc date convert. use moment js to 
                    cartIds: cart.map(item => item._id),
                    courseIds: cart.map(item => item.coursesID),
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', payment);
                console.log('payment saved', res.data);

               
                const enrolledClass ={
                    courseIds: cart.map(item => item.coursesID),
                    email: user.email,
                    name:courseName.name,
                    instructor:cart.map(item => item.instructor),
                    image: cart.map(item => item.image),
                    
                }
              
                
                const enrolledRes = await axiosSecure.post('/enrolled-courses', enrolledClass);
                console.log('Enrolled Course', enrolledRes.data);

                const  studentRes =axiosSecure.patch(`/class/${cart.map(item => item.coursesID)}`)
                console.log('student',studentRes);


                refetch();
                if (res.data?.paymentResult?.insertedId) {
                   
                    
                  
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for PAYMENT",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    
                    navigate('/dashboard/paymentHistory')
                }

            }
        }

    }

    return (
        <form onSubmit={handleSubmit}>
        <CardElement
            options={{
                style: {
                    base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                },
            }}
        />
        <Button variant='info' className="btn  btn-primary my-4" type="submit"
          disabled={!stripe || !clientSecret}>
            Pay
        </Button>
        <p className="text-danger">{error}</p>
        {transactionId && <p className="text-success"> Your transaction id: {transactionId}</p>}
    </form>
    );
};

export default CheckoutForm;