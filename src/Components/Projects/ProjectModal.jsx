"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;
  const { Icon, iconColor = "text-accent-orange", title, category, fullDesc, tech, github, live } = project;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-primary-background px-8 pt-8 pb-6 relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white flex items-center justify-center text-foreground hover:bg-foreground hover:text-white transition-colors duration-300"
              aria-label="Close"
            >
              <FaTimes size={13} />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0">
                {Icon && <Icon size={26} className={iconColor} />}
              </div>
              <div>
                <span className="text-[11px] font-heading font-bold text-accent-orange uppercase tracking-widest block mb-0.5">
                  {category}
                </span>
                <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-foreground leading-tight">
                  {title}
                </h2>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="px-8 py-7 space-y-6">
            <p className="text-light-gray-text leading-relaxed text-[15px]">{fullDesc}</p>

            {/* Tech Stack */}
            <div>
              <p className="font-heading font-bold text-sm text-foreground mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1.5 bg-primary-background font-heading font-bold rounded-full text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-1">
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 inline-flex items-center justify-center gap-2 py-3.5 bg-foreground text-white font-heading font-bold text-sm rounded-xl hover:bg-accent-orange transition-colors duration-300"
              >
                <FaGithub size={16} /> View Repository
              </Link>
              {live ? (
                <Link
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 inline-flex items-center justify-center gap-2 py-3.5 bg-accent-orange text-white font-heading font-bold text-sm rounded-xl hover:bg-foreground transition-colors duration-300"
                >
                  <FaExternalLinkAlt size={13} /> Live Demo
                </Link>
              ) : (
                <div className="flex-1 inline-flex items-center justify-center py-3.5 bg-gray-100 text-gray-400 font-heading font-bold text-sm rounded-xl cursor-not-allowed">
                  No Live Demo
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
