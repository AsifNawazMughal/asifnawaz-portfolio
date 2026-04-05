"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaCode, FaGamepad, FaChalkboardTeacher, FaGithub,
  FaExternalLinkAlt, FaYoutube, FaUnity,
} from "react-icons/fa";
import {
  SiNextdotjs, SiMongodb, SiTypescript, SiTailwindcss,
  SiJavascript, SiDotnet,
} from "react-icons/si";
import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

const services = [
  {
    id: "web",
    Icon: FaCode,
    iconColor: "text-blue-500",
    bg: "bg-blue-50",
    activeBg: "bg-blue-500",
    title: "Web Development",
    shortDesc: "React, Next.js & MERN Stack",
    detail:
      "I build fast, scalable, and production-ready web applications using the MERN stack (MongoDB, Express, React, Node.js) with Next.js as the primary framework. From REST APIs to AI-integrated systems — clean code and great UX are always the goal.",
    skills: [
      { label: "React.js", Icon: FaReact, color: "text-blue-500" },
      { label: "Next.js", Icon: SiNextdotjs, color: "text-gray-900" },
      { label: "Node.js", Icon: FaNodeJs, color: "text-green-600" },
      { label: "MongoDB", Icon: SiMongodb, color: "text-green-500" },
      { label: "TypeScript", Icon: SiTypescript, color: "text-blue-600" },
      { label: "JavaScript", Icon: SiJavascript, color: "text-yellow-500" },
      { label: "Tailwind CSS", Icon: SiTailwindcss, color: "text-cyan-500" },
      { label: "Python", Icon: FaPython, color: "text-blue-500" },
    ],
    projects: [
      { title: "CardioPredict AI", desc: "Next.js + FastAPI + Neural Network heart disease predictor", github: "https://github.com/AsifNawazMughal/cardiopredict-ai", live: null },
      { title: "GitHub Profile Viewer", desc: "Search any GitHub user — repos, followers, stats", github: "https://github.com/AsifNawazMughal", live: "https://githubprofileviewer-vert.vercel.app" },
      { title: "Contact Manager", desc: "Full-featured CRUD contact management app", github: "https://github.com/AsifNawazMughal/contactmanagerapp", live: "https://contactmanagerapp-two.vercel.app" },
      { title: "MyBookStore", desc: "Online bookstore with filtering & responsive UI", github: "https://github.com/AsifNawazMughal/mybookstore", live: "https://mybookstore-orcin.vercel.app" },
    ],
  },
  {
    id: "game",
    Icon: FaGamepad,
    iconColor: "text-purple-500",
    bg: "bg-purple-50",
    activeBg: "bg-purple-500",
    title: "Game Development",
    shortDesc: "Unity 2D/3D · C# · Published Games",
    detail:
      "I have professional experience as a Game Developer at Hoopla Game (Dec 2024 – May 2025), building gameplay mechanics for 2D and 3D Unity games. Before that, I interned at Unity Learning and self-published two games on itch.io. Game dev is where I sharpened my OOP, debugging, and creative design skills.",
    skills: [
      { label: "Unity 2D & 3D", Icon: FaUnity, color: "text-gray-900" },
      { label: "C#", Icon: SiDotnet, color: "text-purple-600" },
      { label: "Game UI/UX", Icon: FaGamepad, color: "text-purple-500" },
      { label: "Level Design", Icon: FaGamepad, color: "text-pink-500" },
    ],
    experience: [
      { role: "Game Developer", org: "Hoopla Game, Narowal", period: "Dec 2024 – May 2025", bullets: ["Built gameplay mechanics for 2D/3D games", "Collaborated with designers & artists", "Conducted code reviews & debugging"] },
      { role: "Intern – Game Development", org: "Unity Learning (Remote)", period: "Aug 2023 – Dec 2024", bullets: ["Learned Unity animation & 2D/3D development", "Built mini-projects applying best practices"] },
    ],
    projects: [
      { title: "KMT – Kids Mind Training", desc: "2D puzzle game: drag-and-drop ABCs, 123s & colours for kids", github: "https://github.com/AsifNawazMughal", live: "https://asifnawaz.itch.io/kmt" },
      { title: "Snow Man & Fruits", desc: "2D endless arcade: catch falling fruits & hearts, score system", github: "https://github.com/AsifNawazMughal", live: "https://asifnawaz.itch.io/snow-man-and-fruits" },
    ],
  },
  {
    id: "teaching",
    Icon: FaChalkboardTeacher,
    iconColor: "text-orange-500",
    bg: "bg-orange-50",
    activeBg: "bg-accent-orange",
    title: "CS Education",
    shortDesc: "Teaching at college level · YouTube",
    detail:
      "I'm a Computer Science teacher passionate about making programming accessible. Currently teaching at Royal College of Sciences, Narowal. I also run a YouTube channel (@iamteacher33) where I share educational content for students.",
    positions: [
      { role: "CS Teacher", org: "Royal College of Sciences, Narowal", period: "Present", icon: "🏫" },
      { role: "CS Teacher", org: "The House of Knowledge, Nonar", period: "Oct 2024", icon: "📚" },
      { role: "Math & Physics Teacher", org: "Jinnah Islamia Public School, Narowal", period: "Mar 2023 – Aug 2024", icon: "📐" },
    ],
    subjects: ["Computer Science", "Programming", "Mathematics", "Physics", "Digital Systems"],
    youtube: "https://www.youtube.com/@iamteacher33",
  },
];

