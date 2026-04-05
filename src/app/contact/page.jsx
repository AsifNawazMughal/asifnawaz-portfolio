"use client";

import { useState } from "react";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaItchIo, FaYoutube, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import LottiePlayer from "@/Components/Ui/LottiePlayer";
import { FadeUp, FadeLeft, FadeRight } from "@/Components/Ui/ScrollReveal";

const CONTACT_ANIMATION_URL =
  "https://assets7.lottiefiles.com/packages/lf20_bNKaWpBPt6.json";

const contactLinks = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "asifnaw33@gmail.com",
    href: "mailto:asifnaw33@gmail.com",
    color: "hover:bg-accent-orange",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "linkedin.com/in/AsifNawazMughal",
    href: "https://www.linkedin.com/in/AsifNawazMughal",
    color: "hover:bg-blue-600",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/AsifNawazMughal",
    href: "https://github.com/AsifNawazMughal",
    color: "hover:bg-gray-900",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    value: "@iamteacher33",
    href: "https://www.youtube.com/@iamteacher33",
    color: "hover:bg-red-500",
  },
  {
    icon: FaItchIo,
    label: "itch.io",
    value: "asifnawaz.itch.io",
    href: "https://asifnawaz.itch.io/",
    color: "hover:bg-red-600",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="bg-white">

      {/* ── Page Header ──────────────────────────────────────── */}
      <section className="bg-primary-background pt-32 pb-16">
        <div className="mx-auto px-4 lg:px-8 md:w-[75%]">
          <FadeUp>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-0.5 bg-foreground" />
              <p className="font-heading font-bold text-base">Contact</p>
            </div>
            <h1 className="font-heading font-extrabold text-[clamp(3rem,5.5vw,5.5rem)] leading-[0.92]">
              <span className="relative">
                <span className="absolute -z-10 -left-[0.01em] top-[0.3em] w-[0.55em] h-[0.55em] bg-yellow-highlight rounded-full" />
                Let&apos;s
              </span>{" "}
              Talk
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-4 lg:px-8 md:w-[75%] flex flex-col lg:flex-row gap-14">

          {/* Left */}
          <FadeLeft className="lg:w-[42%] space-y-8">
            <div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3">
                Available for Work
              </h2>
              <p className="text-light-gray-text leading-relaxed text-sm">
                Open to freelance projects, full-time opportunities, and collaborations. Feel free to reach out via any channel below.
              </p>
            </div>

            <LottiePlayer src={CONTACT_ANIMATION_URL} className="w-full max-w-[280px]" />

            <div className="space-y-3">
              {contactLinks.map(({ icon: Icon, label, value, href, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                >
                  <Link
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 p-4 border-2 border-gray-100 rounded-xl ${color} hover:border-transparent hover:text-white transition-all duration-300`}
                  >
                    <div className="w-10 h-10 bg-primary-background rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <Icon size={17} className="group-hover:text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-heading font-bold text-sm group-hover:text-white">{label}</p>
                      <p className="text-xs text-light-gray-text group-hover:text-white/70 truncate">{value}</p>
                    </div>
                    <MdOutlineArrowOutward size={15} className="text-gray-300 group-hover:text-white shrink-0 group-hover:animate-arrow-cycle" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </FadeLeft>

          {/* Right — Form */}
          <FadeRight className="lg:w-[58%]">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16 gap-5 bg-primary-background rounded-3xl"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  className="w-20 h-20 bg-accent-orange rounded-full flex items-center justify-center"
                >
                  <FaEnvelope size={32} className="text-white" />
                </motion.div>
                <h3 className="font-heading font-extrabold text-3xl">Message Sent!</h3>
                <p className="text-light-gray-text max-w-sm">
                  Thanks for reaching out, {form.name.split(" ")[0] || "friend"}. I&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="px-6 py-3 bg-foreground text-white font-heading font-bold rounded-xl hover:bg-accent-orange transition-colors duration-300"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { id: "name", label: "Your Name", placeholder: "Asif Nawaz", type: "text", required: true },
                    { id: "email", label: "Email Address", placeholder: "you@example.com", type: "email", required: true },
                  ].map(({ id, label, placeholder, type, required }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block text-sm font-heading font-bold mb-2">
                        {label} {required && <span className="text-accent-orange">*</span>}
                      </label>
                      <input
                        id={id}
                        name={id}
                        type={type}
                        required={required}
                        value={form[id]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl text-sm font-sans outline-none focus:border-accent-orange transition-colors duration-300 bg-primary-background"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-heading font-bold mb-2">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Freelance / Say Hi"
                    className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl text-sm font-sans outline-none focus:border-accent-orange transition-colors duration-300 bg-primary-background"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-heading font-bold mb-2">
                    Message <span className="text-accent-orange">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl text-sm font-sans outline-none focus:border-accent-orange transition-colors duration-300 resize-none bg-primary-background"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-white font-heading font-bold rounded-xl hover:bg-accent-orange transition-colors duration-300"
                >
                  Send Message
                  <MdOutlineArrowOutward size={20} className="group-hover:animate-arrow-cycle" />
                </button>
              </form>
            )}
          </FadeRight>
        </div>
      </section>

    </main>
  );
}
