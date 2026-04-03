    import Link from "next/link"

    export default function Navbar() {
    return (
    <div className="flex flex-col bg-mauve-600 uppercase font-light text-gray-100 p-5 items-center">

    <nav className="flex flex-col items-center gap-4 text-xs p-1">

        <div className="flex gap-10">
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