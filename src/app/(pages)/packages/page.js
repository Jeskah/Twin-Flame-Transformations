import Link from "next/link";
import PackageCard from "@/components/PackageCard";
import { getPackages } from "@/lib/db/packages";

export default async function PackagesPage() {
  const packages = await getPackages();

  console.log(packages);

  return (
    <div className="mt-10 flex flex-col px-10 overflow-x-hidden justify-center items-center text-center">
      <div className="gap-10 justify-center flex flex-col">
        {/* <h1>Booking & Enquiries</h1> */}
        <p className="text-center px-10 text-wrap w-screen">
Unsure which option is right for you or would like more information? Please visit <Link href="/work-with-me" className="underline text-pink-500">Work With Me</Link> where you can read full descriptions of each service.
Clicking on the titles below will take you to more detailed information</p>

<h5>Available bookings:</h5>


      <div className="flex flex-row flex-wrap w-screen items-center gap-10 justify-evenly px-7 ">
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

<div className="text-center flex gap-5 p-15">
        <h5>Not sure where to begin?</h5>
        <p>If you feel drawn to this work but are unsure what would be most supportive, feel free to book a consultation. We can explore your current needs and decide on a structure that respects your energy, capacity, and intentions.
There is no one-size-fits-all approach to healing. Whether you feel ready for deep container work or simply need a one-off session for clarity and energetic support, this space can meet you where you are.</p>
      </div>
      </div>

    </div>
  );
}