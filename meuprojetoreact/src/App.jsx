import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, Menu, X, Star, Shield, Zap, Sparkles } from "lucide-react"

const navLinks = [
  { label: 'Recursos', href: '#features' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Preços', href: '#pricing' },
  { label: 'FAQ', href: '#faq' }
]

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30 min-h-screen relative">
      {/* 1. Header (Apenas a barra de navegação) */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/80 backdrop-blur-md px-4 py-3">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Sparkles className="size-5 text-fuchsia-400" />
            <span className="font-bold tracking-tight">Minha Marca</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-fuchsia-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/5"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>

      {/* 3. Hero Section */}
      <section className="relative overflow-hidden mx-auto max-w-6xl px-4 py-8">
        <div className="mx-auto max-w-6xl px-4 py-20 relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold"
          >
            Acelere sue presença online com uma landing page{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-violet-300">
              simples e eficaz
            </span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 text-slate-300 max-w-2xl"
          >
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 flex flex-row gap-3"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-fuchsia-800 px-6 py-3 text-white font-semibold hover:bg-fuchsia-600 transition-colors"
            >
              Comece agora
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-slate-300 font-semibold hover:bg-slate-800 transition-colors"
            >
              Saiba mais
              <Zap className="size-4" />
            </a>
          </motion.div>
          {/* Cards de Recursos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-14 grid grid-cols-3 gap-4"
          >
            {['Velocidade', 'Segurança', 'Confiabilidade'].map((label, i) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.05] transition-colors">
                <div className="flex items-center gap-3 ">
                  {i === 0 && <Zap className="size-5 text-emerald-400" />}
                  {i === 1 && <Shield className="size-5 text-sky-400" />}
                  {i === 2 && <Star className="size-5 text-amber-400" />}
                  <div className="font-semibold">{label}</div>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}

          </motion.div>
        </div>
      </section>
      {/* 4. Seção de Features */}
      <section id="features" className="mx-auto max-w-6xl px-9 py-8">
        <h2 className="text-3xl font-bold">Tudo que você precisa</h2>
        <p className="text-slate300 mt-2 max-w-2xl">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {[{
            title: 'Design Responsivo',
            desc: "funciona em todos os dispositivos",
            icon: <Sparkles className="size-5 text-emerald-400" />
          }, {
            title: 'SEO Otimizado',
            desc: "melhore seu posicionamento nos motores de busca",
            icon: <Star className="size-5 text-sky-400" />
          }, {
            title: 'Integração com Redes Sociais',
            desc: "conecte-se com sua audiência onde elas estão",
            icon: <Shield className="size-5 text-amber-400" />
          }].map((feature, i) => (
            <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.05] transition-colors">
              <div className="flex-items-center-gap-3">
                {feature.icon}
                <p className="font-semibold">{feature.title}</p>
              </div>
              <p className="text-sm text-slate-400 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* 5. Seção de Depoimentos */}
      <section id="testimonials" className="mx-auto max-w-6xl px-9 py-8">
        <h2 className="text-3xl font-bold">Quem usou, aprovou</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <blockquote key={i} className="rounded-2xl border border-white/10 p-6">
              <div className="flex items-center gap-2 text-amber-400">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} className="size-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 mt-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <cite className="block mt-4 text-sm text-slate-400">- Usuário {i}</cite>
            </blockquote>
          ))}
        </div>
      </section>
      {/* 6. Seção de Preços */}
      <section id="pricing" className="mx-auto max-w-6xl px-9 py-8">
        <h2 className="text-3xl font-bold">Planos e Preços</h2>
        <p className="text-slate-300 mt-2 max-w-2xl">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.05] transition-colors">
              <h3 className="text-xl font-bold">Plano {i}</h3>
              <p className="text-3xl font-bold mt-4">$99<span className="text-lg text-slate-400">/mês</span></p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-emerald-400" />
                  <span>Recursos incluídos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-emerald-400" />
                  <span>Suporte prioritário</span>
                </li>
              </ul>
              <button className="mt-6 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors hover:cursor-pointer">
                Assinar Agora
              </button>
            </div>
          ))}
        </div>
      </section>
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-9 py-8">
          <p className="text-slate-400 text-center">
            &copy; {new Date().getFullYear()} Minha Marca. Todos os direitos reservados.
          </p>
        </div>
      </footer>


      {/* 2. Mobile Menu Overlay (FORA DA HEADER para evitar conflitos de estilo) */}
      <AnimatePresence>
        {open && (
          <div className="md:hidden fixed inset-0 z-50">
            {/* Backdrop Escuro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Painel do Menu (Gaveta uniforme) */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 h-full w-60 bg-slate-900 border-l border-white/10 p-6 flex flex-col z-10 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-6 text-fuchsia-400" />
                  <span className="font-semibold text-lg text-white">Minha Marca</span>
                </div>
                <button
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
                  onClick={() => setOpen(false)}
                  aria-label="Fechar menu"
                >
                  <X className="size-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-slate-200 hover:text-fuchsia-300 transition-colors py-1 text-base font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default App