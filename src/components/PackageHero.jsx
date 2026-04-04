import Image from "next/image";

export default function PackageHero({ title, img_url, description }) {
  return (
    <div className="relative w-full h-200 mt-10">
      <Image
        src={img_url}
        alt=""
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex justify-center">
        <div className="text-white/90 p-6 max-w-2xl text-center top-100">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
}