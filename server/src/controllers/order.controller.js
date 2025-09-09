import Order from '../models/order.model.js'
import ApiResponse from '../utils/apiResponse.js'
import asyncHandler from '../utils/asyncHandler.js'

export const allOrders = asyncHandler(async (req, res) => {
    try {
        const orders = await Order.find({})
            .populate([
                {
                    path: 'products.productId',
                    select: 'productName _id productImage productPrice productDiscount',
                },
                {
                    path: 'userId',
                    select: 'fullname email phone fulladdress pincode state city landmark _id avatar',
                },
                {
                    path: 'transactionId',
                    select: 'amount status transactionId _id id currency paymentId signature receipt',
                },
            ])
            .sort({ createdAt: -1 })
        return ApiResponse.success({ orders }).send(res)
    } catch (error) {
        return ApiResponse.internalServerError(error.message).send(res)
    }
})
