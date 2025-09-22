import path from 'path'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import morgan from 'morgan'
import asyncHandler from './utils/asyncHandler.js'
import globalErrorHandler from './middlewares/globalErrorHandler.js'
import baseRouter from './routes/base.routes.js'
import userRouter from './routes/user.routes.js'
import bookingRouter from './routes/booking.routes.js'
import rudrakshaRouter from './routes/rudraksha.routes.js'
import paymentRouter from './routes/payment.routes.js'
import orderRouter from './routes/order.routes.js'
import braceletRouter from './routes/bracelet.routes.js'

const app = express()

app.use((req, res, next) => {
    console.log('request url', req.url)
    console.log('request origin', req.headers.origin)
    next()
})

app.use(
    cors({
        origin: [
            'https://vedastructure.com',
            'https://www.vedastructure.com',
            'http://localhost:3000',
        ],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
        credentials: true,
    }),
)

app.use(helmet())
app.use(morgan('dev'))
app.use(express.json({ limit: '100mb' }))
app.use(express.urlencoded({ extended: true }))

app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')))

app.use(cookieParser('Veda-Structure-secret-key-protected'))

app.use('/', baseRouter)
app.use('/api/users', userRouter)
app.use('/api/bookings', bookingRouter)
app.use('/api/product/rudraksha', rudrakshaRouter)
app.use('/api/product/bracelet', braceletRouter)
app.use('/api/payments', paymentRouter)
app.use('/api/orders', orderRouter)

app.all(
    '/*catchAll',
    asyncHandler(async (req, res, next) => {
        const error = new Error(`Route ${req.originalUrl} not found`)
        error.statusCode = 404
        next(error)
    }),
)

app.use(globalErrorHandler)
export { app }
