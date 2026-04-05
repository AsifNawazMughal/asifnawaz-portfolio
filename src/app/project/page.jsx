"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaGithub, FaUnity, FaGamepad, FaGlobe } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTypescript, SiJavascript, SiTailwindcss, SiFastapi, SiCsharp, SiAppwrite } from "react-icons/si";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FadeUp, FadeLeft, FadeRight, StaggerContainer, StaggerItem } from "@/Components/Ui/ScrollReveal";
import ProjectModal from "@/Components/Projects/ProjectModal";
import LottiePlayer from "@/Components/Ui/LottiePlayer";

const GAME_ANIMATION_URL =
  "https://lottie.host/ce7c97f6-e0ea-4ea6-b8c6-50d28928f288/jjsUvZSbD1.json";

const webProjects = [
  {
    id: "cardiopredict",
    Icon: FaPython,
    iconColor: "text-blue-600",
    title: "CardioPredict AI",
    category: "AI · Full Stack",
    shortDesc: "AI-powered heart disease risk prediction system",
    fullDesc:
      "A full-stack application that uses an Artificial Neural Network trained on the Cleveland Heart Disease dataset to predict a user's heart disease risk. The Next.js 14 frontend communicates with a FastAPI (Python) backend via REST API, delivering real-time risk assessments based on clinical parameters like age, cholesterol, and blood pressure.",
    tech: ["Next.js 14", "FastAPI", "Python", "ANN / ML", "REST API", "Vercel"],
    github: "https://github.com/AsifNawazMughal/cardiopredict-ai",
    live: null,
    featured: true,
  },
  {
    id: "github-viewer",
    Icon: FaGithub,
    iconColor: "text-gray-900",
    title: "GitHub Profile Viewer",
    category: "React · API Integration",
    shortDesc: "Search any GitHub user — repos, followers, stats",
    fullDesc:
      "Search any GitHub username and instantly view their public repositories, follower count, following, bio, and profile stats in a clean and responsive card layout. Uses the GitHub REST API for live data fetching.",
    tech: ["React", "GitHub API", "JavaScript", "CSS"],
    github: "https://github.com/AsifNawazMughal",
    live: "https://githubprofileviewer-vert.vercel.app",
  },
  {
    id: "contact-manager",
    Icon: FaReact,
    iconColor: "text-blue-500",
    title: "Contact Manager App",
    category: "React · TypeScript",
    shortDesc: "Full-featured CRUD contact management app",
    fullDesc:
      "A complete contact management application featuring Create, Read, Update, and Delete operations. Built with React and TypeScript using Vite. Includes search functionality and a clean, responsive UI for managing personal and professional contacts.",
    tech: ["React", "TypeScript", "Vite", "JavaScript"],
    github: "https://github.com/AsifNawazMughal/contactmanagerapp",
    live: "https://contactmanagerapp-two.vercel.app",
  },
  {
    id: "bookstore",
    Icon: FaReact,
    iconColor: "text-blue-500",
    title: "MyBookStore",
    category: "React · TypeScript",
    shortDesc: "Online bookstore with filtering and responsive UI",
    fullDesc:
      "A modern online bookstore built with React and TypeScript. Features product listings with filtering, category browsing, and a polished shopping experience. Deployed on Vercel with Vite for fast builds.",
    tech: ["React", "TypeScript", "Vite", "CSS"],
    github: "https://github.com/AsifNawazMughal/mybookstore",
    live: "https://mybookstore-orcin.vercel.app",
  },
  {
    id: "api-viewer",
    Icon: FaReact,
    iconColor: "text-blue-500",
    title: "Public API Data Viewer",
    category: "React · TypeScript",
    shortDesc: "Fetch and visualise data from public APIs",
    fullDesc:
      "A clean React + TypeScript application that fetches data from various public APIs and displays it in an organised, readable interface. Demonstrates API integration, async data handling, and TypeScript best practices.",
    tech: ["React", "TypeScript", "Vite", "REST API"],
    github: "https://github.com/AsifNawazMughal/publicapidataviewer",
    live: "https://publicapidataviewer.vercel.app",
  },
  {
    id: "crud-app",
    Icon: FaNodeJs,
    iconColor: "text-green-600",
    title: "CRUD Application",
    category: "React · JavaScript",
    shortDesc: "Full Create, Read, Update, Delete operations",
    fullDesc:
      "A full CRUD application demonstrating all four database operations with a clean and responsive UI. Built with React and JavaScript, it showcases state management, component architecture, and live data manipulation.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/AsifNawazMughal",
    live: "https://crudapplication-chi.vercel.app",
  },
  {
    id: "movie-app",
    Icon: SiAppwrite,
    iconColor: "text-pink-500",
    title: "Movie App",
    category: "React · Appwrite",
    shortDesc: "Movie browser with Appwrite backend",
    fullDesc:
      "A movie browsing application integrating Appwrite as the backend. Built with React and Tailwind CSS, it demonstrates full frontend-to-backend flow — fetching, displaying, and managing movie data. This was my first React project that connected to a real backend service.",
    tech: ["React", "Tailwind CSS", "Appwrite", "JavaScript"],
    github: "https://github.com/AsifNawazMughal/Movie-app-React-js",
    live: null,
  },
  {
    id: "todo-app",
    Icon: FaReact,
    iconColor: "text-blue-500",
    title: "Todo App",
    category: "React · JavaScript",
    shortDesc: "Clean Todo app with state management",
    fullDesc:
      "A clean and functional Todo application demonstrating React state management, component-based architecture, and local persistence. Tasks can be added, completed, and deleted with smooth UI interactions.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/AsifNawazMughal/todoappwithreact",
    live: "https://todolist-three-blue.vercel.app",
  },
];

