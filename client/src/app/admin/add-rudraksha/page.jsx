'use client'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import TiptapEditor from '@/components/TiptapEditor'
import { postRudraksha } from '@/apis/controllers/rudrakshaController'
import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

export default function AddRudraksha() {
    const router = useRouter()
    const [productAbout, setProductAbout] = useState('')
    const [productFeatures, setProductFeatures] = useState('')
    const [productBenefits, setProductBenefits] = useState('')
    const [productFaqs, setProductFaqs] = useState('')
    const [productShipping, setProductShipping] = useState('')
    const [energization, setEnergization] = useState([{ title: '', price: '', isHaveForm: false }])

    const handleListChange = (index, field, value) => {
        const updatedList = [...energization]
        updatedList[index][field] = value
        setEnergization(updatedList)
    }

    const addNewEnergization = () => {
        setEnergization((prev) => [...prev, { title: '', price: '', isHaveForm: false }])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        formData.append('productAbout', String(productAbout))
        formData.append('productFeatures', String(productFeatures))
        formData.append('productBenefits', String(productBenefits))
        formData.append('productFaqs', String(productFaqs))
        formData.append('productShipping', String(productShipping))
        formData.append('energization', JSON.stringify(energization)) // send as JSON

        // console.log('Final FormData:', Object.fromEntries(formData))

        try {
            const response = await postRudraksha(formData)
            if (response.success) {
                toast.success(response.message)
                router.push('/admin/rudraksha')
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold uppercase">Add Rudraksha</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="productName">Product Name</Label>
                    <Input
                        id="productName"
                        name="productName"
                        type="text"
                        placeholder="enter product name"
                    />
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="productPrice">Product Price</Label>
                    <Input
                        id="productPrice"
                        type="number"
                        name="productPrice"
                        placeholder="enter product price"
                    />
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="productDiscount">Product Discount (in %)</Label>
                    <Input
                        id="productDiscount"
                        type="number"
                        name="productDiscount"
                        placeholder="enter product discount"
                    />
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="productImage">Product Images</Label>
                    <Input id="productImage" type="file" name="image" multiple accept="image/*" />
                </div>
            </div>

            <div>
                <div className="grid gap-3">
                    <div className="flex justify-between items-center">
                        <Label>Pooja / ENERGIZATION</Label>
                        <Button
                            type="button"
                            variant="ghost"
                            className="cursor-pointer capitalize border hover:text-white hover:bg-orange-500"
                            onClick={addNewEnergization}
                        >
                            add new energization
                        </Button>
                    </div>

                    {energization.map((item, index) => (
                        <div key={index} className="grid grid-cols-3 gap-2">
                            <Input
                                type="text"
                                value={item.title}
                                onChange={(e) => handleListChange(index, 'title', e.target.value)}
                                placeholder="enter energization name"
                            />
                            <Input
                                type="number"
                                value={item.price}
                                onChange={(e) => handleListChange(index, 'price', e.target.value)}
                                placeholder="enter energization price"
                            />
                            <div className="flex items-center gap-2">
                                <Checkbox
                                    id={`isHaveForm-${index}`}
                                    checked={item.isHaveForm}
                                    onCheckedChange={(checked) =>
                                        handleListChange(index, 'isHaveForm', checked)
                                    }
                                    className="border w-4"
                                />
                                <Label htmlFor={`isHaveForm-${index}`}>IsHaveForm?</Label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Product Editors */}
            <div className="grid gap-3">
                <Label>Product Features</Label>
                <TiptapEditor onChange={setProductFeatures} className="prose prose-sm max-w-none" />
            </div>
            <Separator />

            <div className="grid gap-3">
                <Label>About Product</Label>
                <TiptapEditor onChange={setProductAbout} className="prose prose-sm max-w-none" />
            </div>
            <Separator />

            <div className="grid gap-3">
                <Label>Benefits</Label>
                <TiptapEditor onChange={setProductBenefits} className="prose prose-sm max-w-none" />
            </div>
            <Separator />

            <div className="grid gap-3">
                <Label>Faq's</Label>
                <TiptapEditor onChange={setProductFaqs} className="prose prose-sm max-w-none" />
            </div>
            <Separator />

            <div className="grid gap-3">
                <Label>Shipping & Return</Label>
                <TiptapEditor onChange={setProductShipping} className="prose prose-sm max-w-none" />
            </div>

            <button
                type="submit"
                className="px-4 py-2 bg-orange-600 text-white font-bold w-fit ml-auto rounded mt-4"
            >
                Add Product
            </button>
        </form>
    )
}
