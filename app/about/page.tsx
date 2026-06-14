"use client";
import SidebarVertical from "@/components/SidebarVertical";
import { motion } from "motion/react";

const skillGroups = [
  {
    label: "Programming Languages",
    items: ["C", "C++", "Java", "Python", "TypeScript"],
  },
  {
    label: "Frameworks",
    items: ["Laravel", "Spring Boot", "React", "React Native", "Next.js"],
  },
  {
    label: "Databases",
    items: ["MySQL"],
  },
  {
    label: "Tools & Tech",
    items: ["Stripe", "Socket.IO", "Prisma", "Redux", "Sanity CMS", "Tailwind CSS"],
  },
];

// const skillLevels = [
//   { name: "React / Next.js", level: 90 },
//   { name: "Laravel", level: 85 },
//   { name: "TypeScript", level: 85 },
//   { name: "Node.js", level: 75 },
//   { name: "Java", level: 80 },
//   { name: "Python", level: 70 },
// ];

export default function About() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden">
      <SidebarVertical />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 pt-20 pb-20 md:py-20 md:pl-28">
        <motion.h1
          initial={{ x: "-20%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ delay: 1.3, type: "spring", stiffness: 80 }}
          className="text-7xl sm:text-8xl md:text-9xl lg:text-[170px] leading-none font-bold"
        >
          About
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-4 text-xl sm:text-2xl text-neutral-300 max-w-xl"
        >
          I&apos;m Mohamed, a <span className="text-white">Software Engineering Student</span>.
        </motion.p>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-16 max-w-3xl"
        >
          <p className="text-base sm:text-lg leading-relaxed text-neutral-300 font-montserrat">
            Software Engineering student specializing in full-stack development
            with hands-on experience building production-ready web and mobile
            applications using Laravel, React, Next.js, and Stripe. Experienced
            in scalable systems, REST APIs, authentication, and payment
            integrations, with a strong focus on clean UI and real-world problem
            solving.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-8">Skills</h2>
          <div className="flex flex-col gap-6 max-w-2xl font-montserrat">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <span className="text-neutral-400 text-sm">{group.label} : </span>
                <span className="text-neutral-100 text-sm">{group.items.join(", ")}</span>
              </motion.div>
            ))}
          </div>

          {/* <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {skillLevels.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="flex justify-between text-sm mb-2 font-montserrat">
                  <span className="text-neutral-200">{skill.name}</span>
                  <span className="text-neutral-500">{skill.level}%</span>
                </div>
                <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full bg-white"
                  />
                </div>
              </motion.div>
            ))}
          </div> */}
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-20 pb-20"
        >
          <h2 className="text-3xl sm:text-4xl mb-8">Education</h2>
          <div className="border-l border-white/10 pl-6 space-y-8 font-montserrat">
            {[
              {
                degree: "Software Engineering Degree",
                school: "ENSIASD, TAROUDANT",
                period: "2024 - Present",
              },
              {
                degree: "Diploma in Computer Science",
                school: "EST, ESSAOUIRA",
                period: "2022 - 2024",
              },
              {
                degree: "Baccalaureate in Physics and Chemistry",
                school: "",
                period: "2021 - 2022",
              },
            ].map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                {edu.school && (
                  <p className="text-sm text-neutral-400 mt-0.5">{edu.school}</p>
                )}
                <p className="text-sm text-neutral-600 mt-0.5">{edu.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
