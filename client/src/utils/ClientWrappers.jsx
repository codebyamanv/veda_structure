import { AuthProvider } from '@/context/useAuth'
import { Toaster } from 'sonner'
import { currentUser } from '@/apis/controllers/userController'
import { CartProvider } from '@/context/cartContext'

export default async function ClientWrappers({ children }) {
    let user = null
    try {
        user = await currentUser()
    } catch (err) {
        user = null
    }

    return (
        <>
            <CartProvider>
                <AuthProvider initialUser={user}>
                    <div>
                        <Toaster position="bottom-right" />
                    </div>
                    {children}
                </AuthProvider>
            </CartProvider>
        </>
    )
}
