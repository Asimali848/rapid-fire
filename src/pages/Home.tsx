import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Benefits from "@/components/sections/key-benefits";
import Pricing from "@/components/sections/pricing";
import Integrations from "@/components/sections/integrations";
import CTA from "@/components/sections/cta-section";

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Benefits />
      <Pricing />
      <Integrations />
      <CTA />
    </main>
  );
};

export default Home;
