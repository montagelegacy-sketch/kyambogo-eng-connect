import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Users, Award, CheckCircle, ArrowRight, Cpu, Battery, Radio } from "lucide-react";

const ElectricalEngineering = () => {
  return (
    <>
      {/* Header Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                Department of Electrical Engineering
              </Badge>
              <h1 className="text-5xl font-bold mb-6">Powering Uganda's Future</h1>
              <p className="text-xl leading-relaxed mb-8">
                Electrical Engineering at Kyambogo University focuses on power systems, 
                electronics, telecommunications, and renewable energy technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Users className="h-5 w-5 mr-2" />
                  <span>350+ Students</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Award className="h-5 w-5 mr-2" />
                  <span>IEE Accredited</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/10 rounded-2xl p-8 backdrop-blur">
                <div className="h-full flex items-center justify-center">
                  <Zap className="h-32 w-32 text-white/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kyues-dark mb-4">Specialization Areas</h2>
            <p className="text-xl text-muted-foreground">
              Four major tracks to match your interests and career goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Power Systems",
                desc: "Generation, transmission, and distribution of electrical energy",
                courses: ["Power Generation", "Grid Management", "Renewable Energy", "Smart Grids"]
              },
              {
                icon: Cpu,
                title: "Electronics",
                desc: "Design and development of electronic circuits and systems",
                courses: ["Digital Electronics", "Microprocessors", "VLSI Design", "Embedded Systems"]
              },
              {
                icon: Radio,
                title: "Telecommunications",
                desc: "Communication systems and network technologies",
                courses: ["Signal Processing", "Wireless Networks", "Fiber Optics", "5G Technology"]
              },
              {
                icon: Battery,
                title: "Control Systems",
                desc: "Automation and control of electrical systems",
                courses: ["PLC Programming", "Robotics", "Process Control", "Industrial Automation"]
              }
            ].map((spec, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                    <spec.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center text-kyues-dark">{spec.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 text-center">{spec.desc}</p>
                  <div className="space-y-2">
                    {spec.courses.map((course, idx) => (
                      <div key={idx} className="flex items-center text-xs">
                        <CheckCircle className="h-3 w-3 text-kyues-red mr-2 flex-shrink-0" />
                        {course}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratory Facilities */}
      <section className="py-20 bg-kyues-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kyues-dark mb-4">State-of-the-Art Laboratories</h2>
            <p className="text-xl text-muted-foreground">
              Hands-on learning with modern equipment and technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Power Electronics Lab",
                equipment: ["Power Analyzers", "Motor Drives", "Inverters", "Oscilloscopes"],
                capacity: "30 students"
              },
              {
                name: "Communications Lab", 
                equipment: ["Signal Generators", "Spectrum Analyzers", "Network Analyzers", "RF Equipment"],
                capacity: "25 students"
              },
              {
                name: "Control Systems Lab",
                equipment: ["PLCs", "SCADA Systems", "Servo Motors", "Process Trainers"],
                capacity: "20 students"
              }
            ].map((lab, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-kyues-red">{lab.name}</CardTitle>
                  <p className="text-muted-foreground">Capacity: {lab.capacity}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Key Equipment:</h4>
                  <ul className="space-y-2">
                    {lab.equipment.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-kyues-red mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-kyues-dark mb-6">Career Opportunities</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Electrical engineering opens doors to diverse and high-demand career paths 
                across multiple industries in Uganda and beyond.
              </p>
              
              <div className="space-y-4">
                {[
                  "Power Generation Companies (UEGCL, Bujagali Energy)",
                  "Telecommunications (MTN, Airtel, Uganda Telecom)", 
                  "Manufacturing & Industrial Companies",
                  "Consulting Engineering Firms",
                  "Government Agencies (MEMD, UCC)",
                  "Technology Startups & Innovation Hubs"
                ].map((career, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-kyues-red mr-3 flex-shrink-0" />
                    <span>{career}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Card className="bg-gradient-primary text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Salary Expectations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Entry Level (0-2 years)</h4>
                      <p className="text-2xl font-bold">UGX 3M - 5M</p>
                      <p className="text-sm opacity-90">Per month</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Mid-Level (3-7 years)</h4>
                      <p className="text-2xl font-bold">UGX 6M - 12M</p>
                      <p className="text-sm opacity-90">Per month</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Senior Level (8+ years)</h4>
                      <p className="text-2xl font-bold">UGX 15M+</p>
                      <p className="text-sm opacity-90">Per month</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 bg-kyues-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kyues-dark mb-4">Student Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Hear from our alumni making impact in the electrical engineering field
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Eng. Peter Ssali",
                position: "Senior Electrical Engineer at UEGCL",
                year: "Class of 2020",
                quote: "The practical training I received prepared me for the real-world challenges in power generation.",
                project: "Led the electrical design for Karuma Hydropower Project"
              },
              {
                name: "Sarah Nakato",
                position: "Telecommunications Engineer at MTN",
                year: "Class of 2021", 
                quote: "The telecommunications track gave me expertise in 5G networks that's highly valued in the industry.",
                project: "Deployed 5G network infrastructure in Kampala"
              },
              {
                name: "David Okello",
                position: "Control Systems Specialist",
                year: "Class of 2019",
                quote: "The automation and control systems knowledge opened opportunities in manufacturing industries.",
                project: "Automated production line for Mukwano Industries"
              }
            ].map((story, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center text-kyues-dark">{story.name}</CardTitle>
                  <p className="text-center text-kyues-red font-medium">{story.position}</p>
                  <p className="text-center text-muted-foreground text-sm">{story.year}</p>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground italic">"{story.quote}"</p>
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm font-semibold text-kyues-dark">Notable Project:</p>
                    <p className="text-sm text-muted-foreground">{story.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Energize Your Future</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our Electrical Engineering program and power Uganda's technological advancement 
            with cutting-edge skills and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Apply Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="kyues-outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-kyues-dark">
              Contact Department
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ElectricalEngineering;