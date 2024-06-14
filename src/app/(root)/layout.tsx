import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='root'>
            {children}
        </main>
    )
}

export default RootLayout
