
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss opportunities and collaborate on innovative engineering projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                or share insights about mechanical engineering and design. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "pujithallam@gmail.com",
                  href: "mailto:pujithallam@gmail.com"
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+1 (480) 942-4991",
                  href: "tel:+14809424991"
                },
                {
                  icon: MapPin,
                  title: "Location",
                  value: "Tempe, but available for opportunities across US",
                  href: "#"
                }
              ].map(({ icon: Icon, title, value, href }) => (
                <Card key={title} className="hover:shadow-md transition-all duration-300 border-0 bg-gradient-to-br from-card to-background">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                          {title}
                        </p>
                        <a 
                          href={href}
                          className="text-lg font-semibold hover:text-primary transition-colors"
                        >
                          {value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="border-0 bg-gradient-to-br from-card to-background shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="John" className="border-0 bg-muted/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Doe" className="border-0 bg-muted/50" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="john.doe@example.com" className="border-0 bg-muted/50" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="Let's discuss opportunities" className="border-0 bg-muted/50" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className="border-0 bg-muted/50 resize-none"
                  />
                </div>
                
                <Button className="w-full group hover:scale-105 transition-all duration-300">
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
