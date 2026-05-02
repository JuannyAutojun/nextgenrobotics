import { Cpu, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 bg-card/40 pt-16 pb-8">
    <div className="container grid md:grid-cols-4 gap-10">
      <div className="md:col-span-2">
        <div className="flex items-center gap-2 font-bold text-lg">
          <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Cpu className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-gradient">NextGen Robotics Academy</span>
        </div>
        <p className="text-muted-foreground mt-4 max-w-md text-sm">
          Formando a próxima geração de inovadores através de robótica, programação e automação.
        </p>
        <div className="flex gap-3 mt-6">
          {[Instagram, Youtube, Linkedin].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Institucional</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href="#" className="hover:text-foreground transition-colors">Sobre nós</a></li>
          <li><a href="#cursos" className="hover:text-foreground transition-colors">Cursos</a></li>
          <li><a href="#planos" className="hover:text-foreground transition-colors">Planos</a></li>
          <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Contato</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> (11) 4002-8922</li>
          <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> contato@nextgenrobotics.com</li>
          <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-primary mt-0.5" /> Av. Paulista, 1000 — São Paulo, SP</li>
        </ul>
      </div>
    </div>
    <div className="container mt-12 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} NextGen Robotics Academy. Todos os direitos reservados.
    </div>
  </footer>
);

export default Footer;
