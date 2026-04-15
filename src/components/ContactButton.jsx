'use client'

import Image from "next/image"
import { useState } from "react"

export default function ContactButton() {

    const [isOpen, setIsOpen] = useState(false)
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ email, message })
        })
        
        setIsOpen(false)
    }

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
            <div className="fixed flex inset-0 bg-black/50 justify-center items-end p-20">

                <div className="bg-mauve-300 flex flex-col gap-6 rounded-2xl p-6 w-full max-w-md relative">

                <p className="text-right" onClick={() => setIsOpen(false)}>
                ×
                </p>

                <form className="flex gap-3 flex-col"
                onSubmit={handleSubmit}>

                <label htmlFor="email" className="text-sm">Email</label>

                    <input 
                    id="email" 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="enter your email"
                    />

                    <label htmlFor="message" className="flex flex-col text-sm font-medium">
                        Message
                    </label>
                    
                    <textarea 
                    id="message"
                    name="message"
                    placeholder="How can I help?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border h-50 rounded-md p-2 text-sm resize-none"
                    />

                    <button type="submit" className="bg-black text-white rounded-md p-2 text-sm">
                        Send
                    </button>
                </form>
            </div>
        </div>
        )}
    </div>
    )
}