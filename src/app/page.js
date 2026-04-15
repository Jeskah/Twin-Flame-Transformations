import Image from "next/image";
import Link from "next/link";
import Hero from "../../public/hero.jpg";
import Clouds from "../../public/clouds.jpg";
import Heart from "../../public/heart-blur.png";

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      <div className="z-10 sticky">
      </div>

      {/* Hero */}
      <div className="relative h-200 w-full">
        <Image
          src={Hero}
          alt="Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white gap-4 px-6">
          <h1 className="font-bold max-w-2xl">twin flame transformations</h1>
          <p>A sacred container for radical change and integrative healing</p>
          <Link href="/packages">
            <button className="border border-white px-8 py-4 mt-5 cursor-pointer hover:bg-white/10 transition">
              SEE PACKAGES
            </button>
          </Link>
        </div>
      </div>

      {/* Intro text */}
      <div className="flex flex-col text-center items-center justify-center mt-10 gap-10 px-10 py-10 w-full mx-auto">
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

      {/* Heart image section */}
      <div className="relative mt-20 flex flex-col items-center px-6 py-10 gap-2 text-center">
        <div className="flex-col flex justify-center items-center top-100">
        <Image
        src={Heart}

          alt="heart container"
          width={300}
          height={100}
          className="absolute -z-1 opacity-80 bottom-"
        />
        <h4>At the heart of my work</h4>
        <p className="w-100 px-10">
          I support Twin Flames to a place of balance, restored health in mind
          body and soul, and ultimately to inner union and beyond. I help you to
          integrate fragmented parts of self, heal core wounds, and return to
          inner alignment, sovereignty, and embodied authenticity.
        </p>
      </div>
      </div>

      {/* Quote block */}
      <div className="px-6 py-10 mt-10">
        <div className="bg-mauve-400 flex justify-center items-center p-10 max-w-3xl mx-auto rounded-2xl">
          <p className="text-[#d7ccd5] text-center">
            This is a grounded, supportive space for people ready to dive into
            their healing, face their pain, alchemise their wounds, and step
            into clarity and self-leadership.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center text-center gap-10 px-20 max-w-2xl mx-auto justify-center pb-20">
        <p className="text-center">
          This work is designed for those who are willing to engage deeply with
          their inner world, including emotional patterns, unconscious wounds,
          and energetic misalignment, with honesty and responsibility. It is
          best suited for those who are open to the understanding that energy is
          at the core of everything, and that meaningful healing often requires
          working at an energetic level.
        </p>
        <h5 className="mt-10">Connect deeply with your inner world</h5>

                <div className="flex flex-col gap-10 overflow-hidden w-100 text-white justify-center text-center">
          <div className="rounded-full p-5 bg-mauve-800">
          <p>emotional patterns</p>
          </div>
          <div className="rounded-full p-5 bg-mauve-800">
          <p>unconscious wounds</p>
          </div>
          <div className="p-5 rounded-full bg-mauve-800">
          <p>energetic misalignment</p>
          </div>
      </div>
      </div>


<div className="relative h-150 w-full">

  <Image
    src={Clouds}
    alt="clouds"
    fill
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/40"></div>

  <div className="absolute inset-0 flex flex-col items-center justify-around text-center text-white/80 gap-20 px-6">
  <div className="relative top-30 flex gap-2 flex-col">
    <h6>For those who are open to the understanding that</h6>
    <h3>energy is at the core of everything</h3>
      <p>
        and that meaningful healing often requires working at an energetic
        level
      </p>
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
