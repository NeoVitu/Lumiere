"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/components/cart-context"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import Link from "next/link"

// Product database - same as in produtos page
const PRODUCTS = [
  {
    id: 1,
    name: "Sofá Vintage Green",
    category: "sofás",
    price: 2500,
    material: "veludo",
    image: "/green-sofa.jpg",
  },
  {
    id: 2,
    name: "Mesa Centro Madeira",
    category: "mesas",
    price: 890,
    material: "madeira",
    image: "/wooden-table.jpg",
  },
  {
    id: 3,
    name: "Cadeira Clássica",
    category: "cadeiras",
    price: 650,
    material: "linho",
    image: "/classic-chair.jpg",
  },
  {
    id: 4,
    name: "Estante Flutuante",
    category: "estantes",
    price: 1200,
    material: "madeira",
    image: "/floating-shelf.jpg",
  },
  {
    id: 5,
    name: "Poltrona Confort",
    category: "cadeiras",
    price: 1450,
    material: "veludo",
    image: "/comfort-armchair.jpg",
  },
  {
    id: 6,
    name: "Sofá Modular",
    category: "sofás",
    price: 3200,
    material: "linho",
    image: "/modular-sofa.jpg",
  },
  {
    id: 7,
    name: "Mesa Lateral Sustentável",
    category: "mesas",
    price: 450,
    material: "madeira",
    image: "/side-table.jpg",
  },
  {
    id: 8,
    name: "Rack Vintage",
    category: "estantes",
    price: 1800,
    material: "misto",
    image: "/vintage-rack.jpg",
  },
]

export default function FavoritosPage() {
  const { favorites, toggleFavorite, addToCart } = useCart()

  const favoriteProducts = PRODUCTS.filter((product) => favorites.includes(product.id))

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-primary hover:underline">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">Favoritos</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="text-primary" size={32} fill="currentColor" />
            <h1 className="text-4xl font-bold text-foreground">Meus Favoritos</h1>
          </div>
          <p className="text-muted-foreground">
            {favoriteProducts.length > 0
              ? `Você tem ${favoriteProducts.length} ${favoriteProducts.length === 1 ? "item" : "itens"} favorito${favoriteProducts.length === 1 ? "" : "s"}`
              : "Você ainda não adicionou nenhum item aos favoritos"}
          </p>
        </div>

        {/* Favorites Grid */}
        {favoriteProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {favoriteProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all relative"
              >
                {/* Product Image */}
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-3 right-3 p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
                    title="Remover dos favoritos"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded mb-2">
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </span>
                  <h3 className="font-semibold text-foreground mb-1 text-balance">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{product.material}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">R$ {product.price.toLocaleString("pt-BR")}</span>
                    <button
                      onClick={() => addToCart(product.id, product.name, product.price)}
                      className="bg-primary text-primary-foreground p-2 rounded-lg hover:opacity-90 transition-opacity"
                      title="Adicionar ao carrinho"
                    >
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-muted rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Heart className="text-muted-foreground" size={48} />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">Nenhum favorito ainda</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Explore nossa coleção e clique no ícone de coração para adicionar seus móveis favoritos aqui.
            </p>
            <Link
              href="/produtos"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Explorar Produtos
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
