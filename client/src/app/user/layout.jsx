import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function RootLayout({ children }) {

    const links = [
        { name: "Profile", href: "/user/profile" },
        { name: "Orders", href: "/user/orders" },
        { name: "Setting", href: "/user/setting" },
    ]

    return (
        <>
            <Navbar />
            <div className="max-w-6xl mx-auto px-4 py-10 flex gap-8">
                {/* Sidebar */}
                <aside className="md:block hidden w-60 border-r border-gray-200 pr-6">
                    <h2 className="text-lg font-bold mb-6">My Account</h2>
                    <nav className="flex flex-col gap-2">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-3 py-2 rounded-md font-medium hover:bg-gray-100`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </aside>

                {/* Page Content */}
                <main className="flex-1">{children}</main>
            </div>
            <Footer />
        </>
    )
}