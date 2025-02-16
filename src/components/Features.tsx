
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Bot, Zap, Shield, Clock, Users, Calendar, MessageSquare, Database, Moon, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "5 Números Simultaneamente",
    description: "Utilize até 5 números diferentes ao mesmo tempo para suas automações.",
  },
  {
    icon: Zap,
    title: "Uso Ilimitado",
    description: "Sem limites de mensagens ou automações. Use quanto precisar.",
  },
  {
    icon: MessageSquare,
    title: "Modo Campanha",
    description: "Realize disparos em massa de forma organizada e eficiente.",
  },
  {
    icon: Bot,
    title: "Flows Condicionais",
    description: "Crie fluxos de resposta personalizados baseados em condições.",
  },
  {
    icon: Calendar,
    title: "Agendamento",
    description: "Agende suas mensagens e automações para qualquer momento.",
  },
  {
    icon: Shield,
    title: "Backups Automáticos",
    description: "Seus dados sempre seguros com backups automáticos.",
  },
  {
    icon: Moon,
    title: "Tema Escuro",
    description: "Interface adaptada para uso noturno, reduzindo o cansaço visual.",
  },
  {
    icon: Database,
    title: "Gestão de Funis",
    description: "Organize e gerencie seus funis de venda de forma eficiente.",
  },
];

export const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-32 relative">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Recursos Poderosos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experimente o próximo nível de automação com nossos recursos avançados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 glass-card p-8">
          <h3 className="text-2xl font-bold mb-6 gradient-text text-center">
            Checklist de Funcionalidades
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              "Suporte a 5 números simultâneos",
              "Funcionamento ilimitado",
              "Modo campanha com disparos em massa",
              "Flows condicionais personalizáveis",
              "Sistema de agendamento avançado",
              "Gestão completa de funis",
              "Backups automáticos",
              "Interface com tema escuro",
              "Respostas automáticas inteligentes",
              "Métricas e relatórios detalhados"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-lg">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
