import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-20 relative  overflow-hidden ">
            <div
                className="relative z-10 bg-[#f4b61e] rounded-2xl shadow-lg w-[90%] sm:w-[80%] md:w-[65%] max-w-5xl mx-auto py-6 px-2 sm:py-10 sm:px-6 md:py-12 md:px-8 text-center text-white -mb-20"
                data-aos="zoom-in-up"
                data-aos-delay="100"
                data-aos-duration="1200"
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    UNLOCK 20% OFF YOUR FIRST ORDER
                </h2>
                <p className="mt-2 text-base sm:text-lg">
                    Reveal coupon code by entering your email
                </p>

                <div
                    className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="px-4 sm:px-8 py-2 h-10 w-full sm:w-[300px] rounded-md border border-white/70 bg-transparent placeholder-white/70 text-white focus:outline-none"
                    />
                    <button className="px-6 sm:px-8 py-2 h-10 bg-green-500 hover:bg-green-600 rounded-md font-semibold w-full sm:w-auto">
                        Reveal coupon
                    </button>
                </div>
            </div>

            <div className="bg-[#081124] text-white pt-28 pb-12 px-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                    <div data-aos="fade-right" data-aos-delay="200">
                        <img src="/images/footer-logo.png" className="h-12" alt="Logo" />
                        <p className="mt-6 text-sm leading-relaxed text-gray-300">
                            We bring you authentic spiritual products like Rudraksha, healing bracelets, and sacred items, along with trusted Puja and Astrology services. Our aim is to guide you on your spiritual journey with purity, devotion, and care.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="300">
                        <h3 className="text-lg font-semibold mb-4">QUICK LINK</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/astrology" className="hover:text-yellow-300">
                                    Astrology
                                </Link>
                            </li>
                            <li>
                                <Link href="/bracelet" className="hover:text-yellow-300">
                                    Buy Bracelets
                                </Link>
                            </li>
                            <li>
                                <Link href="/rudraksha" className="hover:text-yellow-300">
                                    Buy Rudraksha
                                </Link>
                            </li>
                            <li>
                                <Link href="/puja" className="hover:text-yellow-300">
                                    Puja
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-yellow-300">
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="400">
                        <h3 className="text-lg font-semibold mb-4">MORE</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-yellow-300">
                                    Mushrooms
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-yellow-300">
                                    Promotions / Bundles
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-yellow-300">
                                    Support
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-yellow-300">
                                    Reward
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-yellow-300">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-yellow-300">
                                    Shipping Faq
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div data-aos="fade-left" data-aos-delay="500">
                        <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-yellow-300">info@topshelfbcc.cc</li>
                            <li className="hover:text-yellow-300">+1 9279348162</li>
                            <li className="hover:text-yellow-300">info@topshelfbcc.cc</li>
                        </ul>
                    </div>
                </div>

                <div
                    className="mt-10 border-t border-white/20 pt-10 flex justify-start gap-4"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    <img src="/images/visa.jpg" className="h-7" alt="Visa" />
                    <img src="/images/paypal.jpg" className="h-7" alt="Paypal" />
                    <img src="/images/card.jpg" className="h-7" alt="Card" />
                </div>
            </div>

            <div className="relative z-20 bg-[#111827] py-4 px-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-300 gap-3 overflow-hidden ">
                <div>© 2025 Rudraksha Store. All Rights Reserved.</div>
                <div className="flex gap-4">
                    <Link href="terms-and-condition" className="hover:text-white">
                        Terms & Conditions
                    </Link>
                    <Link href="privacy-policy" className="hover:text-white">
                        Privacy Policy
                    </Link>
                    <Link href="refund-policy" className="hover:text-white">
                        Refund Policy
                    </Link>
                </div>
            </div>
        </footer>
    )
}
