import MyHero from "./Hero/MyHero";
import SkillsTicker from "./Home/SkillsTicker";
import ServicesSection from "./Home/ServicesSection";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaGamepad, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FadeUp, FadeLeft, FadeRight, StaggerContainer, StaggerItem } from "@/Components/Ui/ScrollReveal";

const MainPage = () => {
  return (
    <>
      <MyHero />
      <SkillsTicker />

      {/* ── Interactive Services ───────────────────────────────
          Click Web Dev / Game Dev / Teaching → see info + projects */}
      <ServicesSection />

      {/* ── Stats Banner ──────────────────────────────────────── */}
      <section className="py-14 bg-accent-orange text-white overflow-hidden">
        <div className="mx-auto px-4 lg:px-8 md:w-[75%]">
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "8+", label: "Web Projects" },
              { value: "2", label: "Games Published" },
              { value: "3+", label: "Years Coding" },
              { value: "Unity", label: "Certified Dev" },
            ].map(({ value, label }) => (
              <StaggerItem key={label}>
                <p className="font-heading font-extrabold text-4xl sm:text-5xl leading-none mb-1">{value}</p>
                <p className="text-white/80 text-xs font-heading font-bold uppercase tracking-widest">{label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Featured Games ─────────────────────────────────────── */}
      <section className="py-24 bg-primary-background">
        <div className="mx-auto px-4 lg:px-8 md:w-[75%]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <FadeLeft>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-0.5 bg-foreground" />
                <p className="font-heading font-bold text-base">Indie Games</p>
              </div>
              <h2 className="font-heading font-extrabold text-[clamp(2.2rem,4vw,4rem)] leading-tight">
                Games I&apos;ve Built
              </h2>
            </FadeLeft>
            <FadeRight>
              <Link
                href="/project"
                className="group inline-flex items-center gap-2 text-sm font-heading font-bold border-b-2 border-foreground hover:border-accent-orange hover:text-accent-orange transition-colors duration-300"
              >
                All Projects
                <MdOutlineArrowOutward size={14} className="group-hover:animate-arrow-cycle" />
              </Link>
            </FadeRight>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                Icon: FaGamepad,
                title: "KMT – Kids Mind Training",
                tag: "Unity · Educational",
                desc: "2D drag-and-drop puzzle game where children learn ABCs, 123s, and colours. Published on itch.io.",
                href: "https://asifnawaz.itch.io/kmt",
                gradient: "from-purple-500 to-indigo-600",
                github: "https://github.com/AsifNawazMughal",
              },
              {
                Icon: FaGamepad,
                title: "Snow Man & Fruits",
                tag: "Unity · Endless Arcade",
                desc: "2D endless arcade game — catch falling fruits and hearts with a snowman. Score system + increasing difficulty.",
                href: "https://asifnawaz.itch.io/snow-man-and-fruits",
                gradient: "from-cyan-400 to-blue-500",
                github: "https://github.com/AsifNawazMughal",
              },
            ].map(({ Icon, title, tag, desc, href, gradient, github }) => (
              <StaggerItem key={title}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`bg-gradient-to-br ${gradient} h-36 flex items-center justify-center relative`}>
                    <Icon size={52} className="text-white opacity-80" />
                    <span className="absolute top-3 right-3 text-[10px] font-heading font-bold bg-white/20 text-white px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-extrabold text-lg mb-2 group-hover:text-accent-orange transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="text-light-gray-text text-sm leading-relaxed mb-4">{desc}</p>
                    <div className="flex gap-2">
                      <Link
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 bg-accent-orange text-white font-heading font-bold text-xs rounded-lg hover:bg-foreground transition-colors duration-300"
                      >
                        <FaExternalLinkAlt size={11} /> Play on itch.io
                      </Link>
                      <Link
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-foreground hover:text-white text-gray-600 transition-colors duration-300"
                      >
                        <FaGithub size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA Strip ─────────────────────────────────────────── */}
      <section className="py-20 bg-foreground text-white">
        <div className="mx-auto px-4 lg:px-8 md:w-[75%]">
          <FadeUp className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-heading font-extrabold text-[clamp(1.8rem,3vw,3rem)] leading-tight mb-2">
                Have a project in mind?
              </h2>
              <p className="text-gray-400">Let&apos;s talk and build something great together.</p>
            </div>
            <Link
              href="/contact"
              className="group flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-accent-orange text-white font-heading font-bold rounded-xl hover:bg-white hover:text-black transition-colors duration-300"
            >
              Let&apos;s Talk
              <MdOutlineArrowOutward size={20} className="group-hover:animate-arrow-cycle" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
};

export default MainPage;
