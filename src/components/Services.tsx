"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Smartphone, Activity, Server, Users, Code } from "lucide-react";

const services = [
  {
    icon: <LayoutDashboard size={28} className="text-primary" />,
    title: "Custom Web Platforms",
    description: "Architecting high-frequency, bespoke SaaS platforms with React Server Components, serverless APIs, and lightning-fast speeds."
  },
  {
    icon: <Smartphone size={28} className="text-accent" />,
    title: "Mobile Ecosystems",
    description: "Developing premium cross-platform experiences for iOS and Android that behave natively and feel incredibly responsive."
  },
  {
    icon: <Activity size={28} className="text-highlight" />,
    title: "Business Automation Systems",
    description: "Connecting legacy software, building automated data scrapers, pipelines, and streamlining manual workflows seamlessly."
  },
  {
    icon: <Server size={28} className="text-primary" />,
    title: "Dashboard & Admin Engines",
    description: "Formulating extensive database orchestration models and visual operational analytics panels tailored to your workflow."
  },
  {
    icon: <Users size={28} className="text-accent" />,
    title: "CTO / Tech Partnership",
    description: "Providing fractional CTO oversight, system design consultancy, and scaling roadmaps for founders and startups."
  },
  {
    icon: <Code size={28} className="text-highlight" />,
    title: "White-label Infrastructure",
    description: "High-grade, modular software engineering matching the strictest agency guidelines to multiply your delivery capacity."
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 relative bg-secondary/20 dot-matrix">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="text-xs uppercase tracking-widest text-accent font-bold mb-4">// EXPERTISE SCHEMA</div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Strategic Solutions</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            I build highly resilient digital solutions, providing premium tech integrations and architectural foresight.
          </p>
        </motion.div>

        {/* Grid of services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.8 }}
              className="group p-8 border border-white/5 bg-[#09090B]/55 rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_35px_-5px_rgba(192,132,252,0.15)] flex flex-col justify-between glass-card"
            >
              <div>
                <div className="mb-6 bg-white/[0.02] border border-white/5 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold font-heading mb-4 text-white">{service.title}</h3>
                <p className="text-text-secondary leading-relaxed text-sm font-light">
                  {service.description}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-text-secondary">
                <span className="font-mono">STATUS: OPERATIONAL</span>
                <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
