import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ArrowLeft } from "lucide-react";
import { products } from "@/lib/site-data";
import { SectionHeading } from "@/components/site/SectionHeading";
import rolling from "@/assets/td/rolling.jpg";
import sliding from "@/assets/td/sliding.jpg";
import barrier from "@/assets/td/barrier.jpg";
import shutter from "@/assets/td/shutter.jpg";
import speed from "@/assets/td/speed.jpg";
import garage from "@/assets/td/garage.jpg";
import fire from "@/assets/td/fire.jpg";
import foam from "@/assets/td/foam.jpg";

const imgMap: Record<string, string> = { rolling, sliding, barrier, shutter, speed, garage };

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "المنتجات والخدمات — تكنو دور" },
      { name: "description", content: "تشكيلة كاملة من الأبواب الأوتوماتيكية العالمية: رولينج شاتر، أبواب جرّار، حواجز، شيش حصيرة، سبيد دور، وأبواب جراج." },
      { property: "og:title", content: "المنتجات — تكنو دور" },
      { property: "og:description", content: "حلول أبواب أوتوماتيكية لكل قطاع." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <section className="relative py-24 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Italian Engineering" title="المنتجات" accent="والخدمات" desc="نقدم تشكيلة كاملة من الأبواب الأوتوماتيكية بأعلى المعايير العالمية، مع إمكانية تخصيص أي مقاس أو خامة." />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 space-y-6">
        {products.map((p, i) => (
          <motion.article
            key={p.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className={`grid md:grid-cols-5 gap-0 bg-surface-low hover:bg-surface-high transition-colors group overflow-hidden ${i % 2 ? "md:[direction:ltr]" : ""}`}
          >
            <div className="md:col-span-2 aspect-[4/3] md:aspect-auto overflow-hidden bg-black">
              <img src={imgMap[p.img]} alt={p.title} loading="lazy" className="w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 object-fill" />
            </div>
            <div className="md:col-span-3 p-8 md:p-12 [direction:rtl]">
              <div className="text-xs text-[var(--cyan)] font-black tracking-[0.25em] uppercase mb-3">{p.en}</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{p.title}</h2>
              <p className="text-white/70 leading-loose mb-6">{p.desc}</p>
              <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                {p.specs.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-white/80">
                    <Check size={16} className="text-[var(--cyan)] shrink-0" /> {s}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 text-[var(--cyan)] text-sm font-black tracking-[0.18em] uppercase border-b-2 border-[var(--cyan)] pb-1 hover:gap-4 transition-all">
                اطلب عرض سعر <ArrowLeft size={14} />
              </Link>
            </div>
          </motion.article>
        ))}
      </section>

      {/* Specs gallery */}
      <section className="bg-surface-low py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="مواصفات تقنية" title="معايير" accent="عالمية" desc="من Polycarbonate الشفاف إلى الأبواب المضادة للحريق بسماكات 77mm و85mm." />
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-surface-high overflow-hidden">
              <img src={fire} alt="باب مضاد للحريق بسماكة 85mm من تكنو دور" loading="lazy" className="w-full aspect-[16/10] object-fill" />
              <div className="p-6">
                <h3 className="text-xl font-black text-white">باب مضاد للحريق · 85mm</h3>
                <p className="text-sm text-white/60 mt-2">بولي كربونيت + إصدار 77mm متوفر للمنشآت الحساسة.</p>
              </div>
            </div>
            <div className="bg-surface-high overflow-hidden">
              <img src={foam} alt="ألمنيوم مخرّم وأبواب فوم وصاج" loading="lazy" className="w-full aspect-[16/10] object-fill" />
              <div className="p-6">
                <h3 className="text-xl font-black text-white">ألمنيوم مخرّم · فوم · صاج</h3>
                <p className="text-sm text-white/60 mt-2">تشكيلة واسعة من الخامات لتناسب الوظيفة العملية والمظهر الجمالي.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}