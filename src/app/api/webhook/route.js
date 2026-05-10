import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(
process.env.NEXT_PUBLIC_SUPABASE_URL,
process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
const body = await req.text();
const sig = req.headers.get('stripe-signature');

    const { variantId, customerEmail } = await req.json();
    console.log('variantId received:', variantId);
    console.log('customerEmail received:', customerEmail);

let event;
try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
} catch (err) {
    return Response.json({ error: 'Webhook error' }, { status: 400 });
}

if (event.type === 'payment_intent.succeeded') {
    const { metadata } = event.data.object;

    // Save to Supabase
    await supabase.from('orders').insert({
    product_id: metadata.product_id,
    customer_email: metadata.customer_email,
    status: 'paid',
    });

    await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: customerEmail,
    subject: 'Booking confirmed',
    html: '<p>Thank you for booking! Connie will be in touch shortly.</p>'
    })

    // Optionally call your own email service here (Resend, SendGrid, etc.)
}

return Response.json({ received: true });
}