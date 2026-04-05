"use client";

import { useState, useEffect } from "react";
import Lottie from "lottie-react";

/**
 * Loads a Lottie animation from a remote JSON URL.
 * To swap animations, grab any free .json from https://lottiefiles.com
 * and pass its URL as the `src` prop.
 */
export default function LottiePlayer({ src, className, loop = true, autoplay = true }) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (!src) return;
    fetch(src)
      .then((r) => r.json())
      .then(setAnimationData)
      .catch(() => {});
  }, [src]);

  if (!animationData) return <div className={className} />;

  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
    />
  );
}
