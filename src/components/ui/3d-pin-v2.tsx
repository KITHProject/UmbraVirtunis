'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const PinContainer = ({
  children,
  className,
  containerClassName,
  pinChild,
}: {
  children: React.ReactNode
  pinChild?: React.ReactNode
  href?: string
  className?: string
  containerClassName?: string
}) => {
  return (
    <motion.div
      className={cn(
        'group/pin relative z-50 cursor-pointer',
        containerClassName
      )}
      style={{ perspective: '1000px' }}
      whileHover="hover"
      initial="rest"
    >
      <motion.div
        variants={{
          rest: { transform: 'translate(-50%,-50%) rotateX(0deg) scale(1)' },
          hover: {
            transform: 'translate(-50%,-50%) rotateX(35deg) scale(1.05)',
          },
        }}
        transition={{ duration: 0.5 }}
        className="absolute left-1/2 top-1/2 flex items-start justify-start overflow-hidden shadow-[0_8px_16px_rgb(0_0_0/0.4)] group-hover:shadow-[0_8px_16px_rgb(0_0_0/0.8)]"
      >
        <div className={cn('relative z-50', className)}>{children}</div>
      </motion.div>
      <PinPerspective pinChild={pinChild} />
    </motion.div>
  );
};

const PinPerspective = ({ pinChild }: { pinChild?: React.ReactNode }) => {
  return (
    <motion.div
      variants={{
        rest: { opacity: 0, y: 40, scale: 1 },
        hover: { opacity: 1, y: 0, scale: 1.25 },
      }}
      transition={{ duration: 0.7 }}
      className="pointer-events-none z-[60] flex h-[10rem] w-[10rem] items-center justify-center group-hover/pin:opacity-100"
    >
      <div className="inset-0 h-full w-full flex-none">
        <div className="absolute inset-x-0 bottom-[2rem] flex justify-center">
          <div className="relative z-10 flex items-center space-x-2">
            <span className="relative z-20 inline-block h-[10rem] w-[10rem] text-xs font-bold text-white">
              <span className="absolute inset-0 h-full w-full overflow-clip backdrop-sepia-0">
                {pinChild}
                <span className="absolute inset-0 -z-10 opacity-45 shadow-2xl"></span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
