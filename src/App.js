import React from "react";
import Navbar from "./Navbar";
import MotionSection from "./MotionSection";
import { motion } from "framer-motion";

/* ================= DATA ================= */

const projects = [
  {
    title: "Full Stack Web Application",
    role: "Full Stack Developer",
    tech: ["React", "Flask", "SQL"],
    description:
      "Built a full-stack web application with authentication, RESTful APIs, and database-driven functionality.",
    outcome:
      "Delivered a scalable architecture with clean UI and reliable data handling.",
  },
  {
    title: "UI / UX Portfolio",
    role: "Front-End Developer",
    tech: ["React", "Tailwind CSS"],
    description:
      "Designed and developed a modern portfolio focused on accessibility, layout clarity, and subtle motion.",
    outcome:
      "Improved user engagement and demonstrated strong design system thinking.",
  },
  {
    title: "Database Application",
    role: "Back-End Developer",
    tech: ["Python", "SQL"],
    description:
      "Implemented a structured relational database with optimized queries and validation logic.",
    outcome:
      "Ensured performance, data integrity, and maintainability.",
  },
];

const experience = [
  {
    company: "Independent Projects",
    role: "Front-End / Full Stack Developer",
    period: "2023 — Present",
    details: [
      "Developed responsive web applications using React and Tailwind CSS",
      "Built and integrated Flask APIs with SQL databases",
      "Focused on accessibility, performance, and clean UI architecture",
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
  ["Tailwind CSS", "/tailwind.png"],
];

/* ================= APP ================= */

function App() {
  return (
    <div className="bg-gray-950 text-white font-sans scroll-smooth">
      <Navbar />

      {/* ================= HERO ================= */}
      <section id="home" className="pt-40 pb-32 px-6">
        <MotionSection>
          <div className="max-w-3xl mx-auto text-center">
            <motion.img
              src="/anime.avif"
              alt="Portrait of Darrel, web developer"
              className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-cyan-400/40 shadow-xl"
              whileHover={{ scale: 1.05 }}
            />

            <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-400 mb-6">
              Darrel
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed">
              Front-end and full-stack developer focused on building clean,
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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 mb-16 text-center">
            Projects
          </h2>

          <div className="space-y-10">
            {projects.map((project, i) => (
              <MotionSection key={project.title} delay={i * 0.1}>
                <article
                  className="bg-gray-900 p-8 rounded-xl border border-white/10"
                  aria-label={`Project ${project.title}`}
                >
                  <div className="flex flex-col md:flex-row md:justify-between gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4">
                        {project.role}
                      </p>

                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>

                      <p className="text-gray-400 text-sm">
                        <strong>Outcome:</strong> {project.outcome}
                      </p>
                    </div>

                    <ul className="flex flex-wrap gap-2 text-sm">
                      {project.tech.map((tech) => (
                        <li
                          key={tech}
                          className="bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 mb-16 text-center">
            Experience
          </h2>

          {experience.map((job, i) => (
            <MotionSection key={job.role} delay={i * 0.1}>
              <div className="border-l-2 border-cyan-400 pl-6 mb-12">
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <p className="text-cyan-300 text-sm mb-3">
                  {job.company} • {job.period}
                </p>

                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {job.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </MotionSection>
          ))}
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
                <img src={icon} alt={`${name} logo`} className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
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
