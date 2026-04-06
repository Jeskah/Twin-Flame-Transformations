'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function EditPkgDescription({ initialDescription, packageId }) {
const [editing, setEditing] = useState(false)
const [description, setDescription] = useState(initialDescription)

const handleSave = async () => {
    const { error } = await supabase
    .from('packages')
    .update({ description })
    .eq('id', packageId)

    if (error) {
    console.error(error)
    alert('Error saving')
    } else {
    alert('Saved!')
    setEditing(false)
    }
}

if (!editing) {
    return (
    <div className='flex flex-col items-center justify-center w-full'>
        <p className="text-white whitespace-pre-line text-xs">{description}</p>
        <button
        className="p-1 mt-10 bg-white text-black text-xs"
        onClick={() => setEditing(true)}
        >
        Edit Description
        </button>
    </div>
    )
}

return (
    <div>
    <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={6}
        className="w-full p-2"
    />
    <button
        className="mt-2 px-3 py-1 bg-white text-black rounded"
        onClick={handleSave}
    >
        Save
    </button>
    </div>
)
}