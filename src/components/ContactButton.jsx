import Image from "next/image"

export default function ContactButton() {
    return (
        <div className="w-20 h-30 top-228 right-3 fixed z-1">

            <Image src="contactbutton.svg" alt="" width={100} height={100} className="items-center justify-center"/>
        </div>
    )
}