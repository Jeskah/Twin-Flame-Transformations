import Image from "next/image";

export default function PackageCard({ title, description, img_url }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.01] transition cursor-pointer bg-white w-70">
      
      <div className="relative h-44">
      <Image
        src={img_url}
        alt={title}
        fill
        className="object-cover"
        
      />
      </div>

      <div className="p-5">
        <h5 className="font-semibold text-sm min-h-15 leading-6 pb-5">{title}</h5>
        <p className="text-sm text-gray-600 line-clamp-2">
          {description}
        </p>
      </div>

    </div>
  );
}