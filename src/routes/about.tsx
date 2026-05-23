import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, MapPin } from "lucide-react";
import aboutImg from "@/assets/td/about-hero.jpg";
import visionImg from "@/assets/td/vision.jpg";
import timelineImg from "@/assets/td/timeline.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن — تكنو دور | TECHNODOOR" },
      { name: "description", content: "تأسست تكنو دور عام 1970 في دمشق، خمسة عقود من الريادة في الأبواب الأوتوماتيكية، مع فرع في مصر." },
      { property: "og:title", content: "من نحن — تكنو دور" },
      { property: "og:description", content: "إرث صناعي عالمي منذ 1970." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const branches = [
  { city: "دمشق", country: "سوريا", role: "المقر الرئيسي · 1970" },
  { city: "القاهرة", country: "مصر", role: "فرع إقليمي" },
];

function AboutPage() {
  return (
    <>
      <section className="relative py-28 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20">
          <img src={timelineImg} alt="الخط الزمني لتطور تكنو دور" className="w-full h-full object-fill" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="منذ 1970 · من دمشق" title="من" accent="نحن" desc="رحلة من الريادة والتميّز امتدت لأكثر من خمسة عقود في صناعة الأبواب الأوتوماتيكية." />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.img initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} src={aboutImg} alt="هوية تكنو دور" loading="lazy" className="w-full" />
        <div className="space-y-5 text-white/75 leading-loose">
          <p>تأسست شركة <span className="text-[var(--cyan)] font-bold">تكنو دور (Technodoor)</span> عام 1970 في دمشق، سوريا، لتبدأ رحلة من الريادة والتميّز امتدت لأكثر من خمسة عقود. خلال هذه المسيرة، نفّذنا بفخر كبرى المشاريع الاستراتيجية مثل مطار دمشق الدولي، الجمارك الدولية، والعديد من البنوك وشركات الاتصالات.</p>
          <p>توسعت أعمالنا لتشمل مشاريع ضخمة في مصر مع كبرى العلامات التجارية العالمية مثل بيبسي، مرسيدس، اتصالات، أديداس، وبي تك.</p>
          <p>نمتلك التكنولوجيا والخبرة لمواجهة كافة التحديات الهندسية، ونقدّم أفضل الحلول للأبواب بمختلف أنواعها: الرولينج شاتر، الأبواب المفصلية والجرارة، شيش الحصيرة، وأبواب الفوتوسيل.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-surface-low py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-surface-high p-10">
            <Eye className="text-[var(--cyan)] mb-4" size={32} />
            <h3 className="text-3xl font-black text-white mb-4">رؤيتنا</h3>
            <p className="text-white/70 leading-loose">أن نكون الخيار الأول والشركة الرائدة في حلول الأبواب الأوتوماتيكية والذكية في الشرق الأوسط وشمال إفريقيا، ونضع معايير عالمية جديدة تجمع بين الفخامة العالمية، الابتكار الهندسي، والأمان المطلق.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-surface-high p-10">
            <Target className="text-[var(--cyan)] mb-4" size={32} />
            <h3 className="text-3xl font-black text-white mb-4">مهمتنا</h3>
            <p className="text-white/70 leading-loose">تقديم حلول أبواب أوتوماتيكية متطورة ومخصّصة تلبّي وتتجاوز الاحتياجات الهندسية والمعمارية لعملائنا، عبر دمج أحدث التقنيات مع أفضل الخامات لضمان المتانة وأقصى درجات الأمان والعزل.</p>
          </motion.div>
        </div>
      </section>

      {/* Branches */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24">
        <SectionHeading eyebrow="حضور إقليمي" title="فروعنا " />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {branches.map((b, i) => (
            <motion.div key={b.city} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-surface-low hover:bg-surface-high transition p-7">
              <MapPin className="text-[var(--cyan)] mb-3" size={24} />
              <div className="text-2xl font-black text-white">{b.city}</div>
              <div className="text-sm text-white/50">{b.country}</div>
              <div className="mt-3 text-xs text-[var(--cyan)] font-bold tracking-wide uppercase">{b.role}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-surface-low py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <img src={visionImg} alt="رسم توضيحي لرؤية تكنو دور" className="w-full" loading="lazy" />
        </div>
      </section>
    </>
  );
}