
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !circleRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      // Parallax tilt effect
      heroRef.current.style.transform = `perspective(1000px) rotateX(${(y - 0.5) * 5}deg) rotateY(${(x - 0.5) * -5}deg)`;
      
      // Moving circle effect
      circleRef.current.style.transform = `translate(${(x - 0.5) * 50}px, ${(y - 0.5) * 50}px)`;
    };
    
    const handleMouseLeave = () => {
      if (!heroRef.current) return;
      heroRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      if (circleRef.current) {
        circleRef.current.style.transform = 'translate(0, 0)';
      }
    };
    
    const heroElement = heroRef.current;
    
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      heroElement.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        heroElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div 
        ref={heroRef} 
        className="container mx-auto px-6 relative z-10 transition-transform duration-300 ease-out"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-down">
            <span className="gradient-text">Creative Developer</span>
            <br />& Designer
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            I build exceptional digital experiences that combine aesthetic design with clean functional code. Let's create something amazing together.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button className="bg-foreground text-background hover:bg-foreground/90 text-lg px-8 py-6">
              View Projects
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6">
              Contact Me
            </Button>
          </div>
          
          <a 
            href="#about" 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 border border-border">
              <ArrowDown className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
      
      {/* Background elements */}
      <div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10"
      >
        <div 
          ref={circleRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl transition-transform duration-300 ease-out"
        ></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-20 left-20 w-12 h-12 rounded-full bg-blue-500/10 animate-float-slow"></div>
        <div className="absolute top-40 right-40 w-16 h-16 rounded-full bg-violet-500/10 animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 left-60 w-20 h-20 rounded-full bg-purple-500/10 animate-float-slow" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute bottom-60 right-20 w-14 h-14 rounded-full bg-blue-300/10 animate-float" style={{ animationDelay: "0.5s" }}></div>
      </div>
    </section>
  );
};

export default Hero;
