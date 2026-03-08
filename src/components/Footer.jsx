import { Github, Linkedin, Twitter, ArrowUp, Heart, Facebook } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/sharifulNext", color: "hover:text-black dark:hover:text-white" },
     { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/shariful-islam-30907b267/", color: "hover:text-[#0077b5]" },
    { icon: <Facebook size={20} />, url: "https://www.facebook.com/shariful.islam.522169/", color: "hover:text-[#1877F2]" },
    { icon: <Twitter size={20} />, url: "https://x.com/it_shariful", color: "hover:text-[#1da1f2]" },
  ];

  return (
    <footer className="relative mt-20 pt-16 pb-10 px-6 md:px-12 lg:px-24 border-t border-gray-200 dark:border-white/5 bg-white/70 dark:bg-[#080808]/50 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">
              Shariful <span className="text-[#00ffee] drop-shadow-[0_0_8px_#00ffee60]">Islam</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs leading-relaxed">
              MERN Stack Developer based in Sylhet. Building digital experiences that combine modern tech with clean design.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#00ffee]">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 flex items-center gap-2 font-medium">
                    <span className="w-1.5 h-1.5 bg-[#00ffee] rounded-full opacity-50"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 md:text-right flex flex-col md:items-end">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#00ffee]">Let's Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-600 dark:text-gray-400 transition-all duration-300 ${social.color} hover:border-[#00ffee]/50 hover:-translate-y-1 shadow-sm dark:shadow-lg`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-[#00ffee] dark:hover:text-[#00ffee] transition-all"
            >
              Back to Top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-2">
            © {new Date().getFullYear()} All Rights Reserved. Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Shariful.
          </p>
          <div className="flex gap-6 text-[10px] md:text-xs text-gray-400 dark:text-gray-600 font-bold uppercase tracking-tighter">
            <span>Clean Code</span>
            <span>Modern UI</span>
            <span>Fast Performance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;