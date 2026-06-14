"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { links, socials } from "@/constants/data";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden fixed top-4 right-4 z-50">
      <button
        onClick={() => setOpen(true)}
        className="relative z-50 flex items-center justify-center size-10 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-white"
        aria-label="Open menu"
      >
        <Menu size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-black border-l border-white/10 z-50 flex flex-col p-8"
            >
              <button
                onClick={() => setOpen(false)}
                className="self-end flex items-center justify-center size-10 rounded-full border border-white/20 text-white mb-12"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>

              <nav className="flex flex-col gap-6">
                {links.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-4xl font-grandslang text-white/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto flex gap-4 pt-8 border-t border-white/10">
                {socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
