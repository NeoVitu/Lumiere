"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hammer, Lightbulb, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicosPage() {
  const services = [
    {
      icon: Hammer,
      title: "Restauração de Móveis",
      description:
        "Transformamos móveis antigos em peças modernas e funcionais. Nossos experts em restauração cuidam de cada detalhe para preservar a história e a beleza de seus móveis.",
      features: ["Limpeza profissional", "Restauro estrutural", "Novo revestimento", "Customização"],
      image: "/images/furniture-restoration.jpg",
    },
    {
      icon: Lightbulb,
      title: "Consultoria em Decoração",
      description:
        "Crie espaços que refletem sua personalidade e valores. Nossos consultores trabalham com você para projetar ambientes sustentáveis, bonitos e funcionais.",
      features: ["Planejamento de espaço", "Seleção de cores e materiais", "Layout otimizado", "Orçamento"],
      image: "/images/image.png",
    },
    {
      icon: BookOpen,
      title: "Workshops",
      description:
        "Aprenda sobre sustentabilidade, design de interiores e restauração de móveis. Nossos workshops são práticos, inspiradores e acessíveis para todos.",
      features: ["Workshops mensais", "Treinamentos customizados", "Material didático", "Certificação"],
      image: "/images/sustainable-workshops.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 border-b border-border py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Nossos Serviços</h1>
          <p className="text-lg text-muted-foreground">
            Além de uma loja, Lumière oferece soluções completas para seus espaços. Restauração, consultoria e educação
            em sustentabilidade.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="text-primary" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Saiba Mais <ArrowRight size={20} />
                  </button>
                </div>

                <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                  <div className="relative rounded-2xl aspect-square overflow-hidden shadow-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Como Funciona</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Consulta Inicial", description: "Entenda suas necessidades e objetivos" },
              { step: "2", title: "Planejamento", description: "Criamos uma proposta personalizada" },
              { step: "3", title: "Execução", description: "Realizamos o trabalho com excelência" },
              { step: "4", title: "Resultado", description: "Seu espaço transformado e sustentável" },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-card border border-border rounded-xl p-6 text-center h-full">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {i < 3 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-border"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Tabela de Preços</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Valores aproximados. Para orçamento personalizado, entre em contato conosco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Restauração Básica",
                price: "R$ 500-1.500",
                items: ["Limpeza profissional", "Pequenos reparos", "Acabamento"],
              },
              {
                name: "Consultoria Completa",
                price: "R$ 1.500-3.000",
                items: ["Visita ao local", "Projeto detalhado", "Acompanhamento"],
              },
              { name: "Workshop", price: "R$ 200-500", items: ["4h de duração", "Material incluído", "Certificado"] },
            ].map((plan, i) => (
              <div key={i} className="border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold text-primary mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Solicitar
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar?</h2>
          <p className="text-lg opacity-90 mb-8">
            Entre em contato com nossa equipe para começar seu projeto de sustentabilidade e design.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Solicitar Consultoria
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
