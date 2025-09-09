'use client'

import { allOrders } from '@/apis/controllers/orderController'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export default function Order() {
    const [orders, setOrders] = useState([])

    const fetchOrders = async () => {
        try {
            const res = await allOrders()
            setOrders(res?.data?.orders || [])
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchOrders()
    }, [])

    return (
        <section className="max-w-7xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">All Orders</h1>

            {orders.length === 0 ? (
                <p className="text-gray-600">No orders found.</p>
            ) : (
                <div className="space-y-6">
                    {orders.map((order) => (
                        <div key={order._id} className="border rounded-lg shadow-sm p-6 bg-white">
                            {/* Order Info */}
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="font-semibold text-lg">
                                        Order #{order._id.slice(-6).toUpperCase()}
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        Placed on {new Date(order.createdAt).toLocaleString()}
                                    </p>
                                    <p className="text-sm">
                                        Status:{' '}
                                        <span
                                            className={`px-2 py-1 rounded text-xs ${
                                                order.status === 'paid'
                                                    ? 'bg-green-100 text-green-700'
                                                    : order.status === 'failed'
                                                    ? 'bg-red-100 text-red-700'
                                                    : 'bg-yellow-100 text-yellow-700'
                                            }`}
                                        >
                                            {order.status}
                                        </span>
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium">{order.userId.fullname}</p>
                                    <p className="text-sm text-gray-500">{order.userId.email}</p>
                                    <p className="text-sm text-gray-500">
                                        {order.userId.phone} • {order.userId.city} •{' '}
                                        {order.userId.state} • {order.userId.pincode}
                                    </p>
                                </div>
                            </div>

                            {/* Products */}
                            <div className="divide-y border rounded-lg overflow-hidden">
                                {order.products.map((p) => (
                                    <div
                                        key={p._id}
                                        className="flex items-center gap-4 p-3 bg-gray-50"
                                    >
                                        <Image
                                            src={p.productId.productImage?.[0]}
                                            alt={p.productId.productName}
                                            width={64}
                                            height={64}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <div className="flex-1">
                                            <p className="font-medium">{p.productId.productName}</p>
                                            <p className="text-sm text-gray-500">
                                                ₹{p.productId.productPrice} x {p.quantity}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Discount: {p.productId.productDiscount}%
                                            </p>
                                        </div>
                                        <p className="font-semibold">
                                            ₹{p.productId.productPrice * p.quantity}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Transaction */}
                            <div className="flex justify-between">
                                <div className="mt-4 text-sm text-gray-600">
                                    <p>
                                        <span className="font-medium">Transaction ID:</span>{' '}
                                        {order.transactionId.id}
                                    </p>
                                    <p>
                                        <span className="font-medium">Payment ID:</span>{' '}
                                        {order.transactionId.paymentId}
                                    </p>
                                    <p>
                                        <span className="font-medium">Amount:</span> ₹
                                        {order.transactionId.amount / 100}{' '}
                                        {order.transactionId.currency}
                                    </p>
                                </div>
                                <div className="mt-4 text-sm text-gray-600">
                                    <p>
                                        <span className="font-medium">Address: </span>
                                        {order.userId.fulladdress}
                                    </p>
                                    <p>
                                        <span className="font-medium">Location: </span>
                                        {order.userId.city} • {order.userId.state} •{' '}
                                        {order.userId.pincode}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}
