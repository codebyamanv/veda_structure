'use client'
import { getRudrakshaById } from '@/apis/controllers/rudrakshaController'
import { useCart } from '@/context/cartContext'
import { calculateDiscount, handlePayment } from '@/utils/utils'
import { Share } from 'lucide-react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { toast } from 'sonner'

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
            key: 'about',
            label: 'About Product',
            content: (
                <div
                    className="prose prose-gray max-w-none [&_ul]:list-disc [&_ol]:list-decimal [&_li]:ml-5 [&_p]:mb-2 mt-4"
                    dangerouslySetInnerHTML={{ __html: product.productAbout?.[0] }}
                ></div>
            ),
        },
        {
            key: 'benefits',
            label: 'Benefits',
            content: (
                <div
                    className="prose prose-gray max-w-none [&_ul]:list-disc [&_ol]:list-decimal [&_li]:ml-5 [&_p]:mb-2 mt-4"
                    dangerouslySetInnerHTML={{ __html: product.productBenefits }}
                ></div>
            ),
        },
        {
            key: 'faq',
            label: "FAQ's",
            content: (
                <div
                    className="prose prose-gray max-w-none [&_ul]:list-disc [&_ol]:list-decimal [&_li]:ml-5 [&_p]:mb-2 mt-4"
                    dangerouslySetInnerHTML={{ __html: product.productFaqs }}
                ></div>
            ),
        },
        {
            key: 'shipping',
            label: 'Shipping & Return',
            content: (
                <div
                    className="prose prose-gray max-w-none [&_ul]:list-disc [&_ol]:list-decimal [&_li]:ml-5 [&_p]:mb-2 mt-4"
                    dangerouslySetInnerHTML={{ __html: product.productShipping }}
                ></div>
            ),
        },
        {
            key: 'reviews',
            label: 'Product reviews',
            content: (
                <div>
                    <h2 className="text-lg font-bold">Customer Reviews</h2>
                    <div className="mt-2 border-b pb-2">
                        <p className="font-semibold"> Arpit Pandey - ⭐ ⭐ ⭐ ⭐ ⭐ </p>
                        <p>Very beautiful and powerful bracelet. Helped me feel more energetic!</p>
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
    const [tab, setTab] = useState('about')

    const copyLink = () => {
        navigator.clipboard.writeText(`https://vedastructure.com/rudraksha/${id}`)
        toast.success('Link Copied! 📋')
    }

    return (
        <>
            <div className="max-w-7xl mx-auto px-6 py-3 text-sm text-gray-600">
                <button className="font-semibold hover:text-yellow-600"> Home &gt; </button>
                <button className="font-semibold hover:text-yellow-600"> Store &gt; </button>
                <button className="font-semibold hover:text-yellow-600">Rudraksha &gt;</button>
                <span className="text-red-600 font-bold">1 Mukhi Rudraksha</span>
            </div>
            <section className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-8">
                <div>
                    <Image
                        src={product.productImage?.[mainImageIdx]}
                        alt="Product Image"
                        width={500}
                        height={500}
                        className="rounded-lg shadow-md mb-4 w-full"
                    />
                    <div className="flex space-x-3">
                        {product.productImage?.map((img, idx) => (
                            <Image
                                key={img + idx}
                                src={img}
                                onClick={() => setMainImageIdx(idx)}
                                className={`w-20 h-20 rounded cursor-pointer border hover:border-2 border-yellow-700 ${
                                    mainImageIdx === idx ? 'border-yellow-700' : ''
                                }`}
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
                            <h1 className="text-3xl font-bold text-gray-800">
                                {product.productName}
                            </h1>
                            <div className="flex gap-2 items-end">
                                <p className="text-orange-500 text-xl font-bold mt-2">
                                    ₹
                                    {calculateDiscount(
                                        product.productPrice,
                                        product.productDiscount,
                                    )}
                                </p>
                                <p className="text-gray-300 line-through text-xl font-semibold mt-2">
                                    ₹{product.productPrice}
                                </p>
                                <p className="text-green-600 text-md font-bold mt-2">
                                    {product.productDiscount}% OFF
                                </p>
                            </div>
                            <p className="text-lg font-semibold text-gray-500">
                                100% Authentic Rudraksha
                            </p>
                        </div>
                        <div className="flex space-x-3">
                            <button
                                className={`w-10 h-10 border rounded-full flex items-center justify-center hover:bg-red-100 hover:text-red-500 ${
                                    fav ? 'bg-red-500 text-white' : ''
                                }`}
                                onClick={() => {
                                    setFav((f) => !f)
                                    toast.success('Added to wishlist!')
                                }}
                            >
                                ❤️
                            </button>
                            <button
                                className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-yellow-100 hover:text-yellow-600"
                                onClick={() => setShowShare(true)}
                            >
                                <Share />
                            </button>
                        </div>
                    </div>
                    <marquee
                        behavior="alternate"
                        direction="right"
                        className="text-red-500 font-bold"
                    >
                        Offer Available: 25/08/25-20/09/25
                    </marquee>
                    <label className="block mt-4 font-semibold">Pooja/Energization</label>
                    <select className="border rounded-lg w-full p-2 mt-1">
                        <option>--choose--</option>
                        {product.energization?.map((item) => (
                            <option className="capitalize">
                                {item.title}- ₹{item.price}
                            </option>
                        ))}
                    </select>

                    <div className="flex items-center space-x-3 mt-4">
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
                            toast.success('Added to cart!')
                        }}
                        className="bg-yellow-600 px-6 py-3 rounded-lg text-white transition duration-300 hover:shadow-md hover:bg-yellow-500 font-semibold mt-4 w-full"
                    >
                        Add to Cart
                    </button>
                    <div
                        className="prose prose-gray max-w-none [&_ul]:list-disc [&_ol]:list-decimal [&_li]:ml-5 [&_p]:mb-2 mt-4"
                        dangerouslySetInnerHTML={{ __html: product.productFeatures }}
                    ></div>
                </div>
            </section>
            {/* Share Popup */}
            {showShare && (
                <div className="fixed inset-0 bg-black/80 bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-lg p-6 w-80 border-2 border-yellow-500 animate-fadeIn">
                        <h2 className="text-lg font-bold text-yellow-600 mb-3">
                            Share this Rudraksha
                        </h2>
                        <div className="flex items-center mb-4">
                            <input
                                id="pageLink"
                                type="text"
                                value="http://127.0.0.1:5500/index.html"
                                readOnly
                                className="flex-1 border rounded-l-lg px-2 py-1 text-sm"
                            />
                            <button
                                onClick={copyLink}
                                className="bg-yellow-500 text-white px-3 py-1 rounded-r-lg"
                            >
                                Copy
                            </button>
                        </div>
                        <div className="grid grid-cols-3 gap-3 text-center">
                            <a
                                href="https://api.whatsapp.com/send?text=https://yourwebsite.com/product/red-jasper"
                                target="_blank"
                                className="bg-green-500 text-white py-2 rounded-lg hover:opacity-90"
                            >
                                WhatsApp
                            </a>
                            <a
                                href="https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com/product/red-jasper"
                                target="_blank"
                                className="bg-blue-600 text-white py-2 rounded-lg hover:opacity-90"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                className="bg-pink-500 text-white py-2 rounded-lg hover:opacity-90"
                            >
                                Instagram
                            </a>
                        </div>
                        <button
                            onClick={() => setShowShare(false)}
                            className="mt-5 w-full bg-yellow-600 text-white py-2 rounded-lg font-semibold"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div className="max-w-7xl mx-auto px-6 mt-10">
                <div className="flex space-x-6 border-b pb-2 font-semibold text-gray-600">
                    {tabData.map((t) => (
                        <button
                            key={t.key}
                            className={`tab-btn ${
                                tab === t.key ? 'text-yellow-600 border-b-2 border-yellow-600' : ''
                            }`}
                            onClick={() => setTab(t.key)}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
                <div className="mt-6 text-gray-700 leading-relaxed">
                    {tabData.find((t) => t.key === tab)?.content}
                </div>
            </div>
        </>
    )
}

export default ProductDetails
