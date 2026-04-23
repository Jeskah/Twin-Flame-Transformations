import { createClient } from '@supabase/supabase-js';
import VariantCheckout from '@/components/VariantCheckout';

const supabase = createClient(
process.env.NEXT_PUBLIC_SUPABASE_URL,
process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function CheckoutPage({ params }) {
const { optionId } = await params;

const { data: option } = await supabase
    .from('package_options')
    .select('id, title, option_variants(id, duration, price, stripe_price_id)')
    .eq('id', optionId)
    .single();

if (!option) return <div>Option not found</div>;

return (

    <div className="min-h-screen top-0 left-0 relative w-full bg-black/90 text-white text-center gap-10 px-10 flex flex-col items-center py-20">
        <p>You`ve selected:</p>
    <h1 className="">{option.title}</h1>
    <p>Select Duration</p>

    <VariantCheckout variants={option.option_variants}/>


    </div>
);
}