import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { z } from "zod";
import { Rocket } from "lucide-react";

const schema = z.object({
  nome: z.string().trim().min(2, "Nome muito curto").max(80),
  email: z.string().trim().email("E-mail inválido").max(120),
  telefone: z.string().trim().min(8, "Telefone inválido").max(20),
  idade: z.string().refine((v) => {
    const n = Number(v);
    return n >= 12 && n <= 18;
  }, "Idade entre 12 e 18 anos"),
});

const ContactForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", idade: "" });
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast({ title: "Verifique os dados", description: result.error.issues[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Inscrição recebida!", description: "Em breve entraremos em contato para agendar sua aula gratuita." });
      setForm({ nome: "", email: "", telefone: "", idade: "" });
    }, 800);
  };

  return (
    <section id="inscricao" className="py-24 relative">
      <div className="container max-w-3xl">
        <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-card border border-primary/30 shadow-elegant overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-4">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium">Vagas limitadas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Quero minha <span className="text-gradient-primary">aula gratuita</span></h2>
            <p className="text-muted-foreground mt-2">Preencha seus dados e nosso time entrará em contato.</p>

            <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="sm:col-span-2">
                <Label htmlFor="nome">Nome completo</Label>
                <Input id="nome" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} placeholder="Seu nome" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="voce@email.com" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="telefone">Telefone</Label>
                <Input id="telefone" value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} placeholder="(11) 99999-9999" className="mt-1.5" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="idade">Idade do aluno</Label>
                <Input id="idade" type="number" min={12} max={18} value={form.idade} onChange={(e) => setForm({ ...form, idade: e.target.value })} placeholder="12 - 18" className="mt-1.5" />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" variant="hero" size="xl" className="w-full" disabled={loading}>
                  {loading ? "Enviando..." : "Quero minha aula gratuita"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
