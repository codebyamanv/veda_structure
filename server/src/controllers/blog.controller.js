import slugify from 'slugify'
import ApiResponse from '../utils/apiResponse.js'
import asyncHandler from '../utils/asyncHandler.js'
import Blog from '../models/blog.model.js'
import fs from 'node:fs'

export const postBlog = asyncHandler(async (req, res) => {
    const { body } = req
    const file = req.file

    const slug = slugify(body.title, {
        lower: true,
        strict: true,
        trim: true,
    })
    console.log(slug)
    const imagePath = file ? file.path.replace(/\\/g, '/') : null
    const image = file
        ? `${req.protocol}://${req.get('host')}/${file.path.replace(/\\/g, '/')}`
        : null

    await Blog.create({
        ...body,
        image,
        slug,
        imagePath,
        author: req.user._id,
    })

    return ApiResponse.created({}, 'Blog added successfully').send(res)
})
export const allBlogs = asyncHandler(async (req, res) => {
    const { query } = req
    const { page = 1, limit = 10 } = query
    const q = query.q
    const totalDocs = await Blog.countDocuments()
    const totalPages = Math.ceil(totalDocs / limit)
    const skip = (page - 1) * limit
    if (q) {
        const blogs = await Blog.find({ title: { $regex: q, $options: 'i' } })
            .skip(skip)
            .limit(limit)
            .populate([{ path: 'author', select: 'fullname avatar role' }])
            .sort({ createdAt: -1 })

        return ApiResponse.success({ blogs, totalPages }).send(res)
    }
    const blogs = await Blog.find()
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 })
        .populate([{ path: 'author', select: 'fullname avatar role' }])

    return ApiResponse.success({ blogs, totalPages }).send(res)
})
export const myBlogs = asyncHandler(async (req, res) => {
    const { query } = req
    const { page = 1, limit = 10 } = query
    const totalDocs = await Blog.countDocuments({ author: req.user._id })
    const totalPages = Math.ceil(totalDocs / limit)
    const skip = (page - 1) * limit
    const blogs = await Blog.find({ author: req.user._id }).skip(skip).limit(limit)
    return ApiResponse.success({ blogs, totalPages }).send(res)
})
export const blog = asyncHandler(async (req, res) => {
    const { slug } = req.params
    const blog = await Blog.findOne({ slug }).populate([
        { path: 'author', select: 'fullname avatar role' },
    ])
    return ApiResponse.success(blog).send(res)
})
export const editMyBlog = asyncHandler(async (req, res) => {})
export const deleteMyBlog = asyncHandler(async (req, res) => {
    const id = req.params.id
    const blog = await Blog.findById(id)
    if (blog) {
        fs.unlink(blog.imagePath, (err) => {
            if (err) {
                console.error('Error deleting file:', err)
            }
        })
    }
    await Blog.findByIdAndDelete(id)
    return ApiResponse.success({}, 'Blog product deleted successfully').send(res)
})
export const deleteBlog = asyncHandler(async (req, res) => {
    const id = req.params.id
    const blog = await Blog.findById(id)
    if (blog) {
        fs.unlink(blog.imagePath, (err) => {
            if (err) {
                console.error('Error deleting file:', err)
            }
        })
    }
    await Blog.findByIdAndDelete(id)
    return ApiResponse.success({}, 'Blog product deleted successfully').send(res)
})
