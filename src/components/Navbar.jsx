    import Link from "next/link"

    export default function Navbar() {
    return (
<div className="w-full px-5 bg-black/50 uppercase font-light text-gray-100 z-10 relative">
    <nav className="flex justify-evenly text-[8px] p-6 gap-4 text-wrap overflow-hidden tracking-widest">
        <Link href="/">HOME</Link>
        <Link href="/about-me">ABOUT</Link>
        <Link href="/work-with-me">WORK WITH ME</Link>
        <Link href="/packages">PACKAGES</Link>
        <Link href="/bookings">BOOKINGS</Link>
    </nav>
</div>
    )
    }