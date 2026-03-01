import { Monitor, Code2, Database, Layout, Smartphone, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Building high-quality, scalable websites using the MERN stack.",
      icon: <Code2 size={32} className="text-[#00ffee]" />
    },
    {
      title: "Frontend Design",
      desc: "Creating eye-catching, responsive UI using React and Tailwind CSS.",
      icon: <Layout size={32} className="text-[#00ffee]" />
    },
    {
      title: "Backend Solutions",
      desc: "Developing secure server-side logic and RESTful APIs with Node.js.",
      icon: <Database size={32} className="text-[#00ffee]" />
    },
    {
      title: "App Optimization",
      desc: "Improving web performance and SEO for better user reach.",
      icon: <Monitor size={32} className="text-[#00ffee]" />
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-white mb-12 text-center uppercase">
          My <span className="text-[#00ffee]">Services</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass p-8 rounded-3xl border border-white/5 hover:border-[#00ffee]/30 transition-all duration-300 group">
              <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl group-hover:shadow-[0_0_15px_#00ffee50]">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;