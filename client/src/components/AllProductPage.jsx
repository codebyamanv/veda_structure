"use client"
import { useCart } from "@/context/cartContext"
import useBracelet from "@/hooks/useBracelet"
import useRudraksha from "@/hooks/useRudraksha"
import { calculateDiscount } from "@/utils/utils"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"

function AllProductPage() {
    const { rudraksha } = useRudraksha()
    const { bracelet } = useBracelet()
    const { addItem } = useCart()

    // const allProducts = useMemo(() => {
    //     return [...bracelet, ...rudraksha];
    // }, [bracelet, rudraksha]);

    // function shuffle(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     return array;
    // }

    // const jumbledProducts = useMemo(() => {
    //     return shuffle([...allProducts]); // only runs when allProducts changes
    // }, [allProducts]);

    return (
        <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
                {rudraksha?.map((item) => (
                    <div key={item._id} className="relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:scale-105 hover:shadow-xl">
                        <Link href={`/rudraksha/${item._id}`}>
                            <div className="relative h-64 w-full">
                                <Image
                                    src={item.productImage[0]}
                                    alt={item?.productName}
                                    width={1000}
                                    height={1000}
                                    className="h-full w-full object-cover object-bottom transition-transform duration-500"
                                />
                                <span className="absolute top-3 left-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow">Rudraksha</span>
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
                {bracelet?.map((item) => (
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
        </>
    )
}

export default AllProductPage
