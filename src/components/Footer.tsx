
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/70 text-sm">
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-8">
            <a 
              href="#" 
              className="text-foreground/70 hover:text-foreground transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-foreground/70 hover:text-foreground transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a 
              href="#"
              className="text-foreground/70 hover:text-foreground transition-colors text-sm" 
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
