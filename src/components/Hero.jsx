import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Github, Linkedin, Facebook, Mail, Download, ExternalLink } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const heroRef = useRef(null);

  // GSAP Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-left", {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });
      gsap.from(".animate-right", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 pt-32 pb-16 overflow-hidden bg-transparent"
    >
      {/* Left Side: Information */}
      <div className="flex-1 space-y-6 mt-12 lg:mt-0 text-left">
        <h3 className="animate-left text-2xl md:text-3xl font-medium text-white">
          Hi, It's <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Shariful</span>
        </h3>

        <h1 className="animate-left text-5xl md:text-7xl font-bold text-white leading-[1.1]">
          I'm a <br />
          <span className="text-[#00ffee] drop-shadow-[0_0_15px_#00ffee]">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "Web Designer",
                2000,
                "MERN Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>

        <p className="animate-left text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
          Welcome to my portfolio. I am a dedicated developer with a passion for building 
          dynamic, responsive, and user-centric web applications. I bridge the gap between 
          complex backend logic and elegant frontend design.
        </p>

        {/* Action Buttons */}
        <div className="animate-left flex flex-wrap gap-5 pt-4">
          {/* Resume Button */}
          <a
            href="/resume.pdf" 
            download="Shariful_Islam_Resume"
            className="flex items-center gap-2 bg-[#00ffee] text-black font-bold py-3.5 px-8 rounded-full shadow-[0_0_20px_rgba(0,255,238,0.4)] hover:shadow-[0_0_40px_rgba(0,255,238,0.6)] hover:scale-105 transition-all duration-300"
          >
            <Download size={20} />
            Download Resume
          </a>
          
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="glass py-3.5 px-8 rounded-full border border-[#00ffee] text-[#00ffee] font-bold hover:bg-[#00ffee] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,255,238,0.1)] flex items-center gap-2"
          >
            Hire Me <ExternalLink size={18} />
          </button>
        </div>

        {/* Social Links */}
        <div className="animate-left flex items-center gap-5 pt-8">
          {[
            { Icon: Github, link: "https://github.com/shariful4488" },
            { Icon: Linkedin, link: "https://www.linkedin.com/in/shariful-islam-30907b267/" },
            { Icon: Facebook, link: "https://www.facebook.com/shariful.islam.522169/" },
            { Icon: Mail, link: "mailto:sharifulislam242248@gmail.com" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 glass rounded-full text-[#00ffee] border border-[#00ffee]/20 hover:bg-[#00ffee] hover:text-black hover:shadow-[0_0_20px_#00ffee] transition-all duration-500 transform hover:-translate-y-2 active:scale-90"
            >
              <item.Icon size={24} />
            </a>
          ))}
        </div>
      </div>

      <div className="animate-right relative flex justify-center items-center">
        <div className="absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px] bg-[#00ffee]/20 rounded-full blur-[80px] animate-pulse"></div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative z-10 w-72 h-72 md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full p-1.5 border-2 border-[#00ffee] shadow-[0_0_60px_rgba(0,255,238,0.3)] overflow-hidden"
        >
          <img
            src="/src/assets/portfolio.jpeg" 
            alt="Shariful Islam"
            className="w-full h-full object-cover rounded-full transition-transform duration-700 hover:scale-110"
          />
        </motion.div>

        {/* Floating Badge */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 -right-2 md:bottom-10 md:-right-8 glass px-5 py-3 rounded-2xl border border-white/10 shadow-xl hidden sm:block"
        >
          <p className="text-white text-sm font-medium">Available for</p>
          <p className="text-[#00ffee] font-bold text-lg">Job</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;