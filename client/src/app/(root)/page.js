import About from '@/components/Home/About'
import Banner from '@/components/Home/Banner'
import Download from '@/components/Download'
import Services from '@/components/Home/Services'
import HomepageProducts from '@/components/HomepageProducts'

export default function Home() {
    return (
        <>
            <Banner />
            <About />
            <Services />
            <section className='lg:py-16 md:py-12 py-10'>
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800" data-aos="fade-up">
                        Our Products
                    </h2>
                    <p className="text-gray-600 mt-3 text-lg" data-aos="fade-down">
                        Explore our wide range of products that cater to various needs and preferences.
                    </p>
                </div>
                <HomepageProducts />
            </section>
            {/* <Download /> */}
        </>
    )
}
