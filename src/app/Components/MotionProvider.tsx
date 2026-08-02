"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/*
 * Isolating the framer-motion provider in its own client component keeps
 * page.tsx a server component. The page previously opened with "use client",
 * which pulled the entire section tree — including the otherwise static
 * Footer — into the client bundle.
 *
 * reducedMotion="user" makes every framer-motion animation on the page respect
 * the OS "reduce motion" preference: transforms are skipped and only opacity
 * animates. The CSS keyframe loops are covered by the matching media query in
 * globals.css. This site is heavily animated, so without this it is genuinely
 * unpleasant for motion-sensitive visitors.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
