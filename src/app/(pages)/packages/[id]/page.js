import Image from "next/image";
import { getPackageById } from "@/lib/db/packages";
import PackageHero from "@/components/PackageHero";

export default async function PackageDetailPage({ params }) {
  const { id } = await params;
  const pkg = await getPackageById(id);

    if (!pkg) {
    return <div className="p-6">Package not found</div>;
  }

  return (
    <div className="p-10 bg-gray-400">
      <PackageHero 
        title={pkg.name} 
        img_url={pkg.img_url}
        description={pkg.description}
        className="grid-cols-3 grid-rows-3"
      />
    </div>
  );
}