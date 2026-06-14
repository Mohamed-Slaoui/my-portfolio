"use client";
import { socials } from "@/constants/data";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const SidebarVertical = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const isHome = pathname === "/";
  const pageName = isHome ? "Home" : pathname.replace("/", "").toUpperCase();

  return (
    <>
      {/* Mobile: horizontal top bar (same style, flipped) */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 h-12 mix-blend-difference text-white select-none"
      >
        <div className="flex items-center gap-3">
          {isHome ? (
            socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center size-7 border border-current/60 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <span className="text-sm transition-transform duration-300 group-hover:scale-110">
                  {social.icon}
                </span>
              </Link>
            ))
          ) : (
            <Link
              href="/"
              className="flex items-center gap-1 text-xs tracking-widest text-[9px] hover:underline hover:opacity-100 transition-opacity"
            >
              {/* <ArrowLeft size={14} /> */}
              BACK
            </Link>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="w-8 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />
          <h2 className="font-montserrat font-semibold tracking-[0.2em] text-[10px]">
            {pageName}
          </h2>
          <div className="w-8 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />
        </div>

        <h2 className="font-montserrat text-[9px] tracking-widest">
          {currentYear}
        </h2>
      </motion.div>

      {/* Desktop: vertical sidebar */}
      <motion.div
        className="hidden md:flex fixed inset-y-0 left-0 z-40 flex-col items-center justify-between py-10 w-16 h-full mix-blend-difference text-white select-none"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-2">
          {isHome ? (
            socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center size-8 border border-current rounded-lg transition-all duration-300 hover:scale-110"
              >
                <span className="text-lg transition-transform duration-300 group-hover:scale-110">
                  {social.icon}
                </span>
              </Link>
            ))
          ) : (
            <Link
              href="/"
              className="group flex flex-col items-center gap-1 text-xs transition-all"
            >
              {/* <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" /> */}
              <span className="rotate-180 [writing-mode:vertical-lr] text-[15px] tracking-widest hover:underline group-hover:opacity-100 transition-opacity">
                Back
              </span>
            </Link>
          )}
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="h-16 w-px bg-linear-to-b from-transparent via-white/50 to-transparent" />
          <h2 className="rotate-180 [writing-mode:vertical-lr] font-montserrat font-semibold tracking-[0.2em] text-xs">
            {pageName}
          </h2>
          <div className="h-16 w-px bg-linear-to-b from-transparent via-white/50 to-transparent" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="h-6 w-px bg-white/20" />
          <h2 className="rotate-180 [writing-mode:vertical-lr] text-[15px] tracking-widest font-montserrat">
            {currentYear}
          </h2>
        </div>
      </motion.div>
    </>
  );
};
export default SidebarVertical;
