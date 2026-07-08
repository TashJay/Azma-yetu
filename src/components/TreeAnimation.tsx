import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function TreeAnimation({ className = "" }: { className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scrollRotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);
  const scrollSkew = useTransform(scrollYProgress, [0, 1], [2, -2]);

  return (
    <motion.div
      ref={ref}
      className={`pointer-events-none ${className}`}
      style={{
        rotate: scrollRotate,
        skewX: scrollSkew,
        transformOrigin: "bottom center"
      }}
    >
      <motion.div
        className="w-full h-full"
        animate={{
          rotate: [0, 1.5, -0.5, 1, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transformOrigin: "bottom center" }}
      >
        <svg viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
          {/* Detailed Acacia Tree Silhouette */}
          
          {/* Main Trunk & Roots */}
          <path d="M98,200 C93,170 102,140 105,115 C108,95 106,75 102,60 C93,80 88,105 85,130 C80,165 82,185 75,200 Z" />
          <path d="M100,200 C110,185 115,160 112,130 C110,105 105,80 110,65 C122,85 125,115 125,145 C125,170 118,185 115,200 Z" />
          
          {/* Primary Branches */}
          <path d="M104,70 C100,60 90,50 78,45 C85,55 95,65 98,75 Z" />
          <path d="M110,75 C118,65 132,55 145,50 C135,62 122,70 112,82 Z" />
          <path d="M102,90 C90,82 75,75 60,78 C75,85 88,95 98,105 Z" />
          <path d="M108,105 C125,95 145,90 162,95 C145,105 125,110 110,118 Z" />
          <path d="M104,50 C100,40 102,28 108,18 C108,30 110,40 108,55 Z" />

          {/* Detailed Canopy / Leaves (Acacia Flat Tops) */}
          <ellipse cx="78" cy="42" rx="28" ry="8" />
          <ellipse cx="145" cy="48" rx="35" ry="9" />
          <ellipse cx="60" cy="76" rx="25" ry="7" />
          <ellipse cx="162" cy="94" rx="30" ry="8" />
          <ellipse cx="108" cy="16" rx="32" ry="8" />
          <ellipse cx="115" cy="35" rx="22" ry="6" />
          <ellipse cx="125" cy="80" rx="18" ry="5" />
          <ellipse cx="85" cy="65" rx="15" ry="5" />
          <ellipse cx="90" cy="95" rx="12" ry="4" />
          <ellipse cx="130" cy="105" rx="20" ry="6" />
          
          {/* Little isolated leaf clusters to add realism */}
          <ellipse cx="40" cy="45" rx="8" ry="3" />
          <ellipse cx="180" cy="48" rx="10" ry="3" />
          <ellipse cx="185" cy="95" rx="12" ry="4" />
          <ellipse cx="30" cy="78" rx="10" ry="4" />
          <ellipse cx="145" cy="18" rx="10" ry="3" />
          <ellipse cx="72" cy="18" rx="8" ry="3" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
