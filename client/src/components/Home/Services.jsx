import React from 'react'

const services = [
    {
        icon: '🔮',
        title: 'Astrological Consultations',
        desc: 'Personalized consultations by experienced astrologers to help you understand life challenges & make informed decisions.',
        bg: 'bg-yellow-100',
        text: 'text-yellow-500',
        aos: 'fade-right',
        delay: '100',
    },
    {
        icon: '📜',
        title: 'Horoscope Predictions',
        desc: 'Get daily, weekly, and monthly horoscope updates crafted by our expert astrologers.',
        bg: 'bg-purple-100',
        text: 'text-purple-500',
        aos: 'fade-up',
        delay: '200',
    },
    {
        icon: '🛕',
        title: 'Online Puja Services',
        desc: 'Book personalized online puja rituals with our knowledgeable pandits for your well-being.',
        bg: 'bg-pink-100',
        text: 'text-pink-500',
        aos: 'fade-left',
        delay: '300',
    },
    {
        icon: '📿',
        title: 'Vedic Products',
        desc: 'Explore authentic Vedic products including Rudraksha, malas, yantras & gemstones delivered to your doorstep.',
        bg: 'bg-green-100',
        text: 'text-green-500',
        aos: 'fade-right',
        delay: '400',
    },
    {
        icon: '📚',
        title: 'Online Courses',
        desc: 'Deepen your spiritual knowledge with our astrology & Vedic science courses available online.',
        bg: 'bg-blue-100',
        text: 'text-blue-500',
        aos: 'fade-up',
        delay: '500',
    },
    {
        icon: '📝',
        title: 'Informative Blogs',
        desc: 'Access a comprehensive library of blogs covering astrology, puja rituals, gemstones & more.',
        bg: 'bg-orange-100',
        text: 'text-orange-500',
        aos: 'fade-left',
        delay: '600',
    },
]
export default function Services() {
    return (
        <section className="bg-gray-50 py-16 px-6 md:px-20">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800" data-aos="fade-up">
                    Our Services
                </h2>
                <p className="text-gray-600 mt-3 text-lg" data-aos="fade-down">
                    Explore our comprehensive range of spiritual services designed to support your
                    journey towards inner peace and divine connection.
                </p>
            </div>

            {/* Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {services.map((service, i) => (
                    <div
                        key={i}
                        className="service-card bg-white p-6 rounded-xl shadow-md transition-all duration-300"
                        data-aos={service.aos}
                        data-aos-delay={service.delay}
                    >
                        <div
                            className={`w-14 h-14 flex items-center justify-center rounded-full ${service.bg} ${service.text} text-2xl mb-4`}
                        >
                            {service.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                        <p className="text-gray-600 mt-2 text-sm">{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
