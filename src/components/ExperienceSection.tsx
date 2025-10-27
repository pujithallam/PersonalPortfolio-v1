
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Engineering Intern",
      company: "Synergies Casting Limited",
      location: "Visakhapatnam, India",
      period: "March 2021 - February 2022",
      description: "Specialized in foundry operations and quality control for alloy wheel manufacturing, focusing on wheel distortion monitoring and process optimization.",
      achievements: [
        "Conducted dimensional inspections and tolerance analysis using GD&T, ensuring compliance with engineering drawings and reducing out-of-spec components by 15%.",
        "Performed root cause analysis on wheel distortion during casting using Lean Manufacturing techniques improved production yield by 12%",
        "Operated and monitored die casting, heat treatment, using statistical process control (SPC) to maintain consistency and improve part reliability",
        "SuSupported equipment installation and commissioning, verifying mechanical alignment and process stability for foundry systems",
        "Implemented quality control measures and preventive maintenance schedules with cross-functional teams, reducing downtime by 20%",
        "Documented process flow improvements and inspection results using Excel dashboards and SAP, creating traceable manufacturing records"
      ]
    },
    {
      title: "Research aide",
      company: "Arizona State University",
      location: "Tempe, Arizona",
      period: "June 2025 - Present",
      description: "Specialized in digital twin development and simulation-driven process optimization, enhancing mechanical system performance and thermal reliability in manufacturing environments.",
      achievements: [
        "Designed and simulated digital twins of manufacturing systems using SolidWorks, ANSYS Fluent, and MATLAB, increasing process visualization accuracy by 25%.",
        "Applied CFD and thermal modeling techniques in COMSOL and ANSYS to optimize energy flow and heat dissipation across components, improving reliability by 18%.",
        "Automated quality assessment workflows using Python and Minitab, reducing manual inspection time by 30% while maintaining high precision",
        "Developed 3D autoencoder models for defect detection, integrating machine learning and supervised learning principles to identify manufacturing faults in real time",
        "Prepared technical documentation, SOPs, and reports on equipment integration, mechanical alignment, and process improvement using the Microsoft Suite and SAP BOM Management tools.",
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through hands-on engineering experience and manufacturing excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={experience.title} className="relative">
              <div className="relative flex items-start">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg mr-8 shadow-lg">
                  {index + 1}
                </div>
                
                <Card className="flex-1 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-background">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">{experience.title}</h3>
                        <p className="text-lg text-primary font-medium">{experience.company}</p>
                        <p className="text-sm text-muted-foreground">{experience.location}</p>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0">
                        {experience.period}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                        Key Achievements & Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
