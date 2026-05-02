import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-robotics.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-16">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">Educação tech para o futuro</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Transforme curiosidade em <span className="text-gradient-primary">inovação</span>.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
            Aprenda robótica, programação e automação com projetos reais e prepare-se para as profissões do futuro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#inscricao">
                Agendar Aula Gratuita <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outlineGlow" size="xl" asChild>
              <a href="#cursos">Conhecer Cursos</a>
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div>
              <div className="text-2xl font-bold text-gradient">5K+</div>
              <div className="text-xs text-muted-foreground">Alunos</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="text-2xl font-bold text-gradient">98%</div>
              <div className="text-xs text-muted-foreground">Satisfação</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="text-2xl font-bold text-gradient">120+</div>
              <div className="text-xs text-muted-foreground">Projetos</div>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
          <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30" />
          <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-elegant animate-pulse-glow">
            <img
              src={heroImg}
              alt="Adolescentes aprendendo robótica e programação"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
