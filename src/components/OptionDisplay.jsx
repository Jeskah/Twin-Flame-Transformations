


export default function OptionDisplay({ option }) {
return (
    <div className="relative align-center border p-15 rounded-xl w-125 text-white h-70 bg-white/5">
    <h5 className="font-bold mb-6 uppercase">{option.title}</h5>

    <div className="mt-2 flex gap-2 flex-col">
        {option.option_variants.map((variant) => (
        <div key={variant.id} className="flex justify-between">
            <span>{variant.duration}</span>
            <span>£{variant.price}</span>
        </div>
        ))}
    </div>
    </div>
);
}