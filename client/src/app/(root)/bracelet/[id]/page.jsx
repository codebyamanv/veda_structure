"use client"
import { getBraceletById } from "@/apis/controllers/braceletController.js"
import { useCart } from "@/context/cartContext"
import useBracelet from "@/hooks/useBracelet"
import { calculateDiscount, handlePayment } from "@/utils/utils"
import { Share } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import React, { useState, useEffect } from "react"
import { toast } from "sonner"

function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const { addItem } = useCart()
    const { bracelet } = useBracelet()

    const router = useRouter()
    const [formData, setFormData] = useState({
        wearerName: "",
        dob: "",
        birthPlace: "",
        time: "",
        gender: "male",
        gotra: "",
        purpose: "general",
    })
    const validateForm = () => {
        const requiredFields = ["wearerName", "dob", "birthPlace", "time", "gender", "purpose"]
        return requiredFields.every((field) => formData[field]?.trim())
    }
    const handleFormChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const fetchBracelet = async () => {
        const res = await getBraceletById(id)
        setProduct(res.data.bracelet)
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
    const [tab, setTab] = useState("about")

    const copyLink = () => {
        navigator.clipboard.writeText(`https://vedastructure.com/bracelet/${id}`)
        toast.success("Link Copied! 📋")
    }

    const [selected, setSelected] = useState(false)

    const handleChange = (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex]
        const value = Number(selectedOption.value) // price
        const isHaveForm = selectedOption.dataset.ishaveform === "true"
        setSelected({ value, isHaveForm })
    }
    const basePrice = product.productPrice || 0
    const energizationPrice = selected.value || 0
    const finalPrice = basePrice + energizationPrice

    return (
        <>
            <div className="mx-auto max-w-7xl px-6 py-3 text-sm text-gray-600">
                <button className="font-semibold hover:text-yellow-600"> Home &gt; </button>
                <button className="font-semibold hover:text-yellow-600"> Store &gt; </button>
                <button className="font-semibold hover:text-yellow-600">Bracelet &gt;</button>
                <span className="font-bold text-red-600">1 Mukhi Bracelet</span>
            </div>
            <section className="mx-auto grid max-w-7xl gap-8 p-4 sm:p-6 md:grid-cols-2">
                <div>
                    <Image src={product.productImage?.[mainImageIdx]} alt="Product Image" width={500} height={500} className="mb-4 w-full rounded-lg shadow-md" />
                    <div className="hiderScrollbar flex space-x-3 overflow-auto">
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
                            <h2 className="text-gray-500">Bracelet</h2>
                            <h1 className="text-3xl font-bold text-gray-800">{product.productName}</h1>
                            <div className="flex items-end gap-2">
                                <p className="mt-2 text-xl font-bold text-orange-500">₹{calculateDiscount(finalPrice, product.productDiscount)}</p>
                                <p className="mt-2 text-xl font-semibold text-gray-300 line-through">₹{finalPrice}</p>
                                <p className="text-md mt-2 font-bold text-green-600">{product.productDiscount}% OFF</p>
                            </div>
                            <p className="text-lg font-semibold text-gray-500">100% Authentic Bracelet</p>
                        </div>
                        <div className="flex space-x-3">
                            <button className="flex h-10 w-10 items-center justify-center rounded-full border hover:bg-yellow-100 hover:text-yellow-600" onClick={() => setShowShare(true)}>
                                <Share />
                            </button>
                        </div>
                    </div>
                    <marquee behavior="alternate" direction="right" className="font-bold text-red-500">
                        Offer Available: 25/08/25-20/09/25
                    </marquee>
                    <div className="border-t pt-4 text-sm">
                        <ul className="grid grid-cols-2 gap-y-2 sm:grid-cols-3">
                            <li>
                                Width: <span className="font-semibold">00</span>
                            </li>
                            <li>
                                Bead size: <span className="font-semibold">00</span>
                            </li>
                            <li>
                                Origin: <span className="font-semibold">00</span>
                            </li>
                            <li className="col-span-2 sm:col-span-3">
                                Certification / Energization process: <br />
                                <span className="font-semibold">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta officiis provident quidem ex neque cupiditate nesciunt tempora commodi, recusandae repellendus,
                                    eveniet nam enim iure porro.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <label className="mt-4 block font-semibold">Pooja/Energization</label>
                        <select className="mt-1 w-full rounded-lg border p-2" onChange={handleChange}>
                            <option>--choose--</option>
                            {product.energization?.map((item) => (
                                <option className="capitalize" value={item.price} data-isHaveForm={item.isHaveForm}>
                                    {item.title}- ₹{item.price}
                                </option>
                            ))}
                        </select>
                    </div>

                    {selected?.isHaveForm && (
                        <div className="mt-2 space-y-2 rounded-xl border bg-yellow-50 p-4">
                            <div className="grid items-center gap-1 sm:grid-cols-2">
                                <label htmlFor="name" className="font-medium">
                                    Name of wearer:
                                </label>
                                <input type="text" className="w-full rounded-lg border border-gray-400 p-2" name="wearerName" id="name" value={formData.wearerName} onChange={handleFormChange} />
                            </div>
                            <div className="grid items-center gap-1 sm:grid-cols-2">
                                <label htmlFor="dob" className="font-medium">
                                    Date of Birth:
                                </label>
                                <input type="date" className="w-full rounded-lg border border-gray-400 p-2" name="dob" id="dob" value={formData.dob} onChange={handleFormChange} />
                            </div>
                            <div className="grid items-center gap-1 sm:grid-cols-2">
                                <label htmlFor="place" className="font-medium">
                                    Place of Birth:
                                </label>
                                <input type="text" className="w-full rounded-lg border border-gray-400 p-2" name="birthPlace" id="place" value={formData.birthPlace} onChange={handleFormChange} />
                            </div>
                            <div className="grid items-center gap-1 sm:grid-cols-2">
                                <label htmlFor="time" className="font-medium">
                                    Time of Birth:
                                </label>
                                <input type="time" className="w-full rounded-lg border border-gray-400 p-2" name="time" id="time" value={formData.time} onChange={handleFormChange} />
                            </div>
                            <div className="grid items-center gap-1 sm:grid-cols-2">
                                <label className="font-medium">Gender:</label>
                                <select name="gender" className="w-full rounded-lg border border-gray-400 p-2" id="" value={formData.gender} onChange={handleFormChange}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="grid items-center gap-1 sm:grid-cols-2">
                                <label htmlFor="gotra" className="font-medium">
                                    Clan/Gotra (If Available):
                                </label>
                                <input type="text" className="w-full rounded-lg border border-gray-400 p-2" name="gotra" id="gotra" value={formData.gotra} onChange={handleFormChange} />
                            </div>
                            <div className="grid items-center gap-1 sm:grid-cols-2">
                                <label htmlFor="name" className="font-medium">
                                    Primary Purpose:
                                </label>
                                <select name="purpose" className="w-full rounded-lg border border-gray-400 p-2" id="" value={formData.purpose} onChange={handleFormChange}>
                                    <option value="general">General</option>
                                    <option value="health">Health</option>
                                    <option value="wealth-fortune">Wealth & Fortune</option>
                                    <option value="education">Education</option>
                                    <option value="personal-relations">Personal Relations</option>
                                </select>
                            </div>
                        </div>
                    )}

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
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={() => {
                                if (selected?.isHaveForm) {
                                    if (validateForm()) {
                                        addItem({
                                            ...product,
                                            productPrice: finalPrice,
                                            selectedEnergization: selected,
                                            energizationForm: selected?.isHaveForm ? formData : null, // store form if needed
                                        })
                                        toast.success("Added to cart!")
                                    } else {
                                        toast.error("Please fill all the fields")
                                    }
                                } else {
                                    addItem({
                                        ...product,
                                        productPrice: finalPrice,
                                        selectedEnergization: selected,
                                        energizationForm: selected?.isHaveForm ? formData : null, // store form if needed
                                    })
                                    toast.success("Added to cart!")
                                }
                            }}
                            className="mt-4 w-full rounded-lg border border-yellow-600 px-6 py-3 font-semibold text-yellow-600 transition duration-300 hover:bg-yellow-500 hover:shadow-md"
                        >
                            Add to Cart
                        </button>
                        <button
                            onClick={() => {
                                if (selected?.isHaveForm) {
                                    if (validateForm()) {
                                        addItem({
                                            ...product,
                                            productPrice: finalPrice,
                                            selectedEnergization: selected,
                                            energizationForm: selected?.isHaveForm ? formData : null, // store form if needed
                                        })
                                        toast.success("Added to cart!")
                                        router.push("/checkout")
                                    } else {
                                        toast.error("Please fill all the fields")
                                    }
                                } else {
                                    addItem({
                                        ...product,
                                        productPrice: finalPrice,
                                        selectedEnergization: selected,
                                        energizationForm: selected?.isHaveForm ? formData : null, // store form if needed
                                    })
                                    toast.success("Added to cart!")
                                    router.push("/checkout")
                                }
                            }}
                            className="mt-4 w-full rounded-lg bg-yellow-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-yellow-500 hover:shadow-md"
                        >
                            Buy now
                        </button>
                    </div>
                    <div className="prose prose-gray mt-4 max-w-none [&_li]:ml-5 [&_ol]:list-decimal [&_p]:mb-2 [&_ul]:list-disc" dangerouslySetInnerHTML={{ __html: product.productFeatures }}></div>
                </div>
            </section>
            {/* Share Popup */}
            {showShare && (
                <div className="bg-opacity-40 fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                    <div className="animate-fadeIn w-80 rounded-xl border-2 border-yellow-500 bg-white p-6 shadow-lg">
                        <h2 className="mb-3 text-lg font-bold text-yellow-600">Share this Bracelet</h2>
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
            <div className="mx-auto mt-10 max-w-7xl p-4 sm:px-6">
                <div className="hideScrollbar flex space-x-6 overflow-auto border-b pb-2 font-semibold text-gray-600">
                    {tabData.map((t) => (
                        <button key={t.key} className={`tab-btn text-nowrap ${tab === t.key ? "border-b-2 border-yellow-600 text-yellow-600" : ""}`} onClick={() => setTab(t.key)}>
                            {t.label}
                        </button>
                    ))}
                </div>
                <div className="mt-6 leading-relaxed text-gray-700">{tabData.find((t) => t.key === tab)?.content}</div>
            </div>
            <div className="mx-auto mt-10 max-w-7xl p-4 sm:px-6">
                <p className="mb-4 text-2xl font-bold text-gray-800">Related Products</p>
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-4">
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
