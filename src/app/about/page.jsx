import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import {
  FaReact, FaNodeJs, FaPython, FaGithub, FaUnity,
  FaGamepad, FaChalkboardTeacher, FaYoutube, FaLinkedinIn,
} from "react-icons/fa";
import {
  SiNextdotjs, SiMongodb, SiTypescript, SiJavascript,
  SiTailwindcss, SiFastapi, SiDotnet, SiCplusplus,
} from "react-icons/si";
import { GiBookmarklet } from "react-icons/gi";
import LottiePlayer from "@/Components/Ui/LottiePlayer";
import SocialLinks from "@/Components/Ui/SocialLinks";
import {
  FadeUp, FadeLeft, FadeRight, ScaleIn,
  StaggerContainer, StaggerItem,
} from "@/Components/Ui/ScrollReveal";

const DEV_ANIMATION_URL =
  "https://assets7.lottiefiles.com/packages/lf20_eOLhtkf7AY.json";

const skills = [
  { label: "React.js", Icon: FaReact, color: "text-blue-500", bg: "bg-blue-50 border-blue-200" },
  { label: "Next.js", Icon: SiNextdotjs, color: "text-gray-900", bg: "bg-gray-50 border-gray-200" },
  { label: "Node.js", Icon: FaNodeJs, color: "text-green-600", bg: "bg-green-50 border-green-200" },
  { label: "MongoDB", Icon: SiMongodb, color: "text-green-500", bg: "bg-green-50 border-green-200" },
  { label: "FastAPI", Icon: SiFastapi, color: "text-teal-500", bg: "bg-teal-50 border-teal-200" },
  { label: "Python", Icon: FaPython, color: "text-blue-600", bg: "bg-blue-50 border-blue-200" },
  { label: "TypeScript", Icon: SiTypescript, color: "text-blue-600", bg: "bg-blue-50 border-blue-200" },
  { label: "JavaScript", Icon: SiJavascript, color: "text-yellow-500", bg: "bg-yellow-50 border-yellow-200" },
  { label: "Tailwind CSS", Icon: SiTailwindcss, color: "text-cyan-500", bg: "bg-cyan-50 border-cyan-200" },
  { label: "Unity (2D/3D)", Icon: FaUnity, color: "text-gray-900", bg: "bg-gray-50 border-gray-200" },
  { label: "C#", Icon: SiDotnet, color: "text-purple-600", bg: "bg-purple-50 border-purple-200" },
  { label: "C / C++", Icon: SiCplusplus, color: "text-blue-700", bg: "bg-blue-50 border-blue-200" },
];

const experience = [
  {
    role: "Game Developer",
    org: "Hoopla Game, Narowal",
    period: "Dec 2024 – May 2025",
    Icon: FaGamepad,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    bullets: [
      "Developed gameplay mechanics for 2D & 3D Unity games",
      "Collaborated with designers & artists on game levels and UI",
      "Conducted code reviews and performance optimisation",
      "Used debugging tools to identify and fix issues",
    ],
  },
  {
    role: "CS Teacher",
    org: "Royal College of Sciences, Narowal",
    period: "Present",
    Icon: FaChalkboardTeacher,
    iconBg: "bg-orange-100",
    iconColor: "text-accent-orange",
    bullets: [
      "Teaching Computer Science at college level",
      "Covering programming, hardware, and digital systems",
      "Helping students build strong fundamentals in CS",
    ],
  },
  {
    role: "CS Teacher",
    org: "The House of Knowledge, Nonar",
    period: "Oct 2024",
    Icon: FaChalkboardTeacher,
    iconBg: "bg-orange-100",
    iconColor: "text-accent-orange",
    bullets: [
      "Taught CS curriculum at school and college level",
      "Enhanced students' understanding of programming concepts",
    ],
  },
  {
    role: "Intern – Game Development",
    org: "Unity Learning (Remote)",
    period: "Aug 2023 – Dec 2024",
    Icon: FaUnity,
    iconBg: "bg-gray-100",
    iconColor: "text-gray-700",
    bullets: [
      "Learned Unity 2D/3D development and animation",
      "Designed game interfaces and implemented game logic",
      "Practiced debugging and project organisation",
    ],
  },
  {
    role: "Math & Physics Teacher",
    org: "Jinnah Islamia Public School, Narowal",
    period: "Mar 2023 – Aug 2024",
    Icon: GiBookmarklet,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    bullets: [
      "Delivered mathematics and physics to secondary-level students",
    ],
  },
];

