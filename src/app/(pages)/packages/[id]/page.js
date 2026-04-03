import Image from "next/image";

export default async function PackageDetailPage({ params }) {
  const pkg = await getPackageById(params.id);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{pkg.name}</h1>
      <Image 
      src={pkg.img_url}
      alt=""
      className="w-full max-w-lg mt-4" />
      <p className="mt-4">{pkg.description}</p>
    </div>
  );
}