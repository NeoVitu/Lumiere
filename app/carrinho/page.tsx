"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/components/cart-context"
import { ShoppingCart, Trash2, Plus, Minus, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function CarrinhoPage() {
  const { cart, removeFromCart, cartTotal, clearCart, addToCart } = useCart()
  const [purchaseComplete, setPurchaseComplete] = useState(false)

  const handleUpdateQuantity = (productId: number, name: string, price: number, increment: boolean) => {
    if (increment) {
      addToCart(productId, name, price)
    } else {
      // Decrease quantity or remove if quantity is 1
      const item = cart.find((item) => item.productId === productId)
      if (item && item.quantity > 1) {
        // We need to decrease quantity - we'll remove and re-add with lower quantity
        removeFromCart(productId)
        for (let i = 0; i < item.quantity - 1; i++) {
          addToCart(productId, name, price)
        }
      } else {
        removeFromCart(productId)
      }
    }
  }

  const handleCheckout = () => {
    setPurchaseComplete(true)
    setTimeout(() => {
      clearCart()
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
            <span className="text-foreground font-medium">Carrinho</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <ShoppingCart className="text-primary" size={32} />
            <h1 className="text-4xl font-bold text-foreground">Meu Carrinho</h1>
          </div>
          <p className="text-muted-foreground">
            {cart.length > 0
              ? `Você tem ${cart.length} ${cart.length === 1 ? "item" : "itens"} no carrinho`
              : "Seu carrinho está vazio"}
          </p>
        </div>

        {/* Cart Content */}
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.productId}
                  className="bg-card border border-border rounded-xl p-6 flex items-center gap-6 hover:shadow-md transition-shadow"
                >
                  {/* Product Image Placeholder */}
                  <div className="w-24 h-24 bg-muted rounded-lg flex-shrink-0"></div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg mb-1">{item.name}</h3>
                    <p className="text-primary font-bold text-lg">R$ {item.price.toLocaleString("pt-BR")}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleUpdateQuantity(item.productId, item.name, item.price, false)}
                      className="bg-muted text-foreground p-2 rounded-lg hover:bg-muted/80 transition-colors"
                      title="Diminuir quantidade"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-semibold text-foreground w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => handleUpdateQuantity(item.productId, item.name, item.price, true)}
                      className="bg-primary text-primary-foreground p-2 rounded-lg hover:opacity-90 transition-opacity"
                      title="Aumentar quantidade"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Item Total */}
                  <div className="text-right min-w-[100px]">
                    <p className="text-sm text-muted-foreground mb-1">Subtotal</p>
                    <p className="font-bold text-foreground text-lg">
                      R$ {(item.price * item.quantity).toLocaleString("pt-BR")}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.productId)}
                    className="text-destructive hover:bg-destructive/10 p-2 rounded-lg transition-colors"
                    title="Remover do carrinho"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}

              <button
                onClick={clearCart}
                className="text-destructive hover:underline text-sm font-medium flex items-center gap-2"
              >
                <Trash2 size={16} />
                Limpar Carrinho
              </button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-xl p-6 sticky top-6">
                <h2 className="text-xl font-bold text-foreground mb-6">Resumo do Pedido</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>R$ {cartTotal.toLocaleString("pt-BR")}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Frete</span>
                    <span className="text-primary font-semibold">Grátis</span>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between text-foreground text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">R$ {cartTotal.toLocaleString("pt-BR")}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mb-4"
                >
                  Finalizar Compra
                  <ArrowRight size={20} />
                </button>

                <Link href="/produtos" className="block text-center text-primary hover:underline text-sm font-medium">
                  Continuar Comprando
                </Link>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-border space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span>Frete grátis em compras acima de R$ 500</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span>Parcelamento em até 12x sem juros</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span>Garantia de 2 anos em todos os produtos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-muted rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="text-muted-foreground" size={48} />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">Seu carrinho está vazio</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Explore nossa coleção de móveis sustentáveis e encontre as peças perfeitas para transformar seu espaço.
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

      {/* Purchase Complete Modal */}
      {purchaseComplete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-card rounded-2xl p-8 text-center max-w-sm shadow-2xl border border-border">
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

      <Footer />
    </div>
  )
}
