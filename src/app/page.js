import Image from "next/image";
import Connie from "../../public/assets/connie.webp"
import LogoDark from "../../public/ttf-dark.png"


export default function Home() {
  return (
    <div className="flex flex-col p-10 items-center flex-wrap justify-center text-center gap-10">

        <h1>twin flame transformations</h1>
        <h6>A sacred container for radical change and integrative healing</h6>

<div className="relative w-full justify-center">
      <Image
        src={Connie}
        alt="coach picture"
        className="object-cover rounded-t-4xl"
      />

      <Image 
        src="https://dinoanimals.com/wp-content/uploads/2023/11/Kermode-bear-10.jpg"
        alt="bear kemode"
        width={200}
        height={200}
        className="object-cover bottom-0 rounded-t-2xl absolute"
      />
</div>

<Image
src={LogoDark}
alt="logo"
width={60}
className="m-4"
/>

<h2>Transformational Spiritual Mentor & Intuitive Healing Guide</h2>

<div className="flex flex-col gap-10">
          <p className="text-center">I support deep inner transformation on the journey back to your true self and conscious connection with the Divine. This work centres on spiritual mentoring, intuitive insight, energetic clearing and strengthening, channelling, integrative coaching, and, where appropriate health based intuitive guidance.</p>
<p>
  At the heart of my work, I support Twin Flames to a place of balance, restored health in mind body and soul, and ultimately to inner union and beyond. I help you to integrate fragmented parts of self, heal core wounds, and return to inner alignment, sovereignty, and embodied authenticity.</p>
<p>
  This is a grounded, supportive space for people ready to dive into their healing, face their pain, alchemise their wounds, and step into clarity and self-leadership.</p>


            <div>
              <Image
              src="https://www.pngplay.com/wp-content/uploads/15/Heart-Outline-Dotted-Transparent-Image.png"
              alt="heart container"
              width={200}
              height={100}
            />

            <h3>Working within this container</h3>
            <p>This work is designed for those who are willing to engage deeply with their inner world, including emotional patterns, unconscious wounds, and energetic misalignment, with honesty and responsibility. It is best suited for those who are open to the understanding that energy is at the core of everything, and that meaningful healing often requires working at an energetic level.</p>

            <p>It may not be suitable if you are seeking quick fixes, predictions, or frameworks that exclude energetic or intuitive perspectives.</p>
      </div>
    </div>
  </div>
  )
  
}