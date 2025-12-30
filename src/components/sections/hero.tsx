import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, Award, Clock } from "lucide-react";

const Hero = () => {
  const stats = [
    { icon: Users, value: "20+", label: "Clients & Partners" },
    { icon: Award, value: "50+", label: "Projects Delivered", highlight: true },
    { icon: Clock, value: "2+", label: "Years Experience" },
  ];

  return (
    <section id="home" className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden gradient-hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden max-w-screen-2xl mx-auto">
        <motion.div
          className="absolute top-28 left-10 w-20 h-20 bg-accent/10 rounded-2xl rotate-12"
          animate={{ rotate: [12, -12, 12], y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-primary/10 rounded-xl"
          animate={{ rotate: [-6, 6, -6], y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-1/5 translate-x-2/2 w-12 h-12 bg-accent/15 rounded-lg rotate-45"
          animate={{ rotate: [45, 90, 45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
          >
            The Future of{" "}
            <span className="text-gradient">Digital Innovation</span>{" "}
            <br />
            with Latest Technology
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Expert tech to elevate your business. Let's build your next SaaS product or stunning website together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Button variant="hero" size="xl" className="hover:scale-105 transition-all duration-300">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" className="hover:scale-105 transition-all duration-300 bg-transparent text-primary hover:bg-primary hover:text-white">
              <Play className="w-5 h-5" />
              Try Demo
            </Button>
          </motion.div>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex items-center justify-center gap-2 mb-16"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-semibold text-foreground">5.0</span>
            <span className="text-muted-foreground">from 200+ reviews</span>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-6 rounded-2xl shadow-card transition-all duration-300 ${stat.highlight
                  ? "bg-primary text-primary-foreground"
                  : "bg-card"
                  }`}
              >
                <stat.icon
                  className={`w-8 h-8 mb-3 mx-auto ${stat.highlight ? "text-accent" : "text-accent"
                    }`}
                />
                <div
                  className={`text-3xl lg:text-4xl font-bold mb-1 ${stat.highlight ? "text-primary-foreground" : "text-foreground"
                    }`}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-sm ${stat.highlight
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                    }`}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;