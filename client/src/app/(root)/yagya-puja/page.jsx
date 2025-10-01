"use client"
import { useState } from "react"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const allPujas = [
    {
        id: 1,
        title: "Bagalamukhi",
        desc: "Grants victory, protection, and removal of negativity ",
        category: "japa",
        img: "images/Shani Puja.jpg",
    },
    {
        id: 2,
        title: "Mangal Puja",
        desc: "Removes Mangal dosh and brings harmony 💫",
        category: "path",
        img: "images/Mangal Puja.jpg",
    },
    {
        id: 3,
        title: "Rahu Puja",
        desc: "Protects from Rahu dosha and obstacles 🌑",
        category: "havan",
        img: "images/Rahu Puja.jpg",
    },
    {
        id: 4,
        title: "Budh Puja",
        desc: "Improves communication, intelligence, and wisdom 🌱",
        category: "japa",
        img: "images/Budh Puja (Mercury Puja).jpg",
    },
    {
        id: 5,
        title: "Vidya Lakshmi Puja",
        desc: "Blessings of Ashta Lakshmi for wealth & knowledge 🌸",
        category: "dailypuja",
        img: "images/Vidya Lakshmi Puja (Ashta-Lakshmi).jpg",
    },
    {
        id: 6,
        title: "Bagalamukhi",
        desc: "Grants victory, protection, and removal of negativity ✨",
        category: "japa",
        img: "images/Shani Puja.jpg",
    },
    {
        id: 7,
        title: "Mangal Puja",
        desc: "Removes Mangal dosh and brings harmony 💫",
        category: "path",
        img: "images/Mangal Puja.jpg",
    },
    {
        id: 8,
        title: "Rahu Puja",
        desc: "Protects from Rahu dosha and obstacles 🌑",
        category: "havan",
        img: "images/Rahu Puja.jpg",
    },
    {
        id: 9,
        title: "Budh Puja",
        desc: "Improves communication, intelligence, and wisdom 🌱",
        category: "japa",
        img: "images/Budh Puja (Mercury Puja).jpg",
    },
    {
        id: 10,
        title: "Vidya Lakshmi Puja",
        desc: "Blessings of Ashta Lakshmi for wealth & knowledge 🌸",
        category: "dailypuja",
        img: "images/Vidya Lakshmi Puja (Ashta-Lakshmi).jpg",
    },
    {
        id: 11,
        title: "Bagalamukhi",
        desc: "Grants victory, protection, and removal of negativity ✨",
        category: "japa",
        img: "images/Shani Puja.jpg",
    },
    {
        id: 12,
        title: "Mangal Puja",
        desc: "Removes Mangal dosh and brings harmony 💫",
        category: "path",
        img: "images/Mangal Puja.jpg",
    },
    {
        id: 13,
        title: "Rahu Puja",
        desc: "Protects from Rahu dosha and obstacles 🌑",
        category: "havan",
        img: "images/Rahu Puja.jpg",
    },
    {
        id: 14,
        title: "Budh Puja",
        desc: "Improves communication, intelligence, and wisdom 🌱",
        category: "japa",
        img: "images/Budh Puja (Mercury Puja).jpg",
    },
    {
        id: 15,
        title: "Vidya Lakshmi Puja",
        desc: "Blessings of Ashta Lakshmi for wealth & knowledge 🌸",
        category: "dailypuja",
        img: "images/Vidya Lakshmi Puja (Ashta-Lakshmi).jpg",
    },
    {
        id: 16,
        title: "Bagalamukhi",
        desc: "Grants victory, protection, and removal of negativity ✨",
        category: "japa",
        img: "images/Shani Puja.jpg",
    },
    {
        id: 17,
        title: "Mangal Puja",
        desc: "Removes Mangal dosh and brings harmony 💫",
        category: "path",
        img: "images/Mangal Puja.jpg",
    },
    {
        id: 18,
        title: "Rahu Puja",
        desc: "Protects from Rahu dosha and obstacles 🌑",
        category: "havan",
        img: "images/Rahu Puja.jpg",
    },
    {
        id: 19,
        title: "Budh Puja",
        desc: "Improves communication, intelligence, and wisdom 🌱",
        category: "japa",
        img: "images/Budh Puja (Mercury Puja).jpg",
    },
    {
        id: 20,
        title: "Vidya Lakshmi Puja",
        desc: "Blessings of Ashta Lakshmi for wealth & knowledge 🌸",
        category: "dailypuja",
        img: "images/Vidya Lakshmi Puja (Ashta-Lakshmi).jpg",
    },
    {
        id: 21,
        title: "Bagalamukhi",
        desc: "Grants victory, protection, and removal of negativity ✨",
        category: "japa",
        img: "images/Shani Puja.jpg",
    },
    {
        id: 22,
        title: "Mangal Puja",
        desc: "Removes Mangal dosh and brings harmony 💫",
        category: "path",
        img: "images/Mangal Puja.jpg",
    },
    {
        id: 23,
        title: "Rahu Puja",
        desc: "Protects from Rahu dosha and obstacles 🌑",
        category: "havan",
        img: "images/Rahu Puja.jpg",
    },
    {
        id: 24,
        title: "Budh Puja",
        desc: "Improves communication, intelligence, and wisdom 🌱",
        category: "Nitya Ati Rudrabhishek",
        img: "images/Budh Puja (Mercury Puja).jpg",
    },
    {
        id: 25,
        title: "Vidya Lakshmi Puja",
        desc: "Blessings of Ashta Lakshmi for wealth & knowledge 🌸",
        category: "dailypuja",
        img: "images/Vidya Lakshmi Puja (Ashta-Lakshmi).jpg",
    },
    {
        id: 26,
        title: "Bagalamukhi",
        desc: "Grants victory, protection, and removal of negativity ✨",
        category: "Nitya Ati Rudrabhishek",
        img: "images/Shani Puja.jpg",
    },
    {
        id: 27,
        title: "Mangal Puja",
        desc: "Removes Mangal dosh and brings harmony 💫",
        category: "path",
        img: "images/Mangal Puja.jpg",
    },
    {
        id: 28,
        title: "Rahu Puja",
        desc: "Protects from Rahu dosha and obstacles 🌑",
        category: "havan",
        img: "images/Rahu Puja.jpg",
    },
    {
        id: 29,
        title: "Budh Puja",
        desc: "Improves communication, intelligence, and wisdom 🌱",
        category: "japa",
        img: "images/Budh Puja (Mercury Puja).jpg",
    },
    {
        id: 30,
        title: "Vidya Lakshmi Puja",
        desc: "Blessings of Ashta Lakshmi for wealth & knowledge 🌸",
        category: "dailypuja",
        img: "images/Vidya Lakshmi Puja (Ashta-Lakshmi).jpg",
    },
]

