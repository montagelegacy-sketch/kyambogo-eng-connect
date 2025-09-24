import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Calendar, CheckCircle, ArrowRight } from "lucide-react";

const CivilEngineering = () => {
  return (
    <>
      {/* Header Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                Department of Civil Engineering
              </Badge>
              <h1 className="text-5xl font-bold mb-6">Building Tomorrow's Infrastructure</h1>
              <p className="text-xl leading-relaxed mb-8">
                Civil Engineering at Kyambogo University prepares students to design, construct, 
                and maintain the infrastructure that forms the backbone of modern society.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Users className="h-5 w-5 mr-2" />
                  <span>400+ Students</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Award className="h-5 w-5 mr-2" />
                  <span>ABET Accredited</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/10 rounded-2xl p-8 backdrop-blur">
                <div className="h-full flex items-center justify-center">
                  <BookOpen className="h-32 w-32 text-white/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-kyues-dark mb-6">Program Overview</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  Our Civil Engineering program is designed to produce competent engineers 
                  who can tackle the complex infrastructure challenges facing Uganda and 
                  the broader East African region. The curriculum combines theoretical 
                  knowledge with practical application through hands-on laboratory work, 
                  field experiences, and real-world projects.
                </p>
                <p className="mb-6">
                  Students develop expertise in structural design, transportation systems, 
                  water resources management, geotechnical engineering, and environmental 
                  engineering. Our program emphasizes sustainable engineering practices 
                  and the integration of modern technology in civil engineering solutions.
                </p>
              </div>
            </div>
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-kyues-red">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">4 Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Degree:</span>
                    <span className="font-medium">B.Eng Civil</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Students:</span>
                    <span className="font-medium">400+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Faculty:</span>
                    <span className="font-medium">25</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Labs:</span>
                    <span className="font-medium">8</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum & Specializations */}
      <section className="py-20 bg-kyues-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kyues-dark mb-4">Curriculum Highlights</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive education covering all aspects of civil engineering
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "Structural Engineering",
                subjects: ["Concrete Design", "Steel Structures", "Bridge Engineering", "Earthquake Engineering"]
              },
              {
                title: "Transportation",
                subjects: ["Highway Engineering", "Traffic Management", "Pavement Design", "Transportation Planning"]
              },
              {
                title: "Water Resources",
                subjects: ["Hydraulics", "Hydrology", "Water Treatment", "Irrigation Systems"]
              },
              {
                title: "Geotechnical",
                subjects: ["Soil Mechanics", "Foundation Design", "Slope Stability", "Ground Improvement"]
              }
            ].map((specialization, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-kyues-red">{specialization.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {specialization.subjects.map((subject, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-kyues-red mr-2 flex-shrink-0" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Opportunities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-kyues-dark mb-6">Why Choose Civil Engineering?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "High Demand Career",
                    desc: "Infrastructure development creates constant demand for civil engineers across Africa"
                  },
                  {
                    title: "Diverse Opportunities", 
                    desc: "Work in construction, consulting, government, or start your own engineering firm"
                  },
                  {
                    title: "Societal Impact",
                    desc: "Design infrastructure that improves communities and transforms lives"
                  },
                  {
                    title: "Professional Growth",
                    desc: "Clear career progression path with opportunities for specialization and leadership"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="h-6 w-6 bg-kyues-red rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-kyues-dark mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Card className="bg-gradient-primary text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Career Outcomes</CardTitle>
                  <p>Our graduates work at leading organizations:</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Top Employers:</h4>
                      <ul className="text-sm space-y-1 opacity-90">
                        <li>• Uganda National Roads Authority</li>
                        <li>• Ministry of Works and Transport</li>
                        <li>• Roko Construction</li>
                        <li>• China Communications Construction</li>
                        <li>• Private Consulting Firms</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Average Starting Salary:</h4>
                      <p className="text-2xl font-bold">UGX 2.5M - 4M</p>
                      <p className="text-sm opacity-90">Per month for fresh graduates</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty & Research */}
      <section className="py-20 bg-kyues-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kyues-dark mb-4">Faculty Excellence</h2>
            <p className="text-xl text-muted-foreground">
              Learn from experienced practitioners and renowned researchers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Prof. James Katusiimeh",
                role: "Head of Department",
                specialization: "Structural Engineering",
                experience: "20+ years",
                research: "Earthquake-resistant design for East African structures"
              },
              {
                name: "Dr. Sarah Namusisi",
                role: "Senior Lecturer",
                specialization: "Water Resources",
                experience: "15+ years", 
                research: "Sustainable water management in urban areas"
              },
              {
                name: "Eng. Robert Mukasa",
                role: "Lecturer",
                specialization: "Geotechnical Engineering",
                experience: "12+ years",
                research: "Foundation design for tropical soils"
              }
            ].map((faculty, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-kyues-dark">{faculty.name}</CardTitle>
                  <p className="text-kyues-red font-medium">{faculty.role}</p>
                  <Badge variant="outline">{faculty.specialization}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-2">{faculty.experience} experience</p>
                  <p className="text-muted-foreground text-sm italic">Research: {faculty.research}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our Civil Engineering program and become part of the next generation 
            of infrastructure developers shaping Uganda's future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="kyues-outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-kyues-dark">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CivilEngineering;