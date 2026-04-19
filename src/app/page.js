import Image from "next/image";
import Link from "next/link";
import Hero from "../../public/hero.jpg";
import Clouds from "../../public/clouds.jpg";
import Heart from "../../public/heart-blur.png";
import Wave from "../../public/wave.svg"

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      <div className="z-10 sticky">
      </div>

              <Image
          src={Hero}
          alt="Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

      {/* Hero */}
      <div className="relative top-0 left-0 h-screen">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white gap-4 px-6">
          <h1 className="font-bold max-w-2xl">twin flame transformations</h1>
          <p>A sacred container for radical change and integrative healing</p>
          <Link href="/packages">
            <button className="border border-white px-8 py-4 mt-5 cursor-pointer hover:bg-white/10 transition text-xs">
              SEE PACKAGES
            </button>
          </Link>
        </div>
      </div>

      {/* Intro text */}
      <div className="flex flex-col text-center items-center justify-center gap-10 px-20 py-40 w-full mx-auto">
        <h4 className="text-mauve-600">
          Transformational Spiritual Mentor & Intuitive Healing Guide
        </h4>
        <p>
          I support deep inner transformation on the journey back to your true
          self and conscious connection with the Divine. This work centres on
          spiritual mentoring, intuitive insight, energetic clearing and
          strengthening, channelling, integrative coaching, and, where
          appropriate health based intuitive guidance.
        </p>
      </div>


      {/* Quote block */}
      <div className="px-16">
        <div className="bg-mauve-400 flex flex-col justify-center items-center p-10 max-w-3xl mx-auto rounded-2xl">
          <p className="text-[#d7ccd5] text-center">
            This is a grounded, supportive space for people ready to dive into
            their healing, face their pain, alchemise their wounds, and step
            into clarity and self-leadership.
          </p>
        </div>
      </div>


      {/* Heart image section */}
      <div className="relative flex flex-col items-center px-6 py-60 gap-2 text-center">
        <div className="flex-col flex justify-center items-center pb-20 top-100">
        <Image
        src={Heart}

          alt="heart container"
          width={300}
          height={100}
          className="animate-heartbeat absolute -z-1 opacity-80"
        />
        <h4>At the heart of my work</h4>
        <p className="w-100 px-10">
          I support Twin Flames to a place of balance, restored health in mind
          body and soul, and ultimately to inner union and beyond. I help you to
          integrate fragmented parts of self, heal core wounds, and return to
          inner alignment, sovereignty, and embodied authenticity.
        </p>
      </div>

<Image
src={Wave}
alt=""
cover
className="object-cover absolute -z-3 bottom-0"
/>
      </div>

<div className="flex flex-col items-center text-center w-screen mx-auto justify-center bg-mauve-400">

  <div className="overflow-hidden text-mauve-800 justify-center items-center py-20 px-5">

<span className="p-10 font-calligraphy! text-[46px] leading-12">Connect deeply with your inner world</span>

<div className="text-mauve-400 px-20 flex flex-col gap-10">

  <h5 className="text-mauve-800 pt-10">explore</h5>

        <div className="rounded-lg p-5 bg-mauve-800">
          <p>emotional patterns</p>
          </div>

          <div className="rounded-lg p-5 bg-mauve-800">
          <p>unconscious wounds</p>
          </div>

          <div className="p-5 rounded-lg bg-mauve-800">
          <p>energetic misalignment</p>
          </div>

        </div>

                  <p className="p-20 text-center">
          This work is designed for those who are willing to engage deeply with
          their inner world, including emotional patterns, unconscious wounds,
          and energetic misalignment, with honesty and responsibility. It is
          best suited for those who are open to the understanding that energy is
          at the core of everything, and that meaningful healing often requires
          working at an energetic level.
        </p>        
      </div>
    </div>


<div className="relative h-200 w-full">

  <Image
    src={Clouds}
    alt="clouds"
    fill
    className="object-cover"
  />
  

<div className="absolute inset-0 bg-black/40"></div>

<div className="absolute inset-0 flex flex-col items-center justify-around text-center text-white/80 gap-20 px-6">

  <div className="relative top-30 flex gap-5 flex-col">
    <p>For those who are open to the understanding that</p>
    <h2 className="px-10">energy is at the core of everything</h2>
    <p className="px-20 text-mauve-300 flex flex-col justify-center items-center">and that meaningful healing often requires working at an energetic level</p>
  </div>
    
    <p className="underline opacity-80 px-10">
      May not be suitable if you are seeking quick fixes, predictions, or
      frameworks that exclude energetic or intuitive perspectives
    </p>
  </div>
</div>
</div>
  );
}
