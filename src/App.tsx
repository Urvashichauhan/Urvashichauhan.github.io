import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Problem from "./components/Problem";
import Transformation from "./components/Transformation";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Work from "./components/Work";
// import TechStack from "./components/TechStack";
import About from "./components/About";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function ScrollThread() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? el.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div
      className="fixed left-0 top-0 z-[90] h-[3px] bg-copper"
      style={{ width: `${progress * 100}%`, boxShadow: "0 0 14px rgba(232,162,75,0.55)" }}
      aria-hidden="true"
    />
  );
}

function AmbientBackground() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div className="weave-grid absolute inset-0 opacity-60" />
        <div
          className="absolute -right-48 -top-48 h-[640px] w-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(63,217,162,0.08), transparent 65%)" }}
        />
        <div
          className="absolute -bottom-56 -left-48 h-[620px] w-[620px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(232,162,75,0.07), transparent 65%)" }}
        />
      </div>
      <div className="noise-layer pointer-events-none fixed inset-0 z-[80] opacity-[0.05]" aria-hidden="true" />
    </>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-pine font-body text-bone antialiased selection:bg-jade selection:text-ink">
      <AmbientBackground />
      <ScrollThread />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Problem />
        <Transformation />
        <Services />
        <Industries />
        <Work />
        {/* <TechStack /> */}
        <About />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
