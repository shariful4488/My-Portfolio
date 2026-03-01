import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef();
  const sectionRef = useRef();
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".contact-info", {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
      });
      gsap.from(".contact-form", {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // আপনার ড্যাশবোর্ড থেকে পাওয়া সঠিক আইডিগুলো এখানে আছে
    emailjs.sendForm(
      'service_3lc36yf', 
      'template_z10oosi', 
      formRef.current, 
      '0AcwQOriztxf675r8'
    )
    .then(() => {
      setStatus("success");
      formRef.current.reset(); // ফর্মটি ক্লিয়ার করবে
      setTimeout(() => setStatus(""), 5000);
    }, (error) => {
      console.error("EmailJS Error:", error.text);
      setStatus("error");
    });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white uppercase tracking-tighter">
            Get In <span className="text-[#00ffee] glow-text">Touch</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#00ffee] mx-auto rounded-full shadow-[0_0_15px_#00ffee]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Section */}
          <div className="contact-info space-y-8">
            <h3 className="text-3xl font-bold text-white mb-6 leading-tight">Let's discuss your next project</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm always open to discussing product design work or partnership opportunities. 
              Based in <span className="text-[#00ffee]">Sylhet, Bangladesh</span>, available for remote work.
            </p>

            <div className="space-y-6 pt-4">
              {/* Email Link */}
              <a href="mailto:sharifulislam242248@gmail.com" className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-[#00ffee]/50 group-hover:bg-[#00ffee]/5 transition-all duration-300 shadow-xl">
                  <Mail className="text-[#00ffee]" size={28} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-black">Email Me</p>
                  <p className="text-lg md:text-xl text-white font-bold group-hover:text-[#00ffee] transition-colors">sharifulislam242248@gmail.com</p>
                </div>
              </a>

              {/* Call Link */}
              <a href="tel:+8801305242248" className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-[#00ffee]/50 group-hover:bg-[#00ffee]/5 transition-all duration-300 shadow-xl">
                  <Phone className="text-[#00ffee]" size={28} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-black">Call Me</p>
                  <p className="text-lg md:text-xl text-white font-bold group-hover:text-[#00ffee] transition-colors">+880 1305242248</p>
                </div>
              </a>

              {/* WhatsApp Link */}
              <a href="https://wa.me/8801305242248" target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-[#00ffee]/50 group-hover:bg-[#00ffee]/5 transition-all duration-300 shadow-xl">
                  <MessageCircle className="text-[#00ffee]" size={28} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-black">WhatsApp</p>
                  <p className="text-lg md:text-xl text-white font-bold group-hover:text-[#00ffee] transition-colors">+880 1305242248</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form glass p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-2 font-semibold tracking-wide">Your Name</label>
                  <input 
                    type="text" 
                    name="name" // আপনার টেমপ্লেটে {{name}} আছে
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00ffee] focus:ring-1 focus:ring-[#00ffee]/30 transition-all placeholder:text-gray-600" 
                    placeholder="Enter your name" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-2 font-semibold tracking-wide">Email Address</label>
                  <input 
                    type="email" 
                    name="email" // আপনার টেমপ্লেটে {{email}} আছে
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00ffee] focus:ring-1 focus:ring-[#00ffee]/30 transition-all placeholder:text-gray-600" 
                    placeholder="example@mail.com" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-2 font-semibold tracking-wide">Message</label>
                <textarea 
                  name="message" // আপনার টেমপ্লেটে {{message}} আছে
                  rows="5" 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00ffee] focus:ring-1 focus:ring-[#00ffee]/30 transition-all resize-none placeholder:text-gray-600" 
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === "sending"}
                className="w-full py-5 bg-[#00ffee] text-[#080808] font-black uppercase tracking-widest rounded-2xl hover:shadow-[0_0_30px_#00ffee] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#00ffee]/20"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : status === "success" ? (
                  <>Success <CheckCircle size={22}/></>
                ) : (
                  <>Send Message <Send size={20}/></>
                )}
              </button>
              
              {/* Success/Error Feedback */}
              {status === "success" && (
                <p className="text-[#00ffee] text-center font-bold flex items-center justify-center gap-2 animate-bounce">
                   I received your message! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-center font-bold flex items-center justify-center gap-2">
                  <AlertCircle size={18}/> Error sending message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;