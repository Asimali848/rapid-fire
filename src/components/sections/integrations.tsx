import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const integrationLogos = [
  { name: "Stripe", src: "https://cdn.simpleicons.org/stripe", color: "#635BFF" },
  { name: "Slack", src: "https://cdn.simpleicons.org/slack", color: "#4A154B" },
  { name: "Notion", src: "https://cdn.simpleicons.org/notion", color: "#000000" },
  { name: "Figma", src: "https://cdn.simpleicons.org/figma", color: "#F24E1E" },
  { name: "Google", src: "https://cdn.simpleicons.org/google", color: "#4285F4" },
  { name: "Vercel", src: "https://cdn.simpleicons.org/vercel", color: "#000000" },
];

const Integrations = () => {
  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Empowering Top Companies with{" "}
              <span className="text-gradient">Seamless Integrations</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Experience seamless connection with our innovative solutions,
              designed to effortlessly integrate with your existing systems,
              enhance productivity, and drive your business towards greater
              success.
            </p>
            {/* @ts-ignore */}
            <Button variant="dark" size="lg">
              Work With Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Integration Logos Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {integrationLogos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="aspect-square bg-card rounded-2xl shadow-card flex items-center justify-center p-6 hover:shadow-card-hover transition-all duration-300"
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center font-bold text-xl p-3"
                    style={{ backgroundColor: `${logo.color}15` }}
                  >
                    <img
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      className="w-full h-full object-contain filter drop-shadow-sm brightness-105"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating decorative element */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -right-8 w-16 h-16 border-2 border-accent/30 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
