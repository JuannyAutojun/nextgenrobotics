import { Rocket, Wrench, Award, Users, GraduationCap, MonitorSmartphone } from "lucide-react";

const items = [
  { icon: Wrench, title: "Aprendizado prático", desc: "Construa, programe e teste em laboratórios completos." },
  { icon: Rocket, title: "Projetos reais", desc: "Robôs autônomos, drones e automações que funcionam." },
  { icon: Award, title: "Certificação reconhecida", desc: "Certificados valorizados por escolas e empresas tech." },
  { icon: GraduationCap, title: "Mentoria especializada", desc: "Engenheiros e desenvolvedores acompanham cada aluno." },
  { icon: Users, title: "Turmas reduzidas", desc: "Máximo de 12 alunos para atenção individualizada." },
  { icon: MonitorSmartphone, title: "Presencial e online", desc: "Estude no formato que melhor combina com você." },
];

const Benefits = () => (
  <section id="beneficios" className="py-24 relative">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Por que escolher</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3">Uma nova forma de <span className="text-gradient-primary">aprender tecnologia</span></h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="group relative p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow">
              <item.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
