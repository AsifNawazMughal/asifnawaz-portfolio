"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";

// Coding/dev loading animation — swap with any .json from lottiefiles.com
const LOADER_ANIM =
  "https://assets7.lottiefiles.com/packages/lf20_eOLhtkf7AY.json";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [animData, setAnimData] = useState(null);

  useEffect(() => {
    fetch(LOADER_ANIM)
      .then((r) => r.json())
      .then(setAnimData)
      .catch(() => {});
    const t = setTimeout(() => setVisible(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-primary-background flex flex-col items-center justify-center gap-4"
        >
          {animData ? (
            <Lottie animationData={animData} loop className="w-44 h-44" />
          ) : (
            /* CSS fallback spinner */
            <div className="w-14 h-14 border-4 border-accent-orange border-t-transparent rounded-full animate-spin" />
          )}

          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-heading font-extrabold text-3xl text-foreground"
            >
              Asif Nawaz
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-light-gray-text text-sm font-heading mt-1"
            >
              Developer · Game Dev · Educator
            </motion.p>
          </div>

          {/* Animated dots */}
          <div className="flex gap-2 mt-2">
            {[0, 0.18, 0.36].map((d, i) => (
              <motion.span
                key={i}
                className="w-2 h-2 rounded-full bg-accent-orange block"
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.1, repeat: Infinity, delay: d }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