const categories = [
    { key: "all", label: "All Pujas" },
    { key: "yagya", label: "Yagya Puja" },
    { key: "havan", label: "Homa | Havan" },
    { key: "japa", label: "Japa | Chanting" },
    { key: "path", label: "Path | Recitation" },
    { key: "kashiKhand", label: "Puja in Kashi (Kashi Khand)" },
    { key: "dailypuja", label: "Daily Puja" },
    { key: "rudrabhishek", label: "Nitya Ati Rudrabhishek" },
    { key: "upcoming", label: "Upcoming Festival Puja" },
    { key: "puja", label: "Puja" },
]

const testimonials = [
    {
        text: "The priest was punctual and the ceremony was so peaceful. Highly recommended!",
        name: "Ananya",
        avatar: "/images/ananya.jpg",
    },
    {
        text: "Very well organised. Everything arrived on time and the pandit was excellent.",
        name: "Rohan",
        avatar: "/images/rohan.jpg",
    },
    {
        text: "My family loved the live stream feature. Felt sacred and personal.",
        name: "Priya",
        avatar: "/images/priya.jpg",
    },
    {
        text: "The rituals were performed very sincerely. Great experience!",
        name: "Harsh",
        avatar: "/images/harsh.jpg",
    },
    {
        text: "Excellent arrangements and smooth booking process.",
        name: "Arpit",
        avatar: "/images/arpit.jpg",
    },
    {
        text: "Truly divine and peaceful. My family was very happy.",
        name: "Diksha",
        avatar: "/images/diksha.jpg",
    },
]

