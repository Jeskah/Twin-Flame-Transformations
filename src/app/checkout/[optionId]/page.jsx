import { createClient } from '@supabase/supabase-js';
import VariantCheckout from '@/components/VariantCheckout';
import Image from 'next/image';

const supabase = createClient(
process.env.NEXT_PUBLIC_SUPABASE_URL,
process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function CheckoutPage({ params, searchParams }) {
    const { optionId } = await params;
    const resolvedSearchParams = await searchParams;
    const img_url = resolvedSearchParams?.img_url ? decodeURIComponent(resolvedSearchParams.img_url) : null;
    console.log('img_url:', img_url);
    console.log('resolvedSearchParams:', resolvedSearchParams);


const { data: option } = await supabase
    .from('package_options')
    .select('id, title, option_variants(id, duration, price, stripe_price_id)')
    .eq('id', optionId)
    .single();

if (!option) return <div>Option not found</div>;


return (
<div  className="fixed top-0 left-0 min-h-screen text-white text-center flex flex-col items-center justify-center gap-10 w-screen bg-black">

    {img_url && (
        <Image
        src={img_url} 
        alt="" 
        fill 
        className='object-cover -z-10 opacity-55'/>
    )}


<div className='flex flex-col items-center gap-10 top-70'>
        <p className='gap-10'>You`ve selected:</p>
    <h1 className="px-10">{option.title}</h1>
    <VariantCheckout variants={option.option_variants}/>

    

    
</div>

</div>
);
}