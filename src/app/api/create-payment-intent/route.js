import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
);

export async function POST(req) {
    const { variantId, customerEmail } = await req.json();

    const { data: variant, error } = await supabase
    .from('option_variants')
    .select('stripe_price_id, price')
    .eq('id', variantId)
    .single();

if (error || !variant) {
    console.error('Supabase error:', error);
    return Response.json({ error: 'Variant not found' }, { status: 404 });
}

    console.log('variant from supabase:', variant);
    console.log('price raw:', variant?.price);
    console.log('amount calculated:', Math.round(parseFloat(variant?.price) * 100));

    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(parseFloat(variant.price) * 100),
        currency: 'gbp',
        receipt_email: customerEmail,
        metadata: {
            variant_id: variantId,
            price_id: variant.stripe_price_id,
            customer_email: customerEmail,
        }
    });
    return Response.json({ clientSecret: paymentIntent.client_secret})

};