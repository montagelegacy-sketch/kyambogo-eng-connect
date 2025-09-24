import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cog, Users, Award, CheckCircle, ArrowRight, Wrench, Zap, Thermometer } from "lucide-react";

const MechanicalEngineering = () => {
  return (
    <>
      {/* Header Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                Department of Mechanical Engineering
              </Badge>
              <h1 className="text-5xl font-bold mb-6">Engineering Motion & Energy</h1>
              <p className="text-xl leading-relaxed mb-8">
                Mechanical Engineering at Kyambogo University develops engineers who design, 
                manufacture, and maintain mechanical systems that power modern industry.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Users className="h-5 w-5 mr-2" />
                  <span>450+ Students</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Award className="h-5 w-5 mr-2" />
                  <span>ASME Recognized</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/10 rounded-2xl p-8 backdrop-blur">
                <div className="h-full flex items-center justify-center">
                  <Cog className="h-32 w-32 text-white/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kyues-dark mb-4">Core Engineering Areas</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive curriculum covering all aspects of mechanical engineering
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Thermometer,
                title: "Thermodynamics",
                desc: "Energy conversion, heat transfer, and power systems",
                topics: ["Heat Engines", "Refrigeration", "HVAC Systems", "Energy Efficiency"]
              },
              {
                icon: Wrench,
                title: "Manufacturing",
                desc: "Production processes and industrial manufacturing",
                topics: ["CNC Machining", "3D Printing", "Quality Control", "Lean Manufacturing"]
              },
              {
                icon: Cog,
                title: "Machine Design",
                desc: "Mechanical systems design and analysis",
                topics: ["CAD/CAM", "Finite Element Analysis", "Material Selection", "Design Optimization"]
              },
              {
                icon: Zap,
                title: "Automation",
                desc: "Robotics and automated manufacturing systems",
                topics: ["Industrial Robotics", "PLC Programming", "Sensors & Actuators", "AI in Manufacturing"]
              }
            ].map((area, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center text-kyues-dark">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 text-center">{area.desc}</p>
                  <div className="space-y-2">
                    {area.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center text-xs">
                        <CheckCircle className="h-3 w-3 text-kyues-red mr-2 flex-shrink-0" />
                        {topic}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section className="py-20 bg-kyues-gray-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-kyues-dark mb-6">Research & Innovation</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-kyues-red mb-3">Active Research Areas</h3>
                  <ul className="space-y-2">
                    {[
                      "Renewable Energy Systems & Solar Technology",
                      "Advanced Manufacturing & 3D Printing",
                      "Automotive Engineering & Electric Vehicles", 
                      "Biomechanical Engineering & Medical Devices",
                      "Robotics & Industrial Automation"
                    ].map((research, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-kyues-red mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{research}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-kyues-red mb-3">Innovation Projects</h3>
                  <div className="space-y-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-2">Solar-Powered Irrigation System</h4>
                      <p className="text-sm text-muted-foreground">
                        Student-led project developing low-cost irrigation solutions for rural farmers
                      </p>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-2">Electric Motorcycle Prototype</h4>
                      <p className="text-sm text-muted-foreground">
                        Collaborative project with industry to develop affordable electric transportation
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-gradient-primary text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Department Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">450+</div>
                      <div className="text-sm opacity-90">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">28</div>
                      <div className="text-sm opacity-90">Faculty</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">12</div>
                      <div className="text-sm opacity-90">Laboratories</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">25+</div>
                      <div className="text-sm opacity-90">Research Projects</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <h4 className="font-semibold mb-3">Industry Partnerships</h4>
                    <div className="text-sm space-y-1 opacity-90">
                      <p>• Mukwano Industries</p>
                      <p>• Steel & Tube Industries</p>
                      <p>• Roofings Group</p>
                      <p>• Kiira Motors Corporation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Facilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kyues-dark mb-4">World-Class Facilities</h2>
            <p className="text-xl text-muted-foreground">
              Modern laboratories equipped with industry-standard equipment
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Manufacturing Lab",
                description: "CNC machines, lathes, milling machines, and 3D printers",
                equipment: ["CNC Lathe", "Milling Machine", "3D Printers", "Welding Equipment"]
              },
              {
                name: "Thermodynamics Lab",
                description: "Heat engines, refrigeration systems, and thermal analysis",
                equipment: ["Heat Pump Trainer", "IC Engine Test Rig", "Steam Plant Simulator", "Calorimeters"]
              },
              {
                name: "CAD/CAM Lab",
                description: "Computer-aided design and manufacturing software",
                equipment: ["SolidWorks", "AutoCAD", "ANSYS", "MATLAB/Simulink"]
              }
            ].map((lab, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-kyues-red">{lab.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">{lab.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Key Equipment:</h4>
                  <ul className="space-y-2">
                    {lab.equipment.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-kyues-red mr-2 flex-shrink-0" />
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

      {/* Career Outcomes */}
      <section className="py-20 bg-kyues-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kyues-dark mb-4">Career Success</h2>
            <p className="text-xl text-muted-foreground">
              Our graduates excel in diverse mechanical engineering roles
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                role: "Design Engineer",
                industries: ["Automotive", "Aerospace", "Consumer Products"],
                salary: "UGX 4M - 7M",
                growth: "High demand in manufacturing sector"
              },
              {
                role: "Production Manager", 
                industries: ["Manufacturing", "Oil & Gas", "Food Processing"],
                salary: "UGX 8M - 15M",
                growth: "Leadership roles in industrial companies"
              },
              {
                role: "Project Engineer",
                industries: ["Construction", "Energy", "Infrastructure"],
                salary: "UGX 5M - 10M", 
                growth: "Opportunities in major infrastructure projects"
              }
            ].map((career, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-kyues-red">{career.role}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Industries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.industries.map((industry, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Salary Range:</h4>
                    <p className="text-kyues-red font-bold">{career.salary}</p>
                    <p className="text-muted-foreground text-xs">Per month</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Growth Outlook:</h4>
                    <p className="text-muted-foreground text-sm">{career.growth}</p>
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
          <h2 className="text-4xl font-bold mb-6">Engineer the Future of Industry</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our Mechanical Engineering program and gain the skills to design, 
            build, and innovate in Uganda's growing industrial sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="kyues-outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-kyues-dark">
              Visit Our Labs
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MechanicalEngineering;