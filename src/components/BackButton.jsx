'use client'

import { useRouter, usePathname } from "next/navigation";

const BackButton = () => {
    const router = useRouter();
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const isPackagePage = pathname.startsWith('/packages/');

    const handleBack = () => {
        if (isPackagePage) {
            router.push('/packages/')
        }
        else {
            router.back()
        }
    }


    return (
        <>
            {!isHomePage && (
                <button onClick={handleBack}
                className="w-20 items-center cursor-pointer fixed top-36 text-2xl">←</button>
            )}
            </>
    )
}

export default BackButton