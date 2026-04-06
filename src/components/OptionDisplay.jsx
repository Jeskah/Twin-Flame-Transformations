export default function OptionDisplay({ option }) {
return (
    <div className="flex flex-col flex-wrap p-10">
    <div className="border p-6 rounded-xl max-w-sm gap-10 flex flex-col text-white bg-white/5 items-center">

    <h5 className="pb-4 border-b w-80 uppercase text-center">
        {option.title}
    </h5>
    
  <p>duration</p>
    <div className="flex flex-col">
        {option.option_variants.map((variant) => (
        <div key={variant.id} className="flex flex-row justify-between gap-50">
            
            <p>{variant.duration}</p>
            <p>£{variant.price}</p>

        </div>
        ))}
    </div>
    </div>
    </div>

);
}