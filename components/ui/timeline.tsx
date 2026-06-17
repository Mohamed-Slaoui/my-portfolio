"use client";
import { isGithubLink } from "@/lib/utils";
import { useScroll, useTransform, motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface ImageEntry { src: string; type: "mobile" | "desktop"; }
interface TimelineEntry {
  id: number; title: string; subtitle: string; projectName: string;
  description: string; images: ImageEntry[]; link?: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 77%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full dark:bg-neutral-950 font-sans md:px-10 md:pl-20" ref={containerRef}>
      <div className="flex flex-col justify-center items-center mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[120px] font-bold text-center">Check out</h1>
        <p className="text-neutral-700 text-center dark:text-neutral-300 text-sm md:text-base max-w-md">
          A timeline of projects, internships, and academic work. Open any item to read more and view screenshots.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-neutral-500 dark:text-neutral-500">{item.title}</h3>
                <h6 className="hidden pt-2 md:block text-xl md:pl-20 md:text-lg font-bold text-neutral-500 dark:text-neutral-500">{item.subtitle}</h6>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">{item.title}</h3>
              <p className="mb-8 text-3xl font-bold font-grandslang text-neutral-800 md:text-3xl dark:text-neutral-200">{item.projectName}</p>
              <div className="flex flex-wrap items-center gap-4">
                <motion.button
                  type="button"
                  onClick={() => setSelected(item.id)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="cursor-pointer rounded-full border border-neutral-300 dark:border-neutral-700 px-5 py-2.5 text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                >
                  View Project Details
                </motion.button>
                {/* <span className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400">{item.images.length} screenshots available</span> */}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer rounded-full border border-neutral-300 dark:border-neutral-700 px-5 py-2.5 text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all no-underline"
                  >
                    {isGithubLink(item.link)} ↗
                  </a>
                )}
                </div>
            </div>
          </motion.div>
        ))}

        <div style={{ height: height + "px" }}
             className="absolute md:left-8 left-8 top-0 overflow-hidden w-0.5 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 dark:via-neutral-700 to-transparent mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <motion.div style={{ height: heightTransform, opacity: opacityTransform }}
                      className="absolute inset-x-0 top-0 w-0.5 bg-linear-to-t from-purple-500 via-blue-500 to-transparent rounded-full" />
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            onClick={() => setSelected(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selected && (
          <motion.div
            layoutId={`card-${selected}`}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-0 right-0 w-full md:w-[65%] h-full bg-white text-black z-50 py-8 px-5 md:px-8 lg:px-10"
          >
            {(() => {
              const project = data.find((p) => p.id === selected);
              if (!project) return null;
              return (
                <div className="h-full overflow-y-auto pr-1">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">{project.title}</p>
                      <h2 className="text-3xl md:text-5xl font-bold mt-2">{project.subtitle}</h2>
                    </div>
                    <motion.button
                      type="button"
                      onClick={() => setSelected(null)}
                      whileHover={{ scale: 1.05 }}
                      className="px-5 py-2.5 border cursor-pointer border-black rounded-full text-sm md:text-base hover:bg-black hover:text-white transition-all shrink-0"
                    >
                      Close
                    </motion.button>
                  </div>
                  <p className="mt-7 text-base md:text-lg leading-relaxed text-neutral-700 max-w-3xl">{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-6 underline underline-offset-4 text-neutral-700 hover:text-black transition-colors"
                    >
                      {project.link} ↗
                    </a>
                  )}
                  { project.images.length > 0 && <div className="mt-10 border-t border-neutral-200 pt-7">
                    <h3 className="text-lg md:text-xl font-semibold text-neutral-900">Project Gallery</h3>
                    <div className="mt-4 flex flex-wrap gap-4 md:gap-5 justify-start">
                      {project.images.map((img) => (
                        <div
                          key={img.src}
                          className={img.type === "mobile"
                            ? "w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] min-w-40 max-w-[260px] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 shadow-sm transition-all duration-300 hover:shadow-md"
                            : "w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 shadow-sm transition-all duration-300 hover:shadow-md"}
                        >
                          <img
                            src={img.src}
                            alt={`${project.subtitle} screenshot`}
                            className="w-full h-auto object-cover object-top transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </div>}
                </div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
