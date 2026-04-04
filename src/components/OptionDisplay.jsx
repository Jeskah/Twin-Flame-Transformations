


export default function OptionDisplay({ option }) {
return (
    <div className="border p-4 rounded-xl text-white bg-white/5">
    <h3 className="font-semibold">{option.title}</h3>

    <div className="mt-2 flex flex-col gap-2">
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