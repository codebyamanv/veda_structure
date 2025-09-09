'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import { currentUser, logoutUser } from '@/apis/controllers/userController'

const AuthContext = createContext()

export function AuthProvider({ children, initialUser }) {
    const [user, setUser] = useState(initialUser || null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!user) {
            fetchUser()
        }
    }, [])

    const fetchUser = async () => {
        try {
            setLoading(true)
            const res = await currentUser()
            setUser(res?.data || null)
        } catch (err) {
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    const logout = async () => {
        await logoutUser()
        await fetchUser()
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, refetchUser: fetchUser, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}
