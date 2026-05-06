import Image from "next/image"
import Link from "next/link"

export default function Footer () {
    return (
        <div className="flex flex-col flex-wrap z-50 justify-evenly bg-black/40 fixed bottom-20 rounded-r-md">

            <div className="overflow-hidden text-wrap items-center text-mauve-400">
            {/* <p>Get Social:</p> */}

<div className="flex items-center gap-6 flex-col p-4 h-40 justify-center">

    <Link href="https://www.facebook.com/connie.vaughan.50">

    <Image 
    src="/fb.png" 
    alt="Facebook" 
    width={10} 
    height={10} 
    className="object-contain" />
    
    </Link>

    <Link href="https://www.instagram.com/connieholistic/">
    <Image 
    src="/ig.png" 
    alt="Instagram" 
    width={16} 
    height={16} 
    className="object-contain" />
    </Link>

    <Link href="https://www.threads.com/@connieholistic?xmt=AQF0_E6ftBxwPN3L6ThswArlkzMbYvOY2SYL3LTyL1Waj7Y">
    <Image src="/threads.png" alt="Threads" width={16} height={16} className="object-contain" />
    </Link>
</div>

{/* 
            <p>Twin Flame Transformations 2026</p>

            <p className="text-mauve-600">created by Vatick 2026</p> */}
            </div>

        </div>
    )
}