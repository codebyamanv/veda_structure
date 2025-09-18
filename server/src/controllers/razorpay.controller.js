// razorpay.js
import Razorpay from 'razorpay'
import asyncHandler from '../utils/asyncHandler.js'
import crypto from 'crypto'
import Transaction from '../models/transaction.model.js'
import Order from '../models/order.model.js'
import User from '../models/user.model.js'
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
})

export const createOrder = asyncHandler(async (req, res) => {
    try {
        const { amount, currency = 'INR', receipt } = req.body

        const options = {
            amount: amount * 100, // amount in paise (₹1 = 100 paise)
            currency,
            receipt: receipt || `receipt_${Date.now()}`,
        }

        const order = await razorpay.orders.create(options)
        await Transaction.create(order)

        res.json({
            success: true,
            orderId: order.id,
            currency: order.currency,
            amount: order.amount,
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({ success: false, message: 'Order creation failed' })
    }
})

export const verifyPayment = asyncHandler(async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId, products } =
            req.body

        const sign = razorpay_order_id + '|' + razorpay_payment_id
        const expectedSign = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(sign.toString())
            .digest('hex')

        if (razorpay_signature === expectedSign) {
            const transaction = await Transaction.findOneAndUpdate(
                { id: razorpay_order_id },
                {
                    status: 'paid',
                    paymentId: razorpay_payment_id,
                    signature: razorpay_signature,
                },
                { new: true },
            )

            const order = await Order.create({
                userId,
                transactionId: transaction._id,
                products,
                status: 'paid',
            })

            await User.findOneAndUpdate(
                { _id: userId },
                { $push: { orders: { orderId: order._id } } },
                // { new: true },
            )
            return res.json({ success: true, message: 'Payment verified successfully' })
        } else {
            await Transaction.findOneAndUpdate({ id: razorpay_order_id }, { status: 'failed' })
            return res.status(400).json({ success: false, message: 'Invalid signature' })
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({ success: false, message: 'Verification failed' })
    }
})
