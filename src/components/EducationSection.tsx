
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="section-spacing px-6 bg-gradient-to-b from-black via-gray-900/20 to-black">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Academic Foundation
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Advanced mechanical engineering education from premier institutions
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <Card className="card-glow hover-lift p-8 transition-all duration-500 group">
            <CardContent className="p-0">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl glass-effect group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground group-hover:text-white transition-colors">
                    Master's Degree, Mechanical Engineering
                  </h3>
                  <p className="text-xl md:text-2xl text-blue-400 mb-3 font-semibold">Arizona State University</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Aug 2023 - May 2025
                    </span>
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      GPA: 3.5/4.0
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-glow hover-lift p-8 transition-all duration-500 group">
            <CardContent className="p-0">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl glass-effect group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground group-hover:text-white transition-colors">
                    Bachelor of Engineering, Mechanical Engineering
                  </h3>
                  <p className="text-xl md:text-2xl text-purple-400 mb-3 font-semibold">
                    Sathyabama Institute of Science & Technology, Chennai
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      Jul 2019 - Jul 2023
                    </span>
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Grade: 8.25/10
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
