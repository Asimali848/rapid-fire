import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Code2,
  Layers,
  Shield,
  Lightbulb,
  Package,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

export const services = [
  {
    id: "saas-development",
    icon: Code2,
    title: "SaaS Development",
    description:
      "Build scalable software-as-a-service products with modern architecture and seamless user experiences.",
    featured: false,
    content: "Our SaaS development services focus on building robust, scalable, and secure cloud-based applications. From initial concept and architecture design to development, deployment, and ongoing maintenance, we provide end-to-end solutions tailored to your market needs. We utilize modern tech stacks to ensure your platform is fast, responsive, and ready to grow with your user base."
  },
  {
    id: "custom-web-apps",
    icon: Layers,
    title: "Custom Web Apps",
    description:
      "Tailored web applications with cutting-edge technologies to match your unique business requirements.",
    featured: true,
    content: "We specialize in developing custom web applications that address your specific business challenges. Whether you need a complex internal tool, a customer-facing portal, or an innovative new digital product, our team delivers solutions that are highly functional, beautifully designed, and built to perform. We emphasize clean code, intuitive UX, and seamless integrations."
  },
  {
    id: "quality-assurance",
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Comprehensive testing and quality control to ensure high-performance, bug-free applications.",
    featured: false,
    content: "Quality is at the core of everything we build. Our QA services encompass automated and manual testing, performance testing, security audits, and continuous integration pipelines. We rigorously test your applications across different devices and browsers to ensure a flawless user experience and prevent costly issues before they reach production."
  },
  {
    id: "ui-ux-design",
    icon: Lightbulb,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed for optimal user engagement and conversion.",
    featured: false,
    content: "Our UI/UX design process is centered around understanding your users and business goals. We create stunning visual designs and intuitive user journeys that drive engagement. From wireframes and prototypes to full high-fidelity design systems, we craft digital experiences that leave a lasting impression and convert visitors into loyal customers."
  },
  {
    id: "api-integration",
    icon: Package,
    title: "API Integration",
    description:
      "Seamless integration with third-party services, payment gateways, and enterprise systems.",
    featured: false,
    content: "Connect your digital ecosystem effortlessly. Our API integration services allow your web applications to communicate securely with third-party tools, from CRMs and payment processors to specialized enterprise software. We build custom APIs and implement third-party integrations that streamline workflows and enhance your product's capabilities."
  },
  {
    id: "analytics-insights",
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Data-driven dashboards and reporting tools to help you make informed business decisions.",
    featured: false,
    content: "Unlock the power of your data. We design and develop custom analytics dashboards and reporting tools that provide real-time insights into your business metrics. By integrating various data sources, we help you visualize key performance indicators, track user behavior, and make informed, data-driven decisions that propel your business forward."
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 lg:py-28 bg-secondary/30 overflow-hidden">
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
            Efficient and Integrated{" "}
            <br />
            <span className="text-gradient">Development Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simplify operations with our efficient, quality-focused services
            tailored for modern businesses.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.title}
              onClick={() => navigate(`/services/${service.id}`)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`group relative p-8 rounded-2xl transition-all cursor-pointer hover:scale-105 ${service.featured
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card shadow-card hover:shadow-card-hover"
                }`}
            >
              {/* Arrow Icon */}
              <motion.div
                className={`absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${service.featured
                    ? "text-accent"
                    : "text-accent"
                  }`}
                initial={{ x: -10, y: 10 }}
                whileHover={{ x: 0, y: 0 }}
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.div>

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.featured
                    ? "bg-accent/20"
                    : "bg-secondary"
                  }`}
              >
                <service.icon
                  className={`w-7 h-7 ${service.featured ? "text-accent" : "text-primary"
                    }`}
                />
              </div>

              {/* Content */}
              <h3
                className={`text-xl font-semibold mb-3 ${service.featured ? "text-primary-foreground" : "text-foreground"
                  }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${service.featured
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                  }`}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
