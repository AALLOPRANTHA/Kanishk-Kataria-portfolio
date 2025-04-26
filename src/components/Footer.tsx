
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-secondary/10 relative overflow-hidden border-t border-white/5">
      <div className="noise-overlay"></div>
      <div className="floating-grid opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="#home" className="inline-block">
              <h2 className="text-2xl font-bold gradient-text mb-2">Kanishk Kataria</h2>
            </a>
            <p className="text-foreground/50 text-sm max-w-md">
              Full-stack developer and entrepreneur crafting impactful digital experiences
            </p>
          </div>
          
          <div className="flex gap-8 items-center">
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:kanishk.kataria@bcah.christuniversity.in" 
              className="text-foreground/70 hover:text-primary transition-colors p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-foreground/50 text-sm">
              © {currentYear} Kanishk Kataria. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-8 mt-4 md:mt-0">
            <a 
              href="#home" 
              className="text-foreground/50 hover:text-foreground transition-colors text-sm"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-foreground/50 hover:text-foreground transition-colors text-sm"
            >
              About
            </a>
            <a 
              href="#projects"
              className="text-foreground/50 hover:text-foreground transition-colors text-sm" 
            >
              Projects
            </a>
            <a 
              href="#contact"
              className="text-foreground/50 hover:text-foreground transition-colors text-sm" 
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
