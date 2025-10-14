"use client"
import Link from "next/link"
import { useAuth } from "@/context/useAuth"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { FaUser, FaBars, FaAngleDown, FaShoppingCart, FaSearch } from "react-icons/fa"
import { LogOut } from "lucide-react"
import Cart from "./Cart"
import Searchbar from "./Searchbar"
import { Separator } from "./ui/separator"

export default function Navbar() {
    const { user, logout } = useAuth()

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

                <div className="relative hidden w-1/2 items-center md:flex">
                    <Searchbar />
                </div>

                <div className="flex items-center gap-4 text-gray-700">
                    <div className="hidden gap-2 lg:flex">
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
                    </div>

                    <Cart />
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger>
                                <FaBars className="text-2xl" />
                            </SheetTrigger>
                            <SheetContent side="left">
                                <SheetHeader className="px-6">
                                    <SheetTitle>
                                        <Link href="/" className="flex items-center gap-1">
                                            Veda <span className="bg-yellow-500 px-1">Structure</span>
                                        </Link>
                                    </SheetTitle>
                                    <Separator className="bg-yellow-500" />
                                </SheetHeader>
                                <ul className="space-y-2 divide-y px-6">
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Collapsible>
                                            <CollapsibleTrigger className="flex items-center gap-1">
                                                Account <FaAngleDown />
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <ul className="grid gap-2 px-4">
                                                    <li>
                                                        <Link href="/user/profile">Profile</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/user/orders">Orders</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/user/setting">Settings</Link>
                                                    </li>
                                                </ul>
                                            </CollapsibleContent>
                                        </Collapsible>
                                    </li>
                                    <li>
                                        <Link href="/yagya-puja">Yagya | Puja</Link>
                                    </li>
                                    <li>
                                        <Link href="/astrology">Astrology</Link>
                                    </li>
                                    <li>
                                        <Collapsible>
                                            <CollapsibleTrigger className="flex items-center gap-1">
                                                Veda Store <FaAngleDown />
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <ul className="grid gap-2 px-4">
                                                    <li>
                                                        <Link href="/all-products">Explore All</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/rudraksha">Rudraksha</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/bracelet">Bracelet</Link>
                                                    </li>
                                                </ul>
                                            </CollapsibleContent>
                                        </Collapsible>
                                    </li>
                                    <li>
                                        <Link href="/about">About us</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
            <div className="relative mx-auto items-center px-4 py-2 md:hidden md:w-1/2">
                {" "}
                <Searchbar />
            </div>

            <nav className="hidden border-b border-gray-200 bg-white md:block">
                <ul className="flex flex-wrap items-center justify-center space-x-6 py-3 text-sm font-medium tracking-wide text-gray-800">
                    <li>
                        <Link href="/" className="px-2 hover:text-yellow-600">
                            Home
                        </Link>
                    </li>

                    <li className="group relative">
                        <Link href="/yagya-puja" className="flex items-center gap-1 px-2 hover:text-yellow-600">
                            Yagya | Puja
                        </Link>
                    </li>

                    <li>
                        <Link href="/astrology" className="px-2 hover:text-yellow-600">
                            Astrology
                        </Link>
                    </li>

                    <li className="group relative">
                        <button className="flex items-center gap-1 px-2 hover:text-yellow-600">
                            Veda Store <FaAngleDown />
                        </button>
                        <div className="dropdown absolute top-full left-0 z-10 hidden w-44 rounded-md border bg-white shadow-lg group-hover:block">
                            <Link href="/all-products" className="block px-4 py-2 hover:bg-yellow-100">
                                Explore All
                            </Link>
                            <Link href="/rudraksha" className="block px-4 py-2 hover:bg-yellow-100">
                                Rudraksha
                            </Link>

                            <Link href="/bracelet" className="block px-4 py-2 hover:bg-yellow-100">
                                Bracelet
                            </Link>
                        </div>
                    </li>

                    <li>
                        <Link href="/blogs" className="px-2 hover:text-yellow-600">
                            Blogs
                        </Link>
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
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
