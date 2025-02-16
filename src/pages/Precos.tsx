
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Precos = () => {
  const planos = [
    {
      nome: "Básico",
      preco: "R$ 97/mês",
      recursos: [
        "1 número",
        "1000 mensagens/mês",
        "Automação básica",
        "Suporte por email"
      ]
    },
    {
      nome: "Profissional",
      preco: "R$ 197/mês",
      destaque: true,
      recursos: [
        "3 números",
        "5000 mensagens/mês",
        "Automação avançada",
        "API REST",
        "Suporte prioritário"
      ]
    },
    {
      nome: "Empresarial",
      preco: "R$ 497/mês",
      recursos: [
        "10 números",
        "Mensagens ilimitadas",
        "Automação personalizada",
        "API dedicada",
        "Suporte 24/7",
        "Servidor dedicado"
      ]
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
            Planos e Preços
          </h1>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {planos.map((plano, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card p-6 relative ${
                  plano.destaque ? "border-primary" : "border-white/10"
                }`}
              >
                {plano.destaque && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-sm">
                    Mais Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plano.nome}</h3>
                <p className="text-3xl font-bold mb-6 gradient-text">{plano.preco}</p>
                <ul className="space-y-3">
                  {plano.recursos.map((recurso, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="text-primary" size={16} />
                      <span className="text-gray-300">{recurso}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors">
                  Começar Agora
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Precos;
