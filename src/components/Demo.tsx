
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "João Silva",
    role: "Empresário",
    content: "Revolucionou completamente minha forma de trabalhar. Economizo horas todos os dias!",
  },
  {
    name: "Maria Santos",
    role: "Marketing Digital",
    content: "O melhor investimento que fiz para minha agência. O suporte é incrível!",
  },
  {
    name: "Pedro Costa",
    role: "Vendedor",
    content: "Aumentei minhas vendas em 300% com as automações. Simplesmente fantástico!",
  },
];

export const Demo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          style={{ y, opacity }}
          className="glass-card p-8 md:p-12 max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">
            Conheça o DarkVoice
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-4 aspect-video bg-black/50 flex items-center justify-center">
              Imagem do Dashboard
            </div>
            <div className="glass-card p-4 aspect-video bg-black/50 flex items-center justify-center">
              Imagem do Flow Builder
            </div>
            <div className="glass-card p-4 aspect-video bg-black/50 flex items-center justify-center">
              Imagem das Campanhas
            </div>
            <div className="glass-card p-4 aspect-video bg-black/50 flex items-center justify-center">
              Imagem dos Relatórios
            </div>
          </div>
        </motion.div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            O que dizem nossos usuários
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <MessageSquare className="w-8 h-8 text-primary mb-4" />
              <p className="text-lg mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
