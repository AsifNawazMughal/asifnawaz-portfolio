import Link from "next/link";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaItchIo } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/project" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/asifnawazmughal/", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/AsifNawazMughal", label: "GitHub" },
  { icon: FaItchIo, href: "https://asifnawaz.itch.io/", label: "itch.io" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-text-light-white">
      {/* ── Main Footer ──────────────────────────────────────── */}
      <div className="mx-auto px-4 lg:px-8 md:w-[75%] py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="md:col-span-1 space-y-5">
            <Image src="/logo.png" alt="Asif Nawaz" width={100} height={35} priority className="brightness-0 invert" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              React &amp; Next.js Developer · Ex Game Dev · CS Lecturer. Building things for the web with care and curiosity.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-orange transition-colors duration-300"
                >
                  <Icon size={15} />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-gray-400">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="group flex items-center gap-1.5 text-sm text-gray-300 hover:text-text-light-white transition-colors duration-300"
                  >
                    <MdOutlineArrowOutward size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Availability CTA */}
          <div className="space-y-5">
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-gray-400">Work Together</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Available for freelance projects and full-time roles. Let&apos;s build something great.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-5 py-3 bg-accent-orange text-white font-heading font-bold text-sm rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
            >
              Get in Touch
              <MdOutlineArrowOutward size={16} className="group-hover:animate-arrow-cycle" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ───────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="mx-auto px-4 lg:px-8 md:w-[75%] py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Asif Nawaz. All rights reserved.</p>
          <p>
            Built with{" "}
            <span className="text-accent-orange font-bold">Next.js</span> &amp;{" "}
            <span className="text-accent-orange font-bold">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
