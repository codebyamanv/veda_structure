import { getBracelet } from "@/apis/controllers/braceletController.js"
import { useEffect, useState } from "react"

export default function useBracelet() {
    const [bracelet, setBracelet] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchBracelet()
    }, [])
    const fetchBracelet = async () => {
        try {
            setLoading(true)
            const res = await getBracelet()
            setBracelet(res?.data?.bracelet || [])
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return { bracelet, refetchBracelet: fetchBracelet, loading }
}
