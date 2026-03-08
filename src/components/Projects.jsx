import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, X } from "lucide-react";

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiStripe,
  SiTailwindcss,
  SiExpress,
  SiFramer,
  SiVite,
  SiNextdotjs
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

// Tech icon helper
const getIcon = (tech) => {
  const icons = {
    React: <SiReact className="text-[#61DAFB]" />,
    "Node.js": <SiNodedotjs className="text-[#339933]" />,
    MongoDB: <SiMongodb className="text-[#47A248]" />,
    Firebase: <SiFirebase className="text-[#FFCA28]" />,
    "Firebase Auth": <SiFirebase className="text-[#FFCA28]" />,
    Stripe: <SiStripe className="text-[#635BFF]" />,
    "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
    "Express.js": <SiExpress className="text-white" />,
    "Framer Motion": <SiFramer className="text-white" />,
    Vite: <SiVite className="text-[#646CFF]" />,
    "Next.js": <SiNextdotjs className="text-white" />
  };
  return icons[tech] || null;
};

// Project data
const projectsData = [
  {
    id: 1,
    title: "Contest Creator Platform",
    image: "https://i.ibb.co/MyvRkc77/Screenshot-2026-03-02-024836.png",
    tech: ["React", "Node.js", "MongoDB", "Firebase", "Stripe"],
    description:
      "A MERN stack platform where users can create contests and participate easily.",
    live: "https://contest-creator-7e5d8.web.app/",
    github: "https://github.com/shariful4488/Contest-creator-frontend",
    challenges:
      "Managing role-based access control and secure Stripe payments.",
    future: "Add real-time leaderboard and certificate generation."
  },
  {
    id: 2,
    title: "ProductHub",
    image: "https://i.ibb.co/bjXYSZXB/Screenshot-2026-03-08-003229.png",
    tech: ["React", "Next.js", "MongoDB", "Tailwind CSS"],
    description: "Product management web application.",
    live: "https://product-hub-eta-topaz.vercel.app/",
    github: "https://github.com/shariful4488/ProductHub",
    challenges: "Secure authentication with NextAuth.",
    future: "Add wishlist and fuzzy search."
  },
  {
    id: 3,
    title: "StudyMate",
    image: "https://i.ibb.co/6JwkD81j/Screenshot-2026-03-02-024902.png",
    tech: ["React", "Firebase Auth", "Tailwind CSS", "Express.js"],
    description: "Collaborative learning platform.",
    live: "https://studymate-8bc38.web.app/",
    github: "https://github.com/shariful4488/Studymart-Frontend",
    challenges: "Real-time assignment updates.",
    future: "Add video chat feature."
  },
  {
    id: 4,
    title: "Cloth Store",
    image: "https://i.ibb.co/5xF7Z80N/Screenshot-2026-03-02-024921.png",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    description: "Modern ecommerce frontend.",
    live: "https://frontend-peach-xi.vercel.app/",
    github: "https://github.com/shariful4488/Frontend",
    challenges: "Complex animations with good performance.",
    future: "Convert to MERN ecommerce system."
  }
];

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2
      });
    });
    return () => ctx.revert();
  }, [showAll]);

  const selectedProject =
    selectedIndex !== null ? displayedProjects[selectedIndex] : null;

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Featured <span className="text-[#00ffee]">Work</span>
          </h2>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div key={project.id} className="project-card group">
              <div className="rounded-3xl overflow-hidden border border-white/10 hover:border-[#00ffee]/40 transition">
                <div className="relative h-52 md:h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1 text-xs text-gray-300 bg-white/5 px-2 py-1 rounded"
                      >
                        {getIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedIndex(index)}
                    className="w-full py-3 bg-[#00ffee] text-black font-semibold rounded-xl hover:scale-105 transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`px-8 py-3 font-bold rounded-xl transition ${
              showAll ? "bg-white/10 text-white hover:bg-white/20" : "bg-[#00ffee] text-black hover:scale-105"
            }`}
          >
            {showAll ? "Show Less" : "Explore All Projects"}
          </button>
        </div>

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#111] max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-6 md:p-10"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="p-2 hover:bg-white/10 rounded-lg"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-xl mb-6"
              />

              <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>

              <div className="flex flex-wrap gap-3 mb-6">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded text-sm text-white"
                  >
                    {getIcon(tech)}
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-gray-300 mb-6">{selectedProject.description}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#00ffee] text-black py-3 rounded-xl"
                >
                  <ExternalLink size={18} />
                  Live Project
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/10 text-white py-3 rounded-xl"
                >
                  <Github size={18} />
                  Client Code
                </a>
              </div>

              <p className="text-gray-400 mb-4">
                <strong>Challenges:</strong> {selectedProject.challenges}
              </p>
              <p className="text-gray-400">
                <strong>Future:</strong> {selectedProject.future}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;