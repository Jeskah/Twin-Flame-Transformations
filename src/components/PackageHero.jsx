import Image from "next/image";

export default function PackageHero({ title, img_url, children }) {
  return (
    <div className="relative w-full text-white">
      <div className="absolute inset-0">
        <Image
          src={img_url}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 flex flex-col items-center px-6 py-20 text-center">
        <h1 className="font-bold mb-6">{title}</h1>
        <div className="max-w-2xl w-full">
          {children}
        </div>
      </div>
    </div>
  );
}