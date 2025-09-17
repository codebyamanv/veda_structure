'use client'
import { getBraceletById } from '@/apis/controllers/braceletController.js'
import { useCart } from '@/context/cartContext'
import useBracelet from '@/hooks/useBracelet'
import { calculateDiscount, handlePayment } from '@/utils/utils'
import { Share } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { toast } from 'sonner'

function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const { addItem } = useCart()
    const { bracelet } = useBracelet()

    const router = useRouter()

    const fetchBracelet = async () => {
        const res = await getBraceletById(id)
        setProduct(res.data.bracelet)
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
        fetchBracelet()
    }, [])

    const [mainImageIdx, setMainImageIdx] = useState(0)
    const [fav, setFav] = useState(false)
    const [showShare, setShowShare] = useState(false)
    const [tab, setTab] = useState('about')

    const copyLink = () => {
        navigator.clipboard.writeText(`https://vedastructure.com/bracelet/${id}`)
        toast.success('Link Copied! 📋')
    }

    const [selected, setSelected] = useState(false)

    const handleChange = (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex]
        const value = selectedOption.value
        const isHaveForm = selectedOption.dataset.ishaveform === "true"

        setSelected({ value, isHaveForm })
    }

    return (
        <>
            <div className="max-w-7xl mx-auto px-6 py-3 text-sm text-gray-600">
                <button className="font-semibold hover:text-yellow-600"> Home &gt; </button>
                <button className="font-semibold hover:text-yellow-600"> Store &gt; </button>
                <button className="font-semibold hover:text-yellow-600">Bracelet &gt;</button>
                <span className="text-red-600 font-bold">1 Mukhi Bracelet</span>
            </div>
            <section className="max-w-7xl mx-auto sm:p-6 p-4 grid md:grid-cols-2 gap-8">
                <div>
                    <Image
                        src={product.productImage?.[mainImageIdx]}
                        alt="Product Image"
                        width={500}
                        height={500}
                        className="rounded-lg shadow-md mb-4 w-full"
                    />
                    <div className="flex space-x-3 overflow-auto hiderScrollbar">
                        {product.productImage?.map((img, idx) => (
                            <Image
                                key={img + idx}
                                src={img}
                                onClick={() => setMainImageIdx(idx)}
                                className={`w-20 h-20 rounded cursor-pointer border hover:border-2 border-yellow-700 ${mainImageIdx === idx ? 'border-yellow-700' : ''
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
                            <h2 className="text-gray-500">Bracelet</h2>
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
                                100% Authentic Bracelet
                            </p>
                        </div>
                        <div className="flex space-x-3">
                            <button
                                className={`w-10 h-10 border rounded-full flex items-center justify-center hover:bg-red-100 hover:text-red-500 ${fav ? 'bg-red-500 text-white' : ''
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
                    <div className="border-t pt-4 text-sm">
                        <ul className="grid sm:grid-cols-3 grid-cols-2  gap-y-2">
                            <li>
                                Width:{' '}
                                <span className="font-semibold">00</span>
                            </li>
                            <li>
                                Bead size:{' '}
                                <span className="font-semibold">00</span>
                            </li>
                            <li>
                                Origin:{' '}
                                <span className="font-semibold">00</span>
                            </li>
                            <li className="sm:col-span-3 col-span-2">
                                Certification / Energization process:{' '} <br />
                                <span className="font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta officiis provident quidem ex neque cupiditate nesciunt tempora commodi, recusandae repellendus, eveniet nam enim iure porro.</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <label className="block mt-4 font-semibold">Pooja/Energization</label>
                        <select className="border rounded-lg w-full p-2 mt-1">
                            <option>--choose--</option>
                            {product.energization?.map((item) => (
                                <option className="capitalize" value={item.title} data-isHaveForm={item.isHaveForm}>
                                    {item.title}- ₹{item.price}
                                </option>
                            ))}
                        </select>
                    </div>

                    {selected?.isHaveForm && (
                        <div className="mt-2 space-y-2 border p-4 rounded-xl bg-yellow-50">
                            <div className="grid sm:grid-cols-2 gap-1 items-center">
                                <label htmlFor="name" className="font-medium">Name of wearer:</label>
                                <input type="text" className="w-full rounded-lg border border-gray-400 p-2" name="wearerName" id="name" />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-1 items-center">
                                <label htmlFor="dob" className="font-medium">Date of Birth:</label>
                                <input type="date" className="w-full rounded-lg border border-gray-400 p-2" name="dob" id="dob" />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-1 items-center">
                                <label htmlFor="place" className="font-medium">Place of Birth:</label>
                                <input type="text" className="w-full rounded-lg border border-gray-400 p-2" name="birthPlace" id="place" />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-1 items-center">
                                <label htmlFor="time" className="font-medium">Time of Birth:</label>
                                <input type="time" className="w-full rounded-lg border border-gray-400 p-2" name="wearerName" id="time" />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-1 items-center">
                                <label className="font-medium">Gender:</label>
                                <select name="gender" className="w-full rounded-lg border border-gray-400 p-2" id="">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-1 items-center">
                                <label htmlFor="gotra" className="font-medium">Clan/Gotra (If Available):</label>
                                <input type="text" className="w-full rounded-lg border border-gray-400 p-2" name="gotra" id="gotra" />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-1 items-center">
                                <label htmlFor="name" className="font-medium">Primary Purpose:</label>
                                <select name="purpose" className="w-full rounded-lg border border-gray-400 p-2" id="">
                                    <option value="general">General</option>
                                    <option value="health">Health</option>
                                    <option value="wealth-fortune">Wealth & Fortune</option>
                                    <option value="education">Education</option>
                                    <option value="personal-relations">Personal Relations</option>
                                </select>
                            </div>
                        </div>
                    )}

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
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={() => {
                                addItem(product)
                                toast.success("Added to cart!")
                            }}
                            className="mt-4 w-full rounded-lg text-yellow-600 px-6 py-3 font-semibold border border-yellow-600 transition duration-300 hover:bg-yellow-500 hover:shadow-md"
                        >
                            Add to Cart
                        </button>
                        <button
                            onClick={() => {
                                addItem(product)
                                router.push("/checkout")
                            }}
                            className="mt-4 w-full rounded-lg bg-yellow-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-yellow-500 hover:shadow-md"
                        >
                            Buy now
                        </button>
                    </div>
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
                            Share this Bracelet
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
            <div className="max-w-7xl mx-auto sm:px-6 p-4 mt-10">
                <div className="flex space-x-6 border-b pb-2 font-semibold text-gray-600 overflow-auto hideScrollbar">
                    {tabData.map((t) => (
                        <button
                            key={t.key}
                            className={`tab-btn text-nowrap ${tab === t.key ? 'text-yellow-600 border-b-2 border-yellow-600' : ''
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
            <div className="max-w-7xl mx-auto sm:px-6 p-4 mt-10">
                <p className="text-2xl font-bold text-gray-800 mb-4">Related Products</p>
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
            </div>
        </>
    )
}

export default ProductDetails
