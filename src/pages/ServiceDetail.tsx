import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { services } from "@/components/sections/services";
import { motion } from "framer-motion";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Service not found</h2>
        <button
          onClick={() => navigate("/")}
          className="text-primary hover:text-primary/80 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <main className="pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="container mx-auto px-4 lg:px-8">
        
        <button
          onClick={() => navigate("/")}
          className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">Back to Home</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Main content */}
          <div className="col-span-1 lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ${
                  service.featured ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
                }`}
              >
                <Icon className="w-10 h-10" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {service.title}
              </h1>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="w-20 h-1 bg-primary/20 rounded-full mb-8"></div>
                <p className="text-foreground/90 leading-loose text-lg">
                  {service.content}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Sidebar / Call to action */}
          <div className="col-span-1 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card shadow-card border border-border/50 rounded-2xl p-8 sticky top-32"
            >
              <h3 className="text-2xl font-semibold mb-4">Ready to start?</h3>
              <p className="text-muted-foreground mb-8">
                Let's discuss how our {service.title.toLowerCase()} services can help accelerate your business growth today.
              </p>
              <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-12 rounded-lg transition-colors flex items-center justify-center gap-2 group">
                Contact Us
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetail;
