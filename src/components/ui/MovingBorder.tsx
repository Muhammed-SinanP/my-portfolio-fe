"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function Button({
  borderRadius = "0px",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "relative  overflow-hidden bg-transparent p-[1.5px]",
        containerClassName
      )}
      style={{
        borderRadius: "10px",
      }}
      {...otherProps}
    >
      <div className="absolute inset-0" style={{ borderRadius: "10px" }}>
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-30 w-30 lg:w-40 bg-teal-500 dark:bg-teal-300 ",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center  text-sm antialiased backdrop-blur-xl",
          className
        )}
        style={{
          borderRadius: "10px",
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 10000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
}) => {
  const pathRef = useRef<SVGRectElement | null>(null);

  // 🎲 unique starting offset (0–1) for this instance
  const phase = useRef(Math.random());

  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (!length) return;

    const pxPerMs = length / duration;

    /* ----------------------------------------------------
       identical speed for all → (time * pxPerMs)
       plus a one-time phase offset → phase.current * length
    ----------------------------------------------------- */
    progress.set((time * pxPerMs + phase.current * length) % length);
  });

  const x = useTransform(
    progress,
    (v) => pathRef.current?.getPointAtLength(v).x
  );
  const y = useTransform(
    progress,
    (v) => pathRef.current?.getPointAtLength(v).y
  );
  const transform = useMotionTemplate`
    translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        {...otherProps}
      >
        <rect
          ref={pathRef}
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
        />
      </svg>

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          padding: "4px",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
