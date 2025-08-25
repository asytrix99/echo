import { AuthLayout } from "@/modules/auth/ui/layouts/auth_layout"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen min-w-screen h-full flex flex-col items-center justify-center">
            <AuthLayout>
                {children}
            </AuthLayout>
        </div>
    )
}

export default Layout
