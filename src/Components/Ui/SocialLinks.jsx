import { FaLinkedinIn, FaGithub, FaItchIo, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const colorMap = {
  "dark-signature-text": "text-dark-signature-text",
  "text-light-white": "text-text-light-white",
};

const links = [
  { href: "https://www.linkedin.com/in/AsifNawazMughal", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://github.com/AsifNawazMughal", icon: FaGithub, label: "GitHub" },
  { href: "https://asifnawaz.itch.io/", icon: FaItchIo, label: "itch.io" },
  { href: "https://www.youtube.com/@iamteacher33", icon: FaYoutube, label: "YouTube" },
];

const SocialLinks = ({ color }) => {
  const textColor = colorMap[color] ?? "text-text-light-white";
  return (
    <div className={`flex space-x-4 ${textColor} text-xl mt-auto`}>
      {links.map(({ href, icon: Icon, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="hover:text-accent-orange transition-colors"
        >
          <Icon />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
