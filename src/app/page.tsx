import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { Partnerships } from "@/components/Partnerships";
import { Technologies } from "@/components/Technologies";
import { CTA } from "@/components/CTA";
import { Loader } from "@/components/Loader";
import { MouseGlow } from "@/components/MouseGlow";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#09090B] text-text-primary selection:bg-primary selection:text-[#09090B]">
      {/* Interactive preloader */}
      <Loader />

      {/* Screen Mouse Light Flow Follower */}
      <MouseGlow />

      {/* Structured Portfolio Layout */}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Partnerships />
      <Technologies />
      <CTA />

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#09090B] text-center text-text-secondary text-xs font-mono tracking-widest relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} ESSIA MAHMOUDI. ALL SYSTEM NODES ENGAGED.</p>
          <p className="text-primary hover:text-accent transition-colors">ENGINEERED FOR SECURE B2B SOLUTIONS</p>
        </div>
      </footer>
    </main>
  );
}
