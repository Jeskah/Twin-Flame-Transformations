import Image from "next/image";

export default function PackageHero({ title, img_url, description, children }) {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] text-white">
      {/* Background Image */}
      <Image
        src={img_url}
        alt={title}
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">{description}</p>
        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  );
}