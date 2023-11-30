import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "../../Shared/Button/Button";
import Swal from "sweetalert2";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
const CheckoutForm = () => {
    const card = useLoaderData();
    const { price } = card || {};
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [clientSecret, setClientSecret] = useState("");
    const totalPrice = price;
    console.log(card);
    console.log(totalPrice);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const paymentIntentResponse = await fetch("http://localhost:5000/create-payment-intent", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ price: totalPrice }),
                });

                const paymentIntentData = await paymentIntentResponse.json();
                setClientSecret(paymentIntentData.clientSecret);
            } catch (error) {
                console.error('Error fetching card data:', error);
            }
        };

        fetchData();
    }, [card?._id]);
    const handlePaymentSuccess = () => {
        Swal.fire({
            icon: 'success',
            title: 'Payment Successful',
            text: 'Thank you for your purchase!',
        });

    };

    const handlePaymentError = (errorMessage) => {
        Swal.fire({
            icon: 'error',
            title: 'Payment Failed',
            text: errorMessage || 'Something went wrong with the payment. Please try again.',
        });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();


        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        if (error) {
            console.log('[error]', error);
            handlePaymentError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            handlePaymentSuccess();
        }


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                },
            },
        });

        if (confirmError) {
            console.log('[error]', confirmError);
        } else {
            console.log('[PaymentMethod]', paymentIntent);
            if (paymentIntent.status === "succeeded") {
                const paymentData = {
                    email: user?.email || 'anonymous',
                    price: totalPrice,
                    date: new Date(),
                    cardId: card?._id || '',
                    tansaction_id: paymentIntent.id,
                }
                try {
                    const response = await axios.post('http://localhost:5000/payment', paymentData);
                    console.log(response.data);
                    
                } catch (error) {
                    console.error('Error sending payment:', error);
                }
                console.log("Tansaction ID", paymentIntent.id);
            }
        }



    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '20px',
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
            <div className="my-6">
                <Button text={'PAY'} type="submit" disabled={!stripe || clientSecret}></Button>
            </div>
        </form>
    );
};

export default CheckoutForm;