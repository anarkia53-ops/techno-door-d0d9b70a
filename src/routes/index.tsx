import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, Zap, Cog, Award } from "lucide-react";
import heroImg from "@/assets/td/installation.jpg";
import aboutImg from "@/assets/td/about-doors.png";
import { products, stats } from "@/lib/site-data";
import clientsLogos from "@/assets/td/clients-logos.png";
import { SectionHeading } from "@/components/site/SectionHeading";
import rolling from "@/assets/td/rolling.jpg";
import sliding from "@/assets/td/sliding.jpg";
import barrier from "@/assets/td/barrier.jpg";
import shutter from "@/assets/td/shutter.jpg";
import speed from "@/assets/td/speed.jpg";
import garage from "@/assets/td/garage.jpg";

const imgMap: Record<string, string> = { rolling, sliding, barrier, shutter, speed, garage };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "تكنو دور | الأبواب الأوتوماتيكية العالمية — الرئيسية" },
      { name: "description", content: "تكنو دور TECHNODOOR — منذ 1970، رائد الأبواب الأوتوماتيكية العالمية في سوريا ومصر. رولينج شاتر، سبيد دور، حواجز، وأبواب صناعية ضخمة." },
      { property: "og:title", content: "تكنو دور | TECHNODOOR" },
      { property: "og:description", content: "أبواب أوتوماتيكية عالمية بخبرة 50+ سنة." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="آلية الأبواب الأوتوماتيكية العالمية من تكنو دور" className="w-full h-full object-fill opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-l from-surface via-surface/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/40" />
          <div className="absolute inset-0 grid-bg opacity-50" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-2 w-2 bg-[var(--cyan)] glow-cyan-sm rounded-full animate-pulse" />
              <span className="font-black tracking-[0.25em] uppercase text-xl">Italian Automatic Doors · Since 1970</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] text-white max-w-4xl">
              القوة، الأمان<br/>
              والتكنولوجيا <span className="text-gradient-cyan">في حركة واحدة</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
              تكنو دور — خمسة عقود من الريادة في تصميم وتركيب الأبواب الأوتوماتيكية العالمية لكبرى المطارات والبنوك والعلامات التجارية العالمية في الشرق الأوسط وشمال إفريقيا.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/products" className="gradient-cyan text-black px-7 py-3.5 text-sm font-black tracking-[0.18em] uppercase hover:opacity-90 transition inline-flex items-center gap-2">
                استكشف منتجاتنا <ArrowLeft size={16} />
              </Link>
              <Link to="/contact" className="bg-surface-high text-white px-7 py-3.5 text-sm font-black tracking-[0.18em] uppercase hover:bg-surface-highest transition">
                اطلب عرض سعر
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-surface-low border-y border-white/5">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="text-5xl md:text-6xl font-black text-gradient-cyan leading-none">{s.value}</div>
              <div className="mt-2 text-sm text-white/60 font-bold tracking-wide">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24">
        <SectionHeading eyebrow="لماذا تكنو دور" title="هندسة عالمية," accent="جودة بلا حدود" desc={"محركات من افضل الشركات الاوربيه تعمل بسرعات \nتشغيل عالي وعمر افتراضي اطول \n"} />
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { Icon: ShieldCheck, t: "أمان مطلق", d: "أنظمة قفل ومستشعرات أمان متقدمة لحماية المنشأة والأشخاص." },
            { Icon: Zap, t: "أداء فائق", d: "محركات عالمية بسرعات تشغيل عالية وعمر افتراضي ممتد." },
            { Icon: Cog, t: "تميز ملحوظ", d: "أي مقاس وأي خامة وأي تصميم — نحوّل احتياجك إلى حقيقة." },
            { Icon: Award, t: "خبرة 50+ سنة", d: "إرث صناعي عريق نفّذ كبرى المشاريع الاستراتيجية في المنطقة." },
          ].map(({ Icon, t, d }) => (
            <motion.div key={t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-surface-low hover:bg-surface-high p-7 transition-colors group">
              <Icon className="text-[var(--cyan)] mb-4 group-hover:scale-110 transition" size={32} />
              <h3 className="text-xl font-black text-white mb-2">{t}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="bg-surface-low py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="منتجاتنا" title="حلول أبواب" accent="لكل قطاع" desc="من المطارات والمصانع إلى المتاجر والفلل — لدينا الحلّ المناسب." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.slice(0, 6).map((p, i) => (
              <motion.div key={p.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group bg-surface-high hover:bg-surface-highest transition-all overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-black">
                  <img src={imgMap[p.img]} alt={p.title} loading="lazy" className="w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 object-fill" />
                </div>
                <div className="p-6">
                  <div className="text-xs text-[var(--cyan)] font-black tracking-[0.2em] uppercase mb-2">{p.en}</div>
                  <h3 className="text-2xl font-black text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed line-clamp-2">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/products" className="inline-flex items-center gap-2 text-[var(--cyan)] font-black tracking-[0.18em] uppercase text-sm border-b-2 border-[var(--cyan)] pb-1 hover:gap-4 transition-all">
              عرض كل المنتجات <ArrowLeft size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CLIENTS STRIP */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="عملاء يثقون بنا" title="نخبة من" accent="أكبر المؤسسات" />
          <div className="bg-white p-6 md:p-10">
            <img src={clientsLogos} alt="شعارات أبرز عملاء تكنو دور" loading="lazy" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* ABOUT TEASER + CTA */}
      <section className="bg-surface-low py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src={aboutImg} alt="رسم توضيحي لأنواع الأبواب التي تنتجها تكنو دور" className="w-full h-auto object-contain" loading="lazy" />
          </motion.div>
          <div>
            <SectionHeading eyebrow="منذ 1970" title="إرث صناعي" accent="من دمشق إلى العالم" desc="تأسست في دمشق ونمت لتشمل فروعاً في القاهرة. نفّذنا مطار دمشق الدولي، البنوك، وكبرى العلامات التجارية." />
            <Link to="/about" className="inline-flex items-center gap-2 gradient-cyan text-black px-6 py-3 text-sm font-black tracking-[0.18em] uppercase">
              اعرف القصة <ArrowLeft size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
