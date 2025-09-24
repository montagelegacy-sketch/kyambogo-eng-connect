import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Award, CheckCircle, ArrowRight, Cpu, Zap, Activity } from "lucide-react";

const BiomedicalMechatronics = () => {
  return (
    <>
      {/* Header Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                Bio-Medical & Mechatronics Engineering
              </Badge>
              <h1 className="text-5xl font-bold mb-6">Engineering for Life & Innovation</h1>
              <p className="text-xl leading-relaxed mb-8">
                Combining biology, medicine, mechanics, and electronics to create innovative 
                solutions for healthcare and automated systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Users className="h-5 w-5 mr-2" />
                  <span>200+ Students</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Award className="h-5 w-5 mr-2" />
                  <span>Industry Certified</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/10 rounded-2xl p-8 backdrop-blur">
                <div className="h-full flex items-center justify-center">
                  <Heart className="h-32 w-32 text-white/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Tracks */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kyues-dark mb-4">Dual Program Tracks</h2>
            <p className="text-xl text-muted-foreground">
              Choose your specialization or combine both for multidisciplinary expertise
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Biomedical Engineering */}
            <Card className="hover-lift">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-kyues-dark">Biomedical Engineering</CardTitle>
                    <p className="text-kyues-red">Healthcare Technology Focus</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Apply engineering principles to healthcare challenges, developing medical 
                  devices, diagnostic equipment, and therapeutic solutions.
                </p>
                
                <div>
                  <h4 className="font-semibold text-kyues-dark mb-3">Core Areas:</h4>
                  <div className="space-y-2">
                    {[
                      "Medical Device Design & Development",
                      "Biomedical Instrumentation",
                      "Prosthetics & Rehabilitation Engineering",
                      "Medical Imaging Systems",
                      "Biomaterials & Tissue Engineering",
                      "Clinical Engineering & Healthcare IT"
                    ].map((area, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-kyues-red mr-2 flex-shrink-0" />
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-kyues-dark mb-3">Career Opportunities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Medical Device Companies", "Hospitals", "Research Institutions", "Regulatory Agencies"].map((career, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {career}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mechatronics Engineering */}
            <Card className="hover-lift">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <Cpu className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-kyues-dark">Mechatronics Engineering</CardTitle>
                    <p className="text-kyues-red">Automation & Robotics Focus</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Integrate mechanical, electrical, and software engineering to create 
                  intelligent automated systems and robotic solutions.
                </p>
                
                <div>
                  <h4 className="font-semibold text-kyues-dark mb-3">Core Areas:</h4>
                  <div className="space-y-2">
                    {[
                      "Robotics & Autonomous Systems",
                      "Industrial Automation & Control",
                      "Sensors & Actuator Systems",
                      "Embedded Systems Programming",
                      "Machine Learning for Robotics",
                      "Human-Robot Interaction"
                    ].map((area, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-kyues-red mr-2 flex-shrink-0" />
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-kyues-dark mb-3">Career Opportunities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Manufacturing", "Automotive", "Tech Companies", "Aerospace"].map((career, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {career}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hands-on Learning */}
      <section className="py-20 bg-kyues-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kyues-dark mb-4">Hands-On Learning Experience</h2>
            <p className="text-xl text-muted-foreground">
              State-of-the-art facilities for practical engineering education
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Biomedical Lab",
                icon: Activity,
                equipment: [
                  "ECG & EEG Systems",
                  "Ultrasound Simulators", 
                  "3D Bioprinters",
                  "Cell Culture Equipment",
                  "Medical Device Prototyping Tools"
                ],
                projects: "Design prosthetic limbs, develop diagnostic devices"
              },
              {
                title: "Robotics Lab",
                icon: Cpu,
                equipment: [
                  "Industrial Robot Arms",
                  "Arduino & Raspberry Pi",
                  "3D Printers & CNC Machines",
                  "Sensor Arrays",
                  "Vision Systems"
                ],
                projects: "Build autonomous robots, develop control algorithms"
              },
              {
                title: "Electronics Lab",
                icon: Zap,
                equipment: [
                  "PCB Design Software",
                  "Oscilloscopes & Multimeters",
                  "Signal Generators",
                  "Soldering Stations",
                  "Embedded Development Boards"
                ],
                projects: "Design circuit boards, program microcontrollers"
              }
            ].map((lab, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                    <lab.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center text-kyues-dark">{lab.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Equipment:</h4>
                    <ul className="space-y-1">
                      {lab.equipment.map((item, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-center">
                          <CheckCircle className="h-3 w-3 text-kyues-red mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <h4 className="font-semibold text-sm mb-1">Student Projects:</h4>
                    <p className="text-xs text-muted-foreground italic">{lab.projects}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kyues-dark mb-4">Student Innovation Projects</h2>
            <p className="text-xl text-muted-foreground">
              Real-world projects making impact in healthcare and industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Low-Cost Prosthetic Hand",
                category: "Biomedical",
                description: "3D-printed prosthetic hand with EMG control for amputees",
                impact: "Reduced cost from $10,000 to $500",
                team: "4 students + 1 faculty advisor",
                status: "Patent pending"
              },
              {
                title: "Agricultural Robot",
                category: "Mechatronics", 
                description: "Autonomous planting and weeding robot for small-scale farmers",
                impact: "Increased farming efficiency by 40%",
                team: "6 students + industry partner",
                status: "Pilot testing with farmers"
              },
              {
                title: "Vital Signs Monitor",
                category: "Biomedical",
                description: "Portable device monitoring heart rate, temperature, and oxygen levels",
                impact: "Cost 70% less than imported alternatives",
                team: "5 students + hospital collaboration",
                status: "Clinical trials underway"
              }
            ].map((project, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-kyues-red border-kyues-red">
                      {project.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{project.status}</span>
                  </div>
                  <CardTitle className="text-kyues-dark">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Impact:</span>
                      <span className="text-kyues-red">{project.impact}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Team: {project.team}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="py-20 bg-kyues-gray-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-kyues-dark mb-6">Career Excellence</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Graduates enter high-growth fields with exceptional career prospects 
                in Uganda's expanding healthcare and technology sectors.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-kyues-red mb-3">Growing Industries</h3>
                  <div className="space-y-2">
                    {[
                      "Healthcare Technology (15% annual growth)",
                      "Industrial Automation (20% growth in manufacturing)",
                      "Medical Device Development (emerging market)",
                      "Robotics & AI Applications (high demand)"
                    ].map((industry, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-kyues-red mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{industry}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-gradient-primary text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Employment & Salary Data</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Employment Rate:</h4>
                    <p className="text-3xl font-bold">98%</p>
                    <p className="text-sm opacity-90">Within 6 months of graduation</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Starting Salaries:</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium">Biomedical Engineer</p>
                        <p className="text-xl font-bold">UGX 4M - 6M</p>
                      </div>
                      <div>
                        <p className="font-medium">Mechatronics Engineer</p>
                        <p className="text-xl font-bold">UGX 5M - 8M</p>
                      </div>
                    </div>
                    <p className="text-xs opacity-90 mt-2">Per month, entry level</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Top Employers:</h4>
                    <div className="text-sm space-y-1 opacity-90">
                      <p>• Mulago National Referral Hospital</p>
                      <p>• Case Medical Centre</p>
                      <p>• Mukwano Industries</p>
                      <p>• Kiira Motors Corporation</p>
                      <p>• International NGOs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Engineer Solutions for Life</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our Bio-Medical & Mechatronics Engineering program and create 
            innovative solutions that improve lives and advance technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="kyues-outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-kyues-dark">
              Schedule Lab Tour
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BiomedicalMechatronics;