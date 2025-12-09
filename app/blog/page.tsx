"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

const BLOG_POSTS = [
  {
    id: 1,
    title: "Sustentabilidade no Design: Como Escolher Móveis Eco-Friendly",
    excerpt:
      "Descubra os critérios essenciais para escolher móveis sustentáveis sem comprometer o design e a qualidade.",
    author: "Maria Silva",
    date: "15 de Novembro, 2024",
    category: "Sustentabilidade",
    image: "/images/blog-sustainable-furniture.jpg",
  },
  {
    id: 2,
    title: "Restauração de Móveis Vintage: Arte e Técnica",
    excerpt: "Conheça o processo de restauração de móveis antigos e como preservar a história dentro de cada peça.",
    author: "João Santos",
    date: "10 de Novembro, 2024",
    category: "Restauração",
    image: "/images/blog-vintage-restoration.jpg",
  },
  {
    id: 3,
    title: "Paleta de Cores para Ambientes Sustentáveis",
    excerpt: "Explore cores naturais e harmônicas que criam espaços aconchegantes e conectados à natureza.",
    author: "Ana Costa",
    date: "5 de Novembro, 2024",
    category: "Design",
    image: "/images/blog-color-palette.jpg",
  },
  {
    id: 4,
    title: "O Impacto do Consumo Consciente no Futuro",
    excerpt: "Como nossas escolhas de consumo today moldam o mundo que deixaremos para as próximas gerações.",
    author: "Pedro Oliveira",
    date: "1 de Novembro, 2024",
    category: "Estilo de Vida",
    image: "/images/blog-conscious-consumption.jpg",
  },
  {
    id: 5,
    title: "Maximizando Espaços Pequenos com Design Inteligente",
    excerpt: "Dicas e truques para criar ambientes funcionais e bonitos mesmo em espaços reduzidos.",
    author: "Laura Martins",
    date: "25 de Outubro, 2024",
    category: "Design",
    image: "/images/blog-small-spaces.jpg",
  },
  {
    id: 6,
    title: "Materiais Sustentáveis: Conheça as Melhores Opções",
    excerpt: "Um guia completo sobre materiais eco-friendly disponíveis no mercado atualmente.",
    author: "Carlos Mendes",
    date: "20 de Outubro, 2024",
    category: "Sustentabilidade",
    image: "/images/blog-sustainable-materials.jpg",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 border-b border-border py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Blog Lumière</h1>
          <p className="text-lg text-muted-foreground">
            Inspiração, dicas e insights sobre sustentabilidade, design e estilo de vida consciente.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-card border border-border rounded-2xl overflow-hidden">
            <div className="aspect-square bg-muted h-96 md:h-full">
              <img
                src={BLOG_POSTS[0].image || "/placeholder.svg"}
                alt="Featured"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm font-semibold mb-4">
                {BLOG_POSTS[0].category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{BLOG_POSTS[0].title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{BLOG_POSTS[0].excerpt}</p>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{BLOG_POSTS[0].author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{BLOG_POSTS[0].date}</span>
                </div>
              </div>
              <Link
                href={`/blog/${BLOG_POSTS[0].id}`}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Ler Artigo <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Mais Artigos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded text-xs font-semibold mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Receba Inspiração</h2>
          <p className="text-lg opacity-90 mb-8">
            Inscreva-se na nossa newsletter para receber dicas de sustentabilidade, design e estilo de vida direto na
            sua caixa de entrada.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="seu@email.com"
              className="px-4 py-3 rounded-lg text-foreground bg-primary-foreground flex-1 max-w-sm placeholder:text-muted-foreground"
              required
            />
            <button className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
              Inscrever
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