export default function ServicesSection() {
  const [activeId, setActiveId] = useState("web");
  const active = services.find((s) => s.id === activeId);

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto px-4 lg:px-8 md:w-[75%]">
        {/* Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-0.5 bg-foreground" />
            <p className="font-heading font-bold text-base">What I Do</p>
          </div>
          <h2 className="font-heading font-extrabold text-[clamp(2.2rem,4vw,4rem)] leading-tight">
            Click a service to explore
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left — service tabs */}
          <div className="lg:w-[38%] flex flex-row lg:flex-col gap-3">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveId(s.id)}
                className={`group flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all duration-300 w-full ${
                  activeId === s.id
                    ? "border-accent-orange bg-primary-background shadow-lg scale-[1.02]"
                    : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-md"
                }`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${activeId === s.id ? "bg-accent-orange" : s.bg}`}>
                  <s.Icon size={20} className={activeId === s.id ? "text-white" : s.iconColor} />
                </div>
                <div className="hidden sm:block">
                  <p className="font-heading font-extrabold text-sm text-foreground">{s.title}</p>
                  <p className="text-xs text-light-gray-text mt-0.5 truncate max-w-40">{s.shortDesc}</p>
                </div>
                {activeId === s.id && (
                  <MdOutlineArrowOutward size={16} className="ml-auto text-accent-orange shrink-0 hidden sm:block" />
                )}
              </button>
            ))}
          </div>

          {/* Right — detail panel */}
          <div className="lg:w-[62%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="bg-primary-background rounded-3xl p-8 h-full"
              >
                {/* Service header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <active.Icon size={22} className={active.iconColor} />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-foreground">{active.title}</h3>
                    <p className="text-xs text-light-gray-text">{active.shortDesc}</p>
                  </div>
                </div>

                <p className="text-light-gray-text text-sm leading-relaxed mb-6">{active.detail}</p>

                {/* Skills */}
                {active.skills && (
                  <div className="mb-6">
                    <p className="font-heading font-bold text-xs uppercase tracking-widest text-light-gray-text mb-3">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {active.skills.map(({ label, Icon: SkillIcon, color }) => (
                        <span key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full font-heading font-bold text-xs text-foreground shadow-sm">
                          <SkillIcon size={13} className={color} />
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Experience (game dev) */}
                {active.experience && (
                  <div className="mb-6 space-y-4">
                    <p className="font-heading font-bold text-xs uppercase tracking-widest text-light-gray-text">Experience</p>
                    {active.experience.map((exp) => (
                      <div key={exp.role} className="bg-white rounded-xl p-4">
                        <div className="flex justify-between items-start flex-wrap gap-1 mb-2">
                          <p className="font-heading font-extrabold text-sm">{exp.role}</p>
                          <span className="text-xs text-accent-orange font-heading font-bold">{exp.period}</span>
                        </div>
                        <p className="text-xs text-light-gray-text mb-2">{exp.org}</p>
                        <ul className="space-y-1">
                          {exp.bullets.map((b) => (
                            <li key={b} className="text-xs text-light-gray-text flex gap-2">
                              <span className="text-accent-orange mt-0.5 shrink-0">›</span>{b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Teaching positions */}
                {active.positions && (
                  <div className="mb-5 space-y-3">
                    <p className="font-heading font-bold text-xs uppercase tracking-widest text-light-gray-text">Positions</p>
                    {active.positions.map((pos) => (
                      <div key={pos.role + pos.org} className="bg-white rounded-xl p-4 flex gap-3 items-start">
                        <span className="text-xl shrink-0">{pos.icon}</span>
                        <div>
                          <p className="font-heading font-extrabold text-sm">{pos.role}</p>
                          <p className="text-xs text-light-gray-text">{pos.org}</p>
                        </div>
                        <span className="ml-auto text-xs text-accent-orange font-heading font-bold shrink-0">{pos.period}</span>
                      </div>
                    ))}
                    {active.youtube && (
                      <Link
                        href={active.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 bg-red-50 border border-red-100 rounded-xl p-4 hover:bg-red-500 transition-colors duration-300"
                      >
                        <FaYoutube size={22} className="text-red-500 group-hover:text-white" />
                        <div>
                          <p className="font-heading font-extrabold text-sm group-hover:text-white">YouTube Channel</p>
                          <p className="text-xs text-light-gray-text group-hover:text-white/70">@iamteacher33</p>
                        </div>
                        <MdOutlineArrowOutward className="ml-auto text-red-400 group-hover:text-white" />
                      </Link>
                    )}
                  </div>
                )}

                {/* Projects */}
                {active.projects && (
                  <div>
                    <p className="font-heading font-bold text-xs uppercase tracking-widest text-light-gray-text mb-3">
                      {active.id === "game" ? "Published Games" : "Featured Projects"}
                    </p>
                    <div className="space-y-2">
                      {active.projects.map((p) => (
                        <div key={p.title} className="bg-white rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                          <div className="flex-1 min-w-0">
                            <p className="font-heading font-extrabold text-sm truncate">{p.title}</p>
                            <p className="text-xs text-light-gray-text mt-0.5 line-clamp-1">{p.desc}</p>
                          </div>
                          <div className="flex gap-2 shrink-0">
                            <Link
                              href={p.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-foreground hover:text-white flex items-center justify-center text-gray-600 transition-colors duration-300"
                              title="GitHub"
                            >
                              <FaGithub size={14} />
                            </Link>
                            {p.live && (
                              <Link
                                href={p.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-accent-orange hover:text-white flex items-center justify-center text-gray-600 transition-colors duration-300"
                                title="Live / Play"
                              >
                                <FaExternalLinkAlt size={12} />
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Subjects taught */}
                {active.subjects && (
                  <div className="mt-4">
                    <p className="font-heading font-bold text-xs uppercase tracking-widest text-light-gray-text mb-3">Subjects</p>
                    <div className="flex flex-wrap gap-2">
                      {active.subjects.map((s) => (
                        <span key={s} className="text-xs px-3 py-1.5 bg-white rounded-full font-heading font-bold text-foreground shadow-sm">{s}</span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
