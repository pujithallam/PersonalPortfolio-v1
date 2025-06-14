import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Design & Modeling",
      skills: ["AutoCAD", "SolidWorks", "Fusion360", "Tinkercad", "Mechanical Design", "GD&T"],
      color: "bg-blue-500"
    },
    {
      title: "Analysis Tools",
      skills: ["ANSYS Fluent", "ANSYS Structural", "ANSYS Thermal", "Ls Dyna", "COMSOL Multiphysics", "FEA", "CFD"],
      color: "bg-green-500"
    },
    {
      title: "Programming & Data",
      skills: ["Python", "MATLAB", "Arduino", "Microsoft Excel", "Microsoft PowerPoint", "Data Handling"],
      color: "bg-purple-500"
    },
    {
      title: "Manufacturing & Testing",
      skills: ["Lean Manufacturing", "SPC", "Tensile Testing", "Fatigue Testing", "Root Cause Analysis", "Assembly"],
      color: "bg-orange-500"
    },
    {
      title: "Technical Skills",
      skills: ["Semiconductor Manufacturing", "Closed-Loop Control", "Force Calibration", "Testing & Validation"],
      color: "bg-red-500"
    },
    {
      title: "Soft Skills",
      skills: ["Project Management", "Technical Leadership", "Problem Solving", "Team Collaboration", "Task Delegation"],
      color: "bg-cyan-500"
    }
  ];

  return (
    <section id="skills" className="section-spacing px-6 bg-gradient-to-b from-black to-gray-900/20">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Technical Mastery
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive expertise across advanced engineering tools and methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="card-glow hover-lift p-8 transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-xl">{category.title[0]}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-white transition-colors">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skill} 
                      className="px-3 py-2 rounded-full glass-effect text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
