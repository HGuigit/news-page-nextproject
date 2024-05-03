import MainHeader from '@/components/header/mainHeader'
import './globals.css'
import Providers from './providers'

export const metadata = {
    title: 'Next.js Page Routing & Rendering',
    description: 'Learn how to route to different pages.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <div id="page">
                        <MainHeader />
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    )
}
