import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            From Idea to Production in Days
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Accelerate your production with our technology. Reduce downtime and
            optimize costs. Get a quote for a free trial!
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            {/* @ts-ignore */}
            <Button variant="hero" size="xl">
              Work With Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
