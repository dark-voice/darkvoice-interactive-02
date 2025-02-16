
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Bot, Zap, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Intelligent Automation",
    description: "Advanced AI algorithms learn and adapt to your workflow patterns.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Blazing fast performance with minimal system resource usage.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data stays private with end-to-end encryption.",
  },
  {
    icon: Clock,
    title: "Time-Saving",
    description: "Automate repetitive tasks and focus on what matters.",
  },
];

export const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-32 relative">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the next level of automation with our cutting-edge features
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
      </div>
    </section>
  );
};
