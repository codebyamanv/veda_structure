import AllProductPage from "@/components/AllProductPage"
import Image from "next/image"

function page() {
    return (
        <>
            <div>
                <Image src="/images/Artboard-4.jpg" width={1920} height={1080} alt="all products" className="w-full" />
            </div>
            <div className="mx-auto max-w-7xl px-4 py-10 md:py-12 lg:py-16">
                <div className="mb-6 flex flex-col justify-between gap-2 border-b pb-4 sm:flex-row">
                    <h1 className="text-2xl font-bold text-gray-800 md:text-4xl">All Products</h1>
                    <div className="flex items-center gap-2">
                        <button className="h-8 cursor-pointer rounded-full border border-dashed border-red-950 bg-yellow-100 px-4 duration-200 hover:bg-yellow-300">All</button>
                        <button className="h-8 cursor-pointer rounded-full border border-dashed border-red-950 bg-yellow-100 px-4 duration-200 hover:bg-yellow-300">Rudraksha</button>
                        <button className="h-8 cursor-pointer rounded-full border border-dashed border-red-950 bg-yellow-100 px-4 duration-200 hover:bg-yellow-300">Bracelet</button>
                    </div>
                </div>
                <AllProductPage />
            </div>
        </>
    )
}

export default page
