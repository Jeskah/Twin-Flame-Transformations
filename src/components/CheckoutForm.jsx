'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SuccessPage from '@/app/checkout/success/page';
import { loadStripe } from '@stripe/stripe-js';
import {
Elements,
PaymentElement,
useStripe,
useElements,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// Inner form — has access to Stripe hooks
function PaymentForm({ onSuccess }) {
const stripe = useStripe();
const elements = useElements();
const [loading, setLoading] = useState(false);
const [errorMsg, setErrorMsg] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setErrorMsg('');

    const { error, paymentIntent } = await stripe.confirmPayment({
    elements,
    redirect: 'if_required',   // keeps user on page — no redirect
    confirmParams: {
        return_url: `${window.location.origin}/success`, // fallback only
    },
    });

    if (error) {
    setErrorMsg(error.message);
    setLoading(false);
    } else if (paymentIntent?.status === 'succeeded') {
    onSuccess(paymentIntent);
    }
};

return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
    <PaymentElement />

    {errorMsg && <p className="text-red-500 mt-2">{errorMsg}</p>}

    <button 
        type="submit"
        disabled={!stripe || loading}
        className='bg-mauve-600 text-white rounded-md p-3 cursor-pointer'>
        {loading ? 'Processing...' : 'Pay now'}
    </button>
    </form>
);
}

// Outer wrapper — fetches the clientSecret then mounts Elements
export default function CheckoutForm({ variantId, customerEmail }) {

const router = useRouter()
const [clientSecret, setClientSecret] = useState(null);

const initPayment = async () => {
    console.log('variantId being sent', variantId);
    
    const res = await fetch('/api/create-payment-intent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ variantId }),
    });
    const data = await res.json();
    setClientSecret(data.clientSecret);
};

if (!clientSecret) {
    return <button onClick={initPayment} className='cursor-pointer border rounded-md p-5 mt-10 text-sm hover:bg-mauve-800'>Confirm & Checkout</button>;
}

const options = {
    clientSecret,
    appearance: {
    theme: 'night',
    variables: {
        colorPrimary: '#BB85AB',
        colorBackground: '#1a1a2e',
        colorDanger: '#ff6b6b',
        fontFamily: 'Inter, sans-serif',
        fontFamily: 'Inter, sans-serif',
        borderRadius: '8px',
    },
    rules: {
        '.Input': {
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backgroundColor: 'rgba( 255,255,255, 0.2)',
        },
        '.Label': {
            color: 'rgba(255, 255, 255, 0.6)',
        }
    }
    },
};

return (
    <Elements stripe={stripePromise} options={options}>
    <PaymentForm onSuccess={() => router.push('/checkout/success')} />
    </Elements>
);
}