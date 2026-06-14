"use client";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Check, Loader2 } from "lucide-react";

import SidebarVertical from "@/components/SidebarVertical";
import { socials } from "@/constants/data";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm sm:text-base outline-none transition-all duration-300 placeholder:text-neutral-600 focus:border-white/40 focus:bg-white/10 focus:shadow-[0_0_20px_-8px_rgba(255,255,255,0.15)]";

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden">
      <SidebarVertical />

      <main className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16 pt-16 pb-20 sm:py-20 lg:py-24 lg:pl-28">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.65, ease: "easeOut" }}
          className="flex flex-col gap-4 text-center lg:text-left"
        >
          <motion.h1
            initial={{ x: "-20%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{ delay: 1.45, type: "spring", stiffness: 80 }}
            className="text-[72px] leading-none sm:text-[110px] lg:text-[170px]"
          >
            Contact
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="mx-auto lg:mx-0 max-w-2xl text-neutral-400 text-base sm:text-lg font-montserrat"
          >
            Have an idea, internship opportunity, or collaboration in mind? Let&apos;s
            build something meaningful together.
          </motion.p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.7, ease: "easeOut" }}
          className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-[0.95fr_1.05fr]"
        >
          {/* Info card */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <h2 className="text-3xl sm:text-4xl">Reach Out</h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed font-montserrat">
              I&apos;m currently open to internships, freelance work, and exciting software
              projects.
            </p>

            <div className="mt-8 space-y-4 font-montserrat">
              <motion.a
                href="mailto:mohamedslaoui18@gmail.com"
                whileHover={{ x: 4 }}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
              >
                <Mail size={18} className="transition-transform group-hover:scale-110" />
                <span className="text-sm sm:text-base">mohamedslaoui18@gmail.com</span>
              </motion.a>

              <motion.a
                href="tel:+212619831272"
                whileHover={{ x: 4 }}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
              >
                <Phone size={18} className="transition-transform group-hover:scale-110" />
                <span className="text-sm sm:text-base">+212 680 615 618</span>
              </motion.a>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 text-neutral-400">
                <MapPin size={18} />
                <span className="text-sm sm:text-base">Morocco</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
                >
                  <span className="transition-transform group-hover:scale-110">{social.icon}</span>
                  <span>{social.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-sm font-montserrat transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <h2 className="text-3xl sm:text-4xl">Message Me</h2>

            <div className="mt-7 space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className={inputClass}
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className={inputClass}
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                placeholder="Tell me about your project"
                className={`${inputClass} resize-none`}
                required
              />
            </div>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 text-sm text-green-400"
              >
                <Check size={14} /> Message sent successfully!
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm text-red-400"
              >
                Failed to send. Try again later.
              </motion.p>
            )}

            <motion.button
              type="submit"
              disabled={sending}
              whileHover={sending ? {} : { scale: 1.02 }}
              whileTap={sending ? {} : { scale: 0.98 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm sm:text-base transition-all duration-300 hover:bg-white hover:text-black hover:border-white disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {sending ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
              {sending ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.section>
      </main>
    </div>
  );
}
