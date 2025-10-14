import mongoose from 'mongoose'

const rudrakshaSchema = new mongoose.Schema(
    {
        productType: {
            type: String,
            default: 'rudraksha',
        },
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
        productAbout: {
            type: [String],
        },
        productFeatures: {
            type: [String],
        },
        productBenefits: {
            type: [String],
        },
        productFaqs: {
            type: [String],
        },
        productShipping: {
            type: [String],
        },
        options: [
            {
                title: {
                    type: String,
                },
                price: {
                    type: Number,
                },
            },
        ],
        energization: [
            {
                title: {
                    type: String,
                },
                price: {
                    type: Number,
                },
                isHaveForm: {
                    type: Boolean,
                    default: false,
                },
            },
        ],
    },
    { timestamps: true },
)

export default mongoose.model('Rudraksha', rudrakshaSchema)
