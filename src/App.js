import React from "react";
import Navbar from "./Navbar";
import MotionSection from "./MotionSection";
import { motion } from "framer-motion";

const projects = [
  ["Hypertext Project", "Creative character-driven concept build"],
  ["Database App", "SQL-driven structured application"],
  ["Portfolio Concept", "Design-focused UI experiment"],
  ["UI/UX Build", "Minimal and modern interface"],
  ["Visual Design", "Layout and colour exploration"],
  ["Full Stack App", "Flask, SQL, React integration"],
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

function App() {
  return (
    <div className="bg-gray-950 text-white font-sans scroll-smooth">
      <Navbar />

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="pt-40 pb-32 flex justify-center px-6"
      >
        <MotionSection>
          <div className="max-w-3xl text-center mx-auto">
            <motion.img
              src="/anime.avif"
              alt="Darrel avatar"
              className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-cyan-400/40 shadow-xl"
              whileHover={{ scale: 1.05 }}
            />

            <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-400 mb-6">
              Darrel
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed">
              Front-end & full-stack developer focused on building clean,
              accessible, and modern digital experiences.
            </p>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-10 bg-cyan-500 hover:bg-cyan-400 text-black px-10 py-4 rounded-full font-semibold"
            >
              View Projects
            </motion.a>
          </div>
        </MotionSection>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-28 px-6 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <MotionSection>
            <h2 className="text-3xl font-bold text-cyan-400 mb-16 text-center">
              Projects
            </h2>
          </MotionSection>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {projects.map(([title, desc], i) => (
              <MotionSection key={title} delay={i * 0.08}>
                <div className="bg-gray-900 p-6 rounded-xl border border-white/10 hover:border-cyan-400/50 transition">
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="tech" className="py-28 px-6 bg-gray-100 text-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Tools & Technologies
          </h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-12">
            {techStack.map(([name, icon]) => (
              <div key={name} className="flex flex-col items-center">
                <img src={icon} alt={name} className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-28 px-6 bg-black/40">
        <MotionSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              About Me
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I’m a developer who values clarity, structure, and thoughtful
              design. I enjoy turning complex ideas into elegant, scalable
              solutions using modern web technologies.
            </p>
          </div>
        </MotionSection>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-28 px-6">
        <MotionSection>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              Contact
            </h2>

            <p className="text-gray-300 mb-2">
              <a
                href="mailto:darrel@gmail.com"
                className="text-cyan-400 hover:underline"
              >
                darrel@gmail.com
              </a>
            </p>

            <p className="text-gray-300 mb-10">
              +44 1234 567890
            </p>

            <motion.a
              href="mailto:darrel@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black px-12 py-4 rounded-full font-semibold"
            >
              Let’s Connect
            </motion.a>
          </div>
        </MotionSection>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Darrel — Built with React & Tailwind CSS
      </footer>
    </div>
  );
}

export default App;
