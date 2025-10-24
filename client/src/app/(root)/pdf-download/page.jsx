"use client"

import { Download, Eye } from "lucide-react"
import { useState } from "react"

const categories = [
    {
        id: "1mukhi",
        name: "1 Mukhi Rudraksha",
        brochures: {
            hindi: "/pdf/1 Mukhi-hindi.pdf",
            english: "/pdf/1 Mukhi-english.pdf",
        },
    },
    {
        id: "2mukhi",
        name: "2 Mukhi Rudraksha",
        brochures: {
            hindi: "/pdf/2 Mukhi-hindi.pdf",
            english: "/pdf/2 Mukhi-english.pdf",
        },
    },
    {
        id: "3mukhi",
        name: "3 Mukhi Rudraksha",
        brochures: {
            hindi: "/pdf/3 Mukhi-hindi.pdf",
            english: "/pdf/3 Mukhi-english.pdf",
        },
    },
    {
        id: "4mukhi",
        name: "4 Mukhi Rudraksha",
        brochures: {
            hindi: "/pdf/4 Mukhi-hindi.pdf",
            english: "/pdf/4 Mukhi-english.pdf",
        },
    },
    {
        id: "5mukhi",
        name: "5 Mukhi Rudraksha",
        brochures: {
            hindi: "/pdf/5 Mukhi-hindi.pdf",
            english: "/pdf/5 Mukhi-english.pdf",
        },
    },
    {
        id: "6mukhi",
        name: "6 Mukhi Rudraksha",
        brochures: {
            hindi: "/pdf/6 Mukhi-hindi.pdf",
            english: "/pdf/6 Mukhi-english.pdf",
        },
    },
    {
        id: "7mukhi",
        name: "7 Mukhi Rudraksha",
        brochures: {
            hindi: "/pdf/7 Mukhi-hindi.pdf",
            english: "/pdf/7 Mukhi-english.pdf",
        },
    },
    {
        id: "8mukhi",
        name: "8 Mukhi Rudraksha",
        brochures: {
            hindi: "/pdf/8 Mukhi-hindi.pdf",
            english: "/pdf/8 Mukhi-english.pdf",
        },
    },
    {
        id: "9mukhi",
        name: "9 Mukhi Rudraksha",
        brochures: {
            hindi: "/pdf/9 Mukhi-hindi.pdf",
            english: "/pdf/9 Mukhi-english.pdf",
        },
    },
    {
        id: "10mukhi",
        name: "10 Mukhi Rudraksha",
        brochures: {
            hindi: "/pdf/10 Mukhi-hindi.pdf",
            english: "/pdf/10 Mukhi-english.pdf",
        },
    },
    {
        id: "11mukhi",
        name: "11 Mukhi Rudraksha",
        brochures: {
            hindi: "/pdf/11 Mukhi-hindi.pdf",
            english: "/pdf/11 Mukhi-english.pdf",
        },
    },
    {
        id: "12mukhi",
        name: "12 Mukhi Rudraksha",
        brochures: {
            hindi: "/pdf/12 Mukhi-hindi.pdf",
            english: "/pdf/12 Mukhi-english.pdf",
        },
    },
    {
        id: "13mukhi",
        name: "13 Mukhi Rudraksha",
        brochures: {
            hindi: "/pdf/13 Mukhi-hindi.pdf",
            english: "/pdf/13 Mukhi-english.pdf",
        },
    },
    {
        id: "rudraksha",
        name: "Rudraksha Products",
        brochures: {
            hindi: "/pdf/rudraksha-hindi.pdf",
            english: "/pdf/rudraksha-english.pdf",
        },
    },
]

function page() {
    const [selected, setSelected] = useState(null)

    const handleChange = (e) => {
        setSelected(e.target.value)
    }

    const selectedCategory = categories.find((cat) => cat.id === selected)

    return (
        <div className="flex min-h-[50vh] items-center justify-center px-4">
            <div className="w-full max-w-md rounded-2xl border border-yellow-400 bg-white p-6 shadow-lg">
                <h2 className="mb-4 text-center text-xl font-bold text-gray-800">Download Product Brochure</h2>

                <select className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-700 focus:border-yellow-400 focus:ring focus:ring-blue-200" onChange={handleChange} defaultValue="">
                    <option value="" disabled>
                        -- Select a category --
                    </option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>

                {selectedCategory && (
                    <div className="mt-6 flex items-center justify-center sm:gap-4 gap-2 border-b pb-6">
                        <p><Eye className="inline w-5 h-5" /> Preview</p>
                        <a href={selectedCategory.brochures.hindi} target="_blank" className="rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
                            Hindi
                        </a>
                        <a href={selectedCategory.brochures.english} target="_blank" className="rounded-xl bg-green-600 px-5 py-2 text-white transition hover:bg-green-700">
                            English
                        </a>
                    </div>
                )}
                {selectedCategory && (
                    <div className="mt-6 flex items-center justify-center sm:gap-4 gap-2">
                        <p><Download className="inline w-5 h-5" /> Download</p>
                        <a href={selectedCategory.brochures.hindi} download className="rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
                            Hindi
                        </a>
                        <a href={selectedCategory.brochures.english} download className="rounded-xl bg-green-600 px-5 py-2 text-white transition hover:bg-green-700">
                            English
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default page
