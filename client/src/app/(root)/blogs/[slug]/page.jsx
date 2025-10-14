// app/blog/[slug]/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { use, useEffect, useState } from "react"
import { getBlog } from "@/apis/controllers/blogController"

export default function BlogDetail({ params }) {
    const { slug } = use(params)

    const [blog, setBlog] = useState(null)

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await getBlog(slug)
                setBlog(res?.data || {})
            } catch (error) {
                console.error("Error fetching blog:", error)
            }
        }
        fetchBlog()
    }, [slug])

    if (!blog) return <p className="mt-20 text-center text-gray-500">Blog not found</p>

    return (
        <div className="mx-auto max-w-5xl p-6 md:p-10">
            <Link href="/blogs" className="mb-8 flex items-center text-sm text-orange-500 transition-colors duration-300 hover:text-orange-500">
                <ChevronLeft className="mr-2 h-4 w-4" /> Back to Blogs
            </Link>

            {/* Hero Image & Title Section */}
            <div className="relative text-center">
                <div className="relative mb-8">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent via-black/30 to-black/60"></div>
                    <Image src={blog?.image} alt={blog?.title} width={1920} height={1080} className="h-[400px] w-full rounded-lg object-cover shadow-lg" />
                </div>
                <div className="right-0 bottom-4 left-0 px-6">
                    <h1 className="text-3xl font-bold text-orange-500 md:text-5xl">{blog?.title}</h1>
                </div>
                <div className="mt-4 flex flex-col items-center justify-center gap-3 text-sm text-gray-500 md:flex-row">
                    <div className="flex items-center space-x-2">
                        <div className="flex size-8 items-center justify-center rounded-full">
                            <Image src={blog?.author?.avatar} alt={blog?.title} width={1920} height={1080} className="w-full rounded-lg object-cover" />
                        </div>
                        <span className="font-medium">{blog?.author?.fullname}</span>
                    </div>
                    <span className="hidden md:inline">•</span>
                    <span>{new Date(blog?.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
                </div>
            </div>

            {/* Divider */}
            <div className="my-10 border-t border-gray-200" />

            {/* Blog Content */}
            <article
                className="prose prose-lg prose-orange prose-img:rounded-lg prose-headings:text-gray-900 prose-p:text-gray-700 mx-auto max-w-none leading-relaxed text-gray-800"
                dangerouslySetInnerHTML={{ __html: blog?.content }}
            />

            {/* Decorative Gradient Footer */}
            <div className="mt-16 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 p-[1px]">
                <div className="rounded-2xl bg-white p-6 text-center">
                    <h2 className="mb-2 text-2xl font-bold text-orange-500">✨ Thank you for reading!</h2>
                    <p className="text-gray-500">Stay tuned for more spiritual insights and practices to elevate your soul.</p>
                    <Link href="/blogs" className="mt-4 inline-block rounded-lg bg-orange-500 px-6 py-2 text-white transition-colors duration-300 hover:bg-orange-600">
                        Back to All Blogs
                    </Link>
                </div>
            </div>
        </div>
    )
}
