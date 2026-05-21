"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Eye, ShieldAlert } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-xl"
        >
          <div className="text-xs uppercase tracking-widest text-primary font-bold mb-4">// THE ARCHITECT</div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
            Engineering Strategic <br />
            Business Abstractions
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: Core Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 p-8 rounded-2xl border border-white/8 bg-secondary/30 backdrop-blur-md glass-card flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Eye size={18} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-white">Bridging Operations & Code</h3>
              <p className="text-text-secondary leading-relaxed font-light">
                I do not just write code; I architect systems that optimize workflows, scale operational performance, and maximize business profits. My philosophy matches strict clean-architecture patterns with modern digital solutions to build robust ecosystems.
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 flex gap-8 text-sm">
              <span className="flex items-center gap-1.5 text-primary font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Scalability Focused
              </span>
              <span className="flex items-center gap-1.5 text-accent font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Data Integrity Driven
              </span>
            </div>
          </motion.div>

          {/* Card 2: Strategic Partnership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="p-8 rounded-2xl border border-white/8 bg-secondary/30 backdrop-blur-md glass-card flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6">
                <Briefcase size={18} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-white">CTO-Grade Execution</h3>
              <p className="text-text-secondary leading-relaxed text-sm font-light">
                Leveraging calm confidence, rigorous structuring, and female leadership parameters to deliver technical operations, consulting, and seamless agency white-label integrations.
              </p>
            </div>
            <div className="pt-4 text-xs font-mono text-text-secondary uppercase">
              100% Client Operational Trust
            </div>
          </motion.div>

          {/* Card 3: Experience Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-2xl border border-white/8 bg-secondary/30 backdrop-blur-md glass-card flex flex-col justify-between min-h-[250px]"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center text-highlight mb-6">
                <Award size={18} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-white">Full Stack Mastery</h3>
              <p className="text-text-secondary leading-relaxed text-sm font-light">
                Engineering reactive Next.js systems, mobile React Native apps, scalable PostgreSQL pipelines, and automated SaaS platforms.
              </p>
            </div>
            <div className="text-2xl font-bold font-heading text-highlight">50+ Shipped</div>
          </motion.div>

          {/* Card 4: Global Reach & Tunisian Base */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-2 p-8 rounded-2xl border border-white/8 bg-secondary/30 backdrop-blur-md glass-card flex flex-col justify-between min-h-[250px]"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <ShieldAlert size={18} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-white">Robust Engineering Parameters</h3>
              <p className="text-text-secondary leading-relaxed font-light">
                Providing modern architectural strategies from Tunis to the rest of the world. Partnering with top-tier agencies and startups across Europe, North America, and the MENA region to build secure, reliable workflows.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 text-xs font-mono text-text-secondary flex justify-between">
              <span>LOCATED IN TUNISIA // CENTRAL EUROPEAN TIME</span>
              <span className="text-primary font-bold">ACTIVE COLLABORATIONS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
