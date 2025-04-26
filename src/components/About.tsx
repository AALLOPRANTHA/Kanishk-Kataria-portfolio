
import React, { useEffect, useRef } from "react";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
      // Add initial hidden class
      el.classList.add("opacity-0", "translate-y-10");
    });
    
    return () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current || !containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (
        containerRect.top <= windowHeight &&
        containerRect.bottom >= 0
      ) {
        const scrollPercentage = 
          (scrollPosition - (containerRect.top + scrollPosition - windowHeight)) / 
          (containerRect.height + windowHeight);
        
        const transformValue = Math.max(0, Math.min(30, scrollPercentage * 60));
        imageRef.current.style.transform = `translateY(${transformValue}px)`;
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <section 
      id="about" 
      className="py-20 md:py-32 relative"
      ref={containerRef}
    >
      <div className="noise-overlay"></div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal transition-all duration-700 delay-100">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            
            <p className="text-foreground/80 mb-4">
              I'm Kanishk Kataria, a passionate full-stack developer and entrepreneur with expertise in creating interactive, user-focused digital experiences. With a background in Computer Applications (BCA) with AI & ML Honors from Christ University, I bring a unique perspective to every project.
            </p>
            
            <p className="text-foreground/80 mb-6">
              My journey in technology is driven by innovation and community leadership. From founding OnlyJobs to participating in the prestigious IIT Delhi Boot Camp as an Innovation Ambassador, I combine technical expertise with entrepreneurial vision to build meaningful solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="fancy-border bg-secondary/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-primary">Education</h3>
                <ul className="text-sm text-foreground/70 space-y-2">
                  <li>BCA with AI & ML Honors</li>
                  <li>Christ University, Delhi NCR</li>
                  <li>Grade 12, Manthan School</li>
                  <li>Grade 10, Presidium Ashok Vihar</li>
                </ul>
              </div>
              
              <div className="fancy-border bg-secondary/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-primary">Skills</h3>
                <ul className="text-sm text-foreground/70 space-y-1">
                  <li>HTML, CSS, JavaScript</li>
                  <li>React & Node.js</li>
                  <li>PHP & MongoDB</li>
                  <li>Python & Java</li>
                  <li>Leadership & Team Collaboration</li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="h-1 w-16 rounded-full bg-blue-400"></div>
              <div className="h-1 w-16 rounded-full bg-indigo-500"></div>
              <div className="h-1 w-16 rounded-full bg-purple-400"></div>
            </div>
          </div>
          
          <div 
            className="reveal transition-all duration-700 delay-300 perspective-container"
            ref={imageRef}
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden group fancy-border">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute inset-0 grid-lines"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 border-2 border-white/30 rounded-xl transform -rotate-6 transition-transform duration-500 group-hover:rotate-0"></div>
                <div className="absolute w-3/4 h-3/4 bg-white/10 backdrop-blur-md rounded-lg transform rotate-6 transition-transform duration-500 group-hover:rotate-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-2xl font-light text-white/80 mb-4">Developer</div>
                  <div className="text-2xl font-light text-white/80 mb-4">&</div>
                  <div className="text-2xl font-light text-white/80">Entrepreneur</div>
                  
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-blue-400/20 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default About;
