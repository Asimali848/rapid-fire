import Header from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Benefits from "@/components/sections/key-benefits";
import Pricing from "@/components/sections/pricing";
import Integrations from "@/components/sections/integrations";
import CTA from "@/components/sections/cta-section";
import Footer from "@/components/layout/footer";

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Pricing />
        <Integrations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;