"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    phase: "Discovery & Strategy",
    title: "Understanding Business Workflows",
    description: "Deep analytics of administrative overheads, bottle-necks, data pipelines, and operational objectives to align technical architectures with bottom line targets."
  },
  {
    number: "02",
    phase: "Architecture Planning",
    title: "System Mapping & Schema Design",
    description: "Formulating PostgreSQL schemas, data syncing algorithms, local DB architectures, caching layers, and microservice strategies prior to writing line one of code."
  },
  {
    number: "03",
    phase: "UI/UX Orchestration",
    title: "Tactical Administrative Interfaces",
    description: "Building responsive, modern dashboards and interactive workflows that increase management speeds and eliminate human operational mistakes."
  },
  {
    number: "04",
    phase: "Clean Development",
    title: "Robust Full-Stack Engineering",
    description: "Writing highly-scalable, production-grade systems in Next.js, Node.js, and TypeScript, utilizing strict version controls and clean modules."
  },
  {
    number: "05",
    phase: "Security Hardening",
    title: "Penetration Tests & Optimization",
    description: "Conducting severe unit testing, role-based clearance audits, injection audits, and compressing server responses to achieve exceptional page loads."
  },
  {
    number: "06",
    phase: "Continuous Scale",
    title: "Deployment & Technical Partnership",
    description: "Configuring continuous delivery pipelines, setting server auto-scales, and maintaining proactive maintenance models for consistent uptime."
  }
];

export function Process() {
  return (
    <section id="process" className="py-32 relative bg-secondary/10 dot-matrix">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="text-xs uppercase tracking-widest text-primary font-bold mb-4">// EXECUTION TIMELINE</div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Rigorous Development Lifecycle</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            A meticulous framework designed to reduce deployment risk, increase software durability, and ensure on-time system launch.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.8 }}
              className="relative p-8 bg-[#09090B]/60 border border-white/5 rounded-2xl group hover:border-primary/30 transition-all overflow-hidden flex flex-col justify-between min-h-[300px] glass-card"
            >
              <div>
                {/* Index / Accent line */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading text-4xl font-black text-white/5 group-hover:text-primary/10 transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono text-primary font-bold tracking-widest bg-primary/5 px-2 py-0.5 rounded border border-primary/20">
                    {step.phase}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-heading mb-3 text-white">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed text-sm font-light">
                  {step.description}
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 flex justify-between text-[9px] font-mono text-text-secondary">
                <span>PHASE_COMPLETE</span>
                <span className="text-primary">100% QUALITY CODE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
