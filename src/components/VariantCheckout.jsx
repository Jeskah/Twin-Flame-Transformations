'use client';

import { useState } from 'react';
import PackageHero from './PackageHero';
import CheckoutForm from './CheckoutForm';

export default function VariantCheckout({ variants }) {
const [selectedVariant, setSelectedVariant] = useState(null);

if (selectedVariant) {
    return (
    <div className="flex flex-col items-center gap-4">
    
        <CheckoutForm
        variantId={selectedVariant.id}
        price={selectedVariant.price}
        />

        <button
        onClick={() => setSelectedVariant(null)}
        className="text-white/50 text-sm hover:text-white cursor-pointer mt-10"
        >
        <p>←</p> <p>Back</p>
        </button>
    </div>
    );
}

return (
    <div className="flex flex-col gap-6 mt-1">
    {variants.map((variant) => (
        <button
        key={variant.id}
        onClick={() => setSelectedVariant(variant)}
        className="border p-6 rounded-xl text-white bg-white/5 cursor-pointer hover:bg-white/10 transition flex flex-col items-center gap-3 w-48"
        >
        <p className="text-lg font-semibold">{variant.duration}</p>
        <p className="text-white/60">£{variant.price}</p>
        <span className="mt-2 text-sm border border-white/30 rounded-full px-4 py-1">Select</span>
        </button>
    ))}

            <button
        onClick={() => setSelectedVariant(null)}
        className="text-white/50 text-sm hover:text-white cursor-pointer mt-10"
        >
        <p>←</p> <p>Back</p>
        </button>
    
    </div>
);
}