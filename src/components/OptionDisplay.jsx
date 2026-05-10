import Link from 'next/link';

export default function OptionDisplay({ option, img_url }) {
return (
    <Link href={`/checkout/${option.id}?img_url=${encodeURIComponent(img_url)}`}>
    <div className="relative flex flex-col items-center flex-wrap py-10 cursor-pointer">
        <div className="h-50 w-50 border p-6 rounded-xl max-w-sm gap-5 flex flex-col text-white bg-white/5 hover:bg-white/10 transition">
        <span className="pb-14 border-b uppercase text-center text-sm font-semibold">
            {option.title}
        </span>
        <div className="flex flex-col">
            {option.option_variants.map((variant) => (
            <div key={variant.id} className="flex flex-row justify-between gap-5">
                <p>{variant.duration}</p>
                <p>£{variant.price}</p>
            </div>
            
            ))}
            
        </div>
        </div>
    </div>
    </Link>
);
}