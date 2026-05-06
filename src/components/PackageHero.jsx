import Image from "next/image";

export default function PackageHero({ title, img_url, children }) {
  return (
    <div className="relative w-full text-white">
      <div className="absolute inset-0 -mb-40">
        <Image
          priority
          src={img_url}
          alt={title}
          fill
          className="object-cover -z-10 fixed opacity-80"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 flex flex-col items-center px-6 py-20 text-center">
        <span className="font-bold text-[20px] py-10">{title}</span>
        <div className="max-w-2xl w-full">
          {children}
        </div>
      </div>
    </div>
  );
}