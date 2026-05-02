import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Qual a idade mínima para participar?", a: "Nossos cursos são para adolescentes de 12 a 18 anos, com turmas separadas por faixa etária." },
  { q: "Preciso ter experiência prévia em programação?", a: "Não! Começamos do zero. Os módulos são progressivos e acessíveis a qualquer iniciante." },
  { q: "Os alunos recebem certificado?", a: "Sim. Ao concluir cada módulo, o aluno recebe um certificado digital reconhecido pelo mercado." },
  { q: "As aulas são presenciais ou online?", a: "Oferecemos os dois formatos. Você escolhe o que melhor se adapta à sua rotina." },
  { q: "Os equipamentos estão inclusos?", a: "A partir do plano Pro, kits completos de Arduino e impressão 3D são fornecidos." },
];

const FAQ = () => (
  <section id="faq" className="py-24 bg-gradient-hero">
    <div className="container max-w-3xl">
      <div className="text-center mb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3">Perguntas <span className="text-gradient-primary">frequentes</span></h2>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`i-${i}`} className="glass rounded-xl px-6 border-border/50">
            <AccordionTrigger className="text-left text-base font-medium hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
