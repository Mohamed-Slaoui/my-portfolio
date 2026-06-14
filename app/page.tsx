"use client";
import { links } from "@/constants/data";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import ProfileImage from "../assets/profile.png";
import SidebarVertical from "@/components/SidebarVertical";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    setMounted(true);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div className="relative w-full min-h-dvh bg-black text-white overflow-x-hidden">
      <SidebarVertical />

      <div className="flex flex-col md:flex-row min-h-dvh">
        {/* Left: Profile panel */}
        {mounted ? (
          <motion.div
            initial={isMobile ? { y: "-100%", x: 0 } : { y: 0, x: "-100%" }}
            animate={{ x: 0, y: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 80, damping: 30 }}
            className="relative flex w-full md:w-[42%] min-h-dvh bg-white flex-col items-center justify-center gap-8 px-6 py-20 md:py-0"
          >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 90, damping: 14 }}
            className="relative"
          >
            <div className="size-36 sm:size-44 lg:size-56">
              {/* <div className="absolute inset-0 rounded-full bg-linear-to-br from-neutral-200 to-neutral-400" /> */}
              <Image
                src={ProfileImage}
                alt="Mohamed Slaoui"
                width={224}
                height={224}
                className="relative object-cover rounded-full size-[92%] mx-auto mt-[4%]"
                priority
              />
            </div>
          </motion.div>

          <div className="text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-semibold text-black tracking-wide"
            >
              Mohamed Slaoui
            </motion.h1>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-3 inline-block bg-black text-neutral-100 text-sm sm:text-base px-5 py-1.5 rounded-full font-montserrat tracking-wide"
            >
              Software Engineer Student
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="max-w-xs text-neutral-400 text-xs sm:text-sm text-center font-montserrat leading-relaxed"
          >
            Full-stack developer crafting clean, functional digital experiences
          </motion.p>

          {/* Mobile nav links */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="md:hidden flex gap-8 mt-4"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-montserrat tracking-widest text-black/50 hover:text-black transition-colors"
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
          </motion.nav>
        </motion.div>
        ) : (
          <div className="w-full md:w-[42%] min-h-dvh bg-white shrink-0" />
        )}

        {/* Right: Navigation panel (desktop only) */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden md:flex relative flex-1 flex-col justify-center px-8 sm:px-14 lg:px-20 py-16 md:py-0"
          >
            <div className="flex flex-col gap-1 md:gap-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative inline-block text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-bold leading-[1.05] tracking-tight"
                >
                  <span className="block transition-all duration-500 group-hover:translate-x-2">
                    {link.name}
                  </span>
                  <span className="block absolute left-0 top-0 text-white/10 transition-all duration-500 group-hover:opacity-100 opacity-0 pointer-events-none select-none">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="absolute bottom-10 left-8 lg:left-20 right-8 h-px bg-white/10 origin-left"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
