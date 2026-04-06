import Image from "next/image";

export default function PackageHero({ title, img_url, description, children }) {
return (
<div className="relative w-full text-white overflow-hidden">

    <Image
        src={img_url}
        alt={title}
        fill
        className="object-cover"
    />


    <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-6 text-center">

        <h1 className="font-bold">{title}</h1>

        <div className="text-lg md:text-xl max-w-2x prose prose-invert">
        <p>{description}</p>

        {children && 
        <div className="mt-6">{children}</div>}

        </div>
      </div>
    </div>
  );
}