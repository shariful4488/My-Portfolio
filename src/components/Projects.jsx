import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import { ExternalLink, Github, X, Rocket, Lightbulb } from "lucide-react";
import { 
  SiReact, SiNodedotjs, SiMongodb, SiFirebase, 
  SiStripe, SiTailwindcss, SiExpress, SiFramer, SiVite 
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const getIcon = (techName) => {
  const icons = {
    "React": <SiReact className="text-[#61DAFB]" />,
    "Node.js": <SiNodedotjs className="text-[#339933]" />,
    "MongoDB": <SiMongodb className="text-[#47A248]" />,
    "Firebase": <SiFirebase className="text-[#FFCA28]" />,
    "Firebase Auth": <SiFirebase className="text-[#FFCA28]" />,
    "Stripe": <SiStripe className="text-[#635BFF]" />,
    "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
    "Express.js": <SiExpress className="text-white" />,
    "Framer Motion": <SiFramer className="text-white" />,
    "Vite": <SiVite className="text-[#646CFF]" />
  };
  return icons[techName] || null;
};

const projectsData = [
  {
    id: 1,
    title: "Contest Creator Platform",
    image: "https://i.ibb.co.com/MyvRkc77/Screenshot-2026-03-02-024836.png", 
    tech: ["React", "Node.js", "MongoDB", "Firebase", "Stripe"],
    description: "A comprehensive MERN stack platform where users can create, manage, and participate in various contests with integrated payment systems.",
    live: "https://contest-creator-7e5d8.web.app/",
    github: "https://github.com/shariful4488/Contest-creator-frontend", 
    challenges: "Managing complex role-based access control (Admin, Creator, User) and ensuring secure payment processing with Stripe was a significant technical challenge.",
    future: "I plan to implement a real-time leaderboard using Socket.io and an automated certificate generation system for winners."
  },
  {
    id: 2,
    title: "StudyMate - Collaborative Learning",
    image: "https://i.ibb.co.com/6JwkD81j/Screenshot-2026-03-02-024902.png",
    tech: ["React", "Firebase Auth", "Tailwind CSS", "Express.js"],
    description: "An interactive platform designed for students to share assignments, study materials, and collaborate on group projects efficiently.",
    live: "https://studymate-8bc38.web.app/",
    github: "https://github.com/shariful4488/Studymart-Frontend",
    challenges: "Handling real-time assignment status updates and creating a smooth PDF previewing experience for uploaded study materials.",
    future: "Planning to add a group video-chat feature and an AI-powered study schedule generator based on student deadlines."
  },
  {
    id: 3,
    title: "Cloth Store Frontend",
    image: "https://i.ibb.co.com/5xF7Z80N/Screenshot-2026-03-02-024921.png",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    description: "A high-performance, pixel-perfect e-commerce frontend focusing on smooth user experience, modern aesthetics, and responsive layout.",
    live: "https://frontend-peach-xi.vercel.app/",
    github: "https://github.com/shariful4488/Frontend",
    challenges: "Achieving complex CSS animations while maintaining 60fps performance and ensuring a seamless mobile-first shopping experience.",
    future: "I intend to convert this into a full-stack MERN application by adding a custom dashboard and an inventory management system."
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white uppercase tracking-tighter">
            Featured <span className="text-[#00ffee] glow-text">Work</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#00ffee] mx-auto rounded-full shadow-[0_0_15px_#00ffee]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="glass rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-[#00ffee]/40 transition-all duration-500 shadow-2xl">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00ffee] transition-colors">{project.title}</h3>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-gray-300 font-bold bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                        {getIcon(t)} {t}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-[#00ffee] font-black uppercase tracking-widest hover:bg-[#00ffee] hover:text-[#080808] transition-all duration-500 shadow-inner"
                  >
                    Explore Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#080808]/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 50 }}
              className="glass max-w-5xl w-full max-h-[85vh] overflow-y-auto rounded-[3rem] border border-white/20 p-8 md:p-14 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 p-3 bg-white/5 rounded-full hover:bg-red-500/20 text-white transition-all z-10">
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <img src={selectedProject.image} className="w-full h-auto aspect-video object-cover rounded-[2rem] shadow-2xl border border-white/10" alt="" />
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a href={selectedProject.live} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#00ffee] text-[#080808] font-black rounded-2xl hover:shadow-[0_0_25px_#00ffee] transition-all">
                      <ExternalLink size={20} /> LIVE DEMO
                    </a>
                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-4 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all">
                      <Github size={20} /> CLIENT CODE
                    </a>
                  </div>
                </div>

                <div className="flex flex-col">
                  <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">{selectedProject.title}</h2>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="flex items-center gap-2 px-4 py-1.5 bg-[#00ffee]/10 border border-[#00ffee]/30 rounded-xl text-[12px] text-[#00ffee] font-bold uppercase tracking-widest">
                        {getIcon(t)} {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-10 text-justify">{selectedProject.description}</p>
                  
                  <div className="space-y-8 bg-white/5 p-8 rounded-3xl border border-white/5">
                    <div className="space-y-3">
                      <h4 className="flex items-center gap-3 text-[#00ffee] font-bold uppercase tracking-widest text-sm">
                        <Rocket size={18} /> Challenges Faced
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed italic">{selectedProject.challenges}</p>
                    </div>
                    <div className="space-y-3 pt-4 border-t border-white/10">
                      <h4 className="flex items-center gap-3 text-[#00ffee] font-bold uppercase tracking-widest text-sm">
                        <Lightbulb size={18} /> Future Roadmaps
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed italic">{selectedProject.future}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;