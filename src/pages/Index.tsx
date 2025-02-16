
import { motion, useScroll, useTransform } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Demo } from "@/components/Demo";
import { Footer } from "@/components/Footer";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen pt-16">
      <motion.div
        style={{ opacity }}
        className="fixed inset-0 bg-gradient-to-b from-primary/20 to-transparent pointer-events-none"
      />
      
      <Hero />
      <Features />
      <Demo />
      <Footer />
    </div>
  );
};

export default Index;
