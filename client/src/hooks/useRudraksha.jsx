import { getRudraksha } from "@/apis/controllers/rudrakshaController"
import { useEffect, useState } from "react"

export default function useRudraksha() {
    const [rudraksha, setRudraksha] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchRudraksha()
    }, [])
    const fetchRudraksha = async () => {
        try {
            setLoading(true)
            const res = await getRudraksha()
            setRudraksha(res?.data?.rudraksha || [])
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return { rudraksha, refetchRudraksha: fetchRudraksha, loading }
}
