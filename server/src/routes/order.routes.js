import { Router } from 'express'
import { allOrders } from '../controllers/order.controller.js'
import { accessController } from '../middlewares/AuthMiddleware.js'

const orderRouter = Router()

orderRouter.get('/', accessController('admin'), allOrders)

export default orderRouter
