import Image from "next/image"

export default function ContactButton() {
    return (
        <div className="w-20 h-30 fixed right-10">

            <Image 
            src="contactbutton.svg" 
            alt="" 
            width={100} 
            height={100} 
            className="items-center justify-center"/>
        </div>
    )
}