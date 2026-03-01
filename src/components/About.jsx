import { motion } from "framer-motion";
import { User, Code, Heart, Paintbrush, Trophy } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            About <span className="text-[#00ffee] glow-text">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#00ffee] mx-auto rounded-full shadow-[0_0_10px_#00ffee]"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group flex-1"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#00ffee] to-blue-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="glass relative rounded-3xl overflow-hidden border border-white/10 p-4 transform transition-transform duration-500 group-hover:-rotate-2">
              <img 
                src="https://i.ibb.co.com/vvZpzRtq/avater.webp" 
                alt="Shariful Islam Avatar" 
                className="rounded-2xl w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          <div className="flex-[1.2] space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-[#00ffee]">
                <Code size={24} />
                <h3 className="text-xl font-bold uppercase tracking-wider">My Journey</h3>
              </div>
              <p className="text-lg leading-relaxed text-gray-400 dark:text-gray-300">
                As a **MERN Stack Developer**, I transform complex logic into elegant web solutions. From my first "Hello World," I’ve been driven to build scalable, high-performance applications using **React, Node.js, and MongoDB**.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-[#00ffee]">
                <Heart size={24} />
                <h3 className="text-xl font-bold uppercase tracking-wider">What I Love</h3>
              </div>
              <p className="text-lg leading-relaxed text-gray-400 dark:text-gray-300">
                I specialize in crafting **Pixel-Perfect UIs** and robust backends. I thrive at the intersection of clean architecture and seamless user experiences, ensuring every line of code adds value.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl border border-white/5 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-gray-400 dark:text-gray-300 text-sm">
                  <Trophy className="text-[#00ffee]" size={18} />
                  <span>Football & Sports</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 dark:text-gray-300 text-sm">
                  <Paintbrush className="text-[#00ffee]" size={18} />
                  <span>Digital Art & Painting</span>
                </div>
              </div>
              <p className="italic text-xs text-gray-500 pt-2 border-t border-white/5">
                "A healthy mind and outdoor activity fuel developer creativity."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;