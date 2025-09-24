import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, BookOpen, Cog, Zap, Wrench } from "lucide-react";

const Departments = () => {
  const departments = [
    {
      name: "Civil Engineering",
      slug: "civil",
      icon: BookOpen,
      description: "Design and construct infrastructure that shapes our world",
      students: "400+",
      specializations: ["Structural Engineering", "Transportation", "Water Resources", "Geotechnical"],
      color: "bg-blue-500"
    },
    {
      name: "Electrical Engineering", 
      slug: "electrical",
      icon: Zap,
      description: "Power the future with electrical systems and technologies",
      students: "350+",
      specializations: ["Power Systems", "Electronics", "Telecommunications", "Control Systems"],
      color: "bg-yellow-500"
    },
    {
      name: "Mechanical Engineering",
      slug: "mechanical", 
      icon: Cog,
      description: "Engineer machines and mechanical systems for industry",
      students: "450+",
      specializations: ["Thermodynamics", "Manufacturing", "Automotive", "Robotics"],
      color: "bg-green-500"
    },
    {
      name: "Bio-Medical & Mechatronics",
      slug: "biomedical-mechatronics",
      icon: Wrench,
      description: "Merge biology, medicine and engineering for healthcare solutions",
      students: "200+", 
      specializations: ["Medical Devices", "Prosthetics", "Automation", "Healthcare Tech"],
      color: "bg-purple-500"
    },
    {
      name: "Mining, Chemical & Petroleum",
      slug: "mining-chemical-petroleum",
      icon: Users,
      description: "Extract and process natural resources sustainably",
      students: "180+",
      specializations: ["Mining Operations", "Process Engineering", "Environmental Safety", "Energy"],
      color: "bg-orange-500"
    }
  ];

  return (
    <>
      {/* Header Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            Our Departments
          </Badge>
          <h1 className="text-5xl font-bold mb-6">Engineering Excellence Across Disciplines</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Explore our five premier engineering departments, each dedicated to fostering 
            innovation, technical excellence, and professional development.
          </p>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kyues-dark mb-4">Choose Your Path</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each department offers comprehensive programs designed to prepare students 
              for leadership roles in their respective fields.
            </p>
          </div>
          
          <div className="grid gap-8">
            {departments.map((dept, index) => (
              <Card key={dept.slug} className={`hover-lift ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:flex lg:items-center`}>
                <div className="lg:flex-1 p-8">
                  <div className="flex items-center mb-4">
                    <div className={`h-12 w-12 rounded-lg ${dept.color} flex items-center justify-center mr-4`}>
                      <dept.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-kyues-dark">{dept.name}</CardTitle>
                      <p className="text-kyues-red font-medium">{dept.students} Students</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {dept.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-kyues-dark mb-3">Key Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {dept.specializations.map((spec, idx) => (
                        <Badge key={idx} variant="outline" className="text-sm">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="kyues" asChild>
                    <Link to={`/departments/${dept.slug}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="lg:flex-1 p-8">
                  <div className={`aspect-video rounded-lg ${dept.color} bg-gradient-to-br from-current to-transparent opacity-20`} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-kyues-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kyues-dark mb-4">Department Statistics</h2>
            <p className="text-xl text-muted-foreground">
              Our numbers reflect our commitment to engineering excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover-lift">
              <CardHeader>
                <CardTitle className="text-3xl text-kyues-red">1,580+</CardTitle>
                <p className="text-muted-foreground">Total Students</p>
              </CardHeader>
            </Card>
            <Card className="text-center hover-lift">
              <CardHeader>
                <CardTitle className="text-3xl text-kyues-red">85+</CardTitle>
                <p className="text-muted-foreground">Faculty Members</p>
              </CardHeader>
            </Card>
            <Card className="text-center hover-lift">
              <CardHeader>
                <CardTitle className="text-3xl text-kyues-red">40+</CardTitle>
                <p className="text-muted-foreground">Research Projects</p>
              </CardHeader>
            </Card>
            <Card className="text-center hover-lift">
              <CardHeader>
                <CardTitle className="text-3xl text-kyues-red">95%</CardTitle>
                <p className="text-muted-foreground">Employment Rate</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Engineering Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join one of our prestigious departments and become part of Uganda's 
            next generation of engineering leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link to="/join">Apply Now</Link>
            </Button>
            <Button size="lg" variant="kyues-outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-kyues-dark">
              <Link to="/contact">Contact Admissions</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Departments;