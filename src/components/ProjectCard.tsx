
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  link: string;
  index: number;
  category: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  image,
  link,
  index,
  category
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate animation delay based on index
  const animationDelay = `${index * 0.1}s`;
  
  return (
    <div 
      className="reveal transition-all duration-700"
      style={{ animationDelay }}
    >
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className={cn(
          "block group perspective-container",
          index % 2 === 0 ? "md:translate-y-12" : ""
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={cn(
            "parallax-card overflow-hidden rounded-xl bg-card border border-border/40 hover:border-border/80 shadow-lg hover:shadow-xl",
            isHovered ? "transform-gpu scale-[1.02]" : ""
          )}
          style={{
            transform: isHovered ? "rotateX(2deg) rotateY(2deg)" : "rotateX(0) rotateY(0)"
          }}
        >
          <div className="relative overflow-hidden aspect-[16/9]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
              {category}
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors duration-300">
              {title}
            </h3>
            
            <p className="text-foreground/70 text-sm mb-4">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="text-xs bg-secondary px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
