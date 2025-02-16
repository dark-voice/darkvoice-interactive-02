
import { motion, useScroll, useTransform } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Demo } from "@/components/Demo";
import { Footer } from "@/components/Footer";
import { PlayCircle, Check, Mail, MessageSquare, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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

  const faqs = [
    {
      question: "Como funciona o DarkVoice?",
      answer: "O DarkVoice é uma plataforma de automação que permite gerenciar múltiplos números, criar fluxos de mensagens automáticas e campanhas em massa de forma organizada e eficiente."
    },
    {
      question: "É seguro usar o DarkVoice?",
      answer: "Sim, utilizamos criptografia de ponta a ponta e seguimos todas as diretrizes de segurança e privacidade. Seus dados estão protegidos com backups automáticos e medidas de segurança avançadas."
    },
    {
      question: "Como começar a usar?",
      answer: "Basta se cadastrar em nossa plataforma, escolher um plano e seguir o tutorial de configuração. Em poucos minutos você já pode começar a usar todas as funcionalidades."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos cartões de crédito, PIX e boleto bancário. Todos os pagamentos são processados de forma segura através de gateways certificados."
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim, você pode cancelar sua assinatura a qualquer momento sem multa ou taxas adicionais."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <motion.div
        style={{ opacity }}
        className="fixed inset-0 bg-gradient-to-b from-primary/20 to-transparent pointer-events-none"
      />
      
      <Hero />
      <Features />
      
      {/* Demo Section */}
      <section className="py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 gradient-text">
              Demonstração do DarkVoice
            </h2>
            
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
      </section>

      {/* Tutoriais Section */}
      <section className="py-24 bg-black/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-12 gradient-text text-center">
              Tutoriais
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {tutoriais.map((tutorial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
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
      </section>

      {/* Preços Section */}
      <section className="py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-12 gradient-text text-center">
              Planos e Preços
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {planos.map((plano, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
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
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 gradient-text text-center">
              Perguntas Frequentes
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glass-card">
                  <AccordionTrigger className="px-6 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contato Section */}
      <section className="py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 gradient-text text-center">
              Entre em Contato
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-6">
                <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
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
                  whileInView={{ opacity: 1, x: 0 }}
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
                  whileInView={{ opacity: 1, x: 0 }}
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
                  whileInView={{ opacity: 1, x: 0 }}
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
      </section>

      <Demo />
      <Footer />
    </div>
  );
};

export default Index;

