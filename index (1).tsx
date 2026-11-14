import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MessageCircle, Clock, Phone, Sparkles } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import hero from "@/assets/hero.jpg";
import bolinho from "@/assets/bolinho.jpg";
import torresmo from "@/assets/torresmo.jpg";
import pimentas from "@/assets/pimentas.jpg";

const TITLE = "Sabores do Luciano | Produtos em Mogi das Cruzes";
const DESC =
  "Conheça os produtos do Sabores do Luciano em Mogi das Cruzes. Consulte opções e faça seu pedido diretamente pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#produtos", label: "Produtos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

const PRODUCTS = [
  { name: "Bolinho de Feijoada", img: bolinho, desc: "Uma opção saborosa e especial para quem aprecia o clássico sabor da feijoada em uma versão diferente." },
  { name: "Torresmo no Pote", img: torresmo, desc: "Uma opção para quem gosta de sabor marcante e de um bom acompanhamento." },
  { name: "Pimentas em Conserva", img: pimentas, desc: "Para quem aprecia um toque especial de sabor e personalidade nas refeições." },
];

const FEATURES = [
  { icon: Clock, title: "Opções para diferentes momentos", text: "Para compartilhar, servir ou acompanhar." },
  { icon: MessageCircle, title: "Atendimento direto pelo WhatsApp", text: "Fale diretamente com o Luciano." },
  { icon: Phone, title: "Contato fácil", text: "Consulte produtos e pedidos com praticidade." },
];

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const btnPrimary =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 font-medium text-primary-foreground shadow-warm transition hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20">
        <a href="#inicio" className="font-display text-2xl font-semibold text-primary md:text-3xl">
          {SITE.name}
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 transition hover:text-primary">
              {n.label}
            </a>
          ))}
          <a href={waLink()} {...ext} className={btnPrimary + " min-h-10 px-5 py-2 text-sm"}>
            Peça pelo WhatsApp
          </a>
        </nav>
        <button
          className="flex h-11 w-11 items-center justify-center rounded-full text-primary md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 pb-6 md:hidden" aria-label="Menu móvel">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-border/60 py-4 text-lg">
              {n.label}
            </a>
          ))}
          <a href={waLink()} {...ext} className={btnPrimary + " mt-5 w-full"}>
            Peça pelo WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-primary md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-muted-foreground">{text}</p>}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="inicio" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-20">
          <div className="animate-fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">{SITE.city}</p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] text-primary sm:text-6xl lg:text-7xl">
              Sabores que despertam boas lembranças.
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Conheça opções deliciosas para compartilhar, servir e deixar seus momentos ainda mais especiais.
            </p>
            <a href={waLink("Olá, Luciano! Quero fazer um pedido.")} {...ext} className={btnPrimary + " mt-8 w-full sm:w-auto"}>
              <MessageCircle className="h-5 w-5" /> Quero fazer meu pedido
            </a>
          </div>
          <figure className="relative animate-fade-up">
            <div className="absolute -inset-3 -z-10 rotate-2 rounded-3xl bg-secondary" />
            <img src={hero} width={1600} height={1104} alt="Mesa com bolinhos, torresmo e potes de pimenta em conserva" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-warm" />
            <figcaption className="mt-3 text-center text-xs text-muted-foreground">Imagem meramente ilustrativa</figcaption>
          </figure>
        </section>

        <section id="produtos" className="bg-secondary/50 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle eyebrow="Produtos" title="Nossos sabores" text="Conheça algumas das opções preparadas para quem aprecia sabores marcantes." />
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((p) => (
                <article key={p.name} className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-warm transition hover:-translate-y-1">
                  <div className="overflow-hidden">
                    <img src={p.img} width={928} height={720} loading="lazy" alt={`${p.name} (imagem ilustrativa)`} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl font-semibold text-primary">{p.name}</h3>
                    <p className="mt-2 flex-1 text-muted-foreground">{p.desc}</p>
                    <a href={waLink(`Olá, Luciano! Gostaria de saber mais sobre o ${p.name}.`)} {...ext} className={btnPrimary + " mt-6 w-full"}>
                      Consultar pelo WhatsApp
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-8 text-center text-xs text-muted-foreground">Imagens meramente ilustrativas.</p>
          </div>
        </section>

        <section id="sobre" className="mx-auto max-w-3xl px-5 py-16 text-center md:py-24">
          <SectionTitle eyebrow="Sobre o Luciano" title="Feito para quem valoriza sabor de verdade." />
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Os sabores do Luciano reúnem opções para quem gosta de apreciar bons momentos à mesa. Conheça os produtos disponíveis e entre em contato para consultar as opções e fazer seu pedido.
          </p>
          <div className="mx-auto mt-8 h-px w-24 bg-accent" />
        </section>

        <section className="bg-charcoal py-16 text-charcoal-foreground md:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-center font-display text-4xl font-semibold md:text-5xl">Por que conhecer nossos produtos?</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {FEATURES.map((f) => (
                <div key={f.title} className="rounded-2xl border border-charcoal-foreground/15 p-7 text-center">
                  <f.icon className="mx-auto h-9 w-9 text-accent" aria-hidden />
                  <h3 className="mt-4 font-display text-2xl font-semibold">{f.title}</h3>
                  <p className="mt-2 text-charcoal-foreground/70">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="px-5 py-16 md:py-24">
          <div className="mx-auto max-w-4xl rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground shadow-warm md:px-16">
            <Sparkles className="mx-auto h-8 w-8 text-accent" aria-hidden />
            <h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">Que tal experimentar?</h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-primary-foreground/85">
              Entre em contato, consulte os produtos disponíveis e faça seu pedido.
            </p>
            <a href={waLink("Olá, Luciano! Gostaria de consultar os produtos disponíveis.")} {...ext} className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 font-bold text-accent-foreground transition hover:-translate-y-0.5 hover:brightness-105 sm:w-auto">
              <MessageCircle className="h-5 w-5" /> Falar com Luciano pelo WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold text-primary">{SITE.name}</p>
            <p className="text-sm text-muted-foreground">{SITE.city}</p>
            <a href={waLink()} {...ext} className="text-sm font-medium text-primary hover:underline">WhatsApp {SITE.phoneDisplay}</a>
          </div>
          <nav className="flex flex-wrap gap-5 text-sm" aria-label="Rodapé">
            {NAV.map((n) => <a key={n.href} href={n.href} className="hover:text-primary">{n.label}</a>)}
          </nav>
        </div>
        <p className="pb-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</p>
      </footer>

      <a href={waLink("Olá, Luciano! Vim pelo site.")} {...ext} aria-label="Falar pelo WhatsApp" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-warm transition hover:scale-110">
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
