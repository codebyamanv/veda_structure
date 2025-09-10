'use client'
import { useAuth } from "@/context/useAuth"
import Image from "next/image"

function OrdersPage() {
    const { user, loading } = useAuth()

    if (loading || !user) {
        return <p className="text-center py-10">Loading your orders...</p>
    }

    if (!user.orders || user.orders.length === 0) {
        return <p className="text-center py-10">No orders found.</p>
    }

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">My Orders</h1>
            <div className="space-y-4">
                {user.orders.map((orderWrapper) => {
                    const order = orderWrapper.orderId

                    return (
                        <div
                            key={order._id}
                            className="border rounded-lg shadow-sm p-6 bg-white"
                        >
                            {/* Order Header */}
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
                                            className={`px-2 py-1 rounded text-xs uppercase font-semibold ${order.status === 'paid'
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

                                {/* User Info */}
                                {/* <div className="text-right">
                                    <p className="font-medium">{user.fullname}</p>
                                    <p className="text-sm text-gray-500">{user.email}</p>
                                    <p className="text-sm text-gray-500">
                                        {user.phone} • {user.city} • {user.state} • {user.pincode}
                                    </p>
                                </div> */}
                            </div>

                            {/* Products */}
                            <div className="divide-y border rounded-lg overflow-hidden">
                                {order.products.map((p) => (
                                    <div
                                        key={p._id}
                                        className="flex items-center gap-4 p-3 bg-gray-50"
                                    >
                                        <Image
                                            width={64}
                                            height={64}
                                            src={p.productId.productImage?.[0]}
                                            alt={p.productId.productName}
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
                            <div className="flex md:flex-row flex-col gap-2 justify-between mt-4 text-sm text-gray-600">
                                <div>
                                    {/* <p>
                                        <span className="font-medium">Transaction ID:</span>{' '}
                                        {order.transactionId._id}
                                    </p> */}
                                    <p>
                                        <span className="font-medium">Payment ID:</span>{' '}
                                        {order.transactionId.paymentId}
                                    </p>
                                    <p>
                                        <span className="font-medium">Total Amount:</span> ₹
                                        {order.transactionId.amount / 100}{' '}
                                        {order.transactionId.currency}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <span className="font-medium">Address: </span>
                                        {user.fulladdress}
                                    </p>
                                    <p>
                                        <span className="font-medium">Location: </span>
                                        {user.city} • {user.state} • {user.pincode}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OrdersPage
