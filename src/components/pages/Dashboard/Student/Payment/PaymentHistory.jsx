import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
import { useQuery } from "@tanstack/react-query";
import {  Table } from 'react-bootstrap';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <h1 className='mt-5'>Total Payments: {payments.length}</h1>
            <Table  bordered hover className='my-5'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>price</th>
                        <th>Transaction Id</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {payments.map((payment, index) => <tr key={payment._id}>
                            <th>{index + 1}</th>
                            <td>${payment.price}</td>
                            <td>{payment.transactionId}</td>
                            <td>{payment.status}</td>
                        </tr>)}
                </tbody>
            </Table>
        </div>
    );
};

export default PaymentHistory;