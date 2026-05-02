import { Code2, Brain, Cpu, Boxes, Cog, Zap } from "lucide-react";

const topics = [
  { icon: Code2, title: "Lógica de Programação", desc: "Fundamentos do pensamento computacional." },
  { icon: Code2, title: "Python", desc: "A linguagem mais utilizada no mundo tech." },
  { icon: Cpu, title: "Arduino", desc: "Eletrônica e microcontroladores na prática." },
  { icon: Cog, title: "Sensores e Automação", desc: "Crie sistemas que percebem e reagem." },
  { icon: Boxes, title: "Impressão 3D", desc: "Modele e fabrique suas próprias peças." },
  { icon: Brain, title: "IA básica", desc: "Introdução prática à inteligência artificial." },
];

const Curriculum = () => (
  <section id="cursos" className="py-24 relative bg-gradient-hero">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Currículo</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3">O que você vai <span className="text-gradient-primary">aprender</span></h2>
        <p className="text-muted-foreground mt-4">Uma jornada completa do código ao robô funcional.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((t, i) => (
          <div key={i} className="group relative p-6 rounded-2xl glass hover:bg-card/60 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20">
                <t.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Módulo {String(i + 1).padStart(2, "0")}</span>
                  <Zap className="w-3 h-3 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mt-1">{t.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Curriculum;
