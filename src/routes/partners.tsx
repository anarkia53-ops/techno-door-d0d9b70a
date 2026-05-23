import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { clients, suppliers } from "@/lib/site-data";
import { SectionHeading } from "@/components/site/SectionHeading";
import partnersImg from "@/assets/td/partners.jpg";
import suppliersLogos from "@/assets/td/suppliers-logos.png";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "شركاء النجاح والعملاء — تكنو دور" },
      { name: "description", content: "نفتخر بثقة كبرى المؤسسات والعلامات العالمية: Mercedes, Pepsi, ZARA, H&M, FAB, Etisalat، وشركاء التصنيع العالميين Cardin و Elsamec و Tornado." },
      { property: "og:title", content: "الشركاء — تكنو دور" },
      { property: "og:description", content: "ثقة كبرى العلامات التجارية والمؤسسات." },
      { property: "og:url", content: "/partners" },
    ],
    links: [{ rel: "canonical", href: "/partners" }],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <>
      <section className="relative py-24 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={partnersImg} alt="شركاء تكنو دور" className="w-full h-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="ثقة عالمية" title="شركاء" accent="النجاح" desc="على مدار 50+ سنة من التميّز، نفتخر بأن نكون الخيار الأول لنخبة من كبرى الشركات والعلامات التجارية والمؤسسات الحكومية." />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20">
        <SectionHeading eyebrow="Our Clients" title="عملاؤنا" accent="حول العالم" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {clients.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="bg-surface-low hover:bg-surface-high transition-all p-8 text-center"
            >
              <div className="text-white/80 hover:text-[var(--cyan)] font-bold text-sm transition">{c}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-surface-low py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Italian Suppliers" title="شركاء" accent="التصنيع" desc="نختار خاماتنا ومحركاتنا من نخبة المصنعين العالميين لضمان أعلى مستويات الأداء." />
          <div className="bg-white p-6 md:p-10">
            <img src={suppliersLogos} alt="شركاء التصنيع العالميين" loading="lazy" className="w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 md:px-8 py-20 text-center">
        <p className="text-2xl md:text-3xl text-white/80 font-bold leading-loose">
          “اختيارنا لهذه الأسماء العريقة هو التزام منّا بتقديم <span className="text-gradient-cyan">أفضل الحلول</span> لعملائنا، مما يضمن لكم أداءً فائقاً وعمراً افتراضياً ممتداً.”
        </p>
      </section>
    </>
  );
}