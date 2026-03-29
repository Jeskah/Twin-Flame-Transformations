import Image from "next/image";
import Link from "next/link";
import Connie from "../../public/assets/connie.webp"
import LogoDark from "../../public/ttf-dark.png";
import Hero from "../../public/hero.jpg";
import ContactButton from "@/components/ContactButton";



export default function Home() {

  return (
    <div className="">

    <div className="relative w-full h-[80vh]">
      <Image
        src={Hero}
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />
      

      <div className="flex-col absolute inset-0 flex items-center justify-center text-center text-white gap-4">
        
        <h1 className="text-4xl font-bold">
          twin flame transformations
        </h1>

      <p className="w-70">A sacred container for radical change and integrative healing</p>

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

<div className="p-10 gap-10 flex flex-wrap flex-row mt-10 text-center">

  {/* <Image
src={LogoDark}
alt="logo"
width={100}
height={100}
className="mt-4 items-center justify-center"
/> */}

<h5 className="text-mauve-600">Transformational Spiritual Mentor & Intuitive Healing Guide</h5>

  <div className="flex items-center w-full justify-center gap-10">

        <p className="flex flex-row text-center w-190">I support deep inner transformation on the journey back to your true self and conscious connection with the Divine. This work centres on spiritual mentoring, intuitive insight, energetic clearing and strengthening, channelling, integrative coaching, and, where appropriate health based intuitive guidance.
        </p>

</div>

        <div className="relative flex flex-col items-center justify-around align-middle">

              <Image
              src="https://static.vecteezy.com/system/resources/thumbnails/045/849/338/small_2x/heart-abstract-love-symbol-continuous-line-art-drawing-illustration-free-png.png"
              alt="heart container"
              width={600}
              height={100}
              className="-z-100 absolute bottom-60"
            />

      
        <h3 className="mt-40">At the heart of my work</h3>
      

        <p className="p-10">
          I support Twin Flames to a place of balance, restored health in mind body and soul, and ultimately to inner union and beyond. I help you to integrate fragmented parts of self, heal core wounds, and return to inner alignment, sovereignty, and embodied authenticity.
        </p>
      </div>
<div className="bg-mauve-600 flex w-full justify-center items-center p-10">

  <h6 className="text-[#d7ccd5] w-190">This is a grounded, supportive space for people ready to dive into their healing, face their pain, alchemise their wounds, and step into clarity and self-leadership.</h6>
  </div>



            <div className="flex flex-col w-full items-center">

            {/* <h3>Working within this container</h3>
            <p>This work is designed for those who are willing to engage deeply with their inner world, including emotional patterns, unconscious wounds, and energetic misalignment, with honesty and responsibility. It is best suited for those who are open to the understanding that energy is at the core of everything, and that meaningful healing often requires working at an energetic level.</p>

            <p>It may not be suitable if you are seeking quick fixes, predictions, or frameworks that exclude energetic or intuitive perspectives.</p> */}
      
      
      <h3 className="text-mauve-600 p-10">Designed to...</h3>


          <div className="flex flex-col gap-10 border-2 p-20 text-center text-mauve-700 items-center">
            <h5>Connect you deeply with your inner world</h5>
            <p className="text-3xl">✺</p> 
            <h5>Explore emotional patterns, unconscious wounds & energetic misalignment</h5>
            <p className="text-3xl">✺</p> 
            <h5>Be approached with honesty, responsibility & an open mind</h5>
          </div>


<div className="flex flex-col gap-10 p-13 mt-50 w-100">
                <h6>Suited for those who are open to the understanding that <strong>energy is at the core of everything</strong>, and that meaningful healing often requires working at an energetic level.</h6>

                <h6>It may not be suitable if you are seeking quick fixes, predictions, or frameworks that exclude energetic or intuitive perspectives.</h6>
              </div>
      </div>

<ContactButton/>

      </div>
      </div>
  )
  
}