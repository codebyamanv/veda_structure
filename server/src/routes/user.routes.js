import { Router } from 'express'
import {
    register,
    login,
    logout,
    currentUser,
    updateAddress,
} from '../controllers/user.controller.js'
import { accessController } from '../middlewares/AuthMiddleware.js'
import { multerUpload } from '../utils/multer.js'

const userRouter = Router()
userRouter.route('/').post(multerUpload.single('avatar'), register)

userRouter.post('/current-user', accessController('user', 'admin'), currentUser)
userRouter.patch('/update-address', accessController('user', 'admin'), updateAddress)
userRouter.post('/login', login)
userRouter.post('/logout', accessController('user', 'admin'), logout)
export default userRouter
