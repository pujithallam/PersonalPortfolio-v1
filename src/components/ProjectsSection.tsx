
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "CFD Analysis of Complex Geometries",
      description: "Advanced computational fluid dynamics analysis for complex mechanical systems, optimizing flow patterns and thermal performance using ANSYS Fluent and COMSOL.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      technologies: ["ANSYS Fluent", "COMSOL", "CFD", "Thermal Analysis"],
      category: "Analysis"
    },
    {
      title: "Design and Development of Tensile Testing Machine",
      description: "Complete design and manufacturing of a custom tensile testing machine for material characterization, incorporating force calibration and automated data collection systems.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
      technologies: ["SolidWorks", "Mechanical Design", "Force Calibration", "Testing"],
      category: "Design"
    },
    {
      title: "Thermal Analysis of Additive Manufacturing",
      description: "Comprehensive thermal and structural analysis of additive manufacturing processes using ANSYS, optimizing print parameters for enhanced quality and reduced warpage.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      technologies: ["ANSYS", "Thermal Analysis", "Structural Analysis", "3D Printing"],
      category: "Manufacturing"
    },
    {
      title: "Robotics Integration for Automated Assembly",
      description: "Development of automated assembly systems integrating robotics and control systems for enhanced manufacturing efficiency and precision.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      technologies: ["Arduino", "Automation", "Assembly", "Control Systems"],
      category: "Automation"
    },
    {
      title: "Energy Efficiency Analysis of HVAC Systems",
      description: "Optimization of HVAC systems through comprehensive energy analysis and thermal modeling, achieving significant energy savings in industrial applications.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      technologies: ["COMSOL", "Energy Analysis", "HVAC", "Optimization"],
      category: "Energy"
    },
    {
      title: "Smart Monitoring System for Industrial Machines",
      description: "Development of IoT-based monitoring systems for predictive maintenance and real-time performance optimization of industrial machinery.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      technologies: ["Python", "IoT", "Monitoring", "Predictive Maintenance"],
      category: "Technology"
    }
  ];

  return (
    <section id="projects" className="section-spacing px-6 bg-gradient-to-b from-gray-900/20 via-black to-black">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Innovation Showcase
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
                  <Button size="sm" variant="outline" className="flex-1 glass-effect hover:bg-white/10">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button size="sm" variant="ghost" className="glass-effect hover:bg-white/10">
                    <Github className="w-4 h-4" />
                  </Button>
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
