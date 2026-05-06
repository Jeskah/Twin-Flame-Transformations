import { createClient } from '@supabase/supabase-js';
import VariantCheckout from '@/components/VariantCheckout';
import Image from 'next/image';

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
<div>
    {/* <Image
    alt=""
    src={option.img_url}
    fill
    className='inset-0 absolute z-50'/> */}

    <div className="min-h-screen top-0 left-0 absolute w-full bg-black/90 text-white text-center flex flex-col items-center justify-center gap-10">
        <p className='gap-10'>You`ve selected:</p>
    <h1 className="">{option.title}</h1>

    
    {/* <p>Select Duration</p> */}

    <VariantCheckout variants={option.option_variants}/>

    </div>
</div>
);
}