'use client';

import { useState } from 'react';
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
    <form onSubmit={handleSubmit} className="your-custom-styles-here">
    <PaymentElement />  {/* Stripe renders card, Apple Pay, etc */}

    {errorMsg && <p className="text-red-500 mt-2">{errorMsg}</p>}

    <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : 'Pay now'}
    </button>
    </form>
);
}

// Outer wrapper — fetches the clientSecret then mounts Elements
export default function CheckoutForm({ variantId, customerEmail }) {
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
    return <button onClick={initPayment}>Confirm & Checkout</button>;
}

const options = {
    clientSecret,
    appearance: {
    theme: 'stripe',        // or 'night', 'flat'
    variables: {
        colorPrimary: '#your-brand-colour',
        fontFamily: 'Inter, sans-serif',
        borderRadius: '8px',
    },
    },
};

return (
    <Elements stripe={stripePromise} options={options}>
    <PaymentForm onSuccess={(pi) => console.log('Paid!', pi)} />
    </Elements>
);
}