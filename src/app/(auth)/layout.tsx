
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="auth">
            <div className="root-container">
                <div className="wrapper">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default AuthLayout
