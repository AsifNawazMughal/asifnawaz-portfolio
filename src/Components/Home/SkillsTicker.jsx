const techStack = [
  "Unity",
  "Unity 2D",
  "Unity 3D",
  "Unity UI/UX",
  "Animation",
  "Physics 2D",
  "Physics 3D",
  "Input System",
  "Mobile Optimization",
  "C#",
  "React.js",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Express.js",
  "FastAPI",
  "Python",
  "Game Dev",
  "Git & GitHub",
];

export default function SkillsTicker() {
  const items = [...techStack, ...techStack];

  return (
    <div className="bg-foreground py-5 overflow-hidden border-y border-white/10">
      <div className="flex animate-ticker whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 mx-8 font-heading font-extrabold text-sm text-white uppercase tracking-widest"
          >
            {item}
            <span className="text-accent-orange text-base">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
