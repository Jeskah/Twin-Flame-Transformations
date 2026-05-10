'use client'

import { useState } from "react"
import Link from "next/link"

export default function WorkWithMeCard({ id, name, description }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col gap-4 p-8 text-center items-center justify-between rounded-xl border-2 border-mauve-700/50 bg-white/5 backdrop-blur-sm w-full">
        <h5>{name}</h5>
        <p className="text-sm line-clamp-3">{description}</p>
        <button
          className="p-3 text-center flex rounded-md hover:bg-mauve-300/10 text-xs bg-mauve-500/20 cursor-pointer z-100"
          onClick={() => setOpen(true)}
        >
          - read more -
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-end z-50 px-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-mauve-300/95 flex flex-col rounded-2xl p-10 w-90 max-w-md pb-15 fixed top-50 gap-10 justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h5 className="text-right cursor-pointer hover:text-pink-700" onClick={() => setOpen(false)}>
          ×
            </h5>
            <h5>{name}</h5>
            <p className="text-sm pb-5 whitespace-pre-line">{description}</p>
            <Link href={`/packages/${id}`} onClick={() => setOpen(false)}>
              <button className="w-full py-3 rounded-md bg-mauve-500/30 hover:bg-mauve-500/50 text-sm font-semibold transition line-clamp-10">
                Book this →
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