const games = [
  {
    id: "kmt",
    Icon: FaGamepad,
    iconColor: "text-purple-500",
    title: "KMT – Kids Mind Training",
    category: "Unity · Educational Game",
    shortDesc: "2D drag-and-drop puzzle game for children",
    fullDesc:
      "An educational 2D puzzle game built in Unity for children to learn ABCs, numbers (123), and colours through drag-and-drop interactions. Kids match letters, numbers, and colour swatches to their correct placeholders — designed with playful visuals and rewarding feedback to encourage early learning. Published on itch.io.",
    tech: ["Unity", "C#", "2D Game Dev", "Game UI/UX", "Level Design"],
    github: "https://github.com/AsifNawazMughal",
    live: "https://asifnawaz.itch.io/kmt",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    id: "snowman",
    Icon: FaGamepad,
    iconColor: "text-cyan-500",
    title: "Snow Man & Fruits",
    category: "Unity · Endless Arcade",
    shortDesc: "2D endless game — catch fruits and hearts",
    fullDesc:
      "A 2D endless arcade game where the player controls a snowman to catch falling fruits and hearts. Features a score system with increasing difficulty over time, colourful art, smooth animations, and addictive one-tap gameplay. Built with Unity and C# and published on itch.io.",
    tech: ["Unity", "C#", "2D Game Dev", "Game UI/UX", "Score System"],
    github: "https://github.com/AsifNawazMughal",
    live: "https://asifnawaz.itch.io/snow-man-and-fruits",
    gradient: "from-cyan-400 to-blue-500",
  },
];

