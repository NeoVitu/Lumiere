"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShoppingBag, Heart } from "lucide-react"
import { usePathname } from "next/navigation"
import { useCart } from "./cart-context"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { cart, favorites } = useCart()

  const isActive = (path: string) => pathname === path

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl group">
            <img
              src="/logo-lumiere.svg"
              alt="Lumière"
              className="h-8 w-auto group-hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "/", label: "Home" },
              { href: "/sobre", label: "Sobre" },
              { href: "/produtos", label: "Produtos" },
              { href: "/servicos", label: "Serviços" },
              { href: "/blog", label: "Blog" },
              { href: "/contato", label: "Contato" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors font-medium ${
                  isActive(link.href) ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/favoritos"
              className="p-2 hover:bg-muted rounded-lg transition-colors hidden sm:flex items-center justify-center relative"
            >
              <Heart size={20} className="text-foreground" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>

            <Link
              href="/carrinho"
              className="p-2 hover:bg-muted rounded-lg transition-colors hidden sm:flex items-center justify-center relative"
            >
              <ShoppingBag size={20} className="text-foreground" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground hover:bg-muted p-2 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-1 animate-fade-in">
            {[
              { href: "/", label: "Home" },
              { href: "/sobre", label: "Sobre" },
              { href: "/produtos", label: "Produtos" },
              { href: "/servicos", label: "Serviços" },
              { href: "/blog", label: "Blog" },
              { href: "/contato", label: "Contato" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  isActive(link.href) ? "bg-primary/10 text-primary font-medium" : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/favoritos"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isActive("/favoritos") ? "bg-primary/10 text-primary font-medium" : "text-foreground hover:bg-muted"
              }`}
            >
              <Heart size={18} />
              Favoritos
              {favorites.length > 0 && (
                <span className="ml-auto bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>
            <Link
              href="/carrinho"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isActive("/carrinho") ? "bg-primary/10 text-primary font-medium" : "text-foreground hover:bg-muted"
              }`}
            >
              <ShoppingBag size={18} />
              Carrinho
              {cart.length > 0 && (
                <span className="ml-auto bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
