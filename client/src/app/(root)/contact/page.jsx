'use client'
import { useState } from "react";
import { Mail, Phone, MapPin, PhoneCall, Facebook, Instagram } from "lucide-react";

function page() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess("✅ Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSuccess(""), 4000);
    };

    return (
        <>
            <section className="min-h-screen bg-gradient-to-b from-orange-50 via-yellow-50 to-orange-100 py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-yellow-800 mb-4 relative">
                        Get in Touch
                        <span className="block w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mt-3 rounded-full shadow-md"></span>
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        We’d love to hear from you. Please fill out the form below or connect
                        through our contact details.
                    </p>

                    {/* Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">

                        {/* Image Section */}

                        <div className="flex justify-center items-center relative perspective-1000">
                            {/* Main Circle Image */}
                            <div className="transform-style-preserve-3d transition-transform duration-700 ">
                                <img
                                    src="/images/Contactus.jpg"
                                    alt="Main Ritual"
                                    className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-none hover:scale-105 transition-transform duration-500"
                                    style={{
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.3), inset 0 5px 15px rgba(255,255,255,0.2)"
                                    }}
                                />
                            </div>

                            {/* Small Overlapping Image */}
                            <div className="absolute bottom-1 right-10 transform-style-preserve-3d transition-transform duration-700">
                                <img
                                    src="/images/havan.jpg"
                                    alt="Badge"
                                    className="w-45 h-45 object-cover rounded-full border-none shadow-xl hover:scale-110 transition-transform duration-500"
                                    style={{
                                        boxShadow: "0 15px 30px rgba(0,0,0,0.3), inset 0 5px 10px rgba(255,255,255,0.15)"
                                    }}
                                />
                            </div>

                        </div>


                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-6 border border-yellow-200 relative"
                        >
                            {/* Floating Inputs */}
                            {["name", "email", "phone"].map((field, idx) => (
                                <div key={idx} className="relative">
                                    <input
                                        type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                                        name={field}
                                        required
                                        value={formData[field]}
                                        onChange={handleChange}
                                        className="peer w-full border border-yellow-300 px-3 pt-5 pb-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-400 transition placeholder-transparent"
                                        placeholder={field}
                                    />
                                    <label className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-orange-600">
                                        {field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>
                                </div>
                            ))}

                            {/* Message */}
                            <div className="relative">
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="peer w-full border border-yellow-300 px-3 pt-5 pb-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-400 transition placeholder-transparent"
                                    placeholder="Message"
                                />
                                <label className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-orange-600">
                                    Message
                                </label>
                            </div>

                            {success && (
                                <p className="text-green-600 font-medium text-sm">{success}</p>
                            )}

                            <button
                                type="submit"
                                className="w-full py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 hover:opacity-90 hover:shadow-lg transition-all duration-300"
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>

                    {/* Contact Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {[
                            { icon: <Mail />, title: "Email", detail: "care@vedastructure.com" },
                            { icon: <Phone />, title: "Phone", detail: "+91- 9634876239" },
                            { icon: <MapPin />, title: "Address", detail: "care@vedastructure.com" },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md flex items-center gap-4 border border-yellow-200 hover:shadow-xl hover:scale-105 transition-transform duration-300"
                            >
                                <span className="text-orange-500 text-2xl">{item.icon}</span>
                                <div>
                                    <p className="font-semibold text-gray-800">{item.title}</p>
                                    <p className="text-sm text-gray-600">{item.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>


                    {/* Map Section */}
                    <div className="mb-20">
                        <h3 className="text-3xl font-bold text-center text-yellow-900 mb-8 relative inline-block mx-auto">
                            Find Us on the Map
                            <span className="block w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-2 rounded-full"></span>
                        </h3>

                        <div className="relative group max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-yellow-200/70 backdrop-blur-md">
                            <iframe
                                title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.011058690995!2d83.0107637746288!3d25.31764527763627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e1f3a03f4b9%3A0x3f8f3c7!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1725625738291!5m2!1sen!2sin"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-3xl"
                            />
                            {/* Animated Overlay */}

                        </div>

                        <p className="text-center text-gray-700 mt-5 text-lg">
                            We’re just a click away – come visit us anytime!
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-8 mt-10">
                        <a
                            href={'#'}
                            target="_blank"
                            rel="noreferrer"
                            className={`group relative bg-green-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-3`}
                        >
                            {/* Glow effect */}
                            <span className="absolute inset-0 rounded-2xl bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <PhoneCall />
                        </a>
                        <a
                            href={'#'}
                            target="_blank"
                            rel="noreferrer"
                            className={`group relative bg-pink-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-3`}
                        >
                            {/* Glow effect */}
                            <span className="absolute inset-0 rounded-2xl bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <Facebook />
                        </a>
                        <a
                            href={'#'}
                            target="_blank"
                            rel="noreferrer"
                            className={`group relative bg-blue-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-3`}
                        >
                            {/* Glow effect */}
                            <span className="absolute inset-0 rounded-2xl bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <Instagram />
                        </a>

                    </div>

                </div>
            </section>
        </>
    )
}

export default page
