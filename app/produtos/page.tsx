"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductFilter, type FilterState } from "@/components/product-filter"
import { ShoppingCart, Heart, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/components/cart-context"

// Mock products data
const PRODUCTS = [
  {
    id: 1,
    name: "Cômada Notas da Serra",
    category: "estantes",
    price: 180,
    material: "madeira",
    image: "/images/whatsapp-20image-202025-12-05-20at-2011.jpeg",
  },
  {
    id: 2,
    name: "Mesinha Orvalho de Madeira",
    category: "mesas",
    price: 380,
    material: "madeira",
    image: "/images/imagem-2025-12-06-154126990.png",
  },
  {
    id: 3,
    name: "Sofá Sol de Domingo",
    category: "sofás",
    price: 500,
    material: "linho",
    image: "/images/imagem-2025-12-06-154317307.png",
  },
  {
    id: 4,
    name: "Cama aquarela da noite",
    category: "camas",
    price: 580,
    material: "madeira",
    image: "/images/cama-aquarela.jpeg",
  },
  {
    id: 5,
    name: "Sofá Vintage Green",
    category: "sofás",
    price: 2500,
    material: "veludo",
    image: "/green-sofa.jpg",
  },
  {
    id: 6,
    name: "Mesa Centro Madeira",
    category: "mesas",
    price: 890,
    material: "madeira",
    image: "/wooden-table.jpg",
  },
  {
    id: 7,
    name: "Cadeira Clássica",
    category: "cadeiras",
    price: 650,
    material: "linho",
    image: "/classic-chair.jpg",
  },
  {
    id: 8,
    name: "Estante Flutuante",
    category: "estantes",
    price: 1200,
    material: "madeira",
    image: "/floating-shelf.jpg",
  },
  {
    id: 9,
    name: "Poltrona Confort",
    category: "cadeiras",
    price: 1450,
    material: "veludo",
    image: "/comfort-armchair.jpg",
  },
  {
    id: 10,
    name: "Sofá Modular",
    category: "sofás",
    price: 3200,
    material: "linho",
    image: "/modular-sofa.jpg",
  },
  {
    id: 11,
    name: "Mesa Lateral Sustentável",
    category: "mesas",
    price: 450,
    material: "madeira",
    image: "/side-table.jpg",
  },
  {
    id: 12,
    name: "Rack Vintage",
    category: "estantes",
    price: 1800,
    material: "misto",
    image: "/vintage-rack.jpg",
  },
]

export default function ProdutosPage() {
  const [filters, setFilters] = useState<FilterState>({
    category: "todos",
    priceRange: [0, 5000],
    material: "todos",
  })
  const { favorites, toggleFavorite, addToCart, cart } = useCart()
  const [addedItems, setAddedItems] = useState<number[]>([])
  const [purchaseComplete, setPurchaseComplete] = useState(false)

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const categoryMatch = filters.category === "todos" || product.category === filters.category
      const priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      const materialMatch = filters.material === "todos" || product.material === filters.material
      return categoryMatch && priceMatch && materialMatch
    })
  }, [filters])

  const handleAddToCart = (id: number, name: string, price: number) => {
    addToCart(id, name, price)
    setAddedItems((prev) => [...prev, id])
    setTimeout(() => {
      setAddedItems((prev) => prev.filter((item) => item !== id))
    }, 2000)
  }

  const handlePurchase = () => {
    if (cart.length === 0) return
    setPurchaseComplete(true)
    setTimeout(() => {
      setPurchaseComplete(false)
    }, 3000)
  }

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
            <span className="text-foreground font-medium">Produtos</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Nossa Coleção</h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore nossos móveis sustentáveis e vintage cuidadosamente selecionados. Cada peça reflete nosso
            compromisso com qualidade e sustentabilidade.
          </p>
        </div>

        {/* Filters and Products */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <ProductFilter onFilterChange={setFilters} />
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">{filteredProducts.length} produtos encontrados</p>
              <select defaultValue="relevancia" className="bg-card border border-border rounded-lg px-3 py-2 text-sm">
                <option value="relevancia">Mais Relevantes</option>
                <option value="preco-asc">Menor Preço</option>
                <option value="preco-desc">Maior Preço</option>
                <option value="novo">Mais Novo</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow relative"
                  >
                    {addedItems.includes(product.id) && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-20 rounded-xl">
                        <div className="bg-primary text-primary-foreground rounded-full p-3 animate-bounce">
                          <CheckCircle size={32} />
                        </div>
                      </div>
                    )}

                    {/* Product Image */}
                    <div className="relative aspect-square bg-muted overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className={`absolute top-3 right-3 p-2 rounded-lg transition-colors ${
                          favorites.includes(product.id)
                            ? "bg-primary text-primary-foreground"
                            : "bg-background/80 text-foreground hover:bg-background"
                        }`}
                      >
                        <Heart size={20} fill={favorites.includes(product.id) ? "currentColor" : "none"} />
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
                        <span className="text-lg font-bold text-primary">
                          R$ {product.price.toLocaleString("pt-BR")}
                        </span>
                        <button
                          onClick={() => handleAddToCart(product.id, product.name, product.price)}
                          className="bg-primary text-primary-foreground p-2 rounded-lg hover:opacity-90 transition-opacity"
                        >
                          <ShoppingCart size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">Nenhum produto encontrado com os filtros selecionados.</p>
                <button
                  onClick={() => setFilters({ category: "todos", priceRange: [0, 5000], material: "todos" })}
                  className="text-primary font-semibold hover:underline"
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        </div>

        {cart.length > 0 && (
          <div className="fixed bottom-6 right-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-2xl flex flex-col gap-4 max-w-xs">
            <div>
              <p className="text-sm opacity-90">Itens no carrinho</p>
              <p className="text-2xl font-bold">{cart.length}</p>
              <p className="text-sm mt-2 opacity-90">
                Total: R$ {cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString("pt-BR")}
              </p>
            </div>
            <button
              onClick={handlePurchase}
              className="bg-primary-foreground text-primary px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity w-full"
            >
              Finalizar Compra
            </button>
          </div>
        )}

        {purchaseComplete && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white dark:bg-card rounded-2xl p-8 text-center max-w-sm shadow-2xl">
              <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Compra Realizada!</h3>
              <p className="text-muted-foreground mb-6">
                Obrigado por escolher Lumière. Seu pedido foi confirmado e será enviado em breve.
              </p>
              <p className="text-sm text-muted-foreground">Número de pedido: #{Math.floor(Math.random() * 100000)}</p>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
