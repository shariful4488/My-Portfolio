import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    degree: "Diploma in Computer Science & Technology",
    institution: "Sylhet Polytechnic Institute",
    duration: "2026 - Present",
    location: "Sylhet, Bangladesh",
    description: "Currently in my 6th Semester. Focusing on Core Computer Science principles including Data Structures, Database Management Systems (DBMS), and Full Stack Development. Actively applying theoretical knowledge to build MERN stack applications.",
    grade: "Current Semester: 6th"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Science Group",
    duration: "Passing Year: 2022",
    location: "Sylhet, Bangladesh",
    description: "Completed secondary education with a strong foundation in Mathematics and Higher Mathematics, which sparked my interest in logical problem-solving and programming.",
    grade: "Group: Science"
  }
];

const Education = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".edu-card", {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top 80%",
        },
      });
    }, scrollRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={scrollRef} id="education" className="py-24 px-6 md:px-12 lg:px-24 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-white">
            EDUCATIONAL <span className="text-[#00ffee] glow-text">HISTORY</span>
          </h2>
          <div className="w-20 h-1 bg-[#00ffee] mx-auto rounded-full shadow-[0_0_15px_#00ffee]"></div>
        </div>

        <div className="relative border-l-2 border-[#00ffee]/30 ml-4 md:ml-10 space-y-12 pb-10">
          {educationData.map((edu, index) => (
            <div key={index} className="edu-card relative pl-10 md:pl-16">
              {/* Timeline Dot */}
              <div className="absolute -left-[11px] top-0 w-5 h-5 bg-[#080808] border-2 border-[#00ffee] rounded-full shadow-[0_0_10px_#00ffee]"></div>

              <div className="glass p-8 rounded-[2rem] border border-white/10 hover:border-[#00ffee]/40 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00ffee]/5 blur-[60px] group-hover:bg-[#00ffee]/10 transition-all"></div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#00ffee] transition-colors leading-tight">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-300 mt-2 font-medium">
                      <GraduationCap size={18} className="text-[#00ffee]" />
                      <span>{edu.institution}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="flex items-center gap-2 bg-[#00ffee]/10 text-[#00ffee] px-4 py-1 rounded-full text-sm font-bold border border-[#00ffee]/20 whitespace-nowrap">
                      <Calendar size={14} />
                      {edu.duration}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400 text-sm">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6 text-justify">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-white font-bold bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                    <Award size={18} className="text-[#00ffee]" />
                    <span>{edu.grade}</span>
                  </div>
                  {index === 0 && (
                    <div className="flex items-center gap-2 text-white font-bold bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                      <BookOpen size={18} className="text-[#00ffee]" />
                      <span>Focus: MERN Stack</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;