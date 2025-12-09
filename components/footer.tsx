import Link from "next/link"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Lumière</h3>
            <p className="text-sm opacity-75">Móveis sustentáveis que refletem design, conforto e responsabilidade.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <Link href="/" className="hover:opacity-100">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:opacity-100">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="hover:opacity-100">
                  Produtos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <Link href="/servicos" className="hover:opacity-100">
                  Restauração
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="hover:opacity-100">
                  Consultoria
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="hover:opacity-100">
                  Workshops
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>Email: contato@lumiere.com</li>
              <li>Telefone: +55 11 XXXX-XXXX</li>
              <li>São Paulo, Brasil</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
          <p>© 2025 Lumière. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1 mt-4 md:mt-0">
            Feito com <Heart size={16} className="text-primary" /> por Lumière
          </div>
        </div>
      </div>
    </footer>
  )
}
