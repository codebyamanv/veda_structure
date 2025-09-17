"use client"
import Link from "next/link"
import { useState } from "react"
import { useAuth } from "@/context/useAuth"
import { FaUser, FaBars, FaAngleDown, FaShoppingCart, FaSearch } from "react-icons/fa"
import { LogOut } from "lucide-react"
import Cart from "./Cart"

export default function Navbar() {
    const { user, logout } = useAuth()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(null)

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu)
    }

    return (
        <div className="relative z-40">
            <div className="overflow-hidden bg-yellow-500 py-1 text-sm text-white">
                <marquee behavior="scroll" direction="left">
                    Book online Pooja services and get 10% off <span className="font-semibold">RABBIT30</span> at Checkout — Ends Soon! ⏳
                </marquee>
            </div>

            <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3">
                <Link href="/" className="flex items-center">
                    <img src="/images/logo.png" alt="Logo" className="h-10 md:h-12" />
                </Link>

                <div className="hidden w-1/2 max-w-xl items-center overflow-hidden rounded-full border border-gray-200 bg-white shadow-md focus-within:ring-2 focus-within:ring-yellow-400 md:flex">
                    <input type="text" placeholder="Search products..." className="flex-1 px-4 py-2 text-gray-700 outline-none" id="" name="" />
                    <button className="flex h-12 w-12 transform items-center justify-center rounded-full bg-yellow-400 shadow-md transition hover:scale-105">
                        <FaSearch className="text-lg text-white" />
                    </button>
                </div>

                <div className="flex items-center space-x-4 text-gray-700">
                    {user ? (
                        <>
                            {user?.role === "admin" && (
                                <Link href="/admin" className="hidden items-center gap-1 rounded-full border border-gray-200 px-4 py-2 hover:text-yellow-600 md:flex">
                                    Admin
                                </Link>
                            )}
                            <Link href="/user/profile" className="flex items-center gap-1 rounded-full border border-gray-200 px-4 py-2 hover:text-yellow-600">
                                <FaUser />{" "}
                                {user ? (
                                    <>
                                        <span className="hidden md:inline-block">{user?.fullname}</span>
                                    </>
                                ) : (
                                    <span className="h-4 w-22 animate-pulse rounded-full bg-gray-400"></span>
                                )}
                            </Link>
                            <button onClick={logout} className="hidden items-center gap-1 rounded-full border border-gray-200 px-4 py-2 hover:text-yellow-600 md:flex">
                                {user && (
                                    <p className="flex items-center gap-2">
                                        <span>Logout </span>
                                        <span>
                                            <LogOut size={20} />
                                        </span>{" "}
                                    </p>
                                )}
                            </button>
                        </>
                    ) : (
                        <Link href="/sign-in" className="hidden items-center gap-1 rounded-full border border-gray-200 px-4 py-2 hover:text-yellow-600 md:flex">
                            <FaUser /> Register/Login
                        </Link>
                    )}

                    <Cart />

                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="focus:outline-none md:hidden">
                        <FaBars className="text-2xl" />
                    </button>
                </div>
            </div>

            <div className="border-b border-gray-200 bg-white px-4 py-2 md:hidden">
                <div className="flex w-full items-center overflow-hidden rounded-full border border-gray-200 bg-white shadow-md focus-within:ring-2 focus-within:ring-yellow-400">
                    <input type="text" placeholder="Search products..." className="flex-1 px-3 py-2 text-gray-700 outline-none" id="" name="" />
                    <button className="flex h-12 w-12 transform items-center justify-center rounded-full bg-yellow-500 shadow-md transition hover:scale-105">
                        <FaSearch className="text-lg text-white" />
                    </button>
                </div>
            </div>

            <nav className="hidden border-b border-gray-200 bg-white md:block">
                <ul className="flex flex-wrap items-center justify-center space-x-6 py-3 text-sm font-medium tracking-wide text-gray-800">
                    <li>
                        <a href="/" className="px-2 hover:text-yellow-600">
                            Home
                        </a>
                    </li>

                    <li className="group relative">
                        <Link href="/yagya-puja" className="flex items-center gap-1 px-2 hover:text-yellow-600">
                            Yagya Puja
                            {/* <FaAngleDown /> */}
                        </Link>
                        {/* <div className="dropdown absolute top-full left-0 z-10 hidden w-40 rounded-md border bg-white shadow-lg group-hover:block">
                            <Link href="/puja" className="block px-4 py-2 hover:bg-yellow-100">
                                Puja Homepage
                            </Link>
                            <a href="#" className="block px-4 py-2 hover:bg-yellow-100">
                                Puja Samagri
                            </a>
                            <a href="#" className="block px-4 py-2 hover:bg-yellow-100">
                                Yantras
                            </a>
                            <a href="#" className="block px-4 py-2 hover:bg-yellow-100">
                                Incense & Diyas
                            </a>
                        </div> */}
                    </li>

                    <li>
                        <Link href="/astrology" className="px-2 hover:text-yellow-600">
                            Astrology
                        </Link>
                    </li>

                    {/* <li className="group relative">
                        <button className="flex items-center gap-1 px-2 hover:text-yellow-600">
                            Healing Remedies <FaAngleDown />
                        </button>
                        <div className="dropdown absolute top-full left-0 z-10 hidden w-44 rounded-md border bg-white shadow-lg group-hover:block">
                            <a href="#" className="block px-4 py-2 hover:bg-yellow-100">
                                Spiritual Fragrances
                            </a>
                            <a href="#" className="block px-4 py-2 hover:bg-yellow-100">
                                Energy Cleansing
                            </a>
                            <a href="#" className="block px-4 py-2 hover:bg-yellow-100">
                                Ayurvedic Oils
                            </a>
                        </div>
                    </li> */}

                    {/* <li>
                        <a href="#" className="hover:text-yellow-600 px-2">
                            Idols & Statues
                        </a>
                    </li> */}

                    <li className="group relative">
                        <button className="flex items-center gap-1 px-2 hover:text-yellow-600">
                            Veda Store <FaAngleDown />
                        </button>
                        <div className="dropdown absolute top-full left-0 z-10 hidden w-44 rounded-md border bg-white shadow-lg group-hover:block">
                            {/* <a href="#" className="block px-4 py-2 hover:bg-yellow-100">
                                All Products
                            </a> */}
                            <Link href="/all-products" className="block px-4 py-2 hover:bg-yellow-100">
                                Exclusive All
                            </Link>
                            <Link href="/rudraksha" className="block px-4 py-2 hover:bg-yellow-100">
                                Rudraksha
                            </Link>
                            {/* <a href="#" className="block px-4 py-2 hover:bg-yellow-100">
                                Gems
                            </a> */}
                            <Link href="/bracelet" className="block px-4 py-2 hover:bg-yellow-100">
                                Bracelet
                            </Link>
                        </div>
                    </li>

                    <li>
                        <Link href="/about" className="px-2 hover:text-yellow-600">
                            About us
                        </Link>
                    </li>

                    <li className="group relative">
                        <button className="flex items-center gap-1 px-2 hover:text-yellow-600">
                            Support <FaAngleDown />
                        </button>
                        <div className="dropdown absolute top-full left-0 z-10 hidden w-44 rounded-md border bg-white shadow-lg group-hover:block">
                            <Link href="/contact" className="block px-4 py-2 hover:bg-yellow-100">
                                Contact Us
                            </Link>
                            {/* <a href="#" className="block px-4 py-2 hover:bg-yellow-100">
                                FAQ
                            </a> */}
                        </div>
                    </li>

                    {/* <li>
                        <a href="#" className="hover:text-yellow-600 px-2">
                            Rewards
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-yellow-600 px-2">
                            Veda Wisdom
                        </a>
                    </li> */}
                </ul>
            </nav>

            {mobileMenuOpen && (
                <div className="space-y-2 border-b border-gray-200 bg-white px-4 py-3 md:hidden">
                    <a href="/" className="block py-1 hover:text-yellow-600">
                        Home
                    </a>

                    <div>
                        <button onClick={() => toggleDropdown("account")} className="flex w-full justify-between py-1 hover:text-yellow-600">
                            My Account <FaAngleDown />
                        </button>
                        {openDropdown === "account" && (
                            <div className="space-y-1 pl-4">
                                <Link href="/user/profile" className="block hover:text-yellow-600">
                                    Profile
                                </Link>
                                <Link href="/user/orders" className="block hover:text-yellow-600">
                                    Orders
                                </Link>
                                <Link href="/user/setting" className="block hover:text-yellow-600">
                                    Setting
                                </Link>
                                <button onClick={logout} className="block hover:text-yellow-600">
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                    <div>
                        <Link href="/yagya-puja" className=" hover:text-yellow-600">
                            Yagya Puja
                        </Link>
                    </div>
                    {/* <div>
                        <button onClick={() => toggleDropdown("puja")} className="flex w-full justify-between py-1 hover:text-yellow-600">
                            Puja Essentials <FaAngleDown />
                        </button>
                        {openDropdown === "puja" && (
                            <div className="space-y-1 pl-4">
                                <Link href="/yagya-puja" className="block px-4 py-2 hover:bg-yellow-100">
                                    Yagya Puja
                                </Link>
                                <a href="#" className="block hover:text-yellow-600">
                                    Puja Samagri
                                </a>
                                <a href="#" className="block hover:text-yellow-600">
                                    Yantras
                                </a>
                                <a href="#" className="block hover:text-yellow-600">
                                    Incense & Diyas
                                </a>
                            </div>
                        )}
                    </div> */}

                    <Link href="/astrology" className="block py-1 hover:text-yellow-600">
                        Astrology
                    </Link>

                    {/* <div>
                        <button onClick={() => toggleDropdown("healing")} className="flex w-full justify-between py-1 hover:text-yellow-600">
                            Healing Remedies <FaAngleDown />
                        </button>
                        {openDropdown === "healing" && (
                            <div className="space-y-1 pl-4">
                                <a href="#" className="block hover:text-yellow-600">
                                    Spiritual Fragrances
                                </a>
                                <a href="#" className="block hover:text-yellow-600">
                                    Energy Cleansing
                                </a>
                                <a href="#" className="block hover:text-yellow-600">
                                    Ayurvedic Oils
                                </a>
                            </div>
                        )}
                    </div> */}

                    {/* <a href="#" className="block py-1 hover:text-yellow-600">
                        Idols & Statues
                    </a> */}

                    <div>
                        <button onClick={() => toggleDropdown("veda")} className="flex w-full justify-between py-1 hover:text-yellow-600">
                            Veda Store <FaAngleDown />
                        </button>
                        {openDropdown === "veda" && (
                            <div className="space-y-1 pl-4">
                                <Link href="/all-products" className="block hover:text-yellow-600">
                                    Explore All
                                </Link>
                                <Link href="/rudraksha" className="block hover:text-yellow-600">
                                    Rudraksha
                                </Link>
                                <a href="#" className="block hover:text-yellow-600">
                                    Gems
                                </a>
                                <Link href="/bracelet" className="block hover:text-yellow-600">
                                    Bracelet
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link href="/about" className="block py-1 hover:text-yellow-600">
                        About Us
                    </Link>

                    <div>
                        <button onClick={() => toggleDropdown("support")} className="flex w-full justify-between py-1 hover:text-yellow-600">
                            Support <FaAngleDown />
                        </button>
                        {openDropdown === "support" && (
                            <div className="space-y-1 pl-4">
                                <Link href="/contact" className="block hover:text-yellow-600">
                                    Contact Us
                                </Link>
                                <a href="#" className="block hover:text-yellow-600">
                                    FAQ
                                </a>
                            </div>
                        )}
                    </div>

                    {/* <a href="#" className="block py-1 hover:text-yellow-600">
                        Rewards
                    </a>
                    <a href="#" className="block py-1 hover:text-yellow-600">
                        Veda Wisdom
                    </a> */}
                </div>
            )}
        </div>
    )
}
