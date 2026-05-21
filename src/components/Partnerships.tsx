"use client";

import { motion } from "framer-motion";
import { Handshake, ShieldCheck, HeartHandshake, Rocket } from "lucide-react";

const models = [
  {
    icon: <Handshake size={22} className="text-primary" />,
    title: "Agency White-Labeling",
    description: "Multiplying your design agency's capacity behind the scenes. You handle client relations; I engineer highly complex software modules matching strict design schemas, fully integrated under your name."
  },
  {
    icon: <Rocket size={22} className="text-accent" />,
    title: "Interim Tech Lead",
    description: "Steering early startups and non-technical founders through system design, technology selections, data regulations, and building resilient code frameworks ready for growth."
  },
  {
    icon: <HeartHandshake size={22} className="text-highlight" />,
    title: "Revenue-Share Models",
    description: "Aligning incentives on high-potential SaaS concepts. I invest elite architectural engineering in exchange for shared equity/revenue, turning developer-client dynamics into true B2B partnerships."
  },
  {
    icon: <ShieldCheck size={22} className="text-primary" />,
    title: "Support Agreements",
    description: "Providing long-term infrastructure security, constant dependencies tracking, server load monitoring, continuous backups, and proactive tech advisory to secure zero operational downtime."
  }
];

export function Partnerships() {
  return (
    <section id="partnerships" className="py-32 relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-primary/8 rounded-full blur-[140px] glow-orb" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Pitch column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="text-xs uppercase tracking-widest text-accent font-bold">// COLLABORATIVE SCALING</div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
              B2B Partnerships Built On Integrity
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed font-light">
              I believe in mutual progress and long-term commitments. Finding a standard coder is trivial. Finding a strategic technical partner who aligns software layout with business operations is rare. That is the leverage I bring.
            </p>
            <div className="p-6 border border-white/5 bg-secondary/40 backdrop-blur-md rounded-2xl glass-card">
              <p className="italic text-text-secondary text-sm font-light leading-relaxed">
                &ldquo;Essia understands scale, systems management, and administrative efficiency. She is a serious technical architect focused on software durability and B2B growth.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Cards column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
          >
            {models.map((model, index) => (
              <div
                key={index}
                className="p-6 bg-secondary/30 border border-white/5 rounded-2xl hover:border-primary/20 hover:bg-secondary/50 transition-all duration-300 flex flex-col justify-between min-h-[220px] glass-card"
              >
                <div>
                  <div className="mb-4 bg-white/[0.02] border border-white/5 w-12 h-12 rounded-xl flex items-center justify-center">
                    {model.icon}
                  </div>
                  <h3 className="font-heading font-bold mb-2 text-white text-base">{model.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed font-light">{model.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
