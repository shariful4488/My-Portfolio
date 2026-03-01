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
    if (location.pathname !== "/") {
      navigate("/", { state: { target: targetId } });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-6 md:px-12 lg:px-24 ${
        scrolled ? "py-3 glass shadow-2xl border-b border-white/10" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <Link to="/" className="text-3xl font-extrabold text-black dark:text-white group outline-none tracking-wider shrink-0">
          <span className="drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Shariful</span>{" "}
          <span className="text-[#00ffee] transition-all duration-300 drop-shadow-[0_0_20px_#00ffee] animate-pulse">
            Islam
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden lg:flex items-center gap-10"> 
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-[#00ffee] transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00ffee] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#00ffee]"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full glass border border-black/10 dark:border-white/10 text-[#00ffee] hover:bg-black/5 dark:hover:bg-white/10 transition-all shadow-[0_0_10px_rgba(0,255,238,0.2)]"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} className="text-gray-800" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#00ffee] focus:outline-none p-2 rounded-xl glass border border-black/10 dark:border-white/10"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full glass mt-2 py-8 flex flex-col items-center gap-6 border-b border-black/10 dark:border-white/10 shadow-2xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-800 dark:text-white hover:text-[#00ffee] text-xl font-medium transition-colors"
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