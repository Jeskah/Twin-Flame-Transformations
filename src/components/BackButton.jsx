'use client'

import { useRouter } from "next/navigation";

const BackButton = () => {
    const router = useRouter();

    return (
        <button 
        onClick={() => router.back()}
        className="w-50 py-5 items-center justify-center border-3 text-white z-50 cursor-pointer">
            ← Back
        </button>

    )
}

export default BackButton