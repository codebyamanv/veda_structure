import React from 'react'

export default function RudraBanner() {
    return (
        <section className="bg-gray-50 pt-10 pb-6 overflow-hidden">
            <div className="flex justify-center items-end relative gap-2 flex-nowrap">
                <img
                    src="images/r1.png"
                    className="rudra-img w-[12%] sm:w-[15%] object-contain relative top-6"
                />
                <img
                    src="images/r2.png"
                    className="rudra-img w-[12%] sm:w-[15%] object-contain relative bottom-6 sm:bottom-10"
                />
                <img
                    src="images/R3.png"
                    className="rudra-img w-[28%] sm:w-[30%] object-contain relative"
                />
                <img
                    src="images/r2.png"
                    className="rudra-img w-[12%] sm:w-[15%] object-contain relative bottom-6 sm:bottom-10"
                />
                <img
                    src="images/r1.png"
                    className="rudra-img w-[12%] sm:w-[15%] object-contain relative top-6"
                />
            </div>

            <div className="max-w-4xl mx-auto text-center mt-12 px-4">
                <h2 className="text-3xl sm:text-5xl font-serif tracking-wide text-[#b9924e] rudra-heading">
                    ORIGINAL VEDIC RUDRAKSHA COLLECTION
                </h2>
                <p className="mt-4 sm:mt-6 text-gray-700 leading-relaxed rudra-text text-sm sm:text-base">
                    VedaStructure offers the world's largest collection of AAA Standard, X-ray
                    certified Rudraksha, from 1 Mukhi to 26 Mukhi including rare beads like
                    Gaurishankar, Ganesha, Garbha Gauri and Trijuti Rudraksha. Each bead is
                    lab-tested, energized as per Vedic rituals to ensure authenticity, spiritual
                    potency and trust amongst seekers globally. Our collection features only
                    original Rudraksha sourced from sacred Himalayan regions. Real Rudraksha for
                    Real Transformation.
                </p>
            </div>
        </section>
    )
}
