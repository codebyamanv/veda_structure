import { Router } from 'express'
import { accessController } from '../middlewares/AuthMiddleware.js'
import {
    allBlogs,
    blog,
    deleteBlog,
    deleteMyBlog,
    editMyBlog,
    myBlogs,
    postBlog,
} from '../controllers/blog.controller.js'
import { multerUpload } from '../utils/multer.js'

const blogRouter = Router()

blogRouter
    .route('/')
    .post(accessController('user', 'admin'), multerUpload.single('image'), postBlog)
    .get(allBlogs)
blogRouter.route('/my-blogs').get(accessController('user', 'admin'), myBlogs)
blogRouter.route('/:slug').get(blog)
blogRouter
    .route('/:id')
    .put(accessController('user', 'admin'), editMyBlog)
    .delete(accessController('user', 'admin'), deleteMyBlog)
blogRouter.route('/delete/:id').delete(accessController('admin'), deleteBlog)
export default blogRouter
