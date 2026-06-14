"use client";
import { usePathname } from "next/navigation";
import TransitionLayer from "./TransitionLayer";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const direction = pathname === "/" ? "top" : "bottom";

  return (
    <>
      <TransitionLayer key={pathname + direction} direction={direction} />
      {children}
    </>
  );
}
