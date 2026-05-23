import { motion } from "framer-motion";

export function SectionHeading({ eyebrow, title, accent, desc }: { eyebrow?: string; title: string; accent?: string; desc?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      {eyebrow && (
        <div className="flex items-center gap-3 mb-4">
          <span className="h-2 w-2 bg-[var(--cyan)] glow-cyan-sm" />
          <span className="font-black tracking-[0.25em] uppercase text-xl">{eyebrow}</span>
        </div>
      )}
      <h2 className="text-4xl md:text-6xl font-black leading-tight text-white">
        {title} {accent && <span className="text-gradient-cyan">{accent}</span>}
      </h2>
      {desc && <p className="mt-4 text-white/60 max-w-2xl leading-relaxed">{desc}</p>}
    </motion.div>
  );
}