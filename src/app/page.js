import Image from "next/image";
import Link from "next/link";
import Hero from "../../public/hero.jpg";
import Clouds from "../../public/clouds.jpg"
import ContactButton from "@/components/ContactButton";



export default function Home() {

  return (
    <div>
      <div className="z-1 sticky bottom-100">
        <ContactButton/>
      </div>
    <div className="relative h-125">
      <Image
        src={Hero}
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />
      

      <div className="flex-col flex-wrap absolute inset-0 flex items-center justify-center text-center text-white gap-4">
        
        <h1 className="font-bold text-balance max-w-full mx-auto">
          twin flame transformations
        </h1>

      <p>A sacred container for radical change and integrative healing</p>

        <Link href="/packages">
          <button className="border p-4 mt-5 pointer">
            SEE PACKAGES
          </button>
        </Link>
      </div>
      
    </div>


      {/* <Image 
        src="https://dinoanimals.com/wp-content/uploads/2023/11/Kermode-bear-10.jpg"
        alt="bear kemode"
        width={200}
        height={200}
        className="object-cover bottom-30 right-10 w-50 h-50 rounded-full relative"
      /> */}

  <div className="flex p-10 flex-col text-center items-center justify-center gap-10">

    <h5 className="text-mauve-600">Transformational Spiritual Mentor & Intuitive Healing Guide</h5>

        <p>I support deep inner transformation on the journey back to your true self and conscious connection with the Divine. This work centres on spiritual mentoring, intuitive insight, energetic clearing and strengthening, channelling, integrative coaching, and, where appropriate health based intuitive guidance.
        </p>

</div>

        <div className="relative flex flex-col items-center p-10 justify-around gap-5 text-center align-middle">

              <Image
              src="https://static.vecteezy.com/system/resources/thumbnails/045/849/338/small_2x/heart-abstract-love-symbol-continuous-line-art-drawing-illustration-free-png.png"
              alt="heart container"
              width={600}
              height={100}
              className="z-1"
            />

      
        <h4>At the heart of my work</h4>
      

        <p>
          I support Twin Flames to a place of balance, restored health in mind body and soul, and ultimately to inner union and beyond. I help you to integrate fragmented parts of self, heal core wounds, and return to inner alignment, sovereignty, and embodied authenticity.
        </p>
      </div>

      <div className="p-10">
<div className="bg-mauve-600 flex justify-center items-center p-10">

  <p className="text-[#d7ccd5]">This is a grounded, supportive space for people ready to dive into their healing, face their pain, alchemise their wounds, and step into clarity and self-leadership.</p>
  </div>
  </div>



            <div className="flex flex-col items-left text-center p-10 gap-10">

            {/* <h3>Working within this container</h3> */}
            <p className="text-left w-100">This work is designed for those who are willing to engage deeply with their inner world, including emotional patterns, unconscious wounds, and energetic misalignment, with honesty and responsibility. It is best suited for those who are open to the understanding that energy is at the core of everything, and that meaningful healing often requires working at an energetic level.</p>
          
          <h5>Connect deeply with your inner world</h5>
</div>

<div className="flex flex-col gap-5 items-center">
  
          <div className="flex flex-col object-contain text-center items-center bg-mauve-800 text-white w-screen">

          <div className="flex gap-10 p-13">
            <p>emotional patterns</p>
            <p>unconscious wounds</p>
            <p>energetic misalignment</p>
            </div>
          </div>
</div>

<div className="h-150 relative">

  <Image 
  src={Clouds}
  alt="image" 
  fill 
  className="object-cover"/>

  <div className="flex-col flex-wrap absolute inset-0 flex items-center justify-center text-center text-white gap-4 w-screen">
      <p>For those who are open to the understanding that</p> 
      <h4 className="text-">energy is at the core of everything</h4>
      <p> and that meaningful healing often requires working at an energetic level</p>

                <p className="underline w-100 top-40 relative opacity-30">May not be suitable if you are seeking quick fixes, predictions, or frameworks that exclude energetic or intuitive perspectives</p>
    </div>
  </div>
      </div>
  )
  
  
}