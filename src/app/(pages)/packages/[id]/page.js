import { getPackageById } from "@/lib/db/packages";
import PackageHero from "@/components/PackageHero";
import OptionDisplay from "@/components/OptionDisplay";
import EditPkgDescription from "@/components/EditPkgDescription";

export default async function PackageDetailPage({ params }) {
  const { id } = await params;
  const pkg = await getPackageById(id);
  const isAdmin = true

    if (!pkg) {
    return <div className="p-6">Package not found</div>;
  }

  return (
    
    <div className="flex p-10 bg-black/90 min-h-screen">
      <PackageHero 
      title={pkg.name} 
      img_url={pkg.img_url}
      >
    {isAdmin ? (
      <div className="">
      <EditPkgDescription
        initialDescription={pkg.description}
        packageId={pkg.id}
      />
      </div>



    ) : (
      <p className="text-white">{pkg.description}</p>
    )}


        <div className="flex flex-col items-center">
            {...pkg.package_options?.map((option) => (
            <OptionDisplay key={option.id} option={option}/>
          ))}
        </div>
  </PackageHero>

  </div>
  );
}
