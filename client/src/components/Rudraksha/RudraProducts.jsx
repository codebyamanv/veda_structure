'use client'
import { useCart } from '@/context/cartContext'
import useRudraksha from '@/hooks/useRudraksha'
import { calculateDiscount } from '@/utils/utils'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'sonner'

export default function RudraProducts() {
    const { rudraksha } = useRudraksha()
    const { addItem } = useCart()

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-10">
                    <h2
                        className="text-4xl font-extrabold text-orange-700 drop-shadow-md"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        🌿 Divine Rudraksha Collection 🌿
                    </h2>
                    <p className="text-gray-600 mt-2" data-aos="fade-up" data-aos-delay="200">
                        Discover 100% authentic Rudraksha beads to enhance your spiritual journey
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                    {rudraksha?.map((item) => (
                        <div
                            key={item._id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 hover:shadow-xl transition-all relative"
                        >
                            {/* Make image + text a clickable link */}
                            <Link href={`/rudraksha/${item._id}`}>
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={item.productImage[0]}
                                        alt={item?.productName}
                                        width={1000}
                                        height={1000}
                                        className="h-full w-full object-cover object-bottom transition-transform duration-500"
                                    />
                                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                                        Rudraksha
                                    </span>
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="font-semibold text-lg text-gray-800">
                                        {item.productName}
                                    </h3>
                                    <div className="flex gap-2 items-end justify-center">
                                        <p className="text-orange-500 text-xl font-bold mt-2">
                                            ₹
                                            {calculateDiscount(
                                                item.productPrice,
                                                item.productDiscount,
                                            )}
                                        </p>
                                        <p className="text-gray-300 line-through text-xl font-semibold mt-2">
                                            ₹{item.productPrice}
                                        </p>
                                        <p className="text-green-600 text-md font-bold mt-2">
                                            {item.productDiscount}% OFF
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            {/* Button OUTSIDE the Link so it only adds to cart */}
                            <div className="p-4 pt-0">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation() // stop click bubbling
                                        addItem(item)
                                        toast.success('Item added to cart!')
                                    }}
                                    className="cursor-pointer mt-3 w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10" data-aos="zoom-in-up">
                    <button
                        id="viewAllBtn"
                        className="px-8 py-3 bg-orange-600 text-white rounded-full font-bold shadow-md hover:bg-orange-700 transition-all"
                    >
                        View All Bracelets
                    </button>
                </div>
            </div>
        </section>
    )
}
