import Link from "next/link";
import PackageCard from "@/components/PackageCard";
import { getPackages } from "@/lib/db/packages";

export default async function PackagesPage() {
  const packages = await getPackages();

  console.log(packages);

  return (
    <div className="p-10 flex flex-col gap-10">
      <div className="p-5 gap-10 flex-col flex">
        <h5>Not sure where to begin?</h5>
        <p>If you feel drawn to this work but are unsure what would be most supportive, feel free to book a consultation. We can explore your current needs and decide on a structure that respects your energy, capacity, and intentions.
There is no one-size-fits-all approach to healing. Whether you feel ready for deep container work or simply need a one-off session for clarity and energetic support, this space can meet you where you are.</p>
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 justify-items-center ">
      {packages.map((pkg) => (
        <Link key={pkg.id} href={`/packages/${pkg.id}`}>
          <PackageCard
          title={pkg.name}
          description={pkg.description}
          img_url={pkg.img_url}
          />
          </Link>
      ))}
      </div>
    </div>
  );
}