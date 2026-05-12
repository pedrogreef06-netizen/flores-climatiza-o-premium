import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Wind, Sparkles, Wrench, MapPin, Clock, ShieldCheck, Boxes, Brush, Award,
  Headset, MessageSquare, CalendarCheck, Phone, Instagram, ChevronDown,
  ArrowRight, CheckCircle2, Snowflake,
} from "lucide-react";
import heroImg from "@/assets/hero-ac.jpg";
import serviceInstalacao from "@/assets/service-instalacao.jpg";
import serviceHigienizacao from "@/assets/service-higienizacao.jpg";
import serviceManutencao from "@/assets/service-manutencao.jpg";
import logoFlores from "@/assets/logo-flores.png";
import { Header } from "@/components/site/Header";
import { WhatsAppFab, WHATSAPP_URL } from "@/components/site/WhatsAppFab";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flores Climatização — Instalação, Higienização e Manutenção em Florianópolis" },
      {
        name: "description",
        content:
          "Instalação, higienização e manutenção de ar-condicionado em Florianópolis e região. Atendimento profissional, padrão dos fabricantes, agilidade e confiança.",
      },
      { property: "og:title", content: "Flores Climatização — Ar-condicionado em Florianópolis" },
      {
        property: "og:description",
        content:
          "Serviços de climatização com padrão técnico premium em Florianópolis. Solicite seu orçamento no WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Wind,
    title: "Instalação",
    image: serviceInstalacao,
    desc: "Instalação completa de splits e multi-splits seguindo rigorosamente o padrão técnico do fabricante. Tubulação, vácuo, isolamento e acabamento impecáveis para garantir desempenho máximo e a validade da garantia do seu equipamento.",
    bullets: [
      "Padrão técnico do fabricante",
      "Materiais de primeira linha",
      "Acabamento limpo e organizado",
    ],
  },
  {
    icon: Sparkles,
    title: "Higienização",
    image: serviceHigienizacao,
    desc: "Limpeza profunda do evaporador, hélice e dreno, eliminando fungos, ácaros e bactérias. Ar mais puro, ambiente saudável e prevenção de odores e problemas respiratórios para toda a família.",
    bullets: [
      "Qualidade do ar interior",
      "Prevenção de mofo e odores",
      "Recomendado a cada 6 meses",
    ],
  },
  {
    icon: Wrench,
    title: "Manutenção",
    image: serviceManutencao,
    desc: "Diagnóstico técnico, reparos e checagem completa: gás, pressão, componentes elétricos e desempenho. Restabelecemos a eficiência do seu ar-condicionado e prolongamos sua vida útil.",
    bullets: [
      "Diagnóstico preciso",
      "Reparos com peças de qualidade",
      "Mais eficiência e economia",
    ],
  },
];

const differentials = [
  { icon: Clock, title: "Atendimento rápido", desc: "Resposta ágil e visita técnica no menor prazo." },
  { icon: ShieldCheck, title: "Serviço profissional", desc: "Equipe treinada, certificada e segurada." },
  { icon: Boxes, title: "Equipamentos adequados", desc: "Ferramentas modernas para cada tipo de serviço." },
  { icon: Brush, title: "Organização e limpeza", desc: "Cuidamos do seu ambiente do início ao fim." },
  { icon: Award, title: "Padrão técnico", desc: "Procedimentos conforme normas dos fabricantes." },
  { icon: Headset, title: "Suporte ao cliente", desc: "Acompanhamento pós-serviço e garantia." },
];

const steps = [
  { icon: MessageSquare, title: "Contato", desc: "Você fala com a gente pelo WhatsApp e conta sua necessidade." },
  { icon: CalendarCheck, title: "Agendamento", desc: "Marcamos a visita técnica no melhor horário para você." },
  { icon: Wrench, title: "Execução", desc: "Realizamos o serviço com padrão técnico e máxima organização." },
  { icon: ShieldCheck, title: "Garantia", desc: "Acompanhamento pós-serviço e suporte sempre que precisar." },
];

const faqs = [
  {
    q: "Qual a região de atendimento?",
    a: "Atendemos toda a Grande Florianópolis: Centro, Trindade, Córrego Grande, Jurerê, Ingleses, Canasvieiras, São José, Palhoça e Biguaçu.",
  },
  {
    q: "Com que frequência devo higienizar o ar-condicionado?",
    a: "Recomendamos higienização a cada 6 meses para residências e a cada 3 meses para ambientes comerciais ou de uso intenso.",
  },
  {
    q: "Vocês instalam aparelhos comprados em qualquer loja?",
    a: "Sim! Realizamos a instalação de qualquer marca, seguindo o padrão técnico do fabricante e garantindo a validade da garantia.",
  },
  {
    q: "O orçamento é gratuito?",
    a: "Sim, o orçamento é totalmente gratuito e sem compromisso. Basta chamar no WhatsApp.",
  },
  {
    q: "Vocês emitem nota fiscal?",
    a: "Sim, emitimos nota fiscal para todos os serviços, residenciais e empresariais.",
  },
];