function page() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [isDetailsOpen, setIsDetailsOpen] = useState(false)
    const [step, setStep] = useState(1)

    useEffect(() => {
        AOS.init({ once: true })
    }, [])

    const nextStep = () => setStep((s) => Math.min(s + 1, 3))
    const prevStep = () => setStep((s) => Math.max(s - 1, 1))

    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("all")
    const [currentPage, setCurrentPage] = useState(1)

    const cardsPerPage = 3

    // Filtering logic
    const filtered = allPujas.filter((puja) => {
        const matchFilter = filter === "all" || puja.category === filter
        const matchSearch = puja.title.toLowerCase().includes(search.toLowerCase())
        return matchFilter && matchSearch
    })

    // Pagination logic
    const start = (currentPage - 1) * cardsPerPage
    const paginated = filtered.slice(start, start + cardsPerPage)

    const totalPages = Math.ceil(filtered.length / cardsPerPage)

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length)
        }, 6000)
        return () => clearInterval(interval)
    }, [])

    const { text, name, avatar } = testimonials[index]

    return (
        <>
            <section className="mx-auto max-w-7xl px-6 pt-16">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* LEFT CONTENT */}
                    <div className="space-y-8" data-aos="fade-right" data-aos-duration="1200">
                        {/* Tagline */}
                        <div
                            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-orange-200/70 bg-gradient-to-r from-orange-100/90 to-yellow-100/90 px-6 py-2.5 text-base font-bold tracking-wide text-orange-800 shadow-[0_4px_20px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)]"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <span className="absolute inset-0 translate-x-[-150%] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[150%]"></span>
                            <span className="absolute inset-0 rounded-full ring-2 ring-orange-300/40"></span>
                            <span className="relative z-10">Popular • 24/7 Bookings</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl leading-tight font-extrabold tracking-tight md:text-6xl" data-aos="fade-up" data-aos-delay="400">
                            Transform Your Home <br />
                            <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 bg-clip-text text-transparent">with Sacred Puja</span>
                        </h1>

                        {/* Description */}
                        <p className="max-w-lg text-lg leading-relaxed text-gray-600" data-aos="fade-up" data-aos-delay="600">
                            Professional priests, authentic rituals and live sessions. Choose a puja package &amp; we’ll take care of everything — decorations, prasad, and digital certificates.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="inline-flex transform items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-7 py-3 text-white shadow-lg transition hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
                            >
                                Book Puja →
                            </button>
                            <button onClick={() => setIsDetailsOpen(true)} className="rounded-full border border-orange-300 px-6 py-2 font-medium text-orange-600 transition hover:bg-orange-50">
                                ▶ Watch Demo
                            </button>
                        </div>

                        {/* Features */}
                        <div className="mt-8 grid grid-cols-2 gap-5">
                            <div className="flex items-center gap-4 rounded-2xl bg-white/80 p-5 shadow-md backdrop-blur-md transition hover:shadow-lg" data-aos="flip-left" data-aos-delay="1000">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-amber-200 text-xl font-bold text-orange-600">ॐ</div>
                                <div>
                                    <div className="font-semibold">Authentic Vedic</div>
                                    <div className="text-sm text-gray-500">Priests with proper lineage</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 rounded-2xl bg-white/80 p-5 shadow-md backdrop-blur-md transition hover:shadow-lg">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-100 to-orange-200 text-xl font-bold text-yellow-600">★</div>
                                <div>
                                    <div className="font-semibold">Instant Booking</div>
                                    <div className="text-sm text-gray-500">Slots available 24/7</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative" data-aos="fade-left" data-aos-duration="1200">
                        <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-orange-100">
                            <img src="/images/Pujasection.png" alt="Puja Poster" className="h-[420px] w-full object-cover object-top brightness-95 transition duration-500 hover:scale-105" />
                        </div>

                        {/* Floating Card */}
                        <div
                            className="left-6 mt-4 w-80 rounded-2xl border border-orange-100 bg-white/90 p-5 shadow-xl backdrop-blur-xl md:absolute md:-bottom-28 md:mt-0"
                            data-aos="zoom-in-up"
                            data-aos-delay="600"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-xs text-gray-500">Next Available</div>
                                    <div className="font-semibold">Tomorrow • 10:00 AM</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-bold text-orange-600">₹499</div>
                                    <div className="text-xs text-gray-500">Starting from</div>
                                </div>
                            </div>
                            <div className="mt-4 flex gap-3">
                                <button
                                    onClick={() => setIsPopupOpen(true)}
                                    className="flex-1 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-400 py-2.5 text-white shadow transition hover:scale-105"
                                >
                                    Book Now
                                </button>
                                <button onClick={() => setIsDetailsOpen(true)} className="rounded-lg border px-4 py-2 hover:bg-orange-50">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOOKING POPUP */}
                {isPopupOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
                        <div className="relative w-full max-w-xl rounded-3xl border border-orange-200/50 bg-white/95 p-8 shadow-2xl ring-1 ring-orange-100">
                            <button onClick={() => setIsPopupOpen(false)} className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-red-500">
                                ✖
                            </button>

                            <div className="mb-8 text-center">
                                <h2 className="animate-pulse bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-3xl font-extrabold text-transparent">Puja Booking</h2>
                                <p className="text-sm text-gray-500">Book your sacred ritual with ease</p>
                            </div>

                            {/* Progress */}
                            <div className="mb-2 flex items-center justify-between">
                                <div className={`${step === 1 ? "text-orange-600" : "text-gray-400"} w-1/3 text-center font-semibold`}>Details</div>
                                <div className={`${step === 2 ? "text-orange-600" : "text-gray-400"} w-1/3 text-center`}>Schedule</div>
                                <div className={`${step === 3 ? "text-orange-600" : "text-gray-400"} w-1/3 text-center`}>Confirm</div>
                            </div>
                            <div className="mb-8 h-2 w-full rounded-full bg-gray-200">
                                <div className="h-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400" style={{ width: `${step * 33.3}%` }}></div>
                            </div>

                            {/* FORM */}
                            {step === 1 && (
                                <div className="space-y-6">
                                    <input type="text" placeholder="Full Name" className="w-full rounded-xl border p-3 shadow-sm" />
                                    <div className="grid grid-cols-2 gap-6">
                                        <input type="tel" placeholder="Phone" className="w-full rounded-xl border p-3" />
                                        <input type="email" placeholder="Email" className="w-full rounded-xl border p-3" />
                                    </div>
                                    <div className="flex justify-end">
                                        <button onClick={nextStep} className="rounded-full bg-orange-500 px-6 py-3 text-white shadow transition hover:scale-105">
                                            Next →
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-6">
                                    <select className="w-full rounded-xl border p-3">
                                        <option>-- Choose Puja --</option>
                                        <option>Ganesh Puja</option>
                                        <option>Durga Puja</option>
                                        <option>Lakshmi Puja</option>
                                        <option>Satyanarayan Puja</option>
                                    </select>
                                    <div className="grid grid-cols-2 gap-6">
                                        <input type="date" className="w-full rounded-xl border p-3" />
                                        <input type="time" className="w-full rounded-xl border p-3" />
                                    </div>
                                    <input type="text" placeholder="Temple or Address" className="w-full rounded-xl border p-3" />
                                    <div className="flex justify-between">
                                        <button onClick={prevStep} className="rounded-full bg-gray-300 px-6 py-3 shadow">
                                            ← Back
                                        </button>
                                        <button onClick={nextStep} className="rounded-full bg-orange-500 px-6 py-3 text-white shadow transition hover:scale-105">
                                            Next →
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-6">
                                    <textarea rows="4" className="w-full rounded-xl border p-3" placeholder="Any special requests..."></textarea>
                                    <div className="flex justify-between">
                                        <button onClick={prevStep} className="rounded-full bg-gray-300 px-6 py-3 shadow">
                                            ← Back
                                        </button>
                                        <button className="rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-8 py-3 text-white shadow transition hover:scale-105">Confirm Booking</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* DETAILS MODAL */}
                {isDetailsOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
                        <div className="relative w-full max-w-lg rounded-3xl border border-orange-200/50 bg-white/95 p-8 shadow-2xl">
                            <button onClick={() => setIsDetailsOpen(false)} className="absolute top-3 right-3 text-xl text-gray-500 hover:text-orange-500">
                                ✖
                            </button>
                            <div className="mb-6 flex items-center gap-3">
                                <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-400 p-3 text-white shadow-md">📖</div>
                                <h3 className="text-2xl font-extrabold text-gray-800">Puja Details</h3>
                            </div>
                            <div className="divide-y divide-orange-100">
                                <div className="py-3">
                                    <h4 className="font-semibold text-orange-600">✨ Rituals</h4>
                                    <p className="mt-1 text-gray-700">
                                        Performed authentically by <span className="font-semibold">Vedic priests</span>.
                                    </p>
                                </div>
                                <div className="py-3">
                                    <h4 className="font-semibold text-orange-600">🙏 Benefits</h4>
                                    <p className="mt-1 text-gray-700">
                                        Includes <span className="font-semibold">Prasad</span>, blessings & digital certificate.
                                    </p>
                                </div>
                                <div className="py-3">
                                    <h4 className="font-semibold text-orange-600">📺 Access</h4>
                                    <p className="mt-1 text-gray-700">
                                        Join <span className="font-semibold">live</span> or watch later anytime.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 rounded-2xl border-l-4 border-orange-400 bg-gradient-to-r from-orange-50 to-yellow-50 p-5 shadow-sm">
                                <h4 className="mb-2 font-bold text-orange-600">Key Highlights:</h4>
                                <ul className="list-inside list-disc space-y-1 text-gray-700">
                                    <li>✔️ Experienced Pandits</li>
                                    <li>✔️ All Samagri & Items included</li>
                                    <li>✔️ Personalized Sankalp for your family</li>
                                    <li>✔️ Digital Certificate & Prasad Delivery</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </section>
            <section className="mx-auto max-w-7xl px-6 py-10">
                {/* Heading */}
                <div className="mb-12 text-center" data-aos="fade-down" data-aos-duration="1000">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
                        Explore Our Sacred <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 bg-clip-text text-transparent">Pujas</span>
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">Choose from a variety of rituals, yagya, havan, japa and more — performed authentically by expert Vedic priests</p>
                </div>

                <div className="grid gap-8 lg:grid-cols-4">
                    {/* Sidebar Filter */}
                    <aside className="relative h-max overflow-hidden rounded-2xl border border-orange-200 bg-gradient-to-b from-[#fffaf3] to-[#fff3d7] p-6 shadow-2xl backdrop-blur-xl lg:col-span-1">
                        {/* Heading */}
                        <div className="relative z-10 mb-6 flex items-center gap-3">
                            <span className="h-10 w-2 rounded-full bg-gradient-to-b from-orange-500 to-yellow-400 shadow-lg"></span>
                            <h2 className="text-2xl font-extrabold tracking-wide text-gray-900 drop-shadow">Filters</h2>
                        </div>

                        {/* Search */}
                        <div className="relative z-10 mb-6">
                            <input
                                type="text"
                                placeholder="🔍 Search Poojas..."
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value)
                                    setCurrentPage(1)
                                }}
                                className="w-full rounded-xl border-2 border-orange-300/40 bg-white/70 px-4 py-3 pr-10 text-sm shadow-inner transition-all duration-200 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                            />
                            <span className="absolute top-1/2 right-3 -translate-y-1/2 text-orange-400">⌕</span>
                        </div>

                        {/* Filter Buttons */}
                        <ul className="custom-scroll relative z-10 max-h-[360px] space-y-3 overflow-y-auto pr-2">
                            {categories.map((cat) => (
                                <li key={cat.key}>
                                    <button
                                        onClick={() => {
                                            setFilter(cat.key)
                                            setCurrentPage(1)
                                        }}
                                        className={`filter-btn flex w-full items-center gap-2 rounded-xl border px-5 py-3 text-left font-semibold shadow-md transition-all duration-300 ease-out ${filter === cat.key
                                            ? "scale-105 bg-gradient-to-r from-orange-400 to-yellow-400 text-white shadow-lg"
                                            : "border-orange-100 bg-white/80 hover:scale-[1.03] hover:-rotate-1 hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-700 hover:shadow-lg"
                                            }`}
                                    >
                                        {cat.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Card Section */}
                    <div className="lg:col-span-3">
                        <div className="grid grid-cols-1 gap-6 rounded-xl bg-gray-100 p-6 sm:grid-cols-2 md:grid-cols-3">
                            {paginated.length > 0 ? (
                                paginated.map((puja) => (
                                    <div
                                        key={puja.id}
                                        className="card flex max-w-sm flex-col justify-between overflow-hidden rounded-2xl border-dashed bg-[#FFF3D7] p-4 text-center shadow-md"
                                        data-aos="fade-up"
                                        data-category={puja.category}
                                    >
                                        <img src={puja.img} alt={puja.title} className="w-full rounded-xl border-8 border-white shadow-sm" />
                                        <p className="mt-4 font-serif text-base leading-relaxed text-gray-800">
                                            <span className="font-bold">{puja.title}</span>, {puja.desc}
                                        </p>
                                        {/* <button className="mt-5 w-full rounded-xl border-4 border-white bg-[#f6a623] py-3 font-semibold text-black transition hover:bg-[#e59410]">Book Now →</button> */}
                                    </div>
                                ))
                            ) : (
                                <p className="col-span-3 text-center text-gray-600">No pujas found</p>
                            )}
                        </div>

                        {/* Pagination */}
                        <div className="mt-8 flex items-center justify-center gap-6">
                            <button
                                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                                disabled={currentPage === 1}
                                className="rounded-xl border border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50 px-6 py-2 text-sm font-semibold text-orange-700 shadow-md transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg disabled:opacity-50"
                            >
                                ⬅ Previous
                            </button>
                            <button
                                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="rounded-xl border border-orange-200 bg-gradient-to-r from-yellow-50 to-orange-50 px-6 py-2 text-sm font-semibold text-orange-700 shadow-md transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg disabled:opacity-50"
                            >
                                Next ➡
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative mx-auto max-w-7xl px-6 py-20">
                {/* Heading */}
                <div className="relative mb-16 text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 drop-shadow-sm md:text-5xl">What Our Devotees Say</h2>
                    <p className="mt-3 text-lg text-gray-600">Blessings & Experiences Shared by Our Community</p>
                    <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500"></div>
                </div>

                {/* Testimonial Card */}
                <div className="relative flex flex-col items-center text-center transition-all duration-500">
                    {/* Avatar Glow */}
                    <div className="relative">
                        <div className="animate-spin-slow h-32 w-32 rounded-full bg-gradient-to-tr from-yellow-400 via-orange-500 to-red-500 p-[4px] shadow-2xl">
                            <div className="h-full w-full rounded-full bg-white p-1">
                                <img src={avatar} alt={name} className="h-full w-full rounded-full object-cover shadow-xl" />
                            </div>
                        </div>
                        <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-orange-400/40 to-yellow-400/40 blur-3xl"></div>
                    </div>

                    {/* Rating Stars */}
                    <div className="mt-5 flex justify-center gap-1 text-xl text-yellow-400">
                        <span className="animate-star">⭐</span>
                        <span className="animate-star delay-100">⭐</span>
                        <span className="animate-star delay-200">⭐</span>
                        <span className="animate-star delay-300">⭐</span>
                        <span className="animate-star delay-400">⭐</span>
                    </div>

                    {/* Quote */}
                    <div className="group relative mt-8 max-w-2xl rounded-3xl border border-orange-200 bg-white/80 p-10 shadow-xl backdrop-blur-lg transition-all duration-500 hover:shadow-2xl">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute -top-7 -left-7 h-14 w-14 text-orange-400 opacity-20 transition group-hover:opacity-40"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M9.5 11c0-2.485 2.015-4.5 4.5-4.5S18.5 8.515 18.5 11 16.485 15.5 14 15.5H12a1 1 0 0 0-1 1V20a1 1 0 1 1-2 0v-4a1 1 0 0 0-1-1H6.5C4.015 15.5 2 13.485 2 11s2.015-4.5 4.5-4.5S11 8.515 11 11h-1.5z" />
                        </svg>
                        <p className="text-xl leading-relaxed font-medium text-gray-700 italic transition-all duration-500">"{text}"</p>
                    </div>

                    {/* Name */}
                    <div className="mt-6 text-lg font-semibold tracking-wide text-orange-600">— {name}</div>

                    {/* Navigation */}
                    <div className="mt-10 flex gap-8">
                        <button
                            onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                            className="h-14 w-14 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:-rotate-6 hover:shadow-2xl"
                        >
                            ◀
                        </button>
                        <button
                            onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
                            className="h-14 w-14 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-2xl"
                        >
                            ▶
                        </button>
                    </div>
                </div>

                {/* Decorative Glows */}
                <div className="absolute top-0 left-0 h-40 w-40 animate-pulse rounded-full bg-orange-300 opacity-40 blur-3xl"></div>
                <div className="absolute right-0 bottom-0 h-48 w-48 animate-pulse rounded-full bg-yellow-300 opacity-40 blur-3xl"></div>

                {/* Custom Animations */}
                <style jsx>{`
                    @keyframes spin-slow {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }
                    .animate-spin-slow {
                        animation: spin-slow 14s linear infinite;
                    }
                    @keyframes star-shine {
                        0%,
                        100% {
                            transform: scale(1);
                            opacity: 1;
                        }
                        50% {
                            transform: scale(1.3);
                            opacity: 0.7;
                        }
                    }
                    .animate-star {
                        display: inline-block;
                        animation: star-shine 1.5s infinite;
                    }
                    .animate-star.delay-100 {
                        animation-delay: 0.1s;
                    }
                    .animate-star.delay-200 {
                        animation-delay: 0.2s;
                    }
                    .animate-star.delay-300 {
                        animation-delay: 0.3s;
                    }
                    .animate-star.delay-400 {
                        animation-delay: 0.4s;
                    }
                `}</style>
            </section>
        </>
    )
}

export default page
