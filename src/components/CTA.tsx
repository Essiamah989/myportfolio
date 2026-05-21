"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Briefcase, ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-36 relative overflow-hidden bg-secondary/15 dot-matrix">
      {/* Background soft lavender glow ambient effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[350px] bg-gradient-to-t from-primary/10 to-transparent rounded-t-[100%] blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center gap-8"
        >
          <div className="text-xs uppercase tracking-widest text-primary font-bold">// SECURE INITIATION</div>
          
          <h2 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] text-white">
            Ready to Architect <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-highlight">System Expansion?</span>
          </h2>

          <p className="text-lg text-text-secondary mb-8 max-w-2xl font-light leading-relaxed">
            Let us align your software strategies with operational excellence. Whether you have structured specifications or a conceptual vision that needs technical architecture, I am prepared to co-build.
          </p>

          {/* Action Hub */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            <a
              href="mailto:contact@essiamahmoudi.com"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-primary to-accent text-[#09090B] font-bold rounded-xl shadow-lg hover:shadow-[0_0_40px_-5px_rgba(192,132,252,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] text-sm uppercase tracking-wider"
            >
              <Mail size={16} />
              Email Direct Address
            </a>
            <a
              href="https://wa.me/21600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-white/5 border border-white/8 text-white font-bold rounded-xl hover:bg-white/10 transition-all hover:border-white/20 active:scale-[0.98] text-sm uppercase tracking-wider"
            >
              <MessageSquare size={16} className="text-primary animate-pulse" />
              WhatsApp encrypted
            </a>
          </div>

          {/* Footer Social Connects */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-16 mt-8 border-t border-white/5 w-full max-w-xl text-xs font-mono tracking-widest text-text-secondary uppercase">
            <a
              href="https://linkedin.com/in/essiamahmoudi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1 group"
            >
              <Briefcase size={12} />
              <span>LINKEDIN</span>
              <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <span>//</span>
            <a
              href="mailto:contact@essiamahmoudi.com"
              className="hover:text-primary transition-colors flex items-center gap-1 group"
            >
              <Mail size={12} />
              <span>BUSINESS EMAIL</span>
              <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <span>//</span>
            <span className="text-[9px] font-bold text-accent">TUNISIA // GMT+1</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
