'use client'


import Image from "next/image"
import { useState } from "react"
import connie from "../../../../public/assets/connie.webp"
import bg from "../../../../public/bg4.jpg"

export default function WorkWithMe () {

    const [open, setOpen] =useState(null)

    return (
        
        <div className="flex flex-col h-full justify-center gap-10 items-center text-center inset-0 p-10">


<div className="fixed w-full h-full top-0 left-0 -z-10 opacity-50">
    <Image
        src={bg}
        alt=""
        fill
        priority
        className="object-cover blur-md"
    />
</div>

            <div className="flex flex-col py-10 gap-10 ">
            <h5>WORK WITH ME</h5>

            <div className="px-10 gap-10 flex flex-col">

                <p>
I aim to support you on the journey back to your true self, helping you heal core wounds, integrate fragmented parts, clear and strengthen your energy system, and move toward greater inner alignment and sovereignty.
</p>
</div>
</div>
    

    <div className="flex flex-col p-10 gap-20 w-full justify-evenly">


<span className="text-sm font-bold -m-10">What are my options?</span>

<p>
There are a number of ways to engage with this work, depending on where you are on your path and what kind of support you are seeking. All work is offered within a grounded, ethical, and trauma-aware container, with a strong emphasis on self-responsibility, integration, and inner union.</p>

            <div className="flex flex-col gap-10 p-10 text-center align-middle items-center justify-center rounded-xl border-2 border-mauve-700/50">


                <h5>one-to-one</h5>
                <p>Ongoing, relational support for those navigating deep inner work and periods of significant inner change</p>

<button className="p-3 text-center flex rounded-md hover:bg-mauve-300/10 text-xs bg-mauve-500/20 cursor-pointer" onClick={() => setOpen('two')}>- read more -</button>

                {open === 'two' && (
            <div>
            <button className="cursor-pointer p-5" onClick={() => setOpen(null)}>
            x
            </button>
            <p>
            may include:
            • clearing energetic imprints
            • dissolving relational entanglements
            • releasing inherited or unconscious patterns
            • restoring vitality, balance, and flow in the field
            Where intuitively appropriate, sessions may also include health-based intuitive guidance, such as insight into physical imbalances or supplement support.
            Energetic work can be accessed as a standalone session or alongside mentoring. It is particularly helpful when emotional or relational experiences feel overwhelming, repetitive, or difficult to shift through insight alone.
            Session length: 60 minutes
            Cost: £77
            </p>
    </div>
)}


            </div>

            <div className="flex flex-col gap-10 p-10 text-center align-middle items-center justify-center rounded-xl border-2 border-mauve-700/50">
                <h5>Intuitive Healing / Energetic Clearing</h5>
                <p>Distance work focused on the energetic layer where many unconscious patterns and relational distortions are held.</p>

                <button className="p-3 text-center flex rounded-md hover:bg-mauve-300/10 text-xs bg-mauve-500/20 cursor-pointer" onClick={() => setOpen('two')}>- read more -</button>

                {open === 'two' && (
            <div>
            <button className="cursor-pointer p-5" onClick={() => setOpen(null)}>
            x
            </button>
<p>
may include:
• clearing energetic imprints
• dissolving relational entanglements
• releasing inherited or unconscious patterns
• restoring vitality, balance, and flow in the field
Where intuitively appropriate, sessions may also include health-based intuitive guidance, such as insight into physical imbalances or supplement support.
Energetic work can be accessed as a standalone session or alongside mentoring. It is particularly helpful when emotional or relational experiences feel overwhelming, repetitive, or difficult to shift through insight alone.
Session length: 60 minutes
Cost: £77
                    </p>
                </div>
                )}
            </div>


            <div className="flex flex-col gap-5 p-10 text-center align-middle items-center justify-center rounded-xl border-2 border-mauve-700/50">
                <h5>Emotion Code Sessions</h5>
                <p>Emotion Code work focuses on identifying and releasing trapped emotions using the Emotion Code method, guided through dowsing and intuitive insight.</p>

                <button className="p-3 text-center flex rounded-md hover:bg-mauve-300/10 text-xs bg-mauve-500/20 cursor-pointer">- read more -</button>
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