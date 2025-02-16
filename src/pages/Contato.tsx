
import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone } from "lucide-react";

const Contato = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 gradient-text text-center">
            Entre em Contato
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6">
              <h2 className="text-2xl font-bold mb-6">Fale Conosco</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <textarea
                    className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary h-32"
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                <button className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors">
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-4">
                  <Mail className="text-primary w-6 h-6" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-400">contato@darkvoice.com</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-4">
                  <Phone className="text-primary w-6 h-6" />
                  <div>
                    <h3 className="font-medium">Telefone</h3>
                    <p className="text-gray-400">(11) 99999-9999</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-4">
                  <MessageSquare className="text-primary w-6 h-6" />
                  <div>
                    <h3 className="font-medium">Chat Online</h3>
                    <p className="text-gray-400">Disponível 24/7</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contato;
