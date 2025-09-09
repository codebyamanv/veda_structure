'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '@/context/useAuth'
import { FaUser, FaBars, FaAngleDown, FaShoppingCart, FaSearch } from 'react-icons/fa'
import { LogOut } from 'lucide-react'
import Cart from './Cart'

export default function Navbar() {
    const { user, logout } = useAuth()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(null)

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu)
    }

    return (
        <div className="relative z-40">
            <div className="bg-yellow-500 text-white text-sm py-1 overflow-hidden">
                <marquee behavior="scroll" direction="left">
                    Book online Pooja services and get 10% off{' '}
                    <span className="font-semibold">RABBIT30</span> at Checkout — Ends Soon! ⏳
                </marquee>
            </div>

            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
                <div className="flex items-center">
                    <img src="/images/logo.png" alt="Logo" className="h-10 md:h-12" />
                </div>

                <div className="hidden md:flex items-center w-1/2 max-w-xl bg-white shadow-md rounded-full overflow-hidden border border-gray-200 focus-within:ring-2 focus-within:ring-yellow-400">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="flex-1 px-4 py-2 outline-none text-gray-700"
                    />
                    <button className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 shadow-md transform hover:scale-105 transition">
                        <FaSearch className="text-white text-lg" />
                    </button>
                </div>

                <div className="flex items-center space-x-4 text-gray-700">
                    {user ? (
                        <>
                            {user?.role === 'admin' && (
                                <Link
                                    href="/admin"
                                    className="hidden md:flex items-center gap-1 hover:text-yellow-600 border border-gray-200 rounded-full px-4 py-2"
                                >
                                    Admin
                                </Link>
                            )}
                            <Link
                                href="/profile"
                                className="hidden md:flex items-center gap-1 hover:text-yellow-600 border border-gray-200 rounded-full px-4 py-2"
                            >
                                <FaUser />{' '}
                                {user ? (
                                    <>
                                        <span>{user?.fullname}</span>
                                    </>
                                ) : (
                                    <span className="animate-pulse w-22 h-4 rounded-full bg-gray-400"></span>
                                )}
                            </Link>
                            <button
                                onClick={logout}
                                className="hidden md:flex items-center gap-1 hover:text-yellow-600 border border-gray-200 rounded-full px-4 py-2"
                            >
                                {user && (
                                    <p className="flex items-center gap-2">
                                        <span>Logout </span>
                                        <span>
                                            <LogOut size={20} />
                                        </span>{' '}
                                    </p>
                                )}
                            </button>
                        </>
                    ) : (
                        <Link
                            href="/sign-in"
                            className="hidden md:flex items-center gap-1 hover:text-yellow-600 border border-gray-200 rounded-full px-4 py-2"
                        >
                            <FaUser /> Register/Login
                        </Link>
                    )}

                    <Cart />

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden focus:outline-none"
                    >
                        <FaBars className="text-2xl" />
                    </button>
                </div>
            </div>

            <div className="md:hidden px-4 py-2 bg-white border-b border-gray-200">
                <div className="flex items-center w-full bg-white shadow-md rounded-full overflow-hidden border border-gray-200 focus-within:ring-2 focus-within:ring-yellow-400">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="flex-1 px-3 py-2 outline-none text-gray-700"
                    />
                    <button className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500 shadow-md transform hover:scale-105 transition">
                        <FaSearch className="text-white text-lg" />
                    </button>
                </div>
            </div>

            <nav className="bg-white border-b border-gray-200 hidden md:block">
                <ul className="flex flex-wrap items-center justify-center space-x-6 text-gray-800 text-sm font-medium tracking-wide py-3">
                    <li>
                        <a href="/" className="hover:text-yellow-600 px-2">
                            Home
                        </a>
                    </li>

                    <li className="relative group">
                        <button className="hover:text-yellow-600 flex items-center gap-1 px-2">
                            Puja Essentials <FaAngleDown />
                        </button>
                        <div className="dropdown hidden absolute left-0 top-full bg-white shadow-lg border rounded-md w-40 z-10 group-hover:block">
                            <a href="#" className="block px-4 py-2 hover:bg-yellow-100">
                                Puja Samagri
                            </a>
                            <a href="#" className="block px-4 py-2 hover:bg-yellow-100">
                                Yantras
                            </a>
                            <a href="#" className="block px-4 py-2 hover:bg-yellow-100">
                                Incense & Diyas
                            </a>
                        </div>
                    </li>

                    <li>
                        <a href="#" className="hover:text-yellow-600 px-2">
                            Astrology
                        </a>
                    </li>

                    <li className="relative group">
                        <button className="hover:text-yellow-600 flex items-center gap-1 px-2">
                            Healing Remedies <FaAngleDown />
                        </button>
                        <div className="dropdown hidden absolute left-0 top-full bg-white shadow-lg border rounded-md w-44 z-10 group-hover:block">
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
                    </li>

                    <li>
                        <a href="#" className="hover:text-yellow-600 px-2">
                            Idols & Statues
                        </a>
                    </li>

                    <li className="relative group">
                        <button className="hover:text-yellow-600 flex items-center gap-1 px-2">
                            Veda Store <FaAngleDown />
                        </button>
                        <div className="dropdown hidden absolute left-0 top-full bg-white shadow-lg border rounded-md w-44 z-10 group-hover:block">
                            <a href="#" className="block px-4 py-2 hover:bg-yellow-100">
                                All Products
                            </a>
                            <Link href="/rudraksha" className="block px-4 py-2 hover:bg-yellow-100">
                                Rudraksha
                            </Link>
                            <a href="#" className="block px-4 py-2 hover:bg-yellow-100">
                                Gems
                            </a>
                            <Link href="/bracelet" className="block px-4 py-2 hover:bg-yellow-100">
                                Bracelet
                            </Link>
                        </div>
                    </li>

                    <li className="relative group">
                        <button className="hover:text-yellow-600 flex items-center gap-1 px-2">
                            Support <FaAngleDown />
                        </button>
                        <div className="dropdown hidden absolute left-0 top-full bg-white shadow-lg border rounded-md w-44 z-10 group-hover:block">
                            <a href="#" className="block px-4 py-2 hover:bg-yellow-100">
                                Contact Us
                            </a>
                            <a href="#" className="block px-4 py-2 hover:bg-yellow-100">
                                FAQ
                            </a>
                        </div>
                    </li>

                    <li>
                        <a href="#" className="hover:text-yellow-600 px-2">
                            Rewards
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-yellow-600 px-2">
                            Veda Wisdom
                        </a>
                    </li>
                </ul>
            </nav>

            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-b border-gray-200 px-4 py-3 space-y-2">
                    <a href="/" className="block py-1 hover:text-yellow-600">
                        Home
                    </a>

                    <div>
                        <button
                            onClick={() => toggleDropdown('puja')}
                            className="flex justify-between w-full py-1 hover:text-yellow-600"
                        >
                            Puja Essentials <FaAngleDown />
                        </button>
                        {openDropdown === 'puja' && (
                            <div className="pl-4 space-y-1">
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
                    </div>

                    <a href="#" className="block py-1 hover:text-yellow-600">
                        Astrology
                    </a>

                    <div>
                        <button
                            onClick={() => toggleDropdown('healing')}
                            className="flex justify-between w-full py-1 hover:text-yellow-600"
                        >
                            Healing Remedies <FaAngleDown />
                        </button>
                        {openDropdown === 'healing' && (
                            <div className="pl-4 space-y-1">
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
                    </div>

                    <a href="#" className="block py-1 hover:text-yellow-600">
                        Idols & Statues
                    </a>

                    <div>
                        <button
                            onClick={() => toggleDropdown('veda')}
                            className="flex justify-between w-full py-1 hover:text-yellow-600"
                        >
                            Veda Store <FaAngleDown />
                        </button>
                        {openDropdown === 'veda' && (
                            <div className="pl-4 space-y-1">
                                <a href="#" className="block hover:text-yellow-600">
                                    All Products
                                </a>
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

                    <div>
                        <button
                            onClick={() => toggleDropdown('support')}
                            className="flex justify-between w-full py-1 hover:text-yellow-600"
                        >
                            Support <FaAngleDown />
                        </button>
                        {openDropdown === 'support' && (
                            <div className="pl-4 space-y-1">
                                <a href="#" className="block hover:text-yellow-600">
                                    Contact Us
                                </a>
                                <a href="#" className="block hover:text-yellow-600">
                                    FAQ
                                </a>
                            </div>
                        )}
                    </div>

                    <a href="#" className="block py-1 hover:text-yellow-600">
                        Rewards
                    </a>
                    <a href="#" className="block py-1 hover:text-yellow-600">
                        Veda Wisdom
                    </a>
                </div>
            )}
        </div>
    )
}
