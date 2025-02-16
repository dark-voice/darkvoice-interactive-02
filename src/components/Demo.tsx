
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Demo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          style={{ y, opacity }}
          className="glass-card p-8 md:p-12 max-w-4xl mx-auto"
        >
          <div className="aspect-video rounded-lg overflow-hidden bg-black/50 mb-8">
            {/* Add demo video or animation here */}
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              Demo Video Placeholder
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text text-center">
            See DarkVoice in Action
          </h2>
          
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Watch how DarkVoice transforms complex workflows into simple, automated processes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
