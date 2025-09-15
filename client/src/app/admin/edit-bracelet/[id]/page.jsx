"use client"
import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import TiptapEditor from "@/components/TiptapEditor"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { getBraceletById, updateBracelet } from "@/apis/controllers/braceletController.js"

export default function EditBracelet() {
    const router = useRouter()
    const params = useParams()
    const braceletId = params?.id

    const [loading, setLoading] = useState(true)
    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [productDiscount, setProductDiscount] = useState("")
    const [productAbout, setProductAbout] = useState("")
    const [productFeatures, setProductFeatures] = useState("")
    const [productBenefits, setProductBenefits] = useState("")
    const [productFaqs, setProductFaqs] = useState("")
    const [productShipping, setProductShipping] = useState("")
    const [energization, setEnergization] = useState([{ title: "", price: "", isHaveForm: false }])
    const [existingImages, setExistingImages] = useState([])
    const [removedImages, setRemovedImages] = useState([])
    const [newImages, setNewImages] = useState([])

    useEffect(() => {
        if (!braceletId) return
        const fetchData = async () => {
            try {
                const res = await getBraceletById(braceletId)
                if (res.success) {
                    const data = res.data.bracelet
                    setProductName(data.productName || "")
                    setProductPrice(data.productPrice || "")
                    setProductDiscount(data.productDiscount || "")

                    setProductAbout(Array.isArray(data.productAbout) ? data.productAbout[0] : "")
                    setProductFeatures(Array.isArray(data.productFeatures) ? data.productFeatures[0] : "")
                    setProductBenefits(Array.isArray(data.productBenefits) ? data.productBenefits[0] : "")
                    setProductFaqs(Array.isArray(data.productFaqs) ? data.productFaqs[0] : "")
                    setProductShipping(Array.isArray(data.productShipping) ? data.productShipping[0] : "")

                    setEnergization(Array.isArray(data.energization) && data.energization.length > 0 ? data.energization : [{ title: "", price: "", isHaveForm: false }])
                    setExistingImages(data.productImage || [])
                }
            } catch (err) {
                toast.error("Failed to load product")
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [braceletId])

    const handleListChange = (index, field, value) => {
        const updatedList = [...energization]
        updatedList[index][field] = value
        setEnergization(updatedList)
    }

    const addNewEnergization = () => {
        setEnergization((prev) => [...prev, { title: "", price: "", isHaveForm: false }])
    }

    const handleRemoveImage = (url) => {
        setRemovedImages((prev) => [...prev, url])
        setExistingImages((prev) => prev.filter((img) => img !== url))
    }

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files)
        setNewImages(files)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()

        formData.append("productName", productName)
        formData.append("productPrice", productPrice)
        formData.append("productDiscount", productDiscount)

        // Send as plain strings (NOT arrays)
        formData.append("productAbout", productAbout)
        formData.append("productFeatures", productFeatures)
        formData.append("productBenefits", productBenefits)
        formData.append("productFaqs", productFaqs)
        formData.append("productShipping", productShipping)

        formData.append("energization", JSON.stringify(energization))
        formData.append("removedImages", JSON.stringify(removedImages))
        formData.append("existingImages", JSON.stringify(existingImages))

        newImages.forEach((file) => {
            formData.append("image", file)
        })

        try {
            const response = await updateBracelet(braceletId, formData)
            if (response.success) {
                toast.success(response.message || "Product updated successfully!")
                router.push("/admin/bracelet")
            } else {
                toast.error(response.message || "Update failed")
            }
        } catch (error) {
            toast.error(error.message || "Something went wrong")
        }
    }

    if (loading) return <p className="text-center">Loading...</p>

    return (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold uppercase">Edit Bracelet</h1>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Basic Inputs */}
                <div className="grid gap-3">
                    <Label htmlFor="productName">Product Name</Label>
                    <Input id="productName" name="productName" type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="productPrice">Product Price</Label>
                    <Input id="productPrice" type="number" name="productPrice" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="productDiscount">Product Discount (%)</Label>
                    <Input id="productDiscount" type="number" name="productDiscount" value={productDiscount} onChange={(e) => setProductDiscount(e.target.value)} />
                </div>

                {/* Existing Images */}
                <div className="grid gap-3">
                    <Label>Existing Images</Label>
                    <div className="flex flex-wrap gap-3">
                        {existingImages.map((url, idx) => (
                            <div key={idx} className="relative h-24 w-24">
                                <Image src={url} alt="product" className="h-24 w-24 rounded border object-cover" width={96} height={96} />
                                <button type="button" className="absolute top-0 right-0 rounded bg-red-500 px-1 text-xs text-white" onClick={() => handleRemoveImage(url)}>
                                    ✕
                                </button>
                            </div>
                        ))}
                        {existingImages.length === 0 && <p className="text-sm text-gray-500">No images uploaded</p>}
                    </div>
                </div>

                {/* Upload New Images */}
                <div className="grid gap-3">
                    <Label htmlFor="productImage">Upload New Images</Label>
                    <Input id="productImage" type="file" name="image" multiple accept="image/*" onChange={handleFileChange} />
                    {newImages.length > 0 && <p className="text-sm text-gray-600">{newImages.length} files selected</p>}
                </div>
            </div>

            {/* Energization Section */}
            <div className="grid gap-3">
                <div className="flex items-center justify-between">
                    <Label>Pooja / ENERGIZATION</Label>
                    <Button type="button" variant="ghost" className="border capitalize hover:bg-orange-500 hover:text-white" onClick={addNewEnergization}>
                        Add new
                    </Button>
                </div>

                {energization.map((item, index) => (
                    <div key={index} className="grid grid-cols-3 gap-2">
                        <Input type="text" value={item.title} onChange={(e) => handleListChange(index, "title", e.target.value)} placeholder="enter energization name" />
                        <Input type="number" value={item.price} onChange={(e) => handleListChange(index, "price", e.target.value)} placeholder="enter price" />
                        <div className="flex items-center gap-2">
                            <Checkbox id={`isHaveForm-${index}`} checked={item.isHaveForm} onCheckedChange={(checked) => handleListChange(index, "isHaveForm", !!checked)} className="w-4 border" />
                            <Label htmlFor={`isHaveForm-${index}`}>Has Form?</Label>
                        </div>
                    </div>
                ))}
            </div>

            {/* Editors */}
            <div className="grid gap-3">
                <Label>Product Features</Label>
                <TiptapEditor value={productFeatures} onChange={setProductFeatures} />
            </div>
            <Separator />

            <div className="grid gap-3">
                <Label>About Product</Label>
                <TiptapEditor value={productAbout} onChange={setProductAbout} />
            </div>
            <Separator />

            <div className="grid gap-3">
                <Label>Benefits</Label>
                <TiptapEditor value={productBenefits} onChange={setProductBenefits} />
            </div>
            <Separator />

            <div className="grid gap-3">
                <Label>FAQ's</Label>
                <TiptapEditor value={productFaqs} onChange={setProductFaqs} />
            </div>
            <Separator />

            <div className="grid gap-3">
                <Label>Shipping & Return</Label>
                <TiptapEditor value={productShipping} onChange={setProductShipping} />
            </div>

            <Button type="submit" className="mt-4 ml-auto w-fit rounded bg-orange-600 px-6 py-2 font-bold text-white">
                Update Product
            </Button>
        </form>
    )
}
