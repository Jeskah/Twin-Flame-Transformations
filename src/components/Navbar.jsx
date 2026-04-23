"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
const [navOpen, setNavOpen] = useState(false);

return (
    <div className="w-full px-5 uppercase text-black-100 z-10 top-0 sticky">
    <nav className="flex justify-between items-center text-2xl p-6 gap-4 tracking-wide">
        
        <Link href="/" className="z-30 relative">꩜</Link>

        <div className={`
        fixed inset-0 flex-col items-center justify-center gap-6 font-bold text-sm z-20 bg-mauve-50/95
        md:static md:inset-auto md:flex md:flex-row md:gap-4 md:bg-black/0
        ${navOpen ? "flex" : "hidden"}
        `}>
        <Link href="/about-me" onClick={() => setNavOpen(false)}>ABOUT</Link>
        <Link href="/work-with-me" onClick={() => setNavOpen(false)}>WORK WITH ME</Link>
        <Link href="/packages" onClick={() => setNavOpen(false)}>PACKAGES</Link>
        </div>

        <div
        className="md:hidden text-2xl cursor-pointer z-30 relative"
        onClick={() => setNavOpen(!navOpen)}
        >
        {navOpen ? "✕" : "☰"}
        </div>

    </nav>
    </div>
);
}