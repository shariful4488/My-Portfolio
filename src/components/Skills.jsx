import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, 
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase, 
  SiGit, SiFigma, SiVercel, SiNetlify 
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <SiReact color="#61DAFB" />, level: "90%" },
      { name: "Next.js", icon: <SiNextdotjs color="#ffffff" />, level: "85%" },
      { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" />, level: "95%" },
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" />, level: "90%" },
    ],
  },
  {
    title: "MERN / Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs color="#339933" />, level: "85%" },
      { name: "Express.js", icon: <SiExpress color="#ffffff" />, level: "80%" },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" />, level: "75%" },
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" />, level: "80%" },
    ],
  },
  {
    title: "Tools & Deploy",
    skills: [
      { name: "Git", icon: <SiGit color="#F05032" />, level: "90%" },
      { name: "Netlify", icon: <SiNetlify color="#00C7B7" />, level: "85%" },
      { name: "Figma", icon: <SiFigma color="#F24E1E" />, level: "70%" },
      { name: "Vercel", icon: <SiVercel color="#ffffff" />, level: "90%" },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".progress-fill", {
        width: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-white">
            MY <span className="text-[#00ffee] glow-text">SKILLS</span>
          </h2>
          <div className="w-20 h-1 bg-[#00ffee] mx-auto rounded-full shadow-[0_0_15px_#00ffee]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="skill-card glass p-8 rounded-[2.5rem] border border-white/10 hover:border-[#00ffee]/40 transition-all duration-500 relative group overflow-hidden flex flex-col justify-between"
              style={{ opacity: 1, visibility: 'visible' }} // Force visibility
            >
              <h3 className="text-xl font-bold text-white mb-8 tracking-widest uppercase border-b border-white/10 pb-4">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group/item">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl transition-transform duration-300 group-hover/item:scale-125 group-hover/item:rotate-12">
                          {skill.icon}
                        </span>
                        <span className="text-white font-medium tracking-wide opacity-100">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[#00ffee] font-bold text-sm">{skill.level}</span>
                    </div>

                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <div
                        className="progress-fill h-full bg-gradient-to-r from-[#00ffee] to-blue-500 shadow-[0_0_10px_rgba(0,255,238,0.4)]"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;