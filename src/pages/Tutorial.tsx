
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const Tutorial = () => {
  const tutoriais = [
    {
      titulo: "Começando com o DarkVoice",
      duracao: "5 min",
      descricao: "Aprenda os conceitos básicos e configure sua primeira automação."
    },
    {
      titulo: "Configurando Fluxos Automáticos",
      duracao: "8 min",
      descricao: "Crie fluxos de mensagens baseados em gatilhos e condições."
    },
    {
      titulo: "Integrações Avançadas",
      duracao: "12 min",
      descricao: "Conecte o DarkVoice com suas ferramentas favoritas."
    },
    {
      titulo: "Relatórios e Análises",
      duracao: "6 min",
      descricao: "Aprenda a interpretar as métricas e otimizar suas campanhas."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 gradient-text text-center">
            Tutoriais
          </h1>
          
          <div className="grid md:grid-cols-2 gap-6">
            {tutoriais.map((tutorial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 hover:border-primary transition-colors cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <PlayCircle className="text-primary w-8 h-8 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{tutorial.titulo}</h3>
                    <p className="text-gray-400 mb-2">{tutorial.descricao}</p>
                    <span className="text-sm text-primary">{tutorial.duracao}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tutorial;
