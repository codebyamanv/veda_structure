import { Router } from 'express'
import { createOrder, verifyPayment } from '../controllers/razorpay.controller.js'
import { accessController } from '../middlewares/AuthMiddleware.js'

const paymentRouter = Router()

paymentRouter.post('/create-order', accessController('user'), createOrder)
paymentRouter.post('/verify-payment', accessController('user'), verifyPayment)

export default paymentRouter