const education = [
  { degree: "BS Computer Science", inst: "Virtual University of Pakistan – Narowal", period: "Sep 2022 – ongoing" },
  { degree: "FSc Pre-Engineering", inst: "University of Narowal (Post Degree College)", period: "Sep 2020 – Jul 2022" },
  { degree: "Matriculation – Bio Science", inst: "The House of Knowledge, Domala", period: "Jun 2018 – Apr 2020" },
];

const certs = [
  { name: "Unity Certified: Game Developer", source: "LinkedIn", href: "https://www.linkedin.com/in/AsifNawazMughal" },
  { name: "Unity Junior Programmer", source: "Credly", href: "https://www.credly.com" },
  { name: "Unity Essentials", source: "Credly", href: "https://www.credly.com" },
];

export default function About() {
  return (
    <main className="bg-white">

      {/* ── Hero Intro ───────────────────────────────────────── */}
      <section className="bg-primary-background pt-32 pb-20">
        <div className="mx-auto px-4 lg:px-8 md:w-[75%] flex flex-col lg:flex-row items-center gap-14">

          <FadeLeft className="lg:w-1/2 space-y-7">
            <div className="flex items-center gap-4">
              <div className="w-10 h-0.5 bg-foreground" />
              <p className="font-heading font-bold text-base">About Me</p>
            </div>

            <h1 className="font-heading font-extrabold leading-[0.92] text-[clamp(3rem,5.5vw,5.5rem)] text-foreground">
              <span className="relative">
                <span className="absolute -z-10 -left-[0.01em] top-[0.3em] w-[0.55em] h-[0.55em] bg-yellow-highlight rounded-full" />
                Hi,
              </span>{" "}
              I&apos;m<br />Asif Nawaz
            </h1>

            <p className="text-light-gray-text text-base sm:text-lg leading-relaxed max-w-lg">
              A <strong className="text-foreground">full-stack web developer</strong> and <strong className="text-foreground">Unity-certified game developer</strong> from Narowal, Pakistan. I hold a BS in Computer Science from Virtual University of Pakistan and currently work as a <strong className="text-foreground">CS teacher at Royal College of Sciences, Narowal</strong>.
            </p>
            <p className="text-light-gray-text text-base leading-relaxed max-w-lg">
              I&apos;ve built everything from educational games and AI-powered web apps to CRUD tools and REST API integrations. I also run a <strong className="text-foreground">YouTube channel (@iamteacher33)</strong> where I share educational content for students.
            </p>

            <div className="flex flex-wrap gap-2">
              {["MERN Stack", "Unity 2D/3D", "C#", "CS Lecturer", "BS Computer Science"].map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-foreground text-white font-heading font-bold text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-white font-heading font-bold rounded-xl hover:bg-accent-orange transition-colors duration-300"
              >
                Hire Me <MdOutlineArrowOutward size={18} className="group-hover:animate-arrow-cycle" />
              </Link>
              <Link
                href="/project"
                className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground text-foreground font-heading font-bold rounded-xl hover:bg-foreground hover:text-white transition-all duration-300"
              >
                My Projects <MdOutlineArrowOutward size={18} className="group-hover:animate-arrow-cycle" />
              </Link>
            </div>

            <SocialLinks color="dark-signature-text" />
          </FadeLeft>

          <FadeRight className="lg:w-1/2 flex justify-center">
            <LottiePlayer src={DEV_ANIMATION_URL} className="w-full max-w-[440px]" />
          </FadeRight>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="py-14 bg-accent-orange text-white overflow-hidden">
        <div className="mx-auto px-4 lg:px-8 md:w-[75%]">
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "8+", label: "Projects Shipped" },
              { value: "2", label: "Games on itch.io" },
              { value: "Unity", label: "Certified Dev" },
              { value: "BS CS", label: "In Progress" },
            ].map(({ value, label }) => (
              <StaggerItem key={label}>
                <p className="font-heading font-extrabold text-4xl sm:text-5xl leading-none mb-1">{value}</p>
                <p className="text-white/80 text-xs font-heading font-bold uppercase tracking-widest">{label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Skills Grid ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto px-4 lg:px-8 md:w-[75%]">
          <FadeUp>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-0.5 bg-foreground" />
              <p className="font-heading font-bold text-base">Tech Stack</p>
            </div>
            <h2 className="font-heading font-extrabold text-[clamp(2rem,3.5vw,3.5rem)] leading-tight mb-12">
              Skills &amp; Tools
            </h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map(({ label, Icon, color, bg }) => (
              <StaggerItem key={label}>
                <div className={`flex items-center gap-3 px-5 py-4 border-2 rounded-xl transition-all duration-300 cursor-default hover:shadow-md hover:-translate-y-0.5 ${bg}`}>
                  <Icon size={22} className={color} />
                  <span className="font-heading font-bold text-sm text-foreground">{label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Experience Timeline ───────────────────────────────── */}
      <section className="py-24 bg-primary-background">
        <div className="mx-auto px-4 lg:px-8 md:w-[75%]">
          <FadeUp>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-0.5 bg-foreground" />
              <p className="font-heading font-bold text-base">Experience</p>
            </div>
            <h2 className="font-heading font-extrabold text-[clamp(2rem,3.5vw,3.5rem)] leading-tight mb-12">
              My Journey
            </h2>
          </FadeUp>

          <div className="space-y-5">
            {experience.map((exp, i) => (
              <FadeUp key={exp.role + exp.org} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-7 flex gap-5 items-start shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${exp.iconBg}`}>
                    <exp.Icon size={22} className={exp.iconColor} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between gap-2 mb-1">
                      <h3 className="font-heading font-extrabold text-base">{exp.role}</h3>
                      <span className="text-xs font-heading font-bold text-accent-orange">{exp.period}</span>
                    </div>
                    <p className="text-xs text-light-gray-text mb-3">{exp.org}</p>
                    <ul className="space-y-1">
                      {exp.bullets.map((b) => (
                        <li key={b} className="text-sm text-light-gray-text flex gap-2">
                          <span className="text-accent-orange flex-shrink-0">›</span>{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education + Certs ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="mx-auto px-4 lg:px-8 md:w-[75%] grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Education */}
          <FadeLeft>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-0.5 bg-foreground" />
              <p className="font-heading font-bold text-base">Education</p>
            </div>
            <div className="space-y-4">
              {education.map(({ degree, inst, period }) => (
                <div key={degree} className="bg-primary-background rounded-xl p-5">
                  <p className="font-heading font-extrabold text-sm mb-1">{degree}</p>
                  <p className="text-xs text-light-gray-text">{inst}</p>
                  <p className="text-xs text-accent-orange font-heading font-bold mt-1">{period}</p>
                </div>
              ))}
            </div>
          </FadeLeft>

          {/* Certificates + YouTube */}
          <FadeRight>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-0.5 bg-foreground" />
              <p className="font-heading font-bold text-base">Certificates</p>
            </div>
            <div className="space-y-4">
              {certs.map(({ name, source, href }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-primary-background rounded-xl p-5 hover:bg-accent-orange hover:text-white transition-all duration-300"
                >
                  <FaUnity size={20} className="text-gray-600 group-hover:text-white flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-heading font-extrabold text-sm group-hover:text-white">{name}</p>
                    <p className="text-xs text-light-gray-text group-hover:text-white/70">{source}</p>
                  </div>
                  <MdOutlineArrowOutward size={14} className="text-gray-400 group-hover:text-white group-hover:animate-arrow-cycle" />
                </Link>
              ))}

              {/* YouTube */}
              <Link
                href="https://www.youtube.com/@iamteacher33"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-red-50 border border-red-100 rounded-xl p-5 hover:bg-red-500 transition-all duration-300"
              >
                <FaYoutube size={22} className="text-red-500 group-hover:text-white" />
                <div className="flex-1">
                  <p className="font-heading font-extrabold text-sm group-hover:text-white">YouTube Channel</p>
                  <p className="text-xs text-light-gray-text group-hover:text-white/70">@iamteacher33 — Educational content</p>
                </div>
                <MdOutlineArrowOutward size={14} className="text-red-400 group-hover:text-white group-hover:animate-arrow-cycle" />
              </Link>
            </div>
          </FadeRight>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-primary-background">
        <div className="mx-auto px-4 max-w-2xl text-center">
          <FadeUp>
            <h2 className="font-heading font-extrabold text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-4">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-light-gray-text mb-8">Available for freelance and full-time roles.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-foreground text-white font-heading font-bold rounded-xl hover:bg-accent-orange transition-colors duration-300">
                Get In Touch <MdOutlineArrowOutward size={20} className="group-hover:animate-arrow-cycle" />
              </Link>
              <Link href="/project" className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-foreground text-foreground font-heading font-bold rounded-xl hover:bg-foreground hover:text-white transition-all duration-300">
                See My Work <MdOutlineArrowOutward size={20} className="group-hover:animate-arrow-cycle" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
