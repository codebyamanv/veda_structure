import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { FaShoppingCart } from 'react-icons/fa'
import { Separator } from './ui/separator'
import { useCart } from '@/context/cartContext'
import Image from 'next/image'
import { Trash2 } from 'lucide-react'
import Link from 'next/link'

export default function Cart() {
    const { cart, increaseQty, decreaseQty, removeItem, clearCart } = useCart()
    const subtotal = cart.items.reduce((acc, item) => acc + item.productPrice * item.quantity, 0)
    const discount = subtotal - cart.totalPrice
    const total = cart.totalPrice

    return (
        <Sheet className="z-50">
            <SheetTrigger className="cursor-pointer">
                <div className="relative">
                    <FaShoppingCart className="text-xl" />
                    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                        {cart.totalQty}
                    </span>
                </div>
            </SheetTrigger>

            <SheetContent className="flex flex-col">
                {/* Header */}
                <SheetHeader>
                    <SheetTitle className="text-2xl font-black flex items-center gap-2">
                        <FaShoppingCart className="text-xl" />
                        <span>Shopping Cart</span>
                    </SheetTitle>
                    <SheetDescription>
                        <p>Checkout our products</p>
                    </SheetDescription>
                    {!!cart.items?.length && (
                        <button
                            onClick={clearCart}
                            className="text-sm text-red-500 hover:underline"
                        >
                            Clear Cart
                        </button>
                    )}
                </SheetHeader>

                {/* Empty state */}
                {!cart.items?.length && (
                    <div className="flex-1 grid place-items-center">
                        <p className="text-2xl font-bold">Your cart is empty</p>
                    </div>
                )}

                {/* Scrollable items */}
                {!!cart.items?.length && (
                    <div className="flex-1 overflow-y-auto mt-4 space-y-3 p-2">
                        {cart.items.map((item) => (
                            <div key={item._id} className="p-2 border rounded-lg">
                                <div className="flex items-center justify-between gap-2">
                                    <Image
                                        src={item.productImage[0]}
                                        alt={item.productName}
                                        className="w-16 h-16 object-cover rounded"
                                        width={100}
                                        height={100}
                                    />
                                    <div className="flex-1">
                                        <p className="font-semibold">{item.productName}</p>
                                        <span>Rs. {item.productPrice}</span>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item._id)}
                                        title="Remove item from cart"
                                        className="cursor-pointer border p-2 rounded-full text-red-500 bg-gray-100"
                                    >
                                        <Trash2 />
                                    </button>
                                </div>

                                <div className="flex gap-2 items-center mt-2">
                                    <p className="font-semibold">Quantity</p>
                                    <div className="flex gap-2">
                                        <button
                                            className="border aspect-square w-8 hover:bg-gray-100 bg-gray-50 cursor-pointer"
                                            onClick={() => decreaseQty(item._id)}
                                        >
                                            -
                                        </button>
                                        <button className="border aspect-square w-8">
                                            {item.quantity}
                                        </button>
                                        <button
                                            className="border aspect-square w-8 hover:bg-gray-100 bg-gray-50 cursor-pointer"
                                            onClick={() => increaseQty(item._id)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Footer stays fixed */}
                <SheetFooter className="space-y-2 pt-4 border-t mt-4">
                    <div className="flex items-center justify-between">
                        <span>Subtotal:</span> <span className="font-bold">Rs. {subtotal}</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <span>Discount:</span> <span className="font-bold">Rs. {discount}</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <span>Total:</span>{' '}
                        <span className="font-bold text-orange-500">Rs. {total}</span>
                    </div>
                    <Separator />
                    <Link
                        href="/checkout"
                        className="inline-block text-center border px-6 py-2 border-orange-500 rounded hover:bg-orange-500 font-semibold hover:text-white transition-all cursor-pointer w-full"
                    >
                        Check out
                    </Link>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
