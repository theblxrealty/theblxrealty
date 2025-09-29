import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "The BLX Realty | Premium Real Estate in Bangalore",
  description:
    "Find your dream property in Bangalore with The BLX Realty. Expert guidance for buying, selling, and renting properties across the city's prime locations.",
  generator: 'v0.dev',
  icons: {
    icon: [


      { url: '/logo2.jpg', sizes: '64x64', type: 'image/jpeg' },
      { url: '/logo2.jpg', sizes: '48x48', type: 'image/jpeg' },
      { url: '/logo2.jpg', sizes: '32x32', type: 'image/jpeg' },
    ],
    shortcut: '/logo2.jpg',                    
    apple: [
      { url: '/logo2.jpg', sizes: '192x192', type: 'image/jpeg' },
      { url: '/logo2.jpg', sizes: '180x180', type: 'image/jpeg' },
 
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
