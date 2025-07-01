
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Multiphysics CFD Analysis Under Variable Gravity Conditions",
      description: "Simulated internal and external flows using ANSYS Fluent, analyzing buoyancy, heat transfer, and compressible flow under Martian gravity, oscillating fluid columns, and nozzle dynamics; validated results with hand calculations and visualized velocity, temperature, Mach profiles across varied materials and geometries.",
      image: "https://assets.skyfilabs.com/images/blog/flow-simulation-and-shape-optimization-of-airfoil.webp",
      technologies: ["ANSYS Fluent","Solidworks","MATLAB", "CFD", "Data Visualization"],
      category: "Aerospace",
      viewProjLink:"https://drive.google.com/file/d/1SZkcZKcQWPo3GFg7IloJmGDQF0hGTblR/view?usp=drive_link"
    },
    {
      title: "Arduino-Based Low-Cost Tensile Testing Machine",
      description: "Designed and built an Arduino-based tensile testing machine with integrated load sensing and motor control to perform real-time tensile and fatigue testing, enabling accurate material strength analysis through a compact, low-cost mechatronic system.",
      image: "https://images.prismic.io/xometry-marketing/0147ebd0-f6ac-4e15-9b93-40eb076623ce_tensile-test.jpg?auto=compress%2Cformat&rect=166%2C0%2C667%2C667&w=486&h=486&fit=max&fm=webp",
      technologies: ["SolidWorks", "Arduino Programming"],
      category: "Mechatronics",
      viewProjLink:"https://drive.google.com/file/d/1YCkSzgtS-BJdYdUHEAgwSC3uMF0yeRDp/view?usp=sharing"
    },
    {
      title: "Thermal Modeling in LPBF for Additive Manufacturing",
      description: "Conducted FEA-based thermal simulations in ANSYS for FDM using AlF357 and AlSi7Mg, evaluating heat flux, temperature response, and material efficiency to optimize additive manufacturing quality and performance.",
      image: "https://plus.unsplash.com/premium_photo-1715786199807-ed84dc311939?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["ANSYS", "COMSOL", "FEA Simulation"],
      category: "Additive Manufacturing",
      viewProjLink:"https://drive.google.com/file/d/1jYxqkLJYszBSwLTz4POqNK91ByN5lQZy/view?usp=sharing"
    },
    // { drive lo upload chesi okasri link istava oka image di
    //   title: "Robotics Integration for Automated Assembly",
    //   description: "Development of automated assembly systems integrating robotics and control systems for enhanced manufacturing efficiency and precision.",
    //   image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    //   technologies: ["Arduino", "Automation", "Assembly", "Control Systems"],
    //   category: "Automation"
    // },
    // {
    //   title: "Energy Efficiency Analysis of HVAC Systems",
    //   description: "Optimization of HVAC systems through comprehensive energy analysis and thermal modeling, achieving significant energy savings in industrial applications.",
    //   image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    //   technologies: ["COMSOL", "Energy Analysis", "HVAC", "Optimization"],
    //   category: "Energy"
    // },
    // {
    //   title: "Smart Monitoring System for Industrial Machines",
    //   description: "Development of IoT-based monitoring systems for predictive maintenance and real-time performance optimization of industrial machinery.",
    //   image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
    //   technologies: ["Python", "IoT", "Monitoring", "Predictive Maintenance"],
    //   category: "Technology"
    // }
  ];

  return (
    <section id="projects" className="section-spacing px-6 bg-gradient-to-b from-gray-900/20 via-black to-black">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Cutting-edge engineering projects demonstrating advanced technical solutions and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="card-glow hover-lift group overflow-hidden transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full glass-effect text-xs font-medium text-white">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 rounded-full glass-effect text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a href={project.viewProjLink} target="_blank"
                  className="w-full">
                    <Button size="sm" variant="outline" className="flex-1 glass-effect hover:bg-white/10">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    {/* <Button size="sm" variant="ghost" className="glass-effect hover:bg-white/10">
                      <Github className="w-4 h-4" />
                    </Button> */}
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
