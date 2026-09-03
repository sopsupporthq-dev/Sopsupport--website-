import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionStyle } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** vertical travel in px (0 disables Y movement) */
  travel?: number;
  /** when fully visible — defaults to a wide middle band so text holds, then fades on exit */
  hold?: [number, number]; // [fadeInEnd, fadeOutStart] in 0..1
  as?: "div" | "section" | "span" | "p" | "h1" | "h2" | "h3";
};

/**
 * Fades + lifts a block of text in as it enters the viewport and
 * fades it back out as it leaves. Driven entirely by scroll progress,
 * so scrubbing the page feels alive.
 */
export function ScrollFade({
  children,
  className,
  travel = 40,
  hold = [0.25, 0.75],
  as = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, hold[0], hold[1], 1],
    [0, 1, 1, 0],
  );
  const y = useTransform(
    scrollYProgress,
    [0, hold[0], hold[1], 1],
    [travel, 0, 0, -travel],
  );

  const style: MotionStyle = travel ? { opacity, y } : { opacity };

  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag ref={ref} style={style} className={className}>
      {children}
    </MotionTag>
  );
}

export default ScrollFade;