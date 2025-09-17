import AboutVidComp from "@/components/AboutVidComp";
import Stat from "@/components/Stat";
import Link from "next/link";

const features = [
    {
        imageSrc: "https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp",
        title: "Latest Milling Machinery",
    },
    {
        imageSrc: "https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp",
        title: "Reasonable Rates",
    },
    {
        imageSrc: "https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp",
        title: "Time Efficiency",
    },
    {
        imageSrc: "https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp",
        title: "Expertise in Industry",
    },
];

const images = [
    {
        src: '/images/tp_img/rudraks.jpg',
        alt: "Woman with a dog",
        rotation: "rotate-6",
        link: '/rudraksha'
    },
    {
        src: '/images/tp_img/yantra.jpg',
        alt: "Man taking a photo",
        rotation: "-rotate-12",
        link: '#'
    },
    {
        src: '/images/tp_img/gemstone.jpg',
        alt: "Cityscape at dusk",
        rotation: "rotate-6",
        link: '#'
    },
    {
        src: '/images/tp_img/seven_c.jpg',
        alt: "Person sitting with a laptop",
        rotation: "-rotate-12",
        link: '#'
    },
];

const reviewsData = [
    {
        name: 'Daniella Doe',
        title: 'Mobile dev',
        avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
        review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos
    illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam
    ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
    aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
    reprehenderit, veritatis harum et rerum.`,
    },
    {
        name: 'gayatri',
        title: 'bracelete',
        avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
        review: `Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore
    cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.`,
    },
    {
        name: 'Yanick Doe',
        title: 'Developer',
        avatar: 'https://randomuser.me/api/portraits/women/18.jpg',
        review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
    aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
    reprehenderit, veritatis harum et rerum.`,
    },
    {
        name: 'Jane Doe',
        title: 'Mobile dev',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
    aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
    reprehenderit, veritatis harum et rerum.`,
    },
    {
        name: 'Andy Doe',
        title: 'Manager',
        avatar: 'https://randomuser.me/api/portraits/women/62.jpg',
        review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam
    deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
    reprehenderit, veritatis harum et rerum.`,
    },
    {
        name: 'Yanndy Doe',
        title: 'Mobile dev',
        avatar: 'https://randomuser.me/api/portraits/women/19.jpg',
        review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti
    aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at
    reprehenderit, veritatis harum et rerum.`,
    },
];

function page() {
    return (
        <>
            <div className="relative overflow-hidden min-h-[550px] sm:min-h-[560px] px-4 bg-gradient-to-r from-yellow-300 via-orange-200 to-yellow-300 bg-[length:200%_200%] animate-[gradient-animation_10s_ease-in-out_infinite] flex justify-center items-center dark:bg-gray-950 dark:text-white rounded-xl">
                <div className="container pb-8 sm:pb-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col justify-center gap-4 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                            <h1
                                data-aos="zoom-out"
                                data-aos-duration="500"
                                data-aos-once="true"
                                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-red-950/85"
                            >
                                Your one-stop shop for all things Vedic
                            </h1>
                            <p
                                data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-delay="100"
                                className="text-lg text-yellow-800"
                            >
                                From gemstones to yantras, explore our curated collection of authentic Vedic products.
                            </p>
                        </div>
                        <div className="order-1 sm:order-2">
                            <div
                                data-aos="zoom-in"
                                data-aos-once="true"
                                className="relative z-10"
                            >
                                <img
                                    src={'/images/about-hero-img.png'}
                                    alt=""
                                    className="max-h-[400px] object-contain mx-auto "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-gray-700 body-font">
                <div className="flex justify-center mt-12 text-4xl font-semibold">
                    Why Us?
                </div>
                <div className="container px-5 py-6 mx-auto">
                    <div className="flex flex-wrap text-center justify-center">
                        {features.map((feature, index) => (
                            <div className="p-4 md:w-1/4 sm:w-1/2" key={index}>
                                <div className="duration-500">
                                    <div className="flex justify-center">
                                        <img src={feature.imageSrc} className="w-32 mb-3" alt={feature.title} />
                                    </div>
                                    <h2 className="title-font font-regular text-xl text-neutral-800">{feature.title}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="bg-gray-100">
                <div className="pt-10">
                    <h3 className="text-4xl font-bold text-center text-red-800">Top Products</h3>
                </div>

                <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 flex flex-col justify-center">
                    <div className="flex flex-col sm:flex-row mx-auto">
                        {images.map((image, index) => (
                            <Link key={index} href={image.link}>
                                <img
                                    src={image.src}
                                    className={`rounded-xl ${image.rotation} hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom`}
                                    alt={image.alt}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative isolate overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-y-0 right-1/2 -z-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-gray-200/50 sm:right-1/2 sm:skew-x-0 md:right-2/3"></div>
                    <div className="absolute left-0 top-0 -z-20 h-1/3 w-full rounded-b-full bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 blur-3xl"></div>
                    <div className="absolute right-0 bottom-0 -z-20 h-1/3 w-full rounded-t-full bg-gradient-to-l from-yellow-400/10 to-yellow-500/10 blur-3xl"></div>
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in [animation-fill-mode:both] [animation-delay:200ms]">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbec4b] to-[#dccb1a]">Veda Structure</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-[#ebc622] to-[#e5c638] mx-auto mb-6 rounded-full animate-grow [animation-fill-mode:both] [animation-delay:400ms]"></div>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-fill-mode:both] [animation-delay:600ms]">
                            Veda Structure is your one-stop shop for all astrology needs. Established in 2022, we are a team of highly qualified astrologers, pundits, and experts dedicated to providing a safe, efficient, pleasant, and personalized experience in the field of astrology, numerology, horoscope prediction, Vedic Puja and various related products.
                        </p>
                    </div>
                    <AboutVidComp />
                </div>
            </div>

            <div className="container bg-red-900/5 w-[95%] justify-center items-center mx-auto my-12 pb-12 px-4 rounded-lg">
                <div className='flex flex-col justify-center items-center py-12 p-6'>
                    <h2 className='text-2xl font-bold mb-1 text-red-900'>Our Services</h2>
                    <p className='text-orange-400 flex justify-center'>Explore our spiritual services to guide your journey toward inner peace and divine connection.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6'>

                    <div
                        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-400 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-white transition-all duration-300 group-hover:bg-red-900">

                                <img src={'/images/Services_img/s1.png'} alt="" className="h-15 w-15" />
                            </span>
                            <h1 className='text-lg font-semibold text-red-900'>Astrology Consultations</h1>
                            <div
                                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p>Our experienced pandits offer personalized consultations to help you understand your unique astrological profile, navigate life challenges, and make informed decisions.</p>
                            </div>
                            <div className="pt-5 text-base font-semibold leading-7">
                                <p>
                                    <a href="#" className="text-yellow-500 transition-all duration-300 group-hover:text-white">Read the docs
                                        &rarr;
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-400 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-white transition-all duration-300 group-hover:bg-red-900">

                                <img src={'/images/Services_img/s2.png'} alt="" className="h-15 w-15" />
                            </span>
                            <h1 className='text-lg font-semibold text-red-900'>Horoscope Predictions</h1>
                            <div
                                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p>Get regular horoscope predictions on our website to gain insights into your daily, weekly, monthly, and yearly outlooks.</p>
                            </div>
                            <div className="pt-5 text-base font-semibold leading-7">
                                <p>
                                    <a href="#" className="text-yellow-500 transition-all duration-300 group-hover:text-white">Read the docs
                                        &rarr;
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-400 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-white transition-all duration-300 group-hover:bg-red-900">

                                <img src={'/images/Services_img/s3.png'} alt="" className="h-15 w-15" />
                            </span>
                            <h1 className='text-lg font-semibold text-red-900'>Vedic Products</h1>
                            <div
                                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p>Explore our wide range of authentic Vedic products, including gemstones, rudraksha beads, yantras, and other spiritual items, delivered conveniently to your doorstep.</p>
                            </div>
                            <div className="pt-5 text-base font-semibold leading-7">
                                <p>
                                    <a href="#" className="text-yellow-500 transition-all duration-300 group-hover:text-white">Read the docs
                                        &rarr;
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-400 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-white transition-all duration-300 group-hover:bg-red-900">

                                <img src={'/images/Services_img/s4.png'} alt="" className="h-15 w-15" />
                            </span>
                            <h1 className='text-lg font-semibold text-red-900'>Informative Blogs</h1>
                            <div
                                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p>Access our comprehensive library of informative blogs covering various aspects of astrology, spirituality, and Vedic wisdom to enhance your knowledge.</p>
                            </div>
                            <div className="pt-5 text-base font-semibold leading-7">
                                <p>
                                    <a href="#" className="text-yellow-500 transition-all duration-300 group-hover:text-white">Read the docs
                                        &rarr;
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-400 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-white transition-all duration-300 group-hover:bg-red-900">

                                <img src={'/images/Services_img/s5.png'} alt="" className="h-15 w-15" />
                            </span>
                            <h1 className='text-lg font-semibold text-red-900'>Online Courses</h1>
                            <div
                                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p>Deepen your astrological knowledge and understanding with our comprehensive online courses led by our expert pandits.</p>
                            </div>
                            <div className="pt-5 text-base font-semibold leading-7">
                                <p>
                                    <a href="#" className="text-yellow-500 transition-all duration-300 group-hover:text-white">Read the docs
                                        &rarr;
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-400 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-white transition-all duration-300 group-hover:bg-red-900">

                                <img src={'/images/Services_img/s6.png'} alt="" className="h-15 w-15" />
                            </span>
                            <h1 className='text-lg font-semibold text-red-900'>Online Puja Services</h1>
                            <div
                                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p>Experience the convenience of our online puja services. Our knowledgeable pandits will perform pujas on your behalf according to your specific needs and traditions.</p>
                            </div>
                            <div className="pt-5 text-base font-semibold leading-7">
                                <p>
                                    <a href="#" className="text-yellow-500 transition-all duration-300 group-hover:text-white">Read the docs
                                        &rarr;
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-400 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-white transition-all duration-300 group-hover:bg-red-900">

                                <img src={'/images/Services_img/s7.png'} alt="" className="h-15 w-15" />
                            </span>
                            <h1 className='text-lg font-semibold text-red-900'>Online Pandit Services</h1>
                            <div
                                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p>Connect with our experienced pandits for personalized guidance and assistance with various aspects of Hinduism, including puja ceremonies, sloka recitations, and spiritual counseling.</p>
                            </div>
                            <div className="pt-5 text-base font-semibold leading-7">
                                <p>
                                    <a href="#" className="text-yellow-500 transition-all duration-300 group-hover:text-white">Read the docs
                                        &rarr;
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-400 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-white transition-all duration-300 group-hover:bg-red-900">

                                <img src={'/images/Services_img/s8.png'} alt="" className="h-15 w-15" />
                            </span>
                            <h1 className='text-lg font-semibold text-red-900'>Puja In Varanasi</h1>
                            <div
                                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p>Fulfill your desire to perform pujas in the holy city of Varanasi. We offer puja services performed by our pandits in Varanasi, adhering to the specific guidelines outlined in the Kashi Khand.</p>
                            </div>
                            <div className="pt-5 text-base font-semibold leading-7">
                                <p>
                                    <a href="#" className="text-yellow-500 transition-all duration-300 group-hover:text-white">Read the docs
                                        &rarr;
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-400 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-white transition-all duration-300 group-hover:bg-red-900">

                                <img src={'/images/Services_img/s9.png'} alt="" className="h-15 w-15" />
                            </span>
                            <h1 className='text-lg font-semibold text-red-900'>Rudraksha & Gemstones</h1>
                            <div
                                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <p>We provide a curated selection of authentic rudraksha beads and gemstones, each chosen for its specific qualities and potential benefits.</p>
                            </div>
                            <div className="pt-5 text-base font-semibold leading-7">
                                <p>
                                    <a href="#" className="text-yellow-500 transition-all duration-300 group-hover:text-white">Read the docs
                                        &rarr;
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Stat />

            <div className="text-gray-600 dark:text-gray-300 pt-8" id="reviews">
                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <div className="mb-10 space-y-4 px-6 md:px-0">
                        <h2 className="text-center text-2xl font-bold text-yellow-600 dark:text-white md:text-4xl pt-5">
                            What Our Devotees Say.
                        </h2>
                    </div>

                    <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {reviewsData.map((review, index) => (
                            <div
                                key={index}
                                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-xl hover:scale-105 transition-transform hover:bg-red-900/15 hover:text-red-950"
                            >
                                <div className="flex gap-4">
                                    <img
                                        className="w-12 h-12 rounded-full"
                                        src={review.avatar}
                                        alt="user avatar"
                                        width="400"
                                        height="400"
                                        loading="lazy"
                                    />
                                    <div>
                                        <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                                            {review.name}
                                        </h6>
                                        <p className="text-sm text-gray-500 dark:text-gray-300 ">
                                            {review.title}
                                        </p>
                                    </div>
                                </div>
                                <p className="mt-8">{review.review}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-4 mx-auto bg-white rounded-2xl shadow-md max-w-4xl sm:p-6 grid grid-cols-1 lg:grid-cols-6 gap-6 my-12 border border-yellow-500">
                {/* Review Form Section */}
                <div className="lg:col-span-4 col-span-1">
                    <form action="" method="POST" className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                            Write a review
                        </h2>
                        {/* Star Rating Inputs */}
                        <div className="flex justify-start items-center space-x-1 mb-4">
                            {/* 5-star rating */}
                            <input type="radio" id="5-stars" name="rating" value="5" className="hidden" />
                            <label htmlFor="5-stars" className="text-yellow-400 text-2xl cursor-pointer hover:scale-110">★</label>
                            {/* 4-star rating */}
                            <input type="radio" id="4-stars" name="rating" value="4" className="hidden" />
                            <label htmlFor="4-stars" className="text-yellow-400 text-2xl cursor-pointer hover:scale-110">★</label>
                            {/* 3-star rating */}
                            <input type="radio" id="3-stars" name="rating" value="3" className="hidden" />
                            <label htmlFor="3-stars" className="text-yellow-400 text-2xl cursor-pointer hover:scale-110">★</label>
                            {/* 2-star rating */}
                            <input type="radio" id="2-stars" name="rating" value="2" className="hidden" />
                            <label htmlFor="2-stars" className="text-yellow-400 text-2xl cursor-pointer hover:scale-110">★</label>
                            {/* 1-star rating */}
                            <input type="radio" id="1-star" name="rating" value="1" className="hidden" />
                            <label htmlFor="1-star" className="text-yellow-400 text-2xl cursor-pointer hover:scale-110">★</label>
                        </div>
                        {/* Review Text Area */}
                        <textarea
                            id="review"
                            name="review"
                            rows="4"
                            required={true}
                            className="block w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Write your review"
                        ></textarea>
                        {/* Action Button */}
                        <div className="text-right py-4">
                            <a
                                href="/user"
                                className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-3"
                            >
                                Login to Post Review
                            </a>
                        </div>
                    </form>
                </div>

                {/* Ratings Summary Section */}
                <div className="lg:col-span-2 hidden lg:flex flex-col space-y-4">
                    {/* Overall Rating */}
                    <div className="flex items-center">
                        <span className="text-yellow-400 text-xl">★★★★★</span>
                        <p className="ml-2 text-sm font-medium text-gray-900">0 out of 0</p>
                    </div>
                    <p className="text-sm font-medium text-gray-500">0 global ratings</p>

                    {/* Individual Star Ratings Progress Bars */}
                    <div className="flex items-center mt-2">
                        <span className="text-sm font-medium text-blue-600 hover:underline shrink-0">5 star</span>
                        <div className="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                            <div className="h-4 bg-yellow-400 rounded" style={{ width: '50%' }}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500">0%</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-sm font-medium text-blue-600 hover:underline shrink-0">4 star</span>
                        <div className="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                            <div className="h-4 bg-yellow-400 rounded" style={{ width: '25%' }}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500">0%</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-sm font-medium text-blue-600 hover:underline shrink-0">3 star</span>
                        <div className="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                            <div className="h-4 bg-yellow-400 rounded" style={{ width: '10%' }}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500">0%</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-sm font-medium text-blue-600 hover:underline shrink-0">2 star</span>
                        <div className="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                            <div className="h-4 bg-yellow-400 rounded" style={{ width: '5%' }}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500">0%</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-sm font-medium text-blue-600 hover:underline shrink-0">1 star</span>
                        <div className="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                            <div className="h-4 bg-yellow-400 rounded" style={{ width: '10%' }}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500">0%</span>
                    </div>
                </div>
            </div>

            <div
                className=" container mx-auto mt-10 mb-10 sm:h-[200px] h-[400px] max-w-4xl bg-gradient-to-r  from-yellow-400  via-orange-300  to-yellow-400  bg-[length:200%_200%]  animate-[gradient-animation_10s_ease-in-out_infinite] flex items-center justify-center  text-white  text-5xl  font-extrabold  rounded-xl
        "
            >
                <div className='flex items-center gap-10 sm:flex-row flex-col justify-between'>
                    <div>
                        <img src={'/images/phone_app/m_app.png'} alt="" className='w-30 h-50 align-left mt-[-40px] transform transition duration-300 ease-in-out hover:rotate-5' />
                    </div>
                    <div className='text-center mt-[-40px]'>
                        <h1 className='text-3xl font-bold text-red-900'>Download Our Mobile App</h1>
                        <p className='text-lg text-white mt-2'>Get access to exclusive offers and a seamless shopping experience.</p>
                        <div className='flex gap-4 justify-center mt-4'>
                            <img src={'/images/phone_app/G_play.png'} alt="Google Play Store" className='w-32 h-10 cursor-pointer transform transition duration-300 ease-in-out hover:scale-105' />
                            <img src={'/images/phone_app/App_store.png'} alt="Apple App Store" className='w-32 h-10 cursor-pointer transform transition duration-300 ease-in-out hover:scale-105' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default page
