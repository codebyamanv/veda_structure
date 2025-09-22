import fs from 'node:fs'
import Rudraksha from '../models/rudraksha.model.js'
import ApiResponse from '../utils/apiResponse.js'

export const addRudraksha = async (req, res) => {
    const { body } = req
    const energization = body?.energization ? JSON.parse(body?.energization) : []
    const options = JSON.parse(req.body.options)

    const imagesPath = req.files ? req.files.map((file) => file.path.replace(/\\/g, '/')) : []
    const images = req.files
        ? req.files.map(
              (file) => `${req.protocol}://${req.get('host')}/${file.path.replace(/\\/g, '/')}`,
          )
        : []

    const product = new Rudraksha({
        ...body,
        energization,
        options,
        productImage: images,
        productPath: imagesPath,
    })
    await product.save()
    return ApiResponse.created({}, 'Rudraksha added successfully').send(res)
}

export const getRudraksha = async (req, res) => {
    const rudraksha = await Rudraksha.find({})
    return ApiResponse.success({ rudraksha }).send(res)
}
export const getRudrakshaById = async (req, res) => {
    const { id } = req.params
    const rudraksha = await Rudraksha.findById(id)
    return ApiResponse.success({ rudraksha }).send(res)
}
export const deleteRudraksha = async (req, res) => {
    const { id } = req.params

    const rudraksha = await Rudraksha.findById(id)
    if (rudraksha) {
        rudraksha.productPath.forEach((path) => {
            fs.unlink(path, (err) => {
                if (err) {
                    console.error('Error deleting file:', err)
                }
            })
        })
    }
    await Rudraksha.findByIdAndDelete(id)

    return ApiResponse.success({}, 'Rudraksha product deleted successfully').send(res)
}

export const updateRudraksha = async (req, res) => {
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
            options,
            existingImages,
            removedImages,
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

        let removedImgs = []
        try {
            if (removedImages) {
                removedImgs = Array.isArray(removedImages)
                    ? removedImages
                    : JSON.parse(removedImages)
            }
        } catch (e) {
            console.warn('Invalid removedImages JSON:', removedImages)
        }

        const imagesPath = req.files ? req.files.map((f) => f.path.replace(/\\/g, '/')) : []
        const images = req.files
            ? req.files.map(
                  (f) => `${req.protocol}://${req.get('host')}/${f.path.replace(/\\/g, '/')}`,
              )
            : []

        const product = await Rudraksha.findById(id)
        if (!product) {
            return ApiResponse.notFound({}, 'Product not found').send(res)
        }

        if (stock !== undefined) product.stock = stock
        if (productName !== undefined) product.productName = productName
        if (productPrice !== undefined) product.productPrice = productPrice
        if (productDiscount !== undefined) product.productDiscount = productDiscount

        if (keepImages.length > 0) {
            const toDelete = product.productImage.filter(
                (img) => !keepImages.includes(img) || removedImgs.includes(img),
            )

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
                if (keepImages.includes(img) && !removedImgs.includes(img)) {
                    keptImagePaths.push(product.productPath[idx])
                }
            })

            product.productImage = keepImages.filter((img) => !removedImgs.includes(img))
            product.productPath = keptImagePaths
        } else {
            product.productImage = []
            product.productPath = []
        }

        if (images.length > 0) {
            product.productImage = [...product.productImage, ...images]
            product.productPath = [...product.productPath, ...imagesPath]
        }

        if (productAbout !== undefined) product.productAbout = productAbout
        if (productFeatures !== undefined) product.productFeatures = productFeatures
        if (productBenefits !== undefined) product.productBenefits = productBenefits
        if (productFaqs !== undefined) product.productFaqs = productFaqs
        if (productShipping !== undefined) product.productShipping = productShipping

        if (energization) {
            try {
                product.energization = JSON.parse(energization)
            } catch (e) {
                console.warn('Invalid energization JSON:', energization)
            }
        }

        if (options) {
            try {
                product.options = JSON.parse(options)
            } catch (e) {
                console.warn('Invalid options JSON:', options)
            }
        }

        await product.save()
        return ApiResponse.success(product, 'Rudraksha product updated successfully').send(res)
    } catch (error) {
        console.error('Update Rudraksha Error:', error)
        return ApiResponse.internalServerError({}, 'Something went wrong while updating').send(res)
    }
}
