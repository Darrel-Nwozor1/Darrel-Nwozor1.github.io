import React from "react";
import Navbar from "./Navbar";
import MotionSection from "./MotionSection";
import { motion } from "framer-motion";

/* This is the projects function */

const projects = [
  {
    title: "Full Stack Web Application",
    role: "Full Stack Developer",
    tech: ["React", "Flask", "SQL"],
    desc:
      "Built a full-stack web application with authentication, RESTful APIs, and database-driven functionality.",
    outcome: "Delivered a scalable architecture with clean UI and reliable data handling.",
  },
  {
    title: "UI / UX Portfolio",
    role: "Front-End Developer",
    tech: ["React", "Tailwind CSS"],
    desc:
      "Designed and developed a modern portfolio focused on accessibility and subtle motion.",
    outcome: "Improved engagement and demonstrated strong design system thinking.",
  },
  {
    title: "Database Application",
    role: "Back-End Developer",
    tech: ["Python", "SQL"],
    desc:
      "Implemented a structured relational database with optimized queries.",
    outcome: "Ensured performance, data integrity, and maintainability.",
  },
];

const experience = [
  {
    role: "Front-End / Full Stack Developer",
    company: "Independent Projects",
    period: "2024 — Present",
    points: [
      "Built responsive React applications with Tailwind",
      "Integrated Flask APIs with SQL databases",
      "Focused on accessibility, performance, and clean UI",
    ],
  },
];

const techStack = [
  ["React", "/react.svg"],
  ["JavaScript", "/js.png"],
  ["Python", "/python.png"],
  ["HTML5", "/html.png"],
  ["SQL", "/sql.png"],
  ["Jinja", "/jinja.svg"],
  ["Flask", "/flask.webp"],
  ["Tailwind", "/tailwind.png"],
];

/* This is the App function */

export default function App() {
  return (
    <div className="bg-gray-950 text-white font-sans scroll-smooth">
      <Navbar />

      {/* HERO */}
      <section id="home" className="pt-40 pb-32 px-6">
        <MotionSection>
          <div className="max-w-3xl mx-auto text-center">
            <motion.img
              src="/favicon.ico"
              alt="Portrait of Darrel, web developer"
              className="w-48 h-48 mx-auto mb-8 rounded-full border-4 border-cyan-400/40"
              whileHover={{ scale: 1.05 }}
            />
            <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-400 mb-6">
              Darrel 
            </h1>
            <p className="text-gray-300 text-lg">
              Front-end and full-stack developer focused on clean, accessible,
              modern web experiences.
            </p>
            <motion.a
              href="#projects"
              className="inline-block mt-10 bg-cyan-500 text-black px-10 py-4 rounded-full font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              View Projects
            </motion.a>
          </div>
        </MotionSection>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-28 px-6 bg-black/40">
        <div className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-16">
            Projects
          </h2>

          {projects.map((p, i) => (
            <MotionSection key={p.title} delay={i * 0.1}>
              <article className="bg-gray-900 p-8 rounded-xl border border-white/10">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-300">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">{p.role}</p>
                    <p className="text-gray-300 mb-3">{p.desc}</p>
                    <p className="text-sm text-gray-400">
                      <strong>Outcome:</strong> {p.outcome}
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-2 text-sm">
                    {p.tech.map((t) => (
                      <li
                        key={t}
                        className="bg-cyan-500/10 text-cyan-300 px-2 py-1 rounded-lg"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </MotionSection>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-16">
            Experience
          </h2>

          {experience.map((job, i) => (
            <MotionSection key={job.role} delay={i * 0.1}>
              <div className="border-l-2 border-cyan-400 pl-6">
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <p className="text-cyan-300 text-sm mb-3">
                  {job.company} • {job.period}
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </MotionSection>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="tech" className="py-28 px-6 bg-gray-500 text-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Tools & Technologies
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-12">
            {techStack.map(([name, icon]) => (
              <div key={name} className="text-center">
                <img src={icon} alt={`${name} logo`} className="w-12 h-12 mx-auto mb-2" />
                <span className="text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 text-center">
        <MotionSection>
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Contact</h2>
          <p className="mb-2">
            <a href="mailto:darrel@gmail.com" className="text-cyan-400">
              nwozordarrel08@gmail.com
            </a>
          </p>
          <p className="mb-10 text-gray-300">+44 1234 567890</p>
          <motion.a
            href="mailto:darrel@gmail.com"
            className="inline-block bg-cyan-500 text-black px-12 py-4 rounded-full font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            Let us Connect
          </motion.a>
        </MotionSection>
      </section>

      <footer className="py-6 text-center text-gray-500 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Darrel — Built with React & Tailwind CSS
      </footer>
    </div>
  );
}
