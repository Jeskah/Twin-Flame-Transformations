'use client'

import { useRouter } from 'next/navigation';

export default function BackToPackages() {
    const router = useRouter();
    
    return (
        <button
            onClick={() => router.push('/packages')}
            className="text-white/50 text-sm hover:text-white cursor-pointer relative inset-0 z-50 py-10"
        >
            ← Back
        </button>
    )
}