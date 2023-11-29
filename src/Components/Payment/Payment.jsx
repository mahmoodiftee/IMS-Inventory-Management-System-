import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm/CheckoutForm';
//Todo
const stripePromise  = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const Payment = () => {
    return (
        <div>
            <h1 className="text-black mt-4 mb-24 lg:w-[60%] mx-auto text-center text-xl lg:text-5xl font-extrabold">
                PAYMENT VIA STRIPE
            </h1>
            <div className='w-[70%] mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;