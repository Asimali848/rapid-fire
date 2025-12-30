import { motion } from "framer-motion";
import { Code2, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = {
  Company: [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ],
  Services: [
    { name: "SaaS Development", href: "#services" },
    { name: "Web Applications", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "API Integration", href: "#services" },
  ],
  Products: [
    { name: "Project Management", href: "#home" },
    { name: "Analytics Platform", href: "#home" },
    { name: "CRM Solution", href: "#home" },
    { name: "E-commerce Suite", href: "#home" },
  ],
};

const Footer = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <Code2 className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>DevForge</span>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-6 max-w-xs">
              Our solutions make digital transformation faster and simpler.
              Contact us for more information.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4" />
                hello@devforge.com
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                San Francisco, CA
              </div>
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-primary-foreground/60">
            © 2024 DevForge. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </a>
          </div>
          <div className="flex items-center gap-4">
            {[Linkedin, Twitter, Github].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2 }}
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors duration-200"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
