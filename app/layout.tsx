import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { BackToTop } from "@/components/back-to-top"
import { CartProvider } from "@/components/cart-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lumière | Móveis Sustentáveis e Design Moderno",
  description:
    "Descobra a coleção exclusiva de móveis sustentáveis e vintage da Lumière. Design, conforto e responsabilidade social em cada peça.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        <CartProvider>
          {children}
          <BackToTop />
          <Analytics />
        </CartProvider>
      </body>
    </html>
  )
}
