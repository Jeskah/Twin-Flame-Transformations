


export default function OptionDisplay({ option }) {
return (
    <div className="align-center border p-10 rounded-xl w-110 text-white h-50 text-left bg-white/5">

    <h5 className="pb-4 font-bold border-b uppercase">{option.title}</h5>

    <div className="mt-3 flex-col">
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