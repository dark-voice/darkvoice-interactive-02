
import { motion } from "framer-motion";

const Recursos = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 gradient-text text-center">
            Recursos do DarkVoice
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Automação Inteligente",
                description: "Configure fluxos automáticos de mensagens com base em gatilhos e condições personalizadas."
              },
              {
                title: "Multi-dispositivo",
                description: "Gerencie múltiplos números e dispositivos em uma única interface intuitiva."
              },
              {
                title: "Relatórios Detalhados",
                description: "Acompanhe métricas e estatísticas importantes sobre suas campanhas e interações."
              },
              {
                title: "Integração API",
                description: "Conecte o DarkVoice com suas ferramentas favoritas através de nossa API robusta."
              },
              {
                title: "Segurança Avançada",
                description: "Proteção de dados com criptografia de ponta a ponta e backups automáticos."
              },
              {
                title: "Suporte 24/7",
                description: "Nossa equipe está sempre disponível para ajudar você a tirar o máximo do DarkVoice."
              }
            ].map((recurso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{recurso.title}</h3>
                <p className="text-gray-400">{recurso.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Recursos;
