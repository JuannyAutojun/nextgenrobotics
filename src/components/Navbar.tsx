import { Button } from "@/components/ui/button";
import { Cpu, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#beneficios", label: "Benefícios" },
    { href: "#cursos", label: "Cursos" },
    { href: "#planos", label: "Planos" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
            <Cpu className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-gradient">NextGen Robotics</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button variant="hero" size="sm" asChild>
            <a href="#inscricao">Aula Gratuita</a>
          </Button>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden glass border-t border-border/50 px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm">
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="sm" asChild>
            <a href="#inscricao">Aula Gratuita</a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
