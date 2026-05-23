import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, Facebook, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا — تكنو دور" },
      { name: "description", content: "تواصل مع تكنو دور لطلب عرض سعر أو استشارة فنية. هاتف 011 5711 4794، البريد kaadan@techno-door.com." },
      { property: "og:title", content: "تواصل — تكنو دور" },
      { property: "og:description", content: "نحن هنا للإجابة على استفساراتك." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const egypt = [
    { Icon: Phone, t: "الهاتف", v: "011 5711 4794", href: "tel:+201157114794", dir: "ltr" },
    { Icon: Phone, t: "الهاتف", v: "012 8625 4951", href: "tel:+201286254951", dir: "ltr" },
    { Icon: Mail, t: "البريد", v: "kaadan@techno-door.com", href: "mailto:kaadan@techno-door.com" },
    { Icon: Facebook, t: "فيسبوك", v: "techhnoodoor99", href: "https://www.facebook.com/techhnoodoor99" },
    { Icon: MapPin, t: "العنوان", v: "القاهرة" },
  ];

  const syria = [
    { Icon: Phone, t: "الهاتف", v: "+963 944 211 023", href: "tel:+963944211023", dir: "ltr" },
    { Icon: Phone, t: "الهاتف", v: "+963 933 678 047", href: "tel:+963933678047", dir: "ltr" },
    { Icon: Facebook, t: "فيسبوك", v: "techhnoodoor99", href: "https://www.facebook.com/techhnoodoor99" },
    { Icon: MapPin, t: "العنوان", v: "دمشق" },
  ];

  const Branch = ({ title, items }: { title: string; items: any[] }) => (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-surface-low p-6 md:p-8 space-y-4"
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h3 className="text-3xl font-black text-white">{title}</h3>
        <span className="text-[var(--cyan)] font-black tracking-[0.2em] uppercase text-xs">فرع</span>
      </div>
      <div className="space-y-3">
        {items.map(({ Icon, t, v, href, dir }, i) => {
          const Cmp: any = href ? "a" : "div";
          return (
            <Cmp
              key={`${t}-${i}`}
              href={href}
              className="flex items-start gap-4 bg-surface-high hover:bg-surface-highest transition p-4 group"
            >
              <span className="grid h-11 w-11 place-items-center bg-surface-low group-hover:gradient-cyan group-hover:text-black transition shrink-0">
                <Icon size={18} />
              </span>
              <div>
                <div className="text-xs text-[var(--cyan)] font-black tracking-[0.2em] uppercase mb-1">{t}</div>
                <div className="text-white font-bold" dir={dir as any}>{v}</div>
              </div>
            </Cmp>
          );
        })}
      </div>
    </motion.div>
  );

  return (
    <>
      <section className="relative py-24 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="نحن هنا" title="تواصل" accent="معنا" desc="فريقنا جاهز لتقديم استشارة فنية أو عرض سعر مخصّص حسب احتياجك خلال 24 ساعة." />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 grid md:grid-cols-2 gap-8">
        <Branch title="مصر" items={egypt} />
        <Branch title="سوريا" items={syria} />
      </section>
    </>
  );
}