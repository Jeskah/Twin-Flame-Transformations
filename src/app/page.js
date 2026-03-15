import Image from "next/image";
import Connie from "../../public/assets/connie.webp"
import LogoDark from "../../public/ttf-dark.png"


export default function Home() {
  return (
    <div className="flex flex-col p-10 items-center flex-wrap justify-center text-center gap-10 mt-10">

        <h1 className="text-mauve-700">twin flame transformations</h1>
        <h4 className="w-150">A sacred container for radical change and integrative healing</h4>

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

<h2 className="text-mauve-600">Transformational Spiritual Mentor & Intuitive Healing Guide</h2>

<div className="flex flex-col items-center">

  

        <p className="flex flex-row text-center w-190">I support deep inner transformation on the journey back to your true self and conscious connection with the Divine. This work centres on spiritual mentoring, intuitive insight, energetic clearing and strengthening, channelling, integrative coaching, and, where appropriate health based intuitive guidance.
        </p>

        <div className="relative flex flex-col items-center justify-around align-middle">

              <Image
              src="https://static.vecteezy.com/system/resources/previews/009/590/668/original/orange-heart-watercolor-png.png"
              alt="heart container"
              width={600}
              height={100}
              className="-z-100 absolute"
            />

      <div className="relative text-mauve-500">
        <h3 className="mt-100">At the heart of my work</h3>
      </div>
          </div>

        <p className="p-10 w-220">
          I support Twin Flames to a place of balance, restored health in mind body and soul, and ultimately to inner union and beyond. I help you to integrate fragmented parts of self, heal core wounds, and return to inner alignment, sovereignty, and embodied authenticity.
        </p>

  <h4 className="text-mauve-600">This is a grounded, supportive space for people ready to dive into their healing, face their pain, alchemise their wounds, and step into clarity and self-leadership.</h4>


            <div className="flex flex-col w-full">

            {/* <h3>Working within this container</h3>
            <p>This work is designed for those who are willing to engage deeply with their inner world, including emotional patterns, unconscious wounds, and energetic misalignment, with honesty and responsibility. It is best suited for those who are open to the understanding that energy is at the core of everything, and that meaningful healing often requires working at an energetic level.</p>

            <p>It may not be suitable if you are seeking quick fixes, predictions, or frameworks that exclude energetic or intuitive perspectives.</p> */}

            <div className="flex flex-col items-center">
                              <h3 className="text-mauve-600 p-10">Designed to...</h3>


          <div className="flex flex-row gap-10 w-200 border-2 p-11 rounded-4xl items-center ">
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


      </div>
    </div>
  </div>
  )
  
}