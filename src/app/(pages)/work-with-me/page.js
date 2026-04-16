import Image from "next/image"
import connie from "../../../../public/assets/connie.webp"
import bg from "../../../../public/bg-texture.jpg"

export default function WorkWithMe () {
    return (
        
        <div className="flex flex-col h-full justify-center gap-10 items-center text-center inset-0 p-10">


<div className="fixed w-full h-full top-0 left-0 -z-10 opacity-50">
    <Image
        src={bg}
        alt=""
        fill
        className="object-cover blur-md"
    />
</div>

            <div className="flex flex-col py-10 gap-10">
            <h2>WORK WITH ME</h2>
            <p>
There are a number of ways to engage with this work, depending on where you are on your path and what kind of support you are seeking. All work is offered within a grounded, ethical, and trauma-aware container, with a strong emphasis on self-responsibility, integration, and inner union.</p>

<p>
I aim to support you on the journey back to your true self, helping you heal core wounds, integrate fragmented parts, clear and strengthen your energy system, and move toward greater inner alignment and sovereignty.
</p>
            </div>
    
<div className="w-full flex gap-10">
    <div className="flex flex-col p-10 gap-6 w-full justify-evenly">

            <div className="flex flex-col gap-10 p-10 text-center align-middle items-center justify-center rounded-xl border-2 border-mauve-700/50">
                <h5>one-to-one</h5>
                <p>Ongoing, relational support for those navigating deep inner work and periods of significant inner change</p>

                <button className="p-3 text-center flex rounded-md hover:bg-mauve-300/10 text-xs bg-mauve-500/20 cursor-pointer">- read more -</button>
            </div>

            <div className="flex flex-col gap-10 p-10 text-center align-middle items-center justify-center rounded-xl border-2 border-mauve-700/50">
                <h5>Intuitive Healing / Energetic Clearing</h5>
                <p>Distance work focused on the energetic layer where many unconscious patterns and relational distortions are held.</p>

                <button className="p-3 text-center flex rounded-md hover:bg-mauve-300/10 text-xs bg-mauve-500/20 cursor-pointer">- read more -</button>
            </div>


            <div className="flex flex-col gap-10 p-10 text-center align-middle items-center justify-center rounded-xl border-2 border-mauve-700/50">
                <h5>Emotion Code Sessions</h5>
                <p>Emotion Code work focuses on identifying and releasing trapped emotions using the Emotion Code method, guided through dowsing and intuitive insight.</p>

                <button className="p-3 text-center flex rounded-md hover:bg-mauve-300/10 text-xs bg-mauve-500/20 cursor-pointer">- read more -</button>
            </div>
        </div>
    </div>

<div className="flex gap-10 flex-col w-70 pb-20">
<div className="gap-10 flex flex-col bg-mauve-800/7 w-full rounded-xl p-10 items-center">
<p className="text-semibold text-shadow-sm w-35"><strong>Transformations can take on many forms...</strong></p>
<Image 
    src={connie}
    alt="connie"
    width={200}
    height={200}
    className="object-cover rounded-lg"
/>

    <Image 
        src={"https://dinoanimals.com/wp-content/uploads/2023/11/Kermode-bear-10.jpg"}
        alt="bear kemode"
        width={200}
        height={200}
        className="object-cover rounded-lg"
    />
</div>
</div>

        </div>
    )
}