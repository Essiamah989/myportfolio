"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart2, Shield, Layers } from "lucide-react";

const projects = [
  {
    title: "Offline Distribution Management System",
    category: "Enterprise System Architecture",
    description: "An ultra-resilient, offline-first mobile application paired with a real-time administrative intelligence center. Built for high-volume logistic depots where internet connection drops are frequent, utilizing WatermelonDB local databases and delta sync servers.",
    image: "/project-2.png",
    tech: ["Next.js 16", "React Native", "PostgreSQL", "WatermelonDB", "Docker"],
    metrics: [
      { label: "Uptime Security", value: "99.99%", icon: <Shield size={14} className="text-primary" /> },
      { label: "Sync Latency", value: "<150ms", icon: <BarChart2 size={14} className="text-accent" /> },
      { label: "Transaction Scope", value: "100k/day", icon: <Layers size={14} className="text-highlight" /> }
    ],
    businessValue: "Mitigated connection drops entirely, translating to a direct 35% increase in operational dispatch speeds and zero lost transaction records.",
    architecture: "Multi-tenant syncing nodes utilizing localized SQLite clusters communicating over secure web socket pipelines."
  },
  {
    title: "Industrial Recycling Management Platform",
    category: "SaaS Enterprise Dashboard",
    description: "A premium SaaS platform designed to digitize waste management and materials recycling tracking for industrial yards. Features fleet routing integrations, automated invoicing, automated PDF certificate generations, and smart predictive inventory controls.",
    image: "/project-1.png",
    tech: ["React Server Components", "Node.js", "MongoDB", "AWS", "WebSockets"],
    metrics: [
      { label: "Volume Tracking", value: "$4.5M/mo", icon: <Layers size={14} className="text-primary" /> },
      { label: "Dispatch Speedup", value: "3x faster", icon: <BarChart2 size={14} className="text-accent" /> },
      { label: "Operational Error", value: "0.02%", icon: <Shield size={14} className="text-highlight" /> }
    ],
    businessValue: "Enabled full trace audits, cutting inventory discrepancies by 92% and providing continuous financial oversight for over 14 scale locations.",
    architecture: "Serverless lambda pipeline coupled with heavy data caching systems and visual map integrations."
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="text-xs uppercase tracking-widest text-primary font-bold mb-4">// PREMIUM CASE STUDIES</div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
              High-Fidelity Engineering
            </h2>
          </motion.div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-text-secondary hover:text-white transition-colors text-sm font-medium border-b border-white/10 pb-1"
          >
            <span>Request custom architecture brief</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Projects List */}
        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
            >
              {/* Visual Presentation side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-highlight/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-1000" />
                
                <div className="relative rounded-2xl overflow-hidden border border-white/8 bg-secondary/50 backdrop-blur-md p-2 shadow-2xl glass-card">
                  {/* Glowing Top line */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary via-accent to-highlight" />

                  {/* Window Bar Mock */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#09090B]/60 rounded-t-xl mb-2 border-b border-white/5">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    </div>
                    <span className="text-[9px] font-mono text-text-secondary tracking-widest uppercase">
                      CASE_0{index + 1}.EXE
                    </span>
                  </div>

                  <div className="relative rounded-xl overflow-hidden h-[360px] bg-[#09090B]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/10 to-transparent opacity-70" />
                  </div>
                </div>
              </div>

              {/* Text Strategy side */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest font-mono">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-white">{project.title}</h3>
                </div>

                <p className="text-text-secondary text-base leading-relaxed font-light">{project.description}</p>

                {/* Quantitative metrics */}
                <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/5">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex flex-col gap-1.5">
                      <span className="text-[10px] text-text-secondary uppercase tracking-widest flex items-center gap-1.5 font-mono">
                        {metric.icon}
                        {metric.label}
                      </span>
                      <span className="text-lg font-bold font-heading text-white">{metric.value}</span>
                    </div>
                  ))}
                </div>

                {/* Strategic insights */}
                <div className="flex flex-col gap-4 text-sm font-light text-text-secondary">
                  <div>
                    <span className="font-semibold text-white font-mono text-xs">BUSINESS VALUE:</span> {project.businessValue}
                  </div>
                  <div>
                    <span className="font-semibold text-white font-mono text-xs">ARCHITECTURE SYSTEM:</span> {project.architecture}
                  </div>
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/[0.02] hover:bg-white/[0.05] rounded-lg text-xs text-text-secondary border border-white/5 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
