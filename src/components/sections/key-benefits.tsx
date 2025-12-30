import { motion } from "framer-motion";
import { Zap, Settings, Brain, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Boosting Quality with Tech",
    description:
      "With advanced technology, we help you achieve top product quality. Discover how we can elevate your standards.",
  },
  {
    icon: Settings,
    title: "Optimization Process",
    description:
      "Boost efficiency and productivity with our streamlined solutions. See how our methodology can maximize your output.",
  },
  {
    icon: Brain,
    title: "AI-Driven Development",
    description:
      "Leverage the power of AI to transform your development processes, achieving faster and more effective results.",
  },
];

const Benefits = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-primary rounded-3xl p-6 lg:p-8 shadow-2xl">
              {/* Dashboard Header */}
              <div className="mb-6">
                <div className="text-primary-foreground/60 text-sm mb-1">
                  Total Projects
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary-foreground">
                    50
                  </span>
                  <span className="text-accent text-sm font-medium">+12%</span>
                </div>
              </div>

              {/* Chart Bars */}
              <div className="flex items-end gap-3 h-32 mb-6">
                {[40, 65, 45, 80, 55, 70, 50, 85, 60, 75, 90, 65].map(
                  (height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className={`flex-1 rounded-t-md ${i === 10 ? "bg-accent" : "bg-primary-foreground/20"
                        }`}
                    />
                  )
                )}
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-foreground/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-primary-foreground/60 text-xs">
                      Total Projects
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-primary-foreground">
                    1951+
                  </div>
                  <div className="text-accent text-xs">+8% this month</div>
                </div>
                <div className="bg-card rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground text-xs">
                      Completion Rate
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-foreground">98%</div>
                  <div className="text-accent text-xs">Above average</div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-lg font-semibold text-sm"
            >
              Live Dashboard
            </motion.div>
          </motion.div>

          {/* Benefits Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Key Benefits of Our System for{" "}
              <span className="text-gradient">Your Business Efficiency</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Our systems boost productivity, cut costs, and drive business
              growth with innovative solutions.
            </p>

            {/* Benefits List */}
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

