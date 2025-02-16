
import { motion } from "framer-motion";

const Demo = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-8 gradient-text">
            Demonstração do DarkVoice
          </h1>
          
          <div className="glass-card p-8">
            <div className="aspect-video bg-black/50 rounded-lg mb-8 flex items-center justify-center">
              <p className="text-gray-400">Video de demonstração em breve</p>
            </div>

            <p className="text-gray-300 mb-8">
              Veja como é fácil configurar e usar o DarkVoice para automatizar suas comunicações.
              Nossa interface intuitiva permite que você comece a usar em minutos.
            </p>

            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-colors">
              Agendar uma Demo Personalizada
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Demo;
