import Image from "next/image";

export default function PackageCard({ title, description, img_url }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.01] transition cursor-pointer bg-white w-70 h-150">
      
      <Image
        src={img_url}
        alt={title}
        width={280}
        height={100}
        className="object-contain"
        
      />

      <div className="p-5 grid top-0">
        <h5 className="font-semibold">{title}</h5>
        <p className="text-sm text-gray-600 line-clamp-2">
          {description}
        </p>
      </div>

    </div>
  );
}