'use client'
import { useState } from 'react'
import { Heart } from 'lucide-react'

const bracelets = [
    { id: 1, name: 'Red Jasper', price: 767, originalPrice: 999, img: '/images/red jasper.jpg' },
    {
        id: 2,
        name: '7 Chakra Lava Bracelet',
        price: 799,
        originalPrice: 999,
        img: '/images/7 Chakra Lava Bracelet.jpg',
    },
    {
        id: 3,
        name: 'Tiger Eye Bracelet',
        price: 690,
        originalPrice: 899,
        img: '/images/Tiger Eye Bracelet.jpg',
    },
    {
        id: 4,
        name: 'Sphatik Bracelet',
        price: 989,
        originalPrice: 1199,
        img: '/images/Sphatik Bracelet.jpg',
    },
    {
        id: 5,
        name: 'Sulemani Hakik',
        price: 599,
        originalPrice: 799,
        img: '/images/Sulemani Hakek.jpg',
    },
    {
        id: 6,
        name: 'Black Obsidian Bracelet',
        price: 499,
        originalPrice: 699,
        img: '/images/Black Obsidian Bracelet.jpg',
    },
    {
        id: 7,
        name: 'Amethyst Bracelet',
        price: 399,
        originalPrice: 599,
        img: '/images/Amethyst Bracelet.jpg',
    },
    {
        id: 8,
        name: 'Love-Attraction Bracelet',
        price: 899,
        originalPrice: 1099,
        img: '/images/Love-Attraction Bracelet.png',
    },
    {
        id: 9,
        name: 'Money Magnet Bracelet',
        price: 799,
        originalPrice: 999,
        img: '/images/Money Magnet Bracelet.jpg',
    },
    {
        id: 10,
        name: 'Snowflake Bracelet',
        price: 699,
        originalPrice: 899,
        img: '/images/Snowflake Bracelet.jpg',
    },
    {
        id: 11,
        name: 'Red Onyx Bracelet',
        price: 767,
        originalPrice: 999,
        img: '/images/Red Onyx Bracelet.jpg',
    },
    {
        id: 12,
        name: 'Pink Opal Bracelet',
        price: 799,
        originalPrice: 999,
        img: '/images/Pink Opal Bracelet.jpg',
    },
    {
        id: 13,
        name: 'Lapis Lazuli Bracelet',
        price: 690,
        originalPrice: 899,
        img: '/images/Lapis Lazuli Bracelet.jpg',
    },
    {
        id: 14,
        name: 'Howlite Bracelet',
        price: 989,
        originalPrice: 1199,
        img: '/images/Howlite Braclete.jpg',
    },
    {
        id: 15,
        name: 'Dalmatin Jasper Bracelet',
        price: 599,
        originalPrice: 799,
        img: '/images/Dalmatin Jasper Bracelet.jpg',
    },
    {
        id: 16,
        name: 'Malachite Bracelet',
        price: 499,
        originalPrice: 699,
        img: '/images/Malachite Bracelet.jpg',
    },
    {
        id: 17,
        name: 'Rhodonite Black Bracelet',
        price: 399,
        originalPrice: 599,
        img: '/images/Rhodonite Black Bracelet.jpg',
    },
    {
        id: 18,
        name: 'Crystal Faced Bracelet',
        price: 899,
        originalPrice: 1099,
        img: '/images/Crystal Faced Bracelet.jpg',
    },
    {
        id: 19,
        name: 'Black Titanium Aura Quartz',
        price: 799,
        originalPrice: 999,
        img: '/images/Black Titanium Aura Quartz.jpg',
    },
    {
        id: 20,
        name: 'Evil Eye Bracelet',
        price: 699,
        originalPrice: 899,
        img: '/images/Evil Eye Bracelet.jpg',
    },
]

export default function BraceletCard() {
    const [showAll, setShowAll] = useState(false)
    const [wishlist, setWishlist] = useState([])
    const visibleCards = showAll ? bracelets : bracelets.slice(0, 8)

    const getDiscount = (original, current) => {
        return Math.round(((original - current) / original) * 100)
    }

    const toggleWishlist = (id) => {
        setWishlist((prev) => (prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]))
    }

    return (
        <section className="py-16 bg-gradient-to-b from-yellow-50 to-orange-50">
            <div className="container mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2
                        className="text-4xl font-extrabold text-orange-700 drop-shadow-md"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        Spiritual Bracelets ✨
                    </h2>
                    <p className="text-gray-600 mt-2" data-aos="fade-up" data-aos-delay="200">
                        Discover 100% authentic sacred bracelets to uplift your energy
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                    {visibleCards.map((item, index) => {
                        const discount = getDiscount(item.originalPrice, item.price)
                        const isWished = wishlist.includes(item.id)

                        // Different animation for variety
                        const animations = ['zoom-in', 'fade-up', 'fade-up-right', 'fade-up-left']
                        const animation = animations[index % animations.length]

                        return (
                            <div
                                key={item.id}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden group relative"
                                data-aos={animation}
                                data-aos-delay={index * 100}
                                data-aos-duration="1000"
                            >
                                {/* Image */}
                                <div className="relative h-56 w-full">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Tag */}
                                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                                        Bracelet
                                    </span>

                                    {/* Wishlist Button */}
                                    <button
                                        onClick={() => toggleWishlist(item.id)}
                                        className={`absolute top-3 right-3 p-2 rounded-full shadow-md transition-all duration-300 ${
                                            isWished
                                                ? 'bg-red-500 text-white'
                                                : 'bg-white/80 text-gray-700 hover:bg-red-500 hover:text-white'
                                        }`}
                                    >
                                        <Heart
                                            className={`w-5 h-5 ${isWished ? 'fill-current' : ''}`}
                                        />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-4 text-center">
                                    <h3
                                        className="font-semibold text-lg text-gray-800"
                                        data-aos="fade-up"
                                        data-aos-delay="200"
                                    >
                                        {item.name}
                                    </h3>
                                    <div
                                        className="flex justify-center items-center gap-2 mt-1"
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >
                                        <p className="text-gray-500 line-through text-sm">
                                            ₹{item.originalPrice}
                                        </p>
                                        <p className="text-orange-600 font-bold">₹{item.price}</p>
                                        {discount > 0 && (
                                            <span className="text-green-600 font-semibold text-sm">
                                                {discount}% OFF
                                            </span>
                                        )}
                                    </div>
                                    <button
                                        className="mt-3 w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
                                        data-aos="zoom-in"
                                        data-aos-delay="400"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* View All Button */}
                <div className="text-center mt-10" data-aos="zoom-in-up">
                    {!showAll && (
                        <button
                            onClick={() => setShowAll(true)}
                            className="px-8 py-3 bg-orange-600 text-white rounded-full font-bold shadow-md hover:bg-orange-700 transition-all"
                        >
                            View All Bracelets
                        </button>
                    )}
                </div>
            </div>
        </section>
    )
}
