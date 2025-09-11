
'use client'
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
];

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
];

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
];

function page() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [step, setStep] = useState(1);

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    const nextStep = () => setStep((s) => Math.min(s + 1, 3));
    const prevStep = () => setStep((s) => Math.max(s - 1, 1));

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);

    const cardsPerPage = 3;

    // Filtering logic
    const filtered = allPujas.filter((puja) => {
        const matchFilter = filter === "all" || puja.category === filter;
        const matchSearch = puja.title.toLowerCase().includes(search.toLowerCase());
        return matchFilter && matchSearch;
    });

    // Pagination logic
    const start = (currentPage - 1) * cardsPerPage;
    const paginated = filtered.slice(start, start + cardsPerPage);

    const totalPages = Math.ceil(filtered.length / cardsPerPage);

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const { text, name, avatar } = testimonials[index];

    return (
        <>
            <section className="max-w-7xl mx-auto px-6 pt-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT CONTENT */}
                    <div className="space-y-8" data-aos="fade-right" data-aos-duration="1200">
                        {/* Tagline */}
                        <div
                            className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full 
            text-base font-bold tracking-wide text-orange-800
            bg-gradient-to-r from-orange-100/90 to-yellow-100/90 
            backdrop-blur-xl border border-orange-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.15)] 
            hover:scale-105 hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)]
            transition-all duration-500 ease-out overflow-hidden group"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent 
              translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></span>
                            <span className="absolute inset-0 rounded-full ring-2 ring-orange-300/40"></span>
                            <span className="relative z-10">Popular • 24/7 Bookings</span>
                        </div>

                        {/* Heading */}
                        <h1
                            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            Transform Your Home <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400">
                                with Sacred Puja
                            </span>
                        </h1>

                        {/* Description */}
                        <p
                            className="text-gray-600 text-lg leading-relaxed max-w-lg"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            Professional priests, authentic rituals and live sessions. Choose a puja
                            package &amp; we’ll take care of everything — decorations, prasad, and
                            digital certificates.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex gap-4 items-center">
                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-7 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition"
                            >
                                Book Puja →
                            </button>
                            <button
                                onClick={() => setIsDetailsOpen(true)}
                                className="px-6 py-2 border border-orange-300 rounded-full text-orange-600 font-medium hover:bg-orange-50 transition"
                            >
                                ▶ Watch Demo
                            </button>
                        </div>

                        {/* Features */}
                        <div className="mt-8 grid grid-cols-2 gap-5">
                            <div
                                className="p-5 bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition flex items-center gap-4"
                                data-aos="flip-left"
                                data-aos-delay="1000"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-amber-200 flex items-center justify-center text-orange-600 text-xl font-bold">
                                    ﷽
                                </div>
                                <div>
                                    <div className="font-semibold">Authentic Vedic</div>
                                    <div className="text-sm text-gray-500">Priests with proper lineage</div>
                                </div>
                            </div>
                            <div className="p-5 bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-100 to-orange-200 flex items-center justify-center text-yellow-600 text-xl font-bold">
                                    ★
                                </div>
                                <div>
                                    <div className="font-semibold">Instant Booking</div>
                                    <div className="text-sm text-gray-500">Slots available 24/7</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative" data-aos="fade-left" data-aos-duration="1200">
                        <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-orange-100">
                            <img
                                src="/images/Pujasection.png"
                                alt="Puja Poster"
                                className="w-full h-[420px] object-cover object-top brightness-95 hover:scale-105 transition duration-500"
                            />
                        </div>

                        {/* Floating Card */}
                        <div
                            className="md:absolute md:mt-0 mt-4 md:-bottom-28 left-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-5 w-80 border border-orange-100"
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
                                    className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-2.5 rounded-lg shadow hover:scale-105 transition"
                                >
                                    Book Now
                                </button>
                                <button
                                    onClick={() => setIsDetailsOpen(true)}
                                    className="px-4 py-2 border rounded-lg hover:bg-orange-50"
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOOKING POPUP */}
                {isPopupOpen && (
                    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4">
                        <div className="bg-white/95 rounded-3xl shadow-2xl w-full max-w-xl p-8 relative border border-orange-200/50 ring-1 ring-orange-100">
                            <button
                                onClick={() => setIsPopupOpen(false)}
                                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
                            >
                                ✖
                            </button>

                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400 animate-pulse">
                                    Puja Booking
                                </h2>
                                <p className="text-sm text-gray-500">Book your sacred ritual with ease</p>
                            </div>

                            {/* Progress */}
                            <div className="flex justify-between items-center mb-2">
                                <div className={`${step === 1 ? "text-orange-600" : "text-gray-400"} w-1/3 text-center font-semibold`}>Details</div>
                                <div className={`${step === 2 ? "text-orange-600" : "text-gray-400"} w-1/3 text-center`}>Schedule</div>
                                <div className={`${step === 3 ? "text-orange-600" : "text-gray-400"} w-1/3 text-center`}>Confirm</div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
                                <div
                                    className="bg-gradient-to-r from-orange-500 to-yellow-400 h-2 rounded-full"
                                    style={{ width: `${step * 33.3}%` }}
                                ></div>
                            </div>

                            {/* FORM */}
                            {step === 1 && (
                                <div className="space-y-6">
                                    <input type="text" placeholder="Full Name" className="w-full border rounded-xl p-3 shadow-sm" />
                                    <div className="grid grid-cols-2 gap-6">
                                        <input type="tel" placeholder="Phone" className="w-full border rounded-xl p-3" />
                                        <input type="email" placeholder="Email" className="w-full border rounded-xl p-3" />
                                    </div>
                                    <div className="flex justify-end">
                                        <button onClick={nextStep} className="px-6 py-3 bg-orange-500 text-white rounded-full shadow hover:scale-105 transition">
                                            Next →
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-6">
                                    <select className="w-full border rounded-xl p-3">
                                        <option>-- Choose Puja --</option>
                                        <option>Ganesh Puja</option>
                                        <option>Durga Puja</option>
                                        <option>Lakshmi Puja</option>
                                        <option>Satyanarayan Puja</option>
                                    </select>
                                    <div className="grid grid-cols-2 gap-6">
                                        <input type="date" className="w-full border rounded-xl p-3" />
                                        <input type="time" className="w-full border rounded-xl p-3" />
                                    </div>
                                    <input type="text" placeholder="Temple or Address" className="w-full border rounded-xl p-3" />
                                    <div className="flex justify-between">
                                        <button onClick={prevStep} className="px-6 py-3 bg-gray-300 rounded-full shadow">
                                            ← Back
                                        </button>
                                        <button onClick={nextStep} className="px-6 py-3 bg-orange-500 text-white rounded-full shadow hover:scale-105 transition">
                                            Next →
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-6">
                                    <textarea rows="4" className="w-full border rounded-xl p-3" placeholder="Any special requests..."></textarea>
                                    <div className="flex justify-between">
                                        <button onClick={prevStep} className="px-6 py-3 bg-gray-300 rounded-full shadow">
                                            ← Back
                                        </button>
                                        <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-full shadow hover:scale-105 transition">
                                            Confirm Booking
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* DETAILS MODAL */}
                {isDetailsOpen && (
                    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
                        <div className="bg-white/95 rounded-3xl p-8 w-full max-w-lg shadow-2xl relative border border-orange-200/50">
                            <button
                                onClick={() => setIsDetailsOpen(false)}
                                className="absolute top-3 right-3 text-gray-500 hover:text-orange-500 text-xl"
                            >
                                ✖
                            </button>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-gradient-to-r from-orange-500 to-yellow-400 p-3 rounded-2xl shadow-md text-white">
                                    📖
                                </div>
                                <h3 className="text-2xl font-extrabold text-gray-800">Puja Details</h3>
                            </div>
                            <div className="divide-y divide-orange-100">
                                <div className="py-3">
                                    <h4 className="font-semibold text-orange-600">✨ Rituals</h4>
                                    <p className="text-gray-700 mt-1">Performed authentically by <span className="font-semibold">Vedic priests</span>.</p>
                                </div>
                                <div className="py-3">
                                    <h4 className="font-semibold text-orange-600">🙏 Benefits</h4>
                                    <p className="text-gray-700 mt-1">Includes <span className="font-semibold">Prasad</span>, blessings & digital certificate.</p>
                                </div>
                                <div className="py-3">
                                    <h4 className="font-semibold text-orange-600">📺 Access</h4>
                                    <p className="text-gray-700 mt-1">Join <span className="font-semibold">live</span> or watch later anytime.</p>
                                </div>
                            </div>
                            <div className="mt-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-5 border-l-4 border-orange-400 shadow-sm">
                                <h4 className="font-bold text-orange-600 mb-2">Key Highlights:</h4>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
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
            <section className="max-w-7xl mx-auto px-6 py-10">
                {/* Heading */}
                <div
                    className="text-center mb-12"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                        Explore Our Sacred{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400">
                            Pujas
                        </span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose from a variety of rituals, yagya, havan, japa and more —
                        performed authentically by expert Vedic priests
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Sidebar Filter */}
                    <aside className="lg:col-span-1 bg-gradient-to-b from-[#fffaf3] to-[#fff3d7] rounded-2xl shadow-2xl p-6 h-max border border-orange-200 relative overflow-hidden backdrop-blur-xl">
                        {/* Heading */}
                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            <span className="w-2 h-10 bg-gradient-to-b from-orange-500 to-yellow-400 rounded-full shadow-lg"></span>
                            <h2 className="text-2xl font-extrabold text-gray-900 tracking-wide drop-shadow">
                                Filters
                            </h2>
                        </div>

                        {/* Search */}
                        <div className="relative mb-6 z-10">
                            <input
                                type="text"
                                placeholder="🔍 Search Poojas..."
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="w-full border-2 border-orange-300/40 rounded-xl px-4 py-3 pr-10 text-sm bg-white/70 shadow-inner focus:ring-2 focus:ring-orange-400 focus:outline-none transition-all duration-200"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-400">
                                ⌕
                            </span>
                        </div>

                        {/* Filter Buttons */}
                        <ul className="space-y-3 max-h-[360px] overflow-y-auto pr-2 custom-scroll z-10 relative">
                            {categories.map((cat) => (
                                <li key={cat.key}>
                                    <button
                                        onClick={() => {
                                            setFilter(cat.key);
                                            setCurrentPage(1);
                                        }}
                                        className={`filter-btn w-full text-left px-5 py-3 rounded-xl shadow-md border transition-all duration-300 ease-out font-semibold flex items-center gap-2 ${filter === cat.key
                                            ? "bg-gradient-to-r from-orange-400 to-yellow-400 text-white shadow-lg scale-105"
                                            : "bg-white/80 border-orange-100 hover:shadow-lg hover:scale-[1.03] hover:-rotate-1 hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-700"
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-100 rounded-xl">
                            {paginated.length > 0 ? (
                                paginated.map((puja) => (
                                    <div
                                        key={puja.id}
                                        className="card max-w-sm bg-[#FFF3D7] rounded-2xl shadow-md overflow-hidden p-4 text-center border-dashed flex flex-col justify-between"
                                        data-aos="fade-up"
                                        data-category={puja.category}
                                    >
                                        <img
                                            src={puja.img}
                                            alt={puja.title}
                                            className="w-full rounded-xl border-8 border-white shadow-sm"
                                        />
                                        <p className="mt-4 text-gray-800 text-base font-serif leading-relaxed">
                                            <span className="font-bold">{puja.title}</span>,{" "}
                                            {puja.desc}
                                        </p>
                                        <button className="mt-5 w-full bg-[#f6a623] text-black border-4 border-white font-semibold py-3 rounded-xl hover:bg-[#e59410] transition">
                                            Book Now →
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-600 col-span-3">
                                    No pujas found
                                </p>
                            )}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center items-center gap-6 mt-8">
                            <button
                                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                                disabled={currentPage === 1}
                                className="px-6 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 text-orange-700 shadow-md transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg disabled:opacity-50"
                            >
                                ⬅ Previous
                            </button>
                            <button
                                onClick={() =>
                                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                                }
                                disabled={currentPage === totalPages}
                                className="px-6 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-yellow-50 to-orange-50 border border-orange-200 text-orange-700 shadow-md transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg disabled:opacity-50"
                            >
                                Next ➡
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative max-w-7xl mx-auto px-6 py-20">
                {/* Heading */}
                <div className="text-center mb-16 relative">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-sm">
                        What Our Devotees Say
                    </h2>
                    <p className="text-gray-600 mt-3 text-lg">
                        Blessings & Experiences Shared by Our Community
                    </p>
                    <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 rounded-full"></div>
                </div>

                {/* Testimonial Card */}
                <div className="relative flex flex-col items-center text-center transition-all duration-500">
                    {/* Avatar Glow */}
                    <div className="relative">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-yellow-400 via-orange-500 to-red-500 p-[4px] shadow-2xl animate-spin-slow">
                            <div className="w-full h-full rounded-full bg-white p-1">
                                <img
                                    src={avatar}
                                    alt={name}
                                    className="w-full h-full rounded-full object-cover shadow-xl"
                                />
                            </div>
                        </div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/40 to-yellow-400/40 blur-3xl animate-pulse"></div>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex justify-center gap-1 mt-5 text-yellow-400 text-xl">
                        <span className="animate-star">⭐</span>
                        <span className="animate-star delay-100">⭐</span>
                        <span className="animate-star delay-200">⭐</span>
                        <span className="animate-star delay-300">⭐</span>
                        <span className="animate-star delay-400">⭐</span>
                    </div>

                    {/* Quote */}
                    <div className="mt-8 relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-10 max-w-2xl border border-orange-200 hover:shadow-2xl transition-all duration-500 group">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-14 h-14 absolute -top-7 -left-7 text-orange-400 opacity-20 group-hover:opacity-40 transition"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M9.5 11c0-2.485 2.015-4.5 4.5-4.5S18.5 8.515 18.5 11 16.485 15.5 14 15.5H12a1 1 0 0 0-1 1V20a1 1 0 1 1-2 0v-4a1 1 0 0 0-1-1H6.5C4.015 15.5 2 13.485 2 11s2.015-4.5 4.5-4.5S11 8.515 11 11h-1.5z" />
                        </svg>
                        <p className="text-xl text-gray-700 leading-relaxed font-medium italic transition-all duration-500">
                            "{text}"
                        </p>
                    </div>

                    {/* Name */}
                    <div className="mt-6 text-lg font-semibold text-orange-600 tracking-wide">
                        — {name}
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-8 mt-10">
                        <button
                            onClick={() =>
                                setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                            }
                            className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg hover:scale-110 hover:-rotate-6 hover:shadow-2xl transition-all duration-300"
                        >
                            ◀
                        </button>
                        <button
                            onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
                            className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg hover:scale-110 hover:rotate-6 hover:shadow-2xl transition-all duration-300"
                        >
                            ▶
                        </button>
                    </div>
                </div>

                {/* Decorative Glows */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-orange-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

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