function Index() {
  useReveal();

  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <WhatsAppFab />

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Ar-condicionado moderno instalado em ambiente sofisticado"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_10%,oklch(1_0_0/0.15),transparent)]" />
        </div>

        <div className="relative container mx-auto px-5 pt-32 pb-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-dark border border-white/15 px-4 py-1.5 text-xs font-medium text-white/90 animate-fade-in">
              <MapPin className="h-3.5 w-3.5" />
              Atendimento em Florianópolis e Região
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] animate-fade-up">
              Instalação, Higienização e{" "}
              <span className="text-gradient">Manutenção</span> de Ar-Condicionado em Florianópolis
            </h1>

            <p
              className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl animate-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              Atendimento profissional seguindo o padrão dos fabricantes, com agilidade,
              qualidade e confiança.
            </p>

            <div
              className="mt-9 flex flex-col sm:flex-row gap-3 animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-7 py-4 text-base font-semibold shadow-premium hover:scale-[1.02] transition-transform"
              >
                <Phone className="h-5 w-5" /> Solicitar Orçamento no WhatsApp
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 rounded-full glass border border-white/30 text-white px-7 py-4 text-base font-semibold hover:bg-white/15 transition-colors"
              >
                <CalendarCheck className="h-5 w-5" /> Agendar Serviço
              </a>
            </div>

          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 animate-float hidden sm:block">
          <ChevronDown className="h-6 w-6" />
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 md:py-32 bg-gradient-soft">
        <div className="container mx-auto px-5">
          <div className="max-w-2xl reveal">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Nossos serviços
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">
              Soluções completas para o seu conforto térmico
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tudo que seu ar-condicionado precisa, com padrão técnico e atendimento humano.
            </p>
          </div>

          <div className="mt-14 space-y-8 md:space-y-14">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`reveal group grid lg:grid-cols-2 gap-6 lg:gap-12 items-center bg-card rounded-3xl border border-border shadow-elegant overflow-hidden ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
                  <img
                    src={s.image}
                    alt={`Serviço de ${s.title.toLowerCase()} de ar-condicionado`}
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-semibold text-foreground">
                    0{i + 1} · {s.title}
                  </div>
                </div>
                <div className="p-8 md:p-10 lg:p-12">
                  <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <s.icon className="h-6 w-6" strokeWidth={2.2} />
                  </div>
                  <h3 className="mt-5 text-2xl md:text-3xl font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
                  <ul className="mt-6 space-y-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-elegant hover:shadow-glow transition-all"
                  >
                    Solicitar orçamento <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="py-24 md:py-32">
        <div className="container mx-auto px-5">
          <div className="max-w-2xl mx-auto text-center reveal">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Por que escolher
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">
              Diferenciais que fazem a diferença
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Trabalhamos com seriedade do primeiro contato à entrega final.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentials.map((d, i) => (
              <div
                key={d.title}
                className="reveal flex gap-4 rounded-2xl p-6 border border-border bg-card hover:border-primary/40 hover:bg-secondary/40 transition-all"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="shrink-0 grid place-items-center h-11 w-11 rounded-xl bg-accent text-accent-foreground">
                  <d.icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{d.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="py-24 md:py-32 bg-gradient-soft">
        <div className="container mx-auto px-5">
          <div className="max-w-2xl reveal">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Como funciona
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">
              Simples, rápido e transparente
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Em 4 etapas você tem o conforto térmico que merece.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="reveal relative bg-card rounded-3xl p-7 border border-border shadow-elegant"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="absolute -top-3 -left-2 text-6xl font-display font-bold text-primary/10 leading-none select-none">
                  0{i + 1}
                </span>
                <div className="relative grid place-items-center h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-5 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 md:py-28">
        <div className="container mx-auto px-5">
          <div className="reveal relative overflow-hidden rounded-[2rem] bg-gradient-cta p-10 md:p-16 text-center shadow-premium">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />

            <div className="relative">
              <Snowflake className="mx-auto h-12 w-12 text-white/90 animate-float" />
              <h2 className="mt-6 text-3xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
                Seu ar-condicionado precisa de manutenção?
              </h2>
              <p className="mt-4 text-white/80 max-w-xl mx-auto text-lg">
                Fale agora com a nossa equipe e receba um orçamento gratuito em minutos.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-9 py-5 text-lg font-bold shadow-glow hover:scale-105 transition-transform"
              >
                <Phone className="h-5 w-5" /> Falar no WhatsApp
              </a>
              <div className="mt-6 flex items-center justify-center gap-2 text-white/70 text-sm">
                <CheckCircle2 className="h-4 w-4" /> Resposta rápida · Orçamento gratuito
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32 bg-gradient-soft">
        <div className="container mx-auto px-5">
          <div className="max-w-2xl mx-auto text-center reveal">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">
              Dúvidas frequentes
            </h2>
          </div>
          <div className="mt-12 max-w-3xl mx-auto space-y-3">
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[oklch(0.18_0.04_250)] text-white/80">
        <div className="container mx-auto px-5 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <img
              src={logoFlores}
              alt="Flores Climatização"
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
              Especialistas em climatização residencial e comercial em Florianópolis e região.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" /> WhatsApp: (51) 99917-5550
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Instagram className="h-4 w-4" /> @floresclimatizacao
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold">Atendimento</h4>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Florianópolis, São José, Palhoça, Biguaçu e toda a Grande Florianópolis.
              Segunda a sábado, das 8h às 19h.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container mx-auto px-5 py-6 text-xs text-white/50 flex flex-col md:flex-row justify-between gap-2">
            <span>© {new Date().getFullYear()} Flores Climatização. Todos os direitos reservados.</span>
            <span>Florianópolis · SC</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="reveal bg-card rounded-2xl border border-border shadow-elegant overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold text-foreground">{q}</span>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}
