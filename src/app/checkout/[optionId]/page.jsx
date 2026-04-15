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
    <div className="min-h-screen bg-black/90 text-white text-center gap-1 px-10 flex flex-col items-center justify-center">
    <h1 className="text-2xl mb-2">{option.title}</h1>
    <p className="text-white/60 mb-8">Select a duration to continue</p>

    <VariantCheckout variants={option.option_variants} />
    </div>
);
}