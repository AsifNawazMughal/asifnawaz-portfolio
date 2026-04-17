"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineWavingHand } from "react-icons/md";
import SocialLinks from "../Ui/SocialLinks";
import Container from "../Container";
import Button from "../Button";

export default function MyHero() {
  const [count, setCount] = useState(800);

  useEffect(() => {
    const start = 800;
    const end = 1200;
    const duration = 3000;
    let startTime = null;
    let rafId = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(start + (end - start) * progress));
      if (progress < 1) rafId = requestAnimationFrame(step);
    }

    rafId = requestAnimationFrame(step);
    return () => { if (rafId) cancelAnimationFrame(rafId); };
  }, []);

  const formatCount = (n) => {
    if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k+`;
    return n.toString();
  };

  return (
    <section className="w-full bg-primary-background lg:h-[76vh] relative overflow-hidden">
      <Container>
        <div className="w-full lg:w-1/2 z-20">
          <div className="max-w-xl mt-16 sm:mt-14">

            <div className="flex items-center gap-4 mt-30 opacity-0 animate-slide-left delay-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="2" viewBox="0 0 65 2" fill="none">
                <path d="M0 1H65" stroke="#080808" />
              </svg>
              <p className="font-heading font-extrabold text-2xl text-[#151515] flex items-center gap-1" >
                Hello, I&apos;m <MdOutlineWavingHand className="inline text-3xl text-yellow-400" />
              </p>
            </div>

            <h1 className="text-foreground font-extrabold font-heading leading-[0.9] relative text-[clamp(4.0rem,6vw,7rem)] opacity-0 animate-slide-left delay-200 mt-4">
              <span className="relative">
                <span className="absolute -z-10 -left-[0.006em] top-[0.31em] w-[0.60em] h-[0.60em] bg-yellow-highlight rounded-full" />
                Asif
              </span>{" "}
              <br />
              <span>Nawaz</span>
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-dark-signature-text max-w-xl font-extrabold font-heading opacity-0 animate-slide-left delay-300">
              React / Next.js Developer &nbsp;·&nbsp; Game Dev &nbsp;·&nbsp; CS Lecturer &nbsp;·&nbsp; Pakistan
            </p>

            <div className="my-8 flex items-center gap-2 opacity-0 animate-slide-left delay-400">
                <Button link="/about" btext="About Me" black />
                <Button link="/project" btext="My Work" />
            </div>

            <div className="flex items-center justify-start opacity-0 animate-slide-left delay-500 mb-10">
              <div className="sm:hidden md:flex items-center border-r-2 border-light-gray-text gap-4 pr-6">
                <div className="font-heading font-extrabold text-3xl sm:text-4xl leading-none">
                  <span aria-live="polite">{formatCount(count)}</span>
                </div>
                <span className="text-sm text-dark-signature-text">Worldwide clients</span>
              </div>
              <div className="ml-6">
                <SocialLinks color="dark-signature-text" />
              </div>
            </div>

          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2" />
      </Container>

      <div className="right-0 top-0 absolute flex items-center justify-end pointer-events-none">
        <Image
          src="/Mhero.png"
          alt="Hero"
          width={720}
          height={720}
          priority
          className="hidden md:block w-[45vw] max-w-[720px] min-w-[540px] h-auto object-contain opacity-0 animate-slide-right delay-100"
        />
      </div>
    </section>
  );
}
