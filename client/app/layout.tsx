import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "11Square | Premium Real Estate in Bangalore",
  description:
    "Find your dream property in Bangalore with 11Square. Expert guidance for buying, selling, and renting properties across the city's prime locations.",
  generator: 'v0.dev',
  icons: {
    icon: [
<<<<<<< HEAD
      { url: '/logo2.jpg', sizes: '64x64', type: 'image/svg+xml' },
      { url: '/logo2.jpg', sizes: '48x48', type: 'image/svg+xml' },
      { url: '/logo2.jpg', sizes: '32x32', type: 'image/svg+xml' },
    ],
    shortcut: '/logo2.jpg',
    apple: [
      { url: '/logo2.jpg', sizes: '192x192', type: 'image/svg+xml' },
      { url: '/logo2.jpg', sizes: '180x180', type: 'image/svg+xml' },
=======
      { url: '/logo.svg', sizes: '64x64', type: 'image/svg+xml' },
      { url: '/logo.svg', sizes: '48x48', type: 'image/svg+xml' },
      { url: '/logo.svg', sizes: '32x32', type: 'image/svg+xml' },
    ],
    shortcut: '/logo.svg',
    apple: [
      { url: '/logo.svg', sizes: '192x192', type: 'image/svg+xml' },
      { url: '/logo.svg', sizes: '180x180', type: 'image/svg+xml' },
>>>>>>> aa146855485316c6d1b83d14eee0f5ab89569131
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
