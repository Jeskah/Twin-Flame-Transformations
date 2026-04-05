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
    
    <div className="relative p-10 bg-black/90 min-h-screen">
      <PackageHero title={pkg.name} img_url={pkg.img_url}>
    {isAdmin ? (
      <EditPkgDescription
        initialDescription={pkg.description}
        packageId={pkg.id}
      />
    ) : (
      <p className="text-white">{pkg.description}</p>
    )}
  </PackageHero>


      <div className="p-7 grid gap-10 justify-center">
            {...pkg.package_options?.map((option) => (
            <OptionDisplay key={option.id} option={option}/>
        ))}
      </div>
  </div>
  );
}
