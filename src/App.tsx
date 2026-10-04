import Header from "./components/Header";
import Hero from "./components/Hero";
import IntroStatement from "./components/IntroStatement";
import Capabilities from "./components/Capabilities";
import ProjectShowcase from "./components/ProjectShowcase";
import AISection from "./components/AISection";
// import TechnologyStack from "./components/TechnologyStack";
import WhyInnoweave from "./components/WhyInnoweave";
import Process from "./components/Process";
// import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#FAFAF8] text-[#111111] antialiased selection:bg-[#0062FF] selection:text-white font-sans">
      {/* Top Fixed Header Navbar */}
      <Header />

      {/* Main Content Assembly */}
      <main className="relative">
        <Hero />
        <IntroStatement />
        <Capabilities />
        <ProjectShowcase />
        <AISection />
        {/* <TechnologyStack /> */}
        <WhyInnoweave />
        <Process />
        {/* <FAQ /> */}
        <FinalCTA />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
