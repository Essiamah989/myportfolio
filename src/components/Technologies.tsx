"use client";

import { motion } from "framer-motion";

const technologies = [
  { category: "Frontend Engine", items: ["React Server Components", "Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"] },
  { category: "Systems & Backend", items: ["Node.js", "Express / NestJS", "GraphQL APIs", "WebSockets / Real-Time", "Python Systems"] },
  { category: "Database & Cloud Infrastructure", items: ["PostgreSQL / ElephantSQL", "MongoDB Atlas", "Redis Caching", "Docker Containerization", "Amazon Web Services (AWS)"] },
  { category: "Mobile Ecosystems & Integrations", items: ["React Native", "WatermelonDB Sync", "Flutter Framework", "OpenAI / Anthropic APIs", "CI/CD Deployment Pipelines"] }
];

export function Technologies() {
  return (
    <section id="tech" className="py-32 relative bg-secondary/15 dot-matrix">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-xs uppercase tracking-widest text-primary font-bold mb-4">// ARCHITECTURAL BLUEPRINTS</div>
          <h2 className="font-heading text-4xl font-bold mb-4">Elite Technology Matrix</h2>
          <p className="text-text-secondary font-light max-w-xl mx-auto">
            Leveraging secure, scalable, and cutting-edge software layers to ensure bulletproof operations.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((techGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.8 }}
              className="p-6 border border-white/5 bg-[#09090B]/60 rounded-2xl flex flex-col justify-between glass-card"
            >
              <div>
                <h3 className="font-heading text-base font-bold text-white mb-6 pb-4 border-b border-white/5 flex justify-between items-center">
                  <span>{techGroup.category}</span>
                  <span className="text-[9px] font-mono text-primary bg-primary/5 px-2 py-0.5 rounded border border-primary/10">STABLE</span>
                </h3>
                <ul className="space-y-4">
                  {techGroup.items.map((item, i) => (
                    <li key={i} className="flex items-center text-text-secondary text-sm font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-3 shadow-[0_0_8px_rgba(192,132,252,0.6)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5 text-[9px] font-mono text-text-secondary tracking-widest uppercase">
                SYSTEM_NODE_0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
