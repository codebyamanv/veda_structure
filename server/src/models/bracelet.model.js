import mongoose from 'mongoose'

const braceletSchema = new mongoose.Schema(
    {
        stock: {
            type: Number,
            default: 0,
        },
        productName: {
            type: String,
            trim: true,
        },
        productPrice: {
            type: Number,
        },
        productDiscount: {
            type: Number,
            default: 0,
        },
        productImage: [
            {
                type: String,
            },
        ],
        productPath: [
            {
                type: String,
            },
        ],

        productAbout: { type: [String] },
        productFeatures: { type: [String] },
        productBenefits: { type: [String] },
        productFaqs: { type: [String] },
        productShipping: { type: [String] },

        energization: [
            {
                title: { type: String },
                price: { type: Number },
                isHaveForm: { type: Boolean, default: false },
            },
        ],

        sizes: [
            {
                size: { type: String },
                price: { type: Number },
                stock: { type: Number, default: 0 },
            },
        ],

        certificates: [
            {
                type: { type: String },
                price: { type: Number },
            },
        ],
    },
    { timestamps: true },
)

export default mongoose.model('Bracelet', braceletSchema)
