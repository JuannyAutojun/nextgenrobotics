import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "199",
    desc: "Ideal para começar a explorar o mundo da tecnologia.",
    features: ["1 aula semanal", "Acesso à plataforma", "Material digital", "Certificado básico"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "349",
    desc: "Para alunos comprometidos com a evolução real.",
    features: ["2 aulas semanais", "Kit Arduino incluso", "Mentoria mensal", "Projetos avaliados", "Certificado avançado"],
    highlight: true,
  },
  {
    name: "Elite",
    price: "599",
    desc: "Imersão completa para futuros engenheiros.",
    features: ["3 aulas semanais", "Kit completo + 3D", "Mentoria semanal", "Acesso a competições", "Portfólio profissional"],
    highlight: false,
  },
];

const Plans = () => (
  <section id="planos" className="py-24">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Planos</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3">Escolha sua <span className="text-gradient-primary">jornada</span></h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
              p.highlight
                ? "bg-gradient-card border-primary/60 shadow-glow scale-[1.02] md:scale-105"
                : "bg-gradient-card border-border/50 hover:border-primary/30"
            }`}
          >
            {p.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> MAIS POPULAR
              </div>
            )}
            <h3 className="text-2xl font-bold">{p.name}</h3>
            <p className="text-sm text-muted-foreground mt-2 min-h-[40px]">{p.desc}</p>
            <div className="mt-6 mb-6">
              <span className="text-sm text-muted-foreground">R$</span>
              <span className="text-5xl font-extrabold ml-1">{p.price}</span>
              <span className="text-muted-foreground">/mês</span>
            </div>
            <Button variant={p.highlight ? "hero" : "outlineGlow"} className="w-full" size="lg" asChild>
              <a href="#inscricao">Começar agora</a>
            </Button>
            <ul className="mt-8 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Plans;
