import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react"; 
import { Link, useLocation, useNavigate } from "react-router";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Education", href: "education" },
  { label: "Projects", href: "projects" },
  { label: "Services", href: "services" },
  { label: "Contact", href: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true); 
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isDark) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false); 
    
    setTimeout(() => {
      if (location.pathname !== "/") {
        navigate("/", { state: { target: targetId } });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80; // নেভবারের হাইট অনুযায়ী অ্যাডজাস্টমেন্ট
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    }, 100);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 px-4 md:px-12 lg:px-24 ${
        scrolled || isOpen ? "py-3 glass shadow-2xl border-b border-black/5 dark:border-white/10 bg-white/90 dark:bg-black/90" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <Link to="/" className="text-2xl md:text-3xl font-extrabold text-black dark:text-white outline-none tracking-wider shrink-0">
          <span className="drop-shadow-md">Shariful</span>{" "}
          <span className="text-[#00ffee] drop-shadow-[0_0_15px_#00ffee]">
            Islam
          </span>
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          <nav className="hidden lg:flex items-center gap-8 mr-4"> 
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-semibold text-gray-800 dark:text-gray-200 hover:text-[#00ffee] transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00ffee] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full glass border border-black/10 dark:border-white/10 text-[#00ffee] transition-all"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} className="text-gray-800" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#00ffee] p-2 rounded-xl glass border border-black/10 dark:border-white/10"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full glass bg-white dark:bg-black py-10 flex flex-col items-center gap-6 border-b border-black/10 dark:border-white/10 shadow-2xl z-[999]"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-900 dark:text-white hover:text-[#00ffee] text-xl font-bold transition-colors uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;