"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Leaf, Zap, Heart, Play } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/components/cart-context"
import { X } from "lucide-react"

export default function Home() {
  const { addToCart } = useCart()
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative h-[90vh] min-h-[650px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-sustainable.jpeg"
            alt="Sustainable Modern Furniture"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        {/* Content Container */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-9/12 my-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
              {/* Left Content - Text Overlay */}
              <div className="lg:col-span-7 text-white space-y-0">
                <div className="space-y-4">
                  <h1 className="leading-tight text-balance font-normal md:text-5xl py-0 border-0 my-7 mb-[0] text-3xl mt-0 leading-8">
                    Design com
                    <br />
                    <span className="font-serif italic text-primary font-medium leading-5">Sustentabilidade</span>
                    <br />
                    para uma casa melhor
                  </h1>
                </div>

                <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed py-2">
                  Móveis sustentáveis que transformam ambientes com estilo e consciência ambiental. Cada peça conta uma
                  história de responsabilidade e beleza.
                </p>

                <div className="flex items-center gap-4 pt-6">
                  <Link
                    href="/produtos"
                    className="group relative inline-flex items-center justify-center bg-white text-foreground px-8 py-4 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
                  >
                    {/* Animated gradient background on hover */}
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>

                    {/* Button text and icon */}
                    <span className="relative flex items-center gap-2">
                      Comprar agora
                      <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
                    </span>

                    {/* Shine effect */}
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></span>
                  </Link>
                </div>
              </div>

              {/* Right Content - Stats Badge */}
              <div className="lg:col-span-5 flex justify-end my-9">
                <div className="space-y-6 text-justify">
                  {/* Eco Badge */}

                  {/* Percentage Badge */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="pt-12 pb-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Coleção em Destaque</h2>
              <p className="text-muted-foreground">Explore nossos móveis mais procurados</p>
            </div>
            <Link
              href="/produtos"
              className="text-primary font-semibold hover:gap-2 flex items-center gap-1 transition-all"
            >
              Ver Todos <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-background overflow-hidden">
                <img
                  src="/images/design-mode/WhatsApp%20Image%202025-12-05%20at%2011.46.12%20PM%20%282%29.jpeg"
                  alt="Sofá Verde Sustentável"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1">Cômada Notas da Serra</h3>
                <p className="text-sm text-muted-foreground mb-3">Madeira certificada</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">R$ 180</span>
                  <button
                    onClick={() => addToCart(1, "Sofá Green Essence", 2490)}
                    className="group relative bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-black hover:scale-110 hover:shadow-lg hover:shadow-primary/50 active:scale-95 transition-all duration-200"
                  >
                    <span className="relative z-10">+</span>
                    <span className="absolute inset-0 rounded bg-primary/50 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-background overflow-hidden">
                <img
                  src="/images/imagem-2025-12-06-154126990.png"
                  alt="Estante Modular"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1">Mesinha Orvalho de Madeira</h3>
                <p className="text-sm text-muted-foreground mb-3">Matéria restaurada</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">R$ 380</span>
                  <button
                    onClick={() => addToCart(2, "Estante Modular", 1890)}
                    className="group relative bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-black hover:scale-110 hover:shadow-lg hover:shadow-primary/50 active:scale-95 transition-all duration-200"
                  >
                    <span className="relative z-10">+</span>
                    <span className="absolute inset-0 rounded bg-primary/50 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-background overflow-hidden">
                <img
                  src="/images/imagem-2025-12-06-154317307.png"
                  alt="Móvel Vintage Restaurado"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1">Sofá Sol de Domingo</h3>
                <p className="text-sm text-muted-foreground mb-3">Restaurado com cuidado</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">R$ 500</span>
                  <button
                    onClick={() => addToCart(3, "Móvel Vintage", 1650)}
                    className="group relative bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-black hover:scale-110 hover:shadow-lg hover:shadow-primary/50 active:scale-95 transition-all duration-200"
                  >
                    <span className="relative z-10">+</span>
                    <span className="absolute inset-0 rounded bg-primary/50 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-background overflow-hidden">
                <img
                  src="/images/whatsapp-20image-202025-12-05-20at-2011.jpeg"
                  alt="Poltrona Conforto"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1">Cama aquarela da noite</h3>
                <p className="text-sm text-muted-foreground mb-3">Estilo clássico moderno</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">R$ 580</span>
                  <button
                    onClick={() => addToCart(4, "Poltrona Conforto", 1280)}
                    className="group relative bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-black hover:scale-110 hover:shadow-lg hover:shadow-primary/50 active:scale-95 transition-all duration-200"
                  >
                    <span className="relative z-10">+</span>
                    <span className="absolute inset-0 rounded bg-primary/50 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Por que escolher Lumière?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-card rounded-xl border border-border hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Sustentável</h3>
              <p className="text-muted-foreground">
                Todos os nossos móveis são certificados com origem sustentável, refletindo nosso compromisso com o
                planeta.
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl border border-border hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Design Moderno</h3>
              <p className="text-muted-foreground">
                Cada peça é cuidadosamente selecionada ou restaurada para oferecer design contemporâneo com raízes
                vintage.
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl border border-border hover:shadow-lg hover:border-primary/30 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Acessível</h3>
              <p className="text-muted-foreground">
                Acreditamos que qualidade não deve ser privilégio. Oferecemos preços justos e acessíveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para transformar seu espaço?</h2>
          <p className="text-lg opacity-90 mb-8">
            Descubra como nossos móveis sustentáveis podem criar um ambiente mais consciente e acolhedor.
          </p>
          <Link
            href="/produtos"
            className="inline-flex items-center justify-center bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mb-16"
          >
            Começar Agora <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <Footer />

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-2xl bg-black rounded-xl overflow-hidden">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-lg hover:bg-black/70 transition-colors z-10"
            >
              <X size={24} />
            </button>
            <div className="aspect-video bg-black flex items-center justify-center">
              <div className="text-center">
                <Play size={64} className="text-primary mx-auto mb-4" />
                <p className="text-white text-lg">Vídeo da Lumière em breve!</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
