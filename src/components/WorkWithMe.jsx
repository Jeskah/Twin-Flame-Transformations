import Image from "next/image"
import bg from "../../../../public/bg4.jpg"
import connie from "../../../../public/assets/connie.webp"
import WorkWithMeCard from "@/components/WorkWithMeCard"
import { getPackages } from "@/lib/db/packages"

export default async function WorkWithMe() {
  const packages = await getPackages()

  return (
    <div className="flex flex-col h-full justify-center gap-10 items-center text-center inset-0 p-10">

      <div className="fixed w-full h-full top-0 left-0 -z-10 opacity-50">
        <Image src={bg} alt="" fill priority className="object-cover blur-md" />
      </div>

      <div className="flex flex-col pt-10 pb-30 gap-10">
        <h5>WORK WITH ME</h5>
        <div className="px-10 gap-10 flex flex-col">
          <p>I aim to support you on the journey back to your true self, helping you heal core wounds, integrate fragmented parts, clear and strengthen your energy system, and move toward greater inner alignment and sovereignty.</p>
          
          <p>There are a number of ways to engage with this work, depending on where you are on your path and what kind of support you are seeking. All work is offered within a grounded, ethical, and trauma-aware container, with a strong emphasis on self-responsibility, integration, and inner union.</p>
        </div>
      </div>

      <div className="flex flex-col px-10 gap-8 w-full">
        {packages.map((pkg) => (
          <WorkWithMeCard
            key={pkg.id}
            id={pkg.id}
            name={pkg.name}
            description={pkg.description}
          />
        ))}
      </div>

      <div className="flex gap-10 flex-col">
        <div className="gap-10 flex flex-col py-20 w-full rounded-xl items-center">
          <h6 className="text-semibold text-shadow-sm"><strong>May cause unexpected transformations</strong></h6>
          <div className="w-70 h-50" style={{ perspective: '1000px' }}>
            <div
              className="relative w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                animation: 'flipCard 8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
              }}
            >
              <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
                <Image src={connie} alt="connie" fill className="object-cover rounded-lg" />
              </div>
              <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                <Image src="https://dinoanimals.com/wp-content/uploads/2023/11/Kermode-bear-10.jpg" alt="bear kermode" fill className="object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
