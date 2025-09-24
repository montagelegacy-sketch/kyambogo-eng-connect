import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Departments from "./pages/Departments";
import CivilEngineering from "./pages/departments/CivilEngineering";
import ElectricalEngineering from "./pages/departments/ElectricalEngineering";
import MechanicalEngineering from "./pages/departments/MechanicalEngineering";
import BiomedicalMechatronics from "./pages/departments/BiomedicalMechatronics";
import MiningChemicalPetroleum from "./pages/departments/MiningChemicalPetroleum";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Membership from "./pages/Membership";
import Join from "./pages/Join";
import Benefits from "./pages/Benefits";
import Contact from "./pages/Contact";
import Alumni from "./pages/Alumni";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/departments/civil" element={<CivilEngineering />} />
            <Route path="/departments/electrical" element={<ElectricalEngineering />} />
            <Route path="/departments/mechanical" element={<MechanicalEngineering />} />
            <Route path="/departments/biomedical-mechatronics" element={<BiomedicalMechatronics />} />
            <Route path="/departments/mining-chemical-petroleum" element={<MiningChemicalPetroleum />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/join" element={<Join />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
