'use client'
import { useEffect } from 'react'
import '@splidejs/react-splide/css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

function Banner() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out',
            once: true,
        })
    }, [])

    return (
        <Splide
            aria-label="Banner Slides"
            options={{
                type: 'loop',
                autoplay: true,
                interval: 4000,
                pauseOnHover: false,
                pauseOnFocus: false,
                arrows: false,
                pagination: false,
            }}
        >
            {/* Slide 1 */}
            <SplideSlide className="relative lg:max-h-[500px] lg:h-[500px] max-h-[600px] h-[600px] w-full">
                <div className="relative h-full w-full">
                    <video
                        src="/images/praying.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls={false}
                        className="absolute inset-0 z-0 w-full h-full object-cover"
                    ></video>
                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/20 to-transparent"></div>
                    <div className="absolute z-50 md:p-16 sm:p-12 p-8">
                        <div className="space-y-5">
                            <div className="bg-white/90 text-orange-500 px-4 py-1 rounded-full w-fit">
                                Spiritual wellness
                            </div>
                            <h1 className="text-5xl font-bold text-white">Inner Peace</h1>
                            <h2 className="opacity-90 text-orange-500 font-bold">
                                Sacred Healing Products
                            </h2>
                            <p className=" text-white mt-4 lg:w-1/2">
                                {' '}
                                Discover ancient wisdom through our collection of authentic
                                spiritual products. Find peace, prosperity, and spiritual growth
                                with sacred items.
                            </p>
                            <div className="flex gap-3 flex-wrap">
                                <div className="bg-white px-4 py-1 rounded-full font-semibold">
                                    Rudraksha Beads
                                </div>
                                <div className="bg-white px-4 py-1 rounded-full font-semibold">
                                    Sacred Gemstones
                                </div>
                                <div className="bg-white px-4 py-1 rounded-full font-semibold">
                                    Spiritual Jewelry
                                </div>
                            </div>
                            <div>
                                <Link
                                    className="flex items-center  gap-2 border w-fit border-orange-400 text-white  px-4 py-1 rounded-full group font-black hover:bg-orange-500 hover:text-white hover:shadow-2xl transition-all"
                                    alt="url"
                                    href="/rudraksha"
                                >
                                    <span>Rudraksha Products </span>
                                    <span className="group-hover:translate-x-1 transition-all">
                                        <ArrowRight />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide className="relative lg:max-h-[500px] lg:h-[500px] max-h-[600px] h-[600px] w-full">
                <div className="relative h-full w-full">
                    <video
                        src="/images/diya-light.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls={false}
                        className="absolute inset-0 z-0 w-full h-full object-cover"
                    ></video>
                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
                    <div className="absolute z-50 md:p-16 sm:p-12 p-8">
                        <div className="space-y-5">
                            <div className="bg-white/90 text-orange-500 px-4 py-1 rounded-full w-fit">
                                Traditional Puja Services
                            </div>
                            <h1 className="text-5xl font-bold text-white">Divine Blessings</h1>
                            <h2 className="opacity-90 text-orange-500 font-bold">
                                Authentic Puja Ceremonies
                            </h2>
                            <p className=" text-white mt-4 lg:w-1/2">
                                {' '}
                                Experience the power of traditional Hindu rituals with our expert
                                pandits. Book Online puja services and receive blessings at your
                                doorstep.
                            </p>
                            <div className="flex gap-3 flex-wrap">
                                <div className="bg-white px-4 py-1 rounded-full font-semibold">
                                    Rudraksha Beads
                                </div>
                                <div className="bg-white px-4 py-1 rounded-full font-semibold">
                                    Sacred Gemstones
                                </div>
                                <div className="bg-white px-4 py-1 rounded-full font-semibold">
                                    Spiritual Jewelry
                                </div>
                            </div>
                            <div>
                                <Link
                                    className="flex items-center  gap-2 border w-fit border-orange-400 text-white  px-4 py-1 rounded-full group font-black hover:bg-orange-500 hover:text-white hover:shadow-2xl transition-all"
                                    alt="url"
                                    href="/rudraksha"
                                >
                                    <span>Book Puja now</span>
                                    <span className="group-hover:translate-x-1 transition-all">
                                        <ArrowRight />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </SplideSlide>
        </Splide>
    )
}

export default Banner
