import { motion } from "framer-motion";
import { Code, Heart, Laptop, Award, Coffee, Gamepad2, Palette } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-3 uppercase tracking-tighter text-gray-900 dark:text-white">
            Who is <span className="text-[#00ffee] drop-shadow-[0_0_15px_#00ffee50]">Shariful?</span>
          </h2>
          <div className="w-16 h-1 bg-[#00ffee] mx-auto rounded-full shadow-[0_0_10px_#00ffee]"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20">
          {/* Left: Image & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:flex-1 max-w-[360px]"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#00ffee] to-blue-600 rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-500"></div>
              <div className="glass relative rounded-[2rem] overflow-hidden border border-black/5 dark:border-white/10 p-3 bg-white/50 dark:bg-white/5">
                <img 
                  src="https://i.ibb.co.com/vvZpzRtq/avater.webp" 
                  alt="Shariful Islam" 
                  className="rounded-[1.5rem] w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-center">
                <h5 className="text-[#00ffee] font-bold text-lg">20+</h5>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Projects</p>
              </div>
              <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-center">
                <h5 className="text-[#00ffee] font-bold text-lg">100%</h5>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Dedication</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="w-full lg:flex-[1.5] space-y-8">
            {/* Journey & Style Combined */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-[#00ffee]">
                <Code size={22} />
                <h3 className="text-xl font-bold dark:text-white">Developer Journey</h3>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Driven by curiosity, I transitioned from an experimenter to a <span className="text-black dark:text-white font-bold">MERN Stack Developer</span>. Based in Sylhet, I focus on building high-performance applications where **Clean Code** meets **Exceptional UI**.
              </p>
            </motion.div>

            {/* Hobbies (Compact) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10"
            >
              <h3 className="text-lg font-bold dark:text-white mb-4 flex items-center gap-2">
                <Coffee className="text-[#00ffee]" size={20} /> Life Beyond Code
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Gamepad2 className="text-[#00ffee]" size={18} />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Football & Fitness</span>
                </div>
                <div className="flex items-center gap-3">
                  <Palette className="text-[#00ffee]" size={18} />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Digital Art & Design</span>
                </div>
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg italic text-gray-500 border-l-2 border-[#00ffee] pl-4 py-1"
            >
              "Turning complex problems into elegant digital realities."
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;