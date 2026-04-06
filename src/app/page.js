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
      <div className="flex flex-col text-center items-center justify-center gap-10 px-6 py-10 max-w-2xl mx-auto">
        <h5 className="text-mauve-600">
          Transformational Spiritual Mentor & Intuitive Healing Guide
        </h5>
        <p>
          I support deep inner transformation on the journey back to your true
          self and conscious connection with the Divine. This work centres on
          spiritual mentoring, intuitive insight, energetic clearing and
          strengthening, channelling, integrative coaching, and, where
          appropriate health based intuitive guidance.
        </p>
      </div>

      {/* Heart image section */}
      <div className="relative flex flex-col items-center px-6 py-10 gap-2 text-center">
        <div className="flex-col flex justify-center items-center top-100">
        <Image
        src={Heart}

          alt="heart container"
          width={300}
          height={100}
          className="absolute -z-1 opacity-80 bottom-"
        />
        <h4>At the heart of my work</h4>
        <p className="max-w-xl">
          I support Twin Flames to a place of balance, restored health in mind
          body and soul, and ultimately to inner union and beyond. I help you to
          integrate fragmented parts of self, heal core wounds, and return to
          inner alignment, sovereignty, and embodied authenticity.
        </p>
      </div>
      </div>

      {/* Quote block */}
      <div className="px-6 py-10">
        <div className="bg-mauve-400 flex justify-center items-center p-10 max-w-3xl mx-auto rounded-2xl">
          <p className="text-[#d7ccd5] text-center">
            This is a grounded, supportive space for people ready to dive into
            their healing, face their pain, alchemise their wounds, and step
            into clarity and self-leadership.
          </p>
        </div>
      </div>

      {/* Inner world section */}
      <div className="flex flex-col items-center text-center gap-10 px-6 py-10 max-w-2xl mx-auto">
        <p className="text-center">
          This work is designed for those who are willing to engage deeply with
          their inner world, including emotional patterns, unconscious wounds,
          and energetic misalignment, with honesty and responsibility. It is
          best suited for those who are open to the understanding that energy is
          at the core of everything, and that meaningful healing often requires
          working at an energetic level.
        </p>
        <h5>Connect deeply with your inner world</h5>
      </div>

      {/* Tags bar */}
      <div className="w-full text-white">
        <div className="flex flex-col text-center flex-wrap justify-center gap-6 sm:gap-10 px-6 py-8">
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

      {/* Clouds section */}
      <div className="relative h-150 w-full">
        <Image
          src={Clouds}
          alt="clouds"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white/80 gap-4 px-6">
          <h6>For those who are open to the understanding that</h6>
          <h3>energy is at the core of everything</h3>
          <p>
            and that meaningful healing often requires working at an energetic
            level
          </p>
          <p className="underline max-w-sm mt-10 opacity-80 text-black/80 text-sm">
            May not be suitable if you are seeking quick fixes, predictions, or
            frameworks that exclude energetic or intuitive perspectives
          </p>
        </div>
      </div>
    </div>
  );
}
