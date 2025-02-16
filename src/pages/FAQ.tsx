
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
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
    <div className="min-h-screen pt-24 pb-12">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 gradient-text text-center">
            Perguntas Frequentes
          </h1>
          
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

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              Não encontrou o que procurava?
            </p>
            <a href="/contato" className="text-primary hover:text-primary/90 font-medium">
              Entre em contato com nosso suporte
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
