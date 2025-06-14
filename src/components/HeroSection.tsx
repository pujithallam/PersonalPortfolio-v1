
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  // Calculate scale based on scroll position
  const nameScale = Math.max(0.8, 1 - scrollY * 0.0003);
  const nameOpacity = Math.max(0.3, 1 - scrollY * 0.001);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black to-transparent opacity-50" />
      
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <div 
            className="apple-name-glow mb-6 transition-all duration-300 ease-out"
            data-text="Pujith Sai Eswar Allam"
            style={{
              // transform: `scale(${nameScale})`,
              opacity: nameOpacity,
              fontSize: `clamp(4.3rem, ${4 + scrollY * 0.01}vw, 6rem)`,
              ['--glow-opacity']: 0.8 + Math.min(scrollY * 0.001, 0.4)
            } as React.CSSProperties}
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              Pujith Sai Eswar Allam
            </h1>
          </div>
          
          <div className="animate-fade-in-up animate-delayed-1">
            <p className="text-2xl md:text-3xl text-foreground mb-4 max-w-4xl mx-auto font-medium">
              Innovative Mechanical Engineer Driving Excellence
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Specialized in optimizing production workflows, advanced CAD modeling, and industrial safety. 
              Leveraging cutting-edge tools like ANSYS, SolidWorks, and MATLAB to drive efficiency and innovation 
              in dynamic manufacturing environments.
            </p>
          </div>
          
          <div className="animate-fade-in-up animate-delayed-2 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={() => scrollToSection("projects")}
              size="lg" 
              className="text-white hover:text-black group glass-effect hover-lift text-lg px-8 py-4 font-medium"
            >
              Explore My Work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline" 
              size="lg"
              className="glass-effect hover-lift text-lg px-8 py-4 font-medium border-white/20 hover:bg-white/10"
            >
              Get In Touch
            </Button>
          </div>

          <div className="animate-fade-in-up animate-delayed-3 flex justify-center space-x-6">
            {[
              { icon: Github, href: "https://github.com/pujithallam", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/pujithallam/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:pujithallam@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                className="p-4 rounded-full glass-effect hover-lift group transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
