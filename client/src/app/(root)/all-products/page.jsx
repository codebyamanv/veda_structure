import AllProductPage from "@/components/AllProductPage"
import Image from "next/image"

function page() {
    return (
        <>
            <div>
                <Image src="/images/all-products.jpeg" width={1920} height={1080} alt="all products" className="w-full" />
            </div>
            <div className="max-w-7xl mx-auto lg:py-16 md:py-12 py-10 px-4">
                <div className="flex sm:flex-row flex-col gap-2 justify-between border-b pb-4 mb-6">
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-800">All Products</h1>
                    <div className="flex gap-2 items-center">
                        <button className="bg-yellow-100 px-4 h-8 rounded-full border border-dashed border-red-950 cursor-pointer hover:bg-yellow-300 duration-200">All</button>
                        <button className="bg-yellow-100 px-4 h-8 rounded-full border border-dashed border-red-950 cursor-pointer hover:bg-yellow-300 duration-200">Rudraksha</button>
                        <button className="bg-yellow-100 px-4 h-8 rounded-full border border-dashed border-red-950 cursor-pointer hover:bg-yellow-300 duration-200">Bracelet</button>
                    </div>
                </div>
                <AllProductPage />
            </div>
        </>
    )
}

export default page
