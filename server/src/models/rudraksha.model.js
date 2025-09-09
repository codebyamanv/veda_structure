import mongoose from 'mongoose'

const rudrakshaSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
            trim: true,
        },
        productPrice: {
            type: Number,
            required: true,
        },
        productDiscount: {
            type: Number,
            default: 0,
        },
        productImage: [
            {
                type: String,
                required: true,
            },
        ],
        productPath: [
            {
                type: String,
                required: true,
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
        energization: [
            {
                title: {
                    type: String,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
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
