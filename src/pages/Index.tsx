
import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Project Data
const projects = [
  {
    id: 1,
    title: "Huliya",
    description: "A Python-based facial recognition system that uses machine learning algorithms to identify and analyze facial features with high accuracy.",
    techStack: ["Python", "TensorFlow", "OpenCV", "Flask"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    link: "#",
    category: "Python Project"
  },
  {
    id: 2,
    title: "MAKE.COM",
    description: "Enterprise integration platform built with Java that connects different apps and services, automating complex workflows across platforms.",
    techStack: ["Java", "Spring Boot", "API", "Microservices"],
    image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    link: "#",
    category: "Java Project"
  },
  {
    id: 3,
    title: "OnlyJobs",
    description: "Full stack job search platform with personalized matching algorithm connecting job seekers with potential employers, built from scratch.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    image: "https://images.unsplash.com/photo-1573164574511-73c773193279?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    link: "#",
    category: "Full Stack Project"
  },
  {
    id: 4,
    title: "Brainy Breakdown",
    description: "Interactive mental health resource platform showcasing backend connectivity with dynamic user experience and personalized tracking.",
    techStack: ["React", "TypeScript", "PHP", "MySQL"],
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    link: "#",
    category: "Full Stack Project"
  },
  {
    id: 5,
    title: "AI Chatbot Newsletter",
    description: "Interactive newsletter webpage with AI chatbot integration providing personalized content recommendations and real-time user assistance.",
    techStack: ["JavaScript", "Python", "TensorFlow", "HTML/CSS"],
    image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    link: "#",
    category: "AI Project"
  },
  {
    id: 6,
    title: "JHABUA Biogas Plant",
    description: "Sustainable energy solution for farmers, featuring interactive dashboard for monitoring and educational content on biogas benefits.",
    techStack: ["React", "Chart.js", "Node.js", "IoT"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    link: "#",
    category: "Sustainability Project"
  }
];

const Index = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  // Custom cursor effect
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.opacity = "1";
      cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
    };
    
    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
    };
    
    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
    };
    
    // Add hover effect for interactive elements
    const handleLinkHover = () => {
      cursor.classList.add("scale-150");
    };
    
    const handleLinkLeave = () => {
      cursor.classList.remove("scale-150");
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    // Apply hover effects to all links and buttons
    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleLinkHover);
      el.addEventListener("mouseleave", handleLinkLeave);
    });
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleLinkHover);
        el.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, []);
  
  // Initialize intersection observer for reveal animations
  useEffect(() => {
    // Add a CSS class to the body to enable the animation transition
    document.body.classList.add("has-scroll-animation");
    
    // Handle reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Apply to all elements with reveal class
    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  // Add smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        
        const targetId = target.getAttribute("href");
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);
  
  return (
    <div className="relative bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <About />
      
      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 relative bg-secondary/10">
        <div className="noise-overlay"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Explore my recent work across different technologies and platforms, showcasing innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                image={project.image}
                link={project.link}
                index={index}
                category={project.category}
              />
            ))}
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute top-40 right-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </section>
      
      <Contact />
      <Footer />
      
      {/* Custom cursor */}
      <div 
        ref={cursorRef}
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference bg-white opacity-0 transition-all duration-200 ease-out"
      ></div>
    </div>
  );
};

export default Index;
