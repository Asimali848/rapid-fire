import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "The package offers the basic features you need to get started.",
    price: "$39",
    period: "/month",
    features: [
      "Up to 3 web pages",
      "24/7 Technical support",
      "Basic analytics dashboard",
      "Initial setup guide",
    ],
    featured: false,
  },
  {
    name: "Enterprise",
    description: "This package provides full access to all premium features.",
    price: "$99",
    period: "/month",
    features: [
      "Unlimited web pages",
      "Dedicated account manager",
      "Advanced analytics solutions",
      "Priority support response",
    ],
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tailored Plans for Your{" "}
            <br />
            <span className="text-gradient">Business Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Flexible pricing for any business size.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              {/* CTA Button */}
              <Button
                // @ts-ignore
                variant={index === 1 ? "hero" : "outline"}
                className="w-full mb-8"
                size="lg"
              >
                Get Started
              </Button>

              {/* Features */}
              <div>
                <div className="text-sm font-medium text-foreground mb-4">
                  Features
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Plan CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-primary rounded-2xl p-8 max-w-xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold text-primary-foreground mb-3">
            Professional
          </h3>
          <p className="text-primary-foreground/80 mb-6">
            Designed for greater flexibility, this package offers advanced tools
            for custom tailoring to your needs.
          </p>
          {/* @ts-ignore */}
          <Button variant="hero" size="lg">
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
