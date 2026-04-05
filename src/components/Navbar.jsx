    import Link from "next/link"

    export default function Navbar() {
    return (
    <div className="flex flex-col bg-black/50 uppercase font-light text-gray-100 items-center z-1 min-w-screen fixed">

    <nav className="flex abolute justify-center flex-col items-center text-xs">

        <div className="flex gap-12 p-10">
        <Link href="/">HOME</Link>
        <Link href="/about-me">About</Link>
        <Link href="/work-with-me">Work With Me</Link>
        <Link href="/packages">Packages</Link>
        <Link href="/bookings">Bookings</Link>
        </div>

    </nav>
</div>
    )
    }