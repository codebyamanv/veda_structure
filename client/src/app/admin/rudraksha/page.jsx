'use client'
import { deleteRudraksha } from '@/apis/controllers/rudrakshaController'
import useRudraksha from '@/hooks/useRudraksha'
import { Pen, Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
export default function Rudraksha() {
    const { rudraksha, refetchRudraksha } = useRudraksha()
    console.log(rudraksha)
    const handleDelete = async (id) => {
        await deleteRudraksha(id)
        await refetchRudraksha()
    }
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 relative">
                {rudraksha?.map((item) => (
                    <div className="bg-white rounded-2xl shadow-lg relative" key={item?._id}>
                        <div className="flex justify-end gap-2 m-2">
                            <Link
                                href={`/admin/edit-rudraksha/${item._id}`}
                                className="mt-3 aspect-square w-10 grid place-items-center bg-secondary cursor-pointer text-primary border rounded font-semibold shadow-md hover:shadow-lg transition-all"
                                title="edit product"
                            >
                                <Pen />
                            </Link>
                            <button
                                onClick={() => handleDelete(item?._id)}
                                className="mt-3 aspect-square w-10 grid place-items-center bg-secondary hover:bg-destructive cursor-pointer  text-primary border rounded font-semibold shadow-md hover:shadow-lg transition-all"
                                title="remove product"
                            >
                                <Trash />
                            </button>
                        </div>
                        <div className="relative w-full" key={item?.id}>
                            <div className="grid grid-cols-2 gap-2 p-4">
                                {item.productImage.map((url) => (
                                    <Image
                                        src={url}
                                        alt={item?.productName}
                                        className="inline-block h-full w-full object-contain 
                                            transition-transform duration-500"
                                        width={500}
                                        height={500}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-lg text-gray-800">
                                {item?.productName}
                            </h3>
                            <div>
                                <p>Price: ₹{item?.productPrice}</p>
                                <p>Discount: {item?.productDiscount}%</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
