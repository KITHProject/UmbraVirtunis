"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
  pinChild,
}: {
  children: React.ReactNode
  pinChild?: React.ReactNode
  title?: string
  href?: string
  className?: string
  containerClassName?: string
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  )

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)")
  }
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)")
  }

  return (
    <div
      className={cn(
        "group/pin relative z-50 cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 top-1/2 flex items-start justify-start overflow-hidden  bg-white p-1 shadow-[0_8px_16px_rgb(0_0_0/0.4)] transition duration-700"
        >
          <div className={cn("relative z-50", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} pinChild={pinChild} />
    </div>
  )
}

export const PinPerspective = ({
  title,
  href,
  pinChild,
}: {
  title?: string
  href?: string
  pinChild?: React.ReactNode
}) => {
  return (
    <motion.div className="pointer-events-none z-[60] flex h-[24rem] w-[24rem] items-center justify-center opacity-0 transition duration-500 group-hover/pin:opacity-100">
      <div className="inset-0 -mt-7 h-full w-full flex-none">
        <div className="absolute inset-x-0 bottom-60 flex justify-center">
          <div className="relative z-10 flex items-center space-x-2 px-4 py-0.5">
            <span className="relative z-20 inline-block h-[22rem] w-[22rem] py-0.5 text-xs font-bold text-white">
              <span className="absolute inset-0 h-full w-full -rotate-45 overflow-clip backdrop-sepia-0">
                {pinChild}
                <span className="absolute inset-0 -z-10  opacity-45 shadow-2xl"></span>
              </span>
            </span>
          </div>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem]  bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem]  bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem]  bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>
      </div>
    </motion.div>
  )
}
