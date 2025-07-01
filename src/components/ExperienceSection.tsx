
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Engineering Intern",
      company: "Synergies Casting Limited",
      location: "Visakhapatnam, India",
      period: "March 2021 - August 2021",
      description: "Specialized in foundry operations and quality control for alloy wheel manufacturing, focusing on wheel distortion monitoring and process optimization.",
      achievements: [
        "Analyzed and monitored wheel distortion in foundry operations across casting, gate cutting, and heat treatment processes",
        "Conducted comprehensive dimensional analysis to ensure compliance with tolerance limits and improve production quality",
        "Gained hands-on experience with die casting, NDT (X-ray), and heat treatment for alloy wheel manufacturing",
        "Suggested process optimizations that reduced distortion and enhanced manufacturing efficiency",
        "Collaborated on data-driven quality improvements, contributing to significant reductions in scrap and rework",
        "Worked with engineering teams to identify and implement quality control measures for defect reduction"
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
