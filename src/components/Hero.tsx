
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 mb-8 rounded-full glass-card">
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium">Automation Made Beautiful</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Transform Your Workflow
            <br /> with DarkVoice
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Streamline your daily tasks with intelligent automation. Experience the future of productivity today.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-all">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-lg glass-card hover:bg-white/10 font-medium transition-all">
              Watch Demo
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
