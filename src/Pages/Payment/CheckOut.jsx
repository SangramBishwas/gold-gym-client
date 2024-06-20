import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import PropTypes from 'prop-types';
import { Button } from 'flowbite-react';
import Swal from 'sweetalert2';
import useAxios from '../../Hooks/useAxios';
const CheckOut = ({ paymentInfo }) => {
    const [error, setError] = useState('');
    const [transaction, setTransaction] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe();
    const axiosSecure = useAxios()
    const elements = useElements();
    const { user } = useAuth();
    const { boookingInfo, pacckage, payment } = paymentInfo;


    useEffect(() => {
        if (payment > 0) {
            axiosSecure.post('/create-payment-intent', { price: payment })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, payment])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'Anonymous',
                    email: user?.email || 'Anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirmError', confirmError)
        } else {
            if (paymentIntent.status === 'succeeded') {
                setTransaction(paymentIntent.id);
                const paymentInfo = {
                    transactionId: paymentIntent.id,
                    name: user.displayName,
                    email: user.email,
                    package: pacckage,
                    price: payment,
                    trainerName: boookingInfo.name,
                    trainerId: boookingInfo.trainer_Id,
                    classes: boookingInfo.classes,
                    slot: boookingInfo.selectedSlot,
                    date: new Date(),
                    status: true
                }
                const res = await axiosSecure.post('/payments', paymentInfo)
                if (res.data.insertedId) {
                    axiosSecure.patch(`/users/${user?.email}`)
                    .then(res => {
                        const result = res.data;
                        if (result.modifiedCount > 0) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `Congratulations! you have confirmed ${pacckage} membership  `,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                }
            }
        }

    }
    return (
        <form onSubmit={handleSubmit} className='my-10 border-2 md:px-10'>
            <CardElement className='my-10 md:mx-10 border-b md:border p-3 border-black md:rounded'
                options={{
                    style: {
                        base: {
                            fontSize: '20px',
                            border: '2px solid red',
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
            <Button className='mx-auto w-1/2 md:w-1/3' type="submit" disabled={!stripe || !clientSecret}>
                Confirm Your Payment
            </Button>
            <p className="text-red-700 py-2 text-center">{error}</p>
            {transaction &&
                <p className="text-green-700 py-2 text-center">Your transaction id: {transaction}</p>
            }
        </form>
    );
};

CheckOut.propTypes = {
    paymentInfo: PropTypes.object
};

export default CheckOut;