'use client'

import Image from "next/image"
import { useState } from "react"

export default function ContactButton() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            {!isOpen && (
                <div className="fixed right-10 bottom-20">
                <Image 
                    src="/contactbutton.png" 
                    alt="" 
                    width={120} 
                    height={120}
                    className="items-center justify-center"
                    onClick={() => setIsOpen(true)}
                />
            </div>
        )}


        {isOpen && (
            <div className="fixed inset-0 bg-black/50 p-10">

                <div className="bg-mauve-300 flex flex-col gap-10 rounded-2xl p-5 top-110 h-100 relative">

                <p className="text-right" onClick={() => setIsOpen(false)}>
                ×
                </p>


            <form className="flex gap-3 flex-col">

                <label htmlFor="email" className="text-sm">Email</label>

                <input 
                id="email" 
                type="email" 
                name="email"
                placeholder="enter your email"/>

                <label htmlFor="message" className="flex flex-col text-sm font-medium">
                    Message
                </label>
                
                <textarea 
                id="message"
                name="message"
                placeholder="How can I help?"
                className="border h-50 rounded-md p-2 text-sm resize-none"
                />

            </form>
            </div>
            </div>
        )}
        </div>

    )
}