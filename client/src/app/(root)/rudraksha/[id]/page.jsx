"use client"
import { getRudrakshaById } from "@/apis/controllers/rudrakshaController"
import { useCart } from "@/context/cartContext"
import { calculateDiscount } from "@/utils/utils"
import { Share } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"
import React, { useState, useEffect } from "react"
import { toast } from "sonner"

function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const { addItem } = useCart()

    const fetchRudraksha = async () => {
        const res = await getRudrakshaById(id)
        setProduct(res.data.rudraksha)
    }
    const tabData = [
        {
            key: "about",
            label: "About Product",
            content: (
                <div className="prose prose-gray mt-4 max-w-none [&_li]:ml-5 [&_ol]:list-decimal [&_p]:mb-2 [&_ul]:list-disc" dangerouslySetInnerHTML={{ __html: product.productAbout?.[0] }}></div>
            ),
        },
        {
            key: "benefits",
            label: "Benefits",
            content: <div className="prose prose-gray mt-4 max-w-none [&_li]:ml-5 [&_ol]:list-decimal [&_p]:mb-2 [&_ul]:list-disc" dangerouslySetInnerHTML={{ __html: product.productBenefits }}></div>,
        },
        {
            key: "faq",
            label: "FAQ's",
            content: <div className="prose prose-gray mt-4 max-w-none [&_li]:ml-5 [&_ol]:list-decimal [&_p]:mb-2 [&_ul]:list-disc" dangerouslySetInnerHTML={{ __html: product.productFaqs }}></div>,
        },
        {
            key: "shipping",
            label: "Shipping & Return",
            content: <div className="prose prose-gray mt-4 max-w-none [&_li]:ml-5 [&_ol]:list-decimal [&_p]:mb-2 [&_ul]:list-disc" dangerouslySetInnerHTML={{ __html: product.productShipping }}></div>,
        },
        {
            key: "reviews",
            label: "Product reviews",
            content: (
                <div>
                    <h2 className="text-lg font-bold">Customer Reviews</h2>
                    <div className="mt-2 border-b pb-2">
                        <p className="font-semibold"> Arpit Pandey - ⭐ ⭐ ⭐ ⭐ ⭐ </p>
                        <p>Very beautiful and powerful rudraksha. Helped me feel more energetic!</p>
                    </div>
                    <div className="mt-2">
                        <p className="font-semibold">Harsh singh - ⭐ ⭐ ⭐ ⭐ ⭐</p>
                        <p>Good quality stone and fast delivery. Highly recommended.</p>
                    </div>
                </div>
            ),
        },
    ]

    useEffect(() => {
        fetchRudraksha()
    }, [])

    const [mainImageIdx, setMainImageIdx] = useState(0)
    const [fav, setFav] = useState(false)
    const [showShare, setShowShare] = useState(false)
    const [tab, setTab] = useState("about")

    const copyLink = () => {
        navigator.clipboard.writeText(`https://vedastructure.com/rudraksha/${id}`)
        toast.success("Link Copied! 📋")
    }

    return (
        <>
            <div className="mx-auto max-w-7xl px-6 py-3 text-sm text-gray-600">
                <button className="font-semibold hover:text-yellow-600"> Home &gt; </button>
                <button className="font-semibold hover:text-yellow-600"> Store &gt; </button>
                <button className="font-semibold hover:text-yellow-600">Rudraksha &gt;</button>
                <span className="font-bold text-red-600">1 Mukhi Rudraksha</span>
            </div>
            <section className="mx-auto grid max-w-7xl gap-8 p-6 md:grid-cols-2">
                <div>
                    <Image src={product.productImage?.[mainImageIdx]} alt="Product Image" width={500} height={500} className="mb-4 w-full rounded-lg shadow-md" />
                    <div className="flex space-x-3">
                        {product.productImage?.map((img, idx) => (
                            <Image
                                key={img + idx}
                                src={img}
                                onClick={() => setMainImageIdx(idx)}
                                className={`h-20 w-20 cursor-pointer rounded border border-yellow-700 hover:border-2 ${mainImageIdx === idx ? "border-yellow-700" : ""}`}
                                width={100}
                                height={100}
                                alt="thumb"
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-gray-500">Rudraksha</h2>
                            <h1 className="text-3xl font-bold text-gray-800">{product.productName}</h1>
                            <div className="flex items-end gap-2">
                                <p className="mt-2 text-xl font-bold text-orange-500">₹{calculateDiscount(product.productPrice, product.productDiscount)}</p>
                                <p className="mt-2 text-xl font-semibold text-gray-300 line-through">₹{product.productPrice}</p>
                                <p className="text-md mt-2 font-bold text-green-600">{product.productDiscount}% OFF</p>
                            </div>
                            <p className="text-lg font-semibold text-gray-500">100% Authentic Rudraksha</p>
                        </div>
                        <div className="flex space-x-3">
                            <button
                                className={`flex h-10 w-10 items-center justify-center rounded-full border hover:bg-red-100 hover:text-red-500 ${fav ? "bg-red-500 text-white" : ""}`}
                                onClick={() => {
                                    setFav((f) => !f)
                                    toast.success("Added to wishlist!")
                                }}
                            >
                                ❤️
                            </button>
                            <button className="flex h-10 w-10 items-center justify-center rounded-full border hover:bg-yellow-100 hover:text-yellow-600" onClick={() => setShowShare(true)}>
                                <Share />
                            </button>
                        </div>
                    </div>
                    <marquee behavior="alternate" direction="right" className="font-bold text-red-500">
                        Offer Available: 25/08/25-20/09/25
                    </marquee>
                    <label className="mt-4 block font-semibold">Pooja/Energization</label>
                    <select className="mt-1 w-full rounded-lg border p-2">
                        <option>--choose--</option>
                        {product.energization?.map((item) => (
                            <option className="capitalize">
                                {item.title}- ₹{item.price}
                            </option>
                        ))}
                    </select>

                    <div className="mt-4 flex items-center space-x-3">
                        {/* <button
                            className="px-3 py-1 border rounded-lg hover:bg-yellow-300"
                            onClick={() => decreaseQty(product._id)}
                        >
                            -
                        </button>
                        <span id="qty">
                            {cart.items.find((i) => i._id === product._id)?.quantity || 1}
                        </span>
                        <button
                            className="px-3 py-1 border rounded-lg hover:bg-yellow-300"
                            onClick={() => increaseQty(product._id)}
                        >
                            +
                        </button> */}
                        {/* <button
                            onClick={() => addItem(product)}
                            className="bg-yellow-600 px-6 py-3 rounded-lg text-white transition duration-300 hover:shadow-md hover:bg-yellow-500 font-semibold mt-4 w-full"
                        >
                            Add to Cart
                        </button> */}
                    </div>
                    <button
                        onClick={() => {
                            addItem(product)
                            toast.success("Added to cart!")
                        }}
                        className="mt-4 w-full rounded-lg bg-yellow-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-yellow-500 hover:shadow-md"
                    >
                        Add to Cart
                    </button>
                    <div className="prose prose-gray mt-4 max-w-none [&_li]:ml-5 [&_ol]:list-decimal [&_p]:mb-2 [&_ul]:list-disc" dangerouslySetInnerHTML={{ __html: product.productFeatures }}></div>
                </div>
            </section>
            {/* Share Popup */}
            {showShare && (
                <div className="bg-opacity-40 fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                    <div className="animate-fadeIn w-80 rounded-xl border-2 border-yellow-500 bg-white p-6 shadow-lg">
                        <h2 className="mb-3 text-lg font-bold text-yellow-600">Share this Rudraksha</h2>
                        <div className="mb-4 flex items-center">
                            <input id="pageLink" type="text" value="http://127.0.0.1:5500/index.html" readOnly className="flex-1 rounded-l-lg border px-2 py-1 text-sm" />
                            <button onClick={copyLink} className="rounded-r-lg bg-yellow-500 px-3 py-1 text-white">
                                Copy
                            </button>
                        </div>
                        <div className="grid grid-cols-3 gap-3 text-center">
                            <a
                                href="https://api.whatsapp.com/send?text=https://yourwebsite.com/product/red-jasper"
                                target="_blank"
                                className="rounded-lg bg-green-500 py-2 text-white hover:opacity-90"
                            >
                                WhatsApp
                            </a>
                            <a
                                href="https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com/product/red-jasper"
                                target="_blank"
                                className="rounded-lg bg-blue-600 py-2 text-white hover:opacity-90"
                            >
                                Facebook
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" className="rounded-lg bg-pink-500 py-2 text-white hover:opacity-90">
                                Instagram
                            </a>
                        </div>
                        <button onClick={() => setShowShare(false)} className="mt-5 w-full rounded-lg bg-yellow-600 py-2 font-semibold text-white">
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div className="mx-auto mt-10 max-w-7xl px-6">
                <div className="flex space-x-6 border-b pb-2 font-semibold text-gray-600">
                    {tabData.map((t) => (
                        <button key={t.key} className={`tab-btn ${tab === t.key ? "border-b-2 border-yellow-600 text-yellow-600" : ""}`} onClick={() => setTab(t.key)}>
                            {t.label}
                        </button>
                    ))}
                </div>
                <div className="mt-6 leading-relaxed text-gray-700">{tabData.find((t) => t.key === tab)?.content}</div>
            </div>
        </>
    )
}

export default ProductDetails
