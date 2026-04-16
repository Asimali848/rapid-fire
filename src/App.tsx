import { Routes, Route } from "react-router-dom";
import Header from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Home from "@/pages/Home";
import ServiceDetail from "./pages/ServiceDetail";

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;