"use client"
import { useState, useEffect } from "react"
import { useAuth } from "@/context/useAuth"

export default function Profile() {
    const { user, logout } = useAuth()
    const [form, setForm] = useState(null)

    // When user is available, set form values
    useEffect(() => {
        if (user) {
            setForm({
                fullname: user.fullname || "",
                email: user.email || "",
                phone: user.phone || "",
                fulladdress: user.fulladdress || "",
                landmark: user.landmark || "",
                city: user.city || "",
                state: user.state || "",
                pincode: user.pincode || "",
            })
        }
    }, [user])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Profile updated successfully!")
        // call API here
    }

    if (!form) {
        return <p className="text-gray-500">Loading profile...</p>
    }

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Profile Details</h1>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl grid md:grid-cols-2 gap-2">
                <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input
                        type="text"
                        name="fullname"
                        value={form.fullname}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Mobile</label>
                    <input
                        type="number"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="md:col-span-2 border-t w-full"></div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium">Full Address</label>
                    <textarea name="fulladdress" id="" value={form.fulladdress} onChange={handleChange} rows="3" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <div>
                    <label className="block text-sm font-medium">Landmark</label>
                    <input
                        type="text"
                        name="landmark"
                        value={form.landmark}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">City</label>
                    <input
                        type="text"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">State</label>
                    <input
                        type="text"
                        name="state"
                        value={form.state}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Pincode</label>
                    <input
                        type="number"
                        name="pincode"
                        value={form.pincode}
                        onChange={handleChange}
                        max={999999}
                        min={100000}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="md:col-span-2 mt-4 bg-[#f4b61e] text-white px-4 py-2 rounded-md hover:bg-[#f4b61e]/80"
                >
                    Save Changes
                </button>
            </form>
        </div>
    )
}
