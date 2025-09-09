import { Router } from 'express'
import { multerUpload } from '../utils/multer.js'
import {
    addRudraksha,
    deleteRudraksha,
    getRudraksha,
    getRudrakshaById,
    updateRudraksha,
} from '../controllers/rudraksha.controller.js'
import { accessController } from '../middlewares/AuthMiddleware.js'
const rudrakshaRouter = Router()
rudrakshaRouter
    .route('/')
    .post(accessController('user', 'admin'), multerUpload.array('image', 10), addRudraksha)
    .get(getRudraksha)

rudrakshaRouter
    .route('/:id')
    .get(getRudrakshaById)
    .delete(accessController('admin'), deleteRudraksha)
    .put(accessController('admin'), multerUpload.array('image', 10), updateRudraksha)
export default rudrakshaRouter
