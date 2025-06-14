
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-spacing px-6 bg-gradient-to-b from-black via-black/95 to-black">
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Engineering Excellence
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Transforming complex challenges into innovative solutions through precision engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <Card className="card-glow hover-lift p-8 transition-all duration-500">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-16 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                      Advanced Engineering Solutions
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Specializing in product design, rapid prototyping, and solving complex mechanical 
                      challenges. My expertise consistently enhances performance in dynamic manufacturing 
                      environments through optimized production workflows, precision CAD modeling, and 
                      comprehensive industrial safety protocols.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-glow hover-lift p-8 transition-all duration-500">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-16 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                      Cutting-Edge Technical Mastery
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Leveraging industry-leading tools including ANSYS (Fluent, Structural, Thermal), 
                      SolidWorks, MATLAB, and COMSOL to drive efficiency and innovation. My analytical 
                      approach combines creative problem-solving with deep expertise in FEA, CFD, 
                      and Lean Manufacturing principles.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className={`relative transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="aspect-square rounded-3xl glass-effect p-1 hover-lift">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=700&h=700&fit=crop"
                alt="Advanced engineering workspace with CAD modeling and analysis tools"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-xl animate-float" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
