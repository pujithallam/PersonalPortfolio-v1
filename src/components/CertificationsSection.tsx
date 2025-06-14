
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Certified Lean Six Sigma Green Belt",
      issuer: "Professional Certification",
      date: "2023",
      category: "Process"
    },
    {
      title: "Additive Manufacturing Specialization",
      issuer: "Industry Certification",
      date: "2023",
      category: "Manufacturing"
    },
    {
      title: "The Complete AutoCAD 2018-21 Course",
      issuer: "Design Software",
      date: "2022",
      category: "Technical"
    },
    {
      title: "MATLAB Onramp",
      issuer: "MathWorks",
      date: "2022",
      category: "Programming"
    },
    {
      title: "Semiconductor Fabrication",
      issuer: "Industry Training",
      date: "2022",
      category: "Manufacturing"
    },
    {
      title: "Supply Chain Management",
      issuer: "Professional Development",
      date: "2021",
      category: "Management"
    },
    {
      title: "Introduction to Geometric Dimensioning and Tolerance",
      issuer: "Technical Training",
      date: "2021",
      category: "Technical"
    },
    {
      title: "International Automotive Industry 4.0 Training",
      issuer: "Automotive Industry",
      date: "2021",
      category: "Industry"
    },
    {
      title: "Virtual Assessment Program on Alternate Fuels",
      issuer: "Energy Sector",
      date: "2021",
      category: "Energy"
    },
    {
      title: "Engineering Project Management",
      issuer: "Professional Development",
      date: "2021",
      category: "Management"
    },
    {
      title: "Interpersonal Skills",
      issuer: "Soft Skills Training",
      date: "2021",
      category: "Professional"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Process: "bg-blue-500",
      Manufacturing: "bg-green-500",
      Technical: "bg-purple-500",
      Programming: "bg-orange-500",
      Management: "bg-red-500",
      Industry: "bg-cyan-500",
      Energy: "bg-yellow-500",
      Professional: "bg-pink-500"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500";
  };

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Certifications & Milestones</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development across diverse engineering domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-card to-muted/20"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${getCategoryColor(cert.category)} flex items-center justify-center`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {cert.date}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-3">
                  {cert.issuer}
                </p>
                
                <Badge 
                  variant="secondary" 
                  className="text-xs"
                >
                  {cert.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
