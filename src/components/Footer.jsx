import Image from "next/image"
import Link from "next/link"

export default function Footer () {
    return (
        <div className="flex flex-col flex-wrap w-screen justify-evenly bg-black/70 px-10 py-15">

            <div className="overflow-hidden text-wrap items-left text-mauve-400 w-full">
            {/* <p>Get Social:</p> */}

<div className="flex items-center gap-6 py-2">

    <Link href="https://www.facebook.com/connie.vaughan.50">

    <Image 
    src="/fb.png" 
    alt="Facebook" 
    width={13} 
    height={13} 
    className="object-contain" />
    
    </Link>

    <Link href="https://www.instagram.com/connieholistic/">
    <Image src="/ig.png" alt="Instagram" width={24} height={24} className="object-contain" />
    </Link>

    <Link href="https://www.threads.com/@connieholistic?xmt=AQF0_E6ftBxwPN3L6ThswArlkzMbYvOY2SYL3LTyL1Waj7Y">
    <Image src="/threads.png" alt="Threads" width={21} height={21} className="object-contain" />
    </Link>
</div>


            <p>Twin Flame Transformations 2026</p>

            <p className="text-mauve-600">created by Vatick 2026</p>
            </div>

        </div>
    )
}