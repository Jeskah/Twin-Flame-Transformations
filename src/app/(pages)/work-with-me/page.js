'use client'

import Image from "next/image"
import { useState } from "react"
import connie from "../../../../public/assets/connie.webp"
import bg from "../../../../public/bg4.jpg"
import Link from "next/link"

export default function WorkWithMe () {

const [open, setOpen] = useState(null)

const modalContent = {
'one-to-one': {
    title: 'One-to-One',
    content: `Ongoing, relational support for those navigating deep inner work.

- clearing energetic imprints
- dissolving relational entanglements
- releasing inherited or unconscious patterns
- restoring vitality, balance, and flow in the field

Session length: 60 minutes
Cost: £77`
},

'energetic': {
    title: 'Intuitive Healing / Energetic Clearing',
    content: `may include:
- clearing energetic imprints
- dissolving relational entanglements

Session length: 60 minutes
Cost: £77`
},

'emotion': {
    title: 'Emotion Code Sessions',
    content: `Your emotion code content here...`
}
}

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

    <div className="flex flex-col px-10  gap-20 w-full justify-evenly">

    {/* <h5 className="text-sm font-bold -m-15 uppercase">Options</h5> */}

    <div className="flex flex-col gap-10 p-10 text-center align-middle items-center justify-center rounded-xl border-2 border-mauve-700/50 h-100">
        <h5>One-to-One</h5>
        <p>Ongoing, relational support for those navigating deep inner work and periods of significant inner change</p>
        <button className="p-3 text-center flex rounded-md hover:bg-mauve-300/10 text-xs bg-mauve-500/20 cursor-pointer" onClick={() => setOpen('one-to-one')}>- read more -</button>
    </div>

    <div className="flex flex-col gap-10 p-10 text-center align-middle items-center justify-center rounded-xl border-2 border-mauve-700/50 h-100">
        <h5>Intuitive Healing / Energetic Clearing</h5>
        <p>Distance work focused on the energetic layer where many unconscious patterns and relational distortions are held.</p>
        <button className="p-3 text-center flex rounded-md hover:bg-mauve-300/10 text-xs bg-mauve-500/20 cursor-pointer" onClick={() => setOpen('energetic')}>- read more -</button>
    </div>

        <div className="flex flex-col gap-10 p-10 text-center align-middle items-center justify-center rounded-xl border-2 border-mauve-700/50 h-100">
        <h5>Emotion Code Sessions</h5>
        <p>Emotion Code work focuses on identifying and releasing trapped emotions using the Emotion Code method, guided through dowsing and intuitive insight.
This approach is trauma-aware and gently paced. It can support emotional regulation, lightness, and release of long-held emotional patterns..</p>
        <button className="p-3 text-center flex rounded-md hover:bg-mauve-300/10 text-xs bg-mauve-500/20 cursor-pointer" onClick={() => setOpen('energetic')}>- read more -</button>
    </div>


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
            <Image 
            src={connie} 
            alt="connie" 
            fill 
            className="object-cover rounded-lg" />
            </div>
            <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            <Image src="https://dinoanimals.com/wp-content/uploads/2023/11/Kermode-bear-10.jpg" alt="bear kermode" fill className="object-cover rounded-lg" />
            </div>
        </div>
        </div>
    </div>
    </div>

    {/* Modal */}
    {open && (
    <div className="fixed flex inset-0 bg-black/50 justify-center items-end z-50 px-10" onClick={() => setOpen(null)}>
        <div className="bg-mauve-300/95 flex flex-col rounded-2xl p-6 w-full max-w-md h-130 bottom-50 relative" onClick={(e) => e.stopPropagation()}>
        <h5 className="text-right px-2 hover:text-pink-700 cursor-pointer" onClick={() => setOpen(null)}>×</h5>
        <h5 className="mb-10">{modalContent[open]?.title}</h5>
        <p className="text-sm whitespace-pre-line">{modalContent[open]?.content}</p>


<Link href="/packages">
            <button className="pt-10 relative top-20 border-t">SEE PACKAGES</button>
</Link>
        </div>
    </div>
    )}
</div>
)
}