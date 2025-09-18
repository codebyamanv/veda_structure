import fs from 'node:fs'
import Bracelet from '../models/bracelet.model.js'
import ApiResponse from '../utils/apiResponse.js'
import ErrorResponse from '../utils/errorResponse.js'

export const addBracelet = async (req, res) => {
    const { body } = req
    const energization = JSON.parse(req.body.energization)

    const imagesPath = req.files ? req.files.map((file) => file.path.replace(/\\/g, '/')) : []
    const images = req.files
        ? req.files.map(
              (file) => `${req.protocol}://${req.get('host')}/${file.path.replace(/\\/g, '/')}`,
          )
        : []

    const product = new Bracelet({
        ...body,
        energization,
        productImage: images,
        productPath: imagesPath,
    })
    await product.save()
    return ApiResponse.created({}, 'Bracelet added successfully').send(res)
}

export const getBracelet = async (req, res) => {
    const bracelet = await Bracelet.find({})
    return ApiResponse.success({ bracelet }).send(res)
}

export const getBraceletById = async (req, res) => {
    const { id } = req.params
    const bracelet = await Bracelet.findById(id)
    return ApiResponse.success({ bracelet }).send(res)
}
export const deleteBracelet = async (req, res) => {
    const { id } = req.params

    const bracelet = await Bracelet.findById(id)
    if (bracelet) {
        bracelet.productPath.forEach((path) => {
            fs.unlink(path, (err) => {
                if (err) {
                    console.error('Error deleting file:', err)
                }
            })
        })
    }
    await Bracelet.findByIdAndDelete(id)

    return ApiResponse.success({}, 'Bracelet product deleted successfully').send(res)
}

export const updateBracelet = async (req, res) => {
    try {
        const { id } = req.params
        const {
            stock,
            productName,
            productPrice,
            productDiscount,
            productAbout,
            productFeatures,
            productBenefits,
            productFaqs,
            productShipping,
            energization,
            existingImages,
        } = req.body

        let keepImages = []
        try {
            if (existingImages) {
                keepImages = Array.isArray(existingImages)
                    ? existingImages
                    : JSON.parse(existingImages)
            }
        } catch (e) {
            console.warn('Invalid existingImages JSON:', existingImages)
        }

        const imagesPath = req.files ? req.files.map((file) => file.path.replace(/\\/g, '/')) : []
        const images = req.files
            ? req.files.map(
                  (file) => `${req.protocol}://${req.get('host')}/${file.path.replace(/\\/g, '/')}`,
              )
            : []

        const product = await Bracelet.findById(id)
        if (!product) {
            return ApiResponse.notFound({}, 'Product not found').send(res)
        }
 if (stock) product.stock = stock
        if (productName) product.productName = productName
        if (productPrice) product.productPrice = productPrice
        if (productDiscount) product.productDiscount = productDiscount

        if (keepImages.length > 0) {
            const toDelete = product.productImage.filter((img) => !keepImages.includes(img))

            toDelete.forEach((url) => {
                const idx = product.productImage.indexOf(url)
                if (idx !== -1) {
                    const filePath = product.productPath[idx]
                    if (filePath) {
                        fs.unlink(filePath, (err) => {
                            if (err) console.error('Error deleting file:', err)
                        })
                    }
                }
            })

            const keptImagePaths = []
            product.productImage.forEach((img, idx) => {
                if (keepImages.includes(img)) {
                    keptImagePaths.push(product.productPath[idx])
                }
            })

            product.productImage = keepImages
            product.productPath = keptImagePaths
        } else {
            product.productImage = []
            product.productPath = []
        }

        if (images.length > 0) {
            product.productImage = [...product.productImage, ...images]
            product.productPath = [...product.productPath, ...imagesPath]
        }

        if (productAbout !== undefined) product.productAbout = [productAbout]
        if (productFeatures !== undefined) product.productFeatures = [productFeatures]
        if (productBenefits !== undefined) product.productBenefits = [productBenefits]
        if (productFaqs !== undefined) product.productFaqs = [productFaqs]
        if (productShipping !== undefined) product.productShipping = [productShipping]

        if (energization) {
            try {
                product.energization = JSON.parse(energization)
            } catch (e) {
                console.warn('Invalid energization JSON:', energization)
            }
        }

        await product.save()
        return ApiResponse.success(product, 'Bracelet product updated successfully').send(res)
    } catch (error) {
        console.error('Update Bracelet Error:', error)
        return ApiResponse.internalServerError({}, 'Something went wrong while updating').send(res)
    }
}
