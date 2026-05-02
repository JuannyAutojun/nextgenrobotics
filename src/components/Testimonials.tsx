import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Lucas M., 15 anos",
    text: "Em poucos meses consegui construir meu primeiro robô funcional. Foi simplesmente incrível!",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    name: "Sofia R., 14 anos",
    text: "As aulas são super dinâmicas. Já participo de competições de robótica na minha escola.",
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    name: "Pedro A., 17 anos",
    text: "Aprendi Python e Arduino em paralelo. Hoje desenvolvo meus próprios projetos com IA.",
    avatar: "https://i.pravatar.cc/120?img=33",
  },
];

const Testimonials = () => (
  <section className="py-24">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3">Histórias que <span className="text-gradient-primary">inspiram</span></h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, k) => (
                <Star key={k} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground/90 leading-relaxed mb-6">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <img src={t.avatar} alt={t.name} loading="lazy" className="w-12 h-12 rounded-full border-2 border-primary/40" />
              <div className="font-medium">{t.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
