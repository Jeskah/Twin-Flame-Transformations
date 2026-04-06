import Image from "next/image"

export default function ContactButton() {
    return (
        <div className="fixed w-20 h-30 z-1">

            <Image 
            src="contactbutton.svg" 
            alt="" 
            width={100} 
            height={100} 
            className="items-center justify-center"/>
        </div>
    )
}