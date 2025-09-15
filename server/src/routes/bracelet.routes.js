import { Router } from 'express'
import { multerUpload } from '../utils/multer.js'
import {
    addBracelet,
    deleteBracelet,
    getBracelet,
    getBraceletById,
    updateBracelet,
} from '../controllers/bracelet.controller.js'
import { accessController } from '../middlewares/AuthMiddleware.js'
const braceletRouter = Router()
braceletRouter
    .route('/')
    .post(accessController('user', 'admin'), multerUpload.array('image', 10), addBracelet)
    .get(getBracelet)

braceletRouter
    .route('/:id')
    .get(getBraceletById)
    .delete(accessController('admin'), deleteBracelet)
    .put(accessController('admin'), multerUpload.array('image', 10), updateBracelet)
export default braceletRouter
