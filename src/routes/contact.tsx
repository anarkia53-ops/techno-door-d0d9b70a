import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, Facebook, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا — تكنو دور" },
      { name: "description", content: "تواصل مع تكنو دور لطلب عرض سعر أو استشارة فنية. هاتف 011 5711 4794، البريد admin@techno-door.com." },
      { property: "og:title", content: "تواصل — تكنو دور" },
      { property: "og:description", content: "نحن هنا للإجابة على استفساراتك." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", msg: "" });
  const subject = encodeURIComponent(`استفسار من ${form.name || "زائر الموقع"}`);
  const body = encodeURIComponent(
    `الاسم: ${form.name}\nالبريد: ${form.email}\nالهاتف: ${form.phone}\n\nالرسالة:\n${form.msg}`
  );
  const mailto = `mailto:admin@techno-door.com?subject=${subject}&body=${body}`;

  const Field = ({ id, label, type = "text", value, onChange }: any) => (
    <label className="block">
      <span className="block text-xs font-black tracking-[0.15em] uppercase text-white/60 mb-2">{label}</span>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required
        className="w-full bg-surface-high text-white px-4 py-3 outline-none focus:bg-surface-highest border-b-2 border-transparent focus:border-[var(--cyan)] transition"
      />
    </label>
  );

  return (
    <>
      <section className="relative py-24 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="نحن هنا" title="تواصل" accent="معنا" desc="فريقنا جاهز لتقديم استشارة فنية أو عرض سعر مخصّص حسب احتياجك خلال 24 ساعة." />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 grid lg:grid-cols-5 gap-10">
        {/* Info */}
        <div className="lg:col-span-2 space-y-5">
          {[
            { Icon: Phone, t: "الهاتف", v: "011 5711 4794 — 012 8625 4951", href: "tel:+201157114794", dir: "ltr" },
            { Icon: Mail, t: "البريد", v: "admin@techno-door.com", href: "mailto:admin@techno-door.com" },
            { Icon: Globe, t: "الموقع", v: "techno-door.com", href: "https://techno-door.com" },
            { Icon: Facebook, t: "فيسبوك", v: "techhnoodoor99", href: "https://www.facebook.com/techhnoodoor99" },
            { Icon: MapPin, t: "الفروع", v: "دمشق · القاهرة" },
          ].map(({ Icon, t, v, href, dir }) => (
            <motion.a
              key={t}
              href={href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-surface-low hover:bg-surface-high transition p-5 group"
            >
              <span className="grid h-11 w-11 place-items-center bg-surface-high group-hover:gradient-cyan group-hover:text-black transition shrink-0">
                <Icon size={18} />
              </span>
              <div>
                <div className="text-xs text-[var(--cyan)] font-black tracking-[0.2em] uppercase mb-1">{t}</div>
                <div className="text-white font-bold" dir={dir as any}>{v}</div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          action={mailto}
          method="post"
          encType="text/plain"
          className="lg:col-span-3 bg-surface-low p-8 md:p-10 space-y-5"
        >
          <h3 className="text-2xl font-black text-white">أرسل رسالة</h3>
          <p className="text-sm text-white/60">سيتم فتح برنامج البريد لإرسال الرسالة مباشرة إلى فريقنا.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <Field id="name" label="الاسم" value={form.name} onChange={(e: any) => setForm({ ...form, name: e.target.value })} />
            <Field id="email" label="البريد" type="email" value={form.email} onChange={(e: any) => setForm({ ...form, email: e.target.value })} />
          </div>
          <Field id="phone" label="الهاتف" type="tel" value={form.phone} onChange={(e: any) => setForm({ ...form, phone: e.target.value })} />
          <label className="block">
            <span className="block text-xs font-black tracking-[0.15em] uppercase text-white/60 mb-2">رسالتك</span>
            <textarea
              required
              rows={6}
              value={form.msg}
              onChange={(e) => setForm({ ...form, msg: e.target.value })}
              className="w-full bg-surface-high text-white px-4 py-3 outline-none focus:bg-surface-highest border-b-2 border-transparent focus:border-[var(--cyan)] transition resize-none"
            />
          </label>
          <button type="submit" className="gradient-cyan text-black px-7 py-3.5 text-sm font-black tracking-[0.18em] uppercase inline-flex items-center gap-2 hover:opacity-90 transition">
            إرسال الرسالة <Send size={16} />
          </button>
        </motion.form>
      </section>
    </>
  );
}