
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-10",
        scrolled 
          ? "py-4 bg-background/70 backdrop-blur-xl shadow-md border-b border-white/5" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          className="text-2xl font-semibold gradient-text"
        >
          Kanishk
        </a>
        
        <div className="hidden md:flex gap-8 items-center">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <Button className="ml-4 bg-primary/90 hover:bg-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center gap-2">
            <FileText size={16} />
            <span>Resume</span>
          </Button>
        </div>
        
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ 
  href, 
  children 
}: { 
  href: string; 
  children: React.ReactNode 
}) => {
  return (
    <a 
      href={href} 
      className="text-foreground/80 hover:text-foreground relative after:absolute after:bg-primary after:h-[2px] after:w-0 after:bottom-[-2px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </a>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <Button 
        variant="ghost" 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-10 h-10 p-2 bg-white/5 rounded-md border border-white/10"
      >
        <div className={`flex flex-col justify-center items-center gap-[5px] w-full h-full transition-all ${isOpen ? 'gap-0' : ''}`}>
          <span className={`bg-foreground h-[2px] w-5 transition-all ${isOpen ? 'rotate-45 translate-y-[1px]' : ''}`}></span>
          <span className={`bg-foreground h-[2px] w-5 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`bg-foreground h-[2px] w-5 transition-all ${isOpen ? '-rotate-45 -translate-y-[1px]' : ''}`}></span>
        </div>
      </Button>
      
      {isOpen && (
        <div className="absolute top-16 right-0 bg-background/90 backdrop-blur-xl border border-white/10 p-4 rounded-lg shadow-lg min-w-[200px] flex flex-col gap-4 animate-fade-in fancy-border">
          <a href="#home" className="p-2 hover:bg-white/5 rounded-md" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="p-2 hover:bg-white/5 rounded-md" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" className="p-2 hover:bg-white/5 rounded-md" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="p-2 hover:bg-white/5 rounded-md" onClick={() => setIsOpen(false)}>Contact</a>
          <Button className="bg-primary/90 hover:bg-primary flex items-center gap-2">
            <FileText size={16} />
            <span>Resume</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
