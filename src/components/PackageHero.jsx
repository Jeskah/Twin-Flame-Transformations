import Image from "next/image";

export default function PackageHero({ title, img_url, children }) {
  return (
    <div className="relative w-full min-h-screen text-white z-0">
        <Image
          priority
          src={img_url}
          alt={title}
          fill
          className="object-cover -z-10 opacity-80"
        />
        <div className="absolute inset-0 bg-black/50 -z-10" />

      <div className="relative z-10 flex flex-col items-center px-11 py-20 text-center">
        <span className="px-20 font-bold text-[18px] pt-16">{title}</span>
        <div className="max-w-2xl w-full">
          {children}
        </div>
      </div>
    </div>
  );
}