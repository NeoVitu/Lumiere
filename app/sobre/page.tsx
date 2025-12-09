"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, Leaf, Target } from "lucide-react"
import Link from "next/link"

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-background opacity-100">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 border-b border-border py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">A História da Lumière</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nascemos com a proposta de inovar o mercado de móveis sustentáveis, unindo design contemporâneo, conforto
            excepcional e compromisso genuíno com a sustentabilidade e responsabilidade social.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-card border border-border rounded-xl p-8">
              <Target className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold text-foreground mb-3">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Promover o consumo consciente e garantir que mais pessoas tenham acesso a móveis de qualidade, design e
                sustentabilidade a preços justos e acessíveis.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card border border-border rounded-xl p-8">
              <Award className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold text-foreground mb-3">Nossa Visão</h3>
              <p className="text-muted-foreground">
                Ser referência nacional em inovação no mercado de móveis sustentáveis e acessíveis, transformando
                espaços e vidas através do design consciencioso.
              </p>
            </div>

            {/* Values */}
            <div className="bg-card border border-border rounded-xl p-8">
              <Leaf className="text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold text-foreground mb-3">Nossos Valores</h3>
              <p className="text-muted-foreground">
                Empatia, Acessibilidade, Ética, Respeito, Cooperação e Sustentabilidade para as gerações futuras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Como Tudo Começou</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Lumière foi fundada por um grupo de apaixonados por design e sustentabilidade que perceberam uma
                  lacuna no mercado brasileiro: não havia um lugar confiável para comprar móveis lindos, confortáveis e
                  sustentáveis sem comprometer a qualidade ou o orçamento.
                </p>
                <p>
                  Começamos pequeno, restaurando móveis vintage e selecionando peças de designers sustentáveis. Cada
                  trabalho era feito com cuidado, respeitando as histórias dos móveis e criando novas narrativas de
                  qualidade.
                </p>
                <p>
                  Hoje, Lumière é mais que uma loja. Somos um movimento para transformar a forma como as pessoas pensam
                  sobre móveis, consumo e o impacto de suas escolhas no planeta.
                </p>
              </div>
            </div>

            <div className="rounded-2xl h-96 overflow-hidden">
              <img src="/images/about-story.jpg" alt="História Lumière" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Nosso Time</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Somos um time apaixonado por design, sustentabilidade e criar experiências memoráveis para nossos clientes.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Victor Meira", role: "Diretor de Design" },
              { name: "Cauã Alves", role: "Gerente de Sustentabilidade" },
              { name: "Gabrielly Caresia", role: "Diretora de Operações" },
              { name: "Gustavo Razuk", role: "Coordenador de Inovação" },
              { name: "Cecilia Engel", role: "Especialista em Restauração" },
              { name: "Davi Lopes", role: "Consultor de Decoração" },
              { name: "Eduarda Santana", role: "Coordenadora de Workshops" },
              { name: "Samuel Silva", role: "Designer de Produtos" },
              { name: "Júlia Barão", role: "Gerente de Marketing" },
              { name: "Thomas de Jesus", role: "Analista de Qualidade" },
              { name: "Kelly Araujo", role: "Coordenadora de Logística" },
              { name: "Ana Luiza Marques", role: "Especialista em Materiais" },
              { name: "Kemilly da Silva", role: "Gerente de Atendimento" },
              { name: "Kemilly Araujo", role: "Coordenadora de Produção" },
              { name: "Mariana Napoli", role: "Analista de Sustentabilidade" },
              { name: "Rayanne Rodrigues", role: "Designer de Interiores" },
              { name: "Mariany Ferrari", role: "Gerente Financeira" },
              { name: "Luana", role: "Coordenadora de E-commerce" },
            ].map((member, i) => (
              <div key={i} className="text-center">
                
                <h3 className="font-semibold text-foreground text-sm">{member.name}</h3>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Quer ser parte da mudança?</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
          Explore nossa coleção de móveis sustentáveis e comece a transformar seu espaço hoje mesmo.
        </p>
        <Link
          href="/produtos"
          className="inline-flex items-center justify-center bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          Ver Coleção Completa
        </Link>
      </section>

      <Footer />
    </div>
  )
}
