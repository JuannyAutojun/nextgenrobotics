import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "Alunos formados" },
  { value: 120, suffix: "+", label: "Projetos desenvolvidos" },
  { value: 98, suffix: "%", label: "Satisfação" },
  { value: 35, suffix: "", label: "Professores especialistas" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            setVal(Math.floor(p * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {val.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
};

const Stats = () => (
  <section className="py-20 bg-gradient-hero relative">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-4xl md:text-6xl font-extrabold text-gradient-primary">
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <div className="text-sm md:text-base text-muted-foreground mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
