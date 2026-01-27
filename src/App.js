import React from "react";
import Navbar from "./Navbar";
import MotionSection from "./MotionSection";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white scroll-smooth font-sans overflow-x-hidden">
      <Navbar />

      {/* ================= HOME ================= */}
      <section
        id="home"
        className="pt-40 min-h-screen flex flex-col items-center justify-center text-center px-6 relative"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.15),_transparent_70%)]" />

        <MotionSection>
          <motion.img
            src="/anime.avif"
            alt="Darrel avatar"
            className="w-60 h-60 rounded-full mb-10 border-4 border-cyan-400/40 shadow-2xl shadow-cyan-500/40"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />

          <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-400 mb-6 tracking-tight">
            Hey, I am Darrel
          </h1>

          <p className="text-gray-300 max-w-2xl text-lg md:text-xl leading-relaxed">
            I design and build modern, clean, and meaningful digital experiences
            using contemporary web technologies.
          </p>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-12 bg-cyan-500 hover:bg-cyan-400 text-black px-12 py-4 rounded-full font-bold shadow-lg shadow-cyan-500/30 transition"
          >
            View My Work
          </motion.a>
        </MotionSection>
      </section>

      {/* This is are my Projects */}
      <section id="projects" className="py-32 px-6 bg-black/40">
        <MotionSection>
          <h2 className="text-4xl font-bold text-cyan-400 text-center mb-20">
            Featured Projects
          </h2>
        </MotionSection>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            ["Hypertext Project", "Creative character-driven concept build"],
            ["Database App", "SQL-driven structured application"],
            ["Portfolio Concept", "Design-focused UI experiment"],
            ["UI/UX Build", "Minimal and modern interface"],
            ["Visual Design", "Layout and colour exploration"],
            ["Full Stack App", "Flask, SQL, React integration"],
          ].map(([title, desc], index) => (
            <MotionSection key={title} delay={index * 0.08}>
              <div className="bg-gray-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-400/20 transition-all">
                <h3 className="text-xl font-semibold text-cyan-300 mb-3">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </MotionSection>
          ))}
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section id="tech" className="py-32 px-6">
        <MotionSection>
          <h2 className="text-4xl font-bold text-cyan-400 text-center mb-20">
            Tools & Technologies
          </h2>
        </MotionSection>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-14 max-w-6xl mx-auto">
          {[
            ["React", "/react.svg"],
            ["JavaScript", "/js.png"],
            ["Python", "/python.png"],
            ["HTML5", "/html.png"],
            ["SQL", "/sql.png"],
            ["Jinja", "/jinja.svg"],
            ["Flask", "/flask.webp"],
            ["Tailwind", "/tailwind.png"],
          ].map(([name, icon], index) => (
            <MotionSection key={name} delay={index * 0.05}>
              <div className="flex flex-col items-center group transition">
                <img
                  src={icon}
                  alt={name}
                  className="w-14 h-14 mb-3 opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-3 transition"
                />
                <span className="text-gray-300 text-sm group-hover:text-cyan-400 transition">
                  {name}
                </span>
              </div>
            </MotionSection>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="py-32 px-6 bg-black/40 text-center"
      >
        <MotionSection>
          <h2 className="text-4xl font-bold text-cyan-400 mb-10">
            About Me
          </h2>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            I’m a developer focused on clarity, accessibility, and modern UI
            design. I enjoy turning complex problems into clean, elegant,
            scalable solutions that feel intuitive and purposeful.
          </p>
        </MotionSection>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-32 px-6 text-center">
        <MotionSection>
          <h2 className="text-4xl font-bold text-cyan-400 mb-10">
            Contact
          </h2>

          <p className="text-gray-300 mb-2">
            Email:{" "}
            <a
              href="mailto:darrel@gmail.com"
              className="text-cyan-400 hover:underline"
            >
              darrel@gmail.com
            </a>
          </p>

          <p className="text-gray-300 mb-10">
            Phone: <span className="text-cyan-400">+44 1234 567890</span>
          </p>

          <motion.a
            href="mailto:darrel@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black px-14 py-4 rounded-full font-bold shadow-lg shadow-cyan-500/30 transition"
          >
            Let’s Connect
          </motion.a>
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
