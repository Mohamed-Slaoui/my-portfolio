"use client";
import SidebarVertical from "@/components/SidebarVertical";
import { Timeline } from "@/components/ui/timeline";
import { data } from "@/constants/data";
import { ArrowDown } from 'lucide-react';
import { motion } from "motion/react";

export default function ProjectsPage() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden">
      <SidebarVertical />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-20 md:pl-16"
      >
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[170px] font-bold text-center text-black leading-none">
          My Projects
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-6 text-neutral-600 text-sm sm:text-base text-center max-w-md font-montserrat"
        >
          A timeline of projects, internships, and academic work
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <ArrowDown className="animate-bounce mt-16" size={32} color="black" />
        </motion.div>
      </motion.div>

      <div className="flex flex-col items-center justify-center gap-12">
        <div className="relative w-full overflow-clip">
          <Timeline data={data} />
        </div>
      </div>
    </div>
  );
}
