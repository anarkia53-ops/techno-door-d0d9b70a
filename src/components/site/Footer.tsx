import { Link } from "@tanstack/react-router";
import { Mail, Phone, Globe, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-surface-low border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="grid h-10 w-10 place-items-center bg-gradient-to-br from-[var(--cyan)] to-[var(--cyan-2)] text-black font-black">TK</span>
            <span className="font-black tracking-[0.18em] text-white">TECHNO<span className="text-[var(--cyan)]">DOOR</span></span>
          </div>
          <p className="text-white/60 max-w-md leading-relaxed text-sm">
            تأسست عام 1970 في دمشق. خمسة عقود من الريادة في تصنيع وتركيب الأبواب الأوتوماتيكية العالمية لكبرى المؤسسات والمطارات والمراكز التجارية.
          </p>
        </div>
        <div>
          <h4 className="text-white text-sm font-black tracking-[0.18em] mb-4">روابط</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link to="/about" className="hover:text-[var(--cyan)]">من نحن</Link></li>
            <li><Link to="/products" className="hover:text-[var(--cyan)]">المنتجات</Link></li>
            <li><Link to="/partners" className="hover:text-[var(--cyan)]">الشركاء</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--cyan)]">تواصل معنا</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm font-black tracking-[0.18em] mb-4">تواصل</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-center gap-2"><Mail size={14} className="text-[var(--cyan)]" /><a href="mailto:kaadan@techno-door.com" className="hover:text-white">kaadan@techno-door.com</a></li>
            <li className="flex items-center gap-2"><Globe size={14} className="text-[var(--cyan)]" /><a href="https://techno-door.com" className="hover:text-white">techno-door.com</a></li>
          <h5 className="text-white text-xs font-black tracking-[0.18em] mt-4 mb-2">للتواصل في مصر</h5>
          <ul className="space-y-2 text-sm text-white/60">
            <li className="flex items-center gap-2" dir="ltr"><Phone size={14} className="text-[var(--cyan)]" /><a href="tel:+201286254951" className="hover:text-white">01286254951</a></li>
            <li className="flex items-center gap-2" dir="ltr"><Phone size={14} className="text-[var(--cyan)]" /><a href="tel:+201157114794" className="hover:text-white">01157114794</a></li>
          </ul>
          <h5 className="text-white text-xs font-black tracking-[0.18em] mt-4 mb-2">للتواصل في سوريا</h5>
            <li className="flex items-center gap-2"><Facebook size={14} className="text-[var(--cyan)]" /><a href="https://www.facebook.com/technoodoor99" className="hover:text-white">technoodoor99</a></li>
          </ul>
          <h5 className="text-white text-xs font-black tracking-[0.18em] mt-4 mb-2">للتواصل في سوريا</h5>
          <ul className="space-y-2 text-sm text-white/60">
            <li className="flex items-center gap-2" dir="ltr"><Phone size={14} className="text-[var(--cyan)]" /><a href="tel:+963944211023" className="hover:text-white">+963 944 211 023</a></li>
            <li className="flex items-center gap-2" dir="ltr"><Phone size={14} className="text-[var(--cyan)]" /><a href="tel:+963933678047" className="hover:text-white">+963 933 678 047</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-5 text-xs text-white/40 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} TECHNODOOR — تكنو دور. جميع الحقوق محفوظة.</span>
          <span>ITALIAN AUTOMATIC DOORS · SINCE 1970</span>
        </div>
      </div>
    </footer>
  );
}