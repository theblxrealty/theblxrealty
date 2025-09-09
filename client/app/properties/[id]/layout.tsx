import { Inter } from "next/font/google"
import "../../globals.css"
import { Providers } from "@/components/providers"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "11Square | Premium Real Estate in Bangalore",
  description:
    "Find your dream property in Bangalore with 11Square. Expert guidance for buying, selling, and renting properties across the city's prime locations.",
    generator: 'v0.dev'
}

export default function PropertyDetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
