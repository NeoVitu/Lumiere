"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock, Share2 } from "lucide-react"
import { type FormEvent, useState } from "react"

export default function ContatoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 border-b border-border py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Fale Conosco</h1>
          <p className="text-lg text-muted-foreground">
            Estamos aqui para ajudar. Entre em contato conosco para saber mais sobre nossos produtos e serviços.
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">Informações de Contato</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:hello@lumiere.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      hello@lumiere.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                    <a href="tel:+551140000000" className="text-muted-foreground hover:text-primary transition-colors">
                      +55 (11) 4000-0000
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Localização</h3>
                    <p className="text-muted-foreground">
                      Rua Sustentável, 123
                      <br />
                      São Paulo, SP 01234-567
                      <br />
                      Brasil
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Horário</h3>
                    <p className="text-muted-foreground">
                      Seg-Sex: 9h - 18h
                      <br />
                      Sáb: 10h - 16h
                      <br />
                      Dom: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-8">Envie uma Mensagem</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(11) 9999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="produtos">Produtos e Compras</option>
                    <option value="servicos">Serviços</option>
                    <option value="consultoria">Consultoria</option>
                    <option value="workshop">Workshops</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Sua mensagem aqui..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Enviar Mensagem
                </button>

                {isSubmitted && (
                  <div className="bg-primary/10 text-primary px-4 py-3 rounded-lg text-center">
                    Obrigado! Receberemos sua mensagem em breve.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="border border-border rounded-2xl h-96 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197622478826!2d-46.65902!3d-23.561414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201578%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Lumière - Avenida Paulista"
            />
          </div>

          <div className="mt-16 bg-gradient-to-br from-primary/10 to-primary/5 border border-border rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Share2 className="text-primary" size={24} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">Compartilhe Nossa Loja</h2>
                  </div>
                  <p className="text-muted-foreground text-lg mb-4">
                    Escaneie o QR Code para acessar rapidamente nossa loja online ou compartilhe com amigos e
                    familiares.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Aponte a câmera do seu celular para o código e pronto! Você será direcionado para nosso catálogo
                    completo de móveis sustentáveis.
                  </p>
                </div>

                <div className="flex justify-center">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-primary/20">
                    <img
                      src="/images/design-mode/qrcodelumiere.png"
                      alt="QR Code Lumière Store"
                      className="w-48 h-48 leading-[0] md:w-auto md:h-auto"
                    />
                    <p className="text-center text-sm text-muted-foreground mt-4 font-medium">Escaneie para visitar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Perguntas Frequentes</h2>

          <div className="space-y-4">
            {[
              {
                q: "Qual é o prazo de entrega?",
                a: "O prazo de entrega varia de acordo com a localização e disponibilidade do produto. Geralmente, é entre 5 a 10 dias úteis.",
              },
              {
                q: "Fazem entrega fora de São Paulo?",
                a: "Sim! Realizamos entregas em todo o Brasil. Consulte a taxa de frete de sua região.",
              },
              {
                q: "Como funciona a garantia dos móveis?",
                a: "Todos os nossos móveis possuem garantia de 1 ano contra defeitos de fabricação. Consulte os termos específicos de cada produto.",
              },
              {
                q: "Oferem parcelamento?",
                a: "Sim, oferecemos parcelamento em até 12x nos cartões de crédito. Consute as taxas com nosso atendimento.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="bg-card border border-border rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow group"
              >
                <summary className="font-semibold text-foreground flex items-center justify-between">
                  {item.q}
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