export default function Project() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="bg-white">
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}

      {/* ── Page Header ──────────────────────────────────────── */}
      <section className="bg-primary-background pt-32 pb-16">
        <div className="mx-auto px-4 lg:px-8 md:w-[75%]">
          <FadeUp>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-0.5 bg-foreground" />
              <p className="font-heading font-bold text-base">Portfolio</p>
            </div>
            <h1 className="font-heading font-extrabold text-[clamp(3rem,5.5vw,5.5rem)] leading-[0.92] mb-6">
              <span className="relative">
                <span className="absolute -z-10 -left-[0.01em] top-[0.3em] w-[0.55em] h-[0.55em] bg-yellow-highlight rounded-full" />
                My
              </span>{" "}
              Work
            </h1>
            <p className="text-light-gray-text text-base sm:text-lg max-w-xl">
              Click any card to see the full description, tech stack, GitHub repo, and live demo link.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Featured: CardioPredict AI ───────────────────────── */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4 lg:px-8 md:w-[75%]">
          <FadeUp>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-0.5 bg-foreground" />
              <p className="font-heading font-bold text-base">Featured Project</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <button
              onClick={() => setSelected(webProjects[0])}
              className="group w-full text-left bg-foreground text-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-3/5 p-10 lg:p-14 space-y-5">
                  <div className="flex items-center gap-3">
                    <FaPython size={32} className="text-blue-400" />
                    <span className="text-xs font-heading font-bold bg-accent-orange/20 text-accent-orange px-3 py-1 rounded-full uppercase tracking-widest">
                      AI · Full Stack
                    </span>
                  </div>
                  <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-tight">
                    CardioPredict AI
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    AI-powered heart disease risk prediction using Next.js 14 + FastAPI + Neural Network. Click to see full details.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js 14", "FastAPI", "Python", "ANN / ML"].map((t) => (
                      <span key={t} className="text-xs px-3 py-1.5 bg-white/10 text-white font-heading font-bold rounded-full">{t}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-heading font-bold text-accent-orange group-hover:gap-3 transition-all">
                    Click to explore <MdOutlineArrowOutward size={16} />
                  </span>
                </div>
                <div className="lg:w-2/5 bg-gradient-to-br from-accent-orange/20 to-yellow-highlight/10 flex items-center justify-center min-h-[180px] p-10">
                  <div className="text-center">
                    <FaPython size={72} className="text-blue-400 mx-auto mb-3 opacity-80" />
                    <p className="text-white/50 font-heading font-bold text-sm">Neural Network</p>
                    <p className="text-white font-heading font-extrabold text-lg">Heart Disease AI</p>
                  </div>
                </div>
              </div>
            </button>
          </FadeUp>
        </div>
      </section>

      {/* ── Web Projects Grid ────────────────────────────────── */}
      <section className="py-16 bg-primary-background">
        <div className="mx-auto px-4 lg:px-8 md:w-[75%]">
          <FadeUp>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-0.5 bg-foreground" />
                  <p className="font-heading font-bold text-base">Web Apps</p>
                </div>
                <h2 className="font-heading font-extrabold text-[clamp(2rem,3.5vw,3.5rem)] leading-tight">
                  React &amp; Next.js Projects
                </h2>
              </div>
              <a
                href="https://github.com/AsifNawazMughal"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-heading font-bold border-b-2 border-foreground hover:border-accent-orange hover:text-accent-orange transition-colors duration-300"
              >
                <FaGithub size={15} /> All on GitHub
                <MdOutlineArrowOutward size={13} className="group-hover:animate-arrow-cycle" />
              </a>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {webProjects.slice(1).map((project) => (
              <StaggerItem key={project.id}>
                <button
                  onClick={() => setSelected(project)}
                  className="group w-full text-left bg-white border-2 border-transparent hover:border-accent-orange rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary-background rounded-xl flex items-center justify-center">
                      <project.Icon size={22} className={project.iconColor} />
                    </div>
                    <div className="flex gap-1.5">
                      {project.live && (
                        <div className="w-7 h-7 rounded-lg bg-primary-background flex items-center justify-center">
                          <FaGlobe size={11} className="text-accent-orange" />
                        </div>
                      )}
                      <div className="w-7 h-7 rounded-lg bg-primary-background flex items-center justify-center">
                        <FaGithub size={11} className="text-gray-500" />
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px] font-heading font-bold text-accent-orange uppercase tracking-widest mb-1">{project.category}</p>
                  <h3 className="font-heading font-extrabold text-base mb-2 group-hover:text-accent-orange transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-light-gray-text text-xs leading-relaxed flex-1">{project.shortDesc}</p>
                  <p className="text-xs font-heading font-bold text-accent-orange mt-4 group-hover:underline">
                    Click for details →
                  </p>
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Games ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-4 lg:px-8 md:w-[75%]">
          <div className="flex flex-col lg:flex-row gap-14 items-center">
            <div className="lg:w-1/2">
              <FadeLeft>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-0.5 bg-foreground" />
                  <p className="font-heading font-bold text-base">Game Dev</p>
                </div>
                <h2 className="font-heading font-extrabold text-[clamp(2rem,3.5vw,3.5rem)] leading-tight mb-10">
                  Published Games
                </h2>
              </FadeLeft>

              <StaggerContainer className="space-y-5">
                {games.map((game) => (
                  <StaggerItem key={game.id}>
                    <button
                      onClick={() => setSelected(game)}
                      className="group w-full text-left flex overflow-hidden rounded-2xl border-2 border-gray-100 hover:border-accent-orange transition-all duration-300 hover:shadow-xl bg-white"
                    >
                      <div className={`w-24 flex-shrink-0 bg-gradient-to-br ${game.gradient} flex items-center justify-center`}>
                        <FaGamepad size={28} className="text-white opacity-80" />
                      </div>
                      <div className="p-5 flex-1">
                        <p className="text-[10px] font-heading font-bold text-accent-orange uppercase tracking-widest mb-1">{game.category}</p>
                        <h3 className="font-heading font-extrabold text-base mb-1 group-hover:text-accent-orange transition-colors">
                          {game.title}
                        </h3>
                        <p className="text-light-gray-text text-xs leading-relaxed">{game.shortDesc}</p>
                        <p className="text-xs font-heading font-bold text-accent-orange mt-2 group-hover:underline">Click for details →</p>
                      </div>
                    </button>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <FadeRight className="lg:w-1/2 flex justify-center">
              <LottiePlayer src={GAME_ANIMATION_URL} className="w-full max-w-[360px]" />
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-accent-orange text-white text-center">
        <div className="mx-auto px-4 max-w-2xl">
          <FadeUp>
            <h2 className="font-heading font-extrabold text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-white/80 mb-8">Let&apos;s collaborate and build something great.</p>
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-heading font-bold rounded-xl hover:bg-foreground hover:text-white transition-colors duration-300"
            >
              Start a Project
              <MdOutlineArrowOutward size={20} className="group-hover:animate-arrow-cycle" />
            </a>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
