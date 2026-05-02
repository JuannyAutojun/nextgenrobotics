import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Curriculum from "@/components/Curriculum";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Plans from "@/components/Plans";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <h1 className="sr-only">NextGen Robotics Academy — Cursos de Robótica e Programação para Adolescentes</h1>
      <Hero />
      <Benefits />
      <Curriculum />
      <Stats />
      <Testimonials />
      <Plans />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
