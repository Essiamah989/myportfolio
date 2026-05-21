"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Layers, ShieldCheck } from "lucide-react";

export function Hero() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden dot-matrix">
      {/* Dynamic Purple & Pink Glow Orbs in Background */}
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[140px] glow-orb" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[160px] glow-orb" />

      {/* Futuristic Linear Grid Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090B] via-transparent to-[#09090B] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Brand Pitch & CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col gap-8"
        >
          {/* Tech Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 w-fit text-xs text-primary font-semibold tracking-wider uppercase"
          >
            <Cpu size={12} className="animate-spin-slow" />
            <span>Digital Solutions Architect</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tighter"
          >
            Where Business Vision <br />
            Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-highlight">Technical Execution</span>
          </motion.h1>

          {/* Copywriting */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-text-secondary max-w-xl leading-relaxed font-light"
          >
            I partner with forward-thinking companies to engineer resilient enterprise dashboards, custom mobile ecosystems, and high-performance software integrations. Designed with elegant sophistication, built for absolute scalability.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-2">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-[#09090B] font-bold rounded-xl overflow-hidden shadow-[0_0_30px_-5px_rgba(192,132,252,0.4)] hover:shadow-[0_0_40px_-5px_rgba(232,121,249,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span className="relative z-10">Explore Case Studies</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/8 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all active:scale-[0.98]"
            >
              Let&apos;s Partner
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive 3D-like Floating Dashboard component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          {/* Dashboard Container */}
          <div className="relative rounded-2xl border border-white/8 bg-secondary/40 backdrop-blur-md p-6 shadow-2xl overflow-hidden glass-card">
            {/* Light Bar glow */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/50 to-highlight/50" />
            
            {/* Header of dashboard */}
            <div className="flex items-center justify-between pb-6 border-b border-white/5 mb-6">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="text-[10px] font-mono tracking-widest text-text-secondary uppercase">
                ESSIA.OS // LIVE STATS
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[10px] text-text-secondary uppercase tracking-wider mb-1 font-mono">SCALABILITY INDEX</div>
                <div className="text-2xl font-bold font-heading text-primary">99.8%</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[10px] text-text-secondary uppercase tracking-wider mb-1 font-mono">INTEGRITY RANK</div>
                <div className="text-2xl font-bold font-heading text-highlight">OPTIMAL</div>
              </div>
            </div>

            {/* Simulated Live Analytics Graph */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] text-text-secondary font-mono">CORE LOAD BALANCING</span>
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              </div>
              <div className="h-24 flex items-end gap-1.5 pb-2">
                {[45, 60, 50, 75, 90, 80, 65, 85, 95, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-white/5 rounded-t-sm h-full relative overflow-hidden">
                    <motion.div
                      initial={{ height: "0%" }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1.2, delay: 0.8 + i * 0.05, ease: "easeOut" }}
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-accent"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5 border border-primary/20 text-xs text-primary font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} />
                <span>ALL COMPILERS STATUS: OPERATIONAL</span>
              </div>
              <span className="text-[10px] font-mono">SECURE SSL</span>
            </div>
          </div>

          {/* Floating UI Widget 1: Developer Tag */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-6 -right-6 p-4 rounded-xl border border-white/5 bg-[#111114]/80 backdrop-blur-md shadow-lg flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
              <Layers size={16} />
            </div>
            <div>
              <div className="text-[9px] text-text-secondary font-mono tracking-wider">ARCHITECTURE</div>
              <div className="text-xs font-bold text-white">SYSTEM INTEGRATION</div>
            </div>
          </motion.div>

          {/* Floating UI Widget 2: Tunisian Presence */}
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute -bottom-6 -left-6 p-4 rounded-xl border border-white/5 bg-[#111114]/80 backdrop-blur-md shadow-lg flex items-center gap-3"
          >
            <div className="w-3 h-3 rounded-full bg-red-500 relative flex items-center justify-center">
              <span className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75" />
            </div>
            <div className="text-[10px] font-mono tracking-wider text-text-secondary uppercase">
              LOCATED: TUNISIA (CET)
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[9px] font-mono uppercase tracking-widest text-text-secondary">SCROLL ENGINE</span>
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-[20px] h-[32px] rounded-full border border-white/20 flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
