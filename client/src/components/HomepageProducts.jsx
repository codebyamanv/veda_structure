'use client'
import { useCart } from "@/context/cartContext"
import useBracelet from "@/hooks/useBracelet"
import useRudraksha from "@/hooks/useRudraksha"
import { calculateDiscount } from '@/utils/utils'
import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { toast } from 'sonner'

function HomepageProducts() {
    const { rudraksha } = useRudraksha()
    const { bracelet } = useBracelet()
    const { addItem } = useCart()

    return (
        <>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                    {rudraksha?.slice(0, 4).map((item) => (
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
                    <Link href="/rudraksha"
                        className="px-8 py-3 bg-orange-600 text-white rounded-full font-bold shadow-md hover:bg-orange-700 transition-all"
                    >
                        View All Rudraksha <ArrowRightIcon className="inline w-5 h-5" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-4 mt-12">
                    {/* {!bracelet?.length && (
                        <div className="flex h-64 items-center justify-center">
                            <p className="text-2xl font-semibold text-gray-600">No products found</p>
                        </div>
                    )} */}
                    {bracelet?.slice(0, 4).map((item) => (
                        <div key={item._id} className="relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:scale-105 hover:shadow-xl">
                            {/* Make image + text a clickable link */}
                            <Link href={`/bracelet/${item._id}`}>
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={item.productImage[0]}
                                        alt={item?.productName}
                                        width={1000}
                                        height={1000}
                                        className="h-full w-full object-cover object-bottom transition-transform duration-500"
                                    />
                                    <span className="absolute top-3 left-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow">Bracelet</span>
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="text-lg font-semibold text-gray-800">{item.productName}</h3>
                                    <div className="flex items-end justify-center gap-2">
                                        <p className="mt-2 text-xl font-bold text-orange-500">₹{calculateDiscount(item.productPrice, item.productDiscount)}</p>
                                        <p className="mt-2 text-xl font-semibold text-gray-300 line-through">₹{item.productPrice}</p>
                                        <p className="text-md mt-2 font-bold text-green-600">{item.productDiscount}% OFF</p>
                                    </div>
                                </div>
                            </Link>

                            {/* Button OUTSIDE the Link so it only adds to cart */}
                            <div className="p-4 pt-0">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation() // stop click bubbling
                                        addItem(item)
                                        toast.success("Item added to cart!")
                                    }}
                                    className="mt-3 w-full cursor-pointer rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 py-2 font-semibold text-white shadow-md transition-all hover:shadow-lg"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-10" data-aos="zoom-in-up">
                    <Link href="/bracelet"
                        className="px-8 py-3 bg-orange-600 text-white rounded-full font-bold shadow-md hover:bg-orange-700 transition-all"
                    >
                        View All Bracelets <ArrowRightIcon className="inline w-5 h-5" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default HomepageProducts
