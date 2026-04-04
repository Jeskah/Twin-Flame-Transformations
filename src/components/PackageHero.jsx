import Image from "next/image";

export default function PackageHero({ title, img_url, description }) {
return (
    <div className="flex flex-col relative w-full h-100">
    <Image
        src={img_url}
        alt=""
        fill
        className="object-cover"
    />

    <div className="absolute inset-0 bg-black/40 items-center grid justify-center">

        <div className=" text-white/80 p-10 w-100 relative col-span-3">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p>{description}</p>
        </div>
    </div>
</div>
);
}