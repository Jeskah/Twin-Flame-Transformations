import Link from "next/link";
import PackageCard from "@/components/PackageCard";
import { getPackages } from "@/lib/db/packages";
import Hero from "../../../../public/bg5.jpg";
import Image from "next/image";

export default async function PackagesPage() {
  const packages = await getPackages();

  console.log(packages);

  return (
    
    <div className="relative min-h-screen ">

      <Image 
      src={Hero}
      alt=""
      className="object-cover -z-10 blur-[17px] opacity-80 top-0 fixed overflow-hidden scale-110 h-full"
      />

      <div className="gap-10 py-20 justify-center flex flex-col">
        <h5 className="text-center">Available bookings</h5>

        {/* <h1>Booking & Enquiries</h1> */}
        <p className="text-center px-18 text-wrap w-screen">
Unsure which option is right for you or would like more information? Please visit <Link href="/work-with-me" className="underline text-pink-500">Work With Me</Link> where you can read full descriptions of each service.
Clicking on the titles below will take you to more detailed information</p>




      <div className="flex flex-row flex-wrap w-screen items-center gap-15 justify-evenly px-7 py-20 ">
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

<div className="text-center flex flex-col mb-10 gap-5 py-10 px-20">
        <h5>Not sure where to begin?</h5>
        <p>If you feel drawn to this work but are unsure what would be most supportive, feel free to book a consultation. We can explore your current needs and decide on a structure that respects your energy, capacity, and intentions.
There is no one-size-fits-all approach to healing. Whether you feel ready for deep container work or simply need a one-off session for clarity and energetic support, this space can meet you where you are.</p>
      </div>
      </div>

    </div>
  );
}