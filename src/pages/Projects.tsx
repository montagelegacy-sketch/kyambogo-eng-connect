import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Award } from "lucide-react";

const Projects = () => {
  return (
    <>
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            Our Projects
          </Badge>
          <h1 className="text-5xl font-bold mb-6">Innovation in Action</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover cutting-edge projects that showcase KYUES members' engineering excellence and innovation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Solar Water Pump System", category: "Renewable Energy", status: "Completed" },
              { title: "Smart Traffic Management", category: "IoT & Automation", status: "Ongoing" },
              { title: "Biomedical Device Development", category: "Healthcare Tech", status: "Research Phase" }
            ].map((project, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <Badge variant="outline" className="w-fit">{project.category}</Badge>
                  <CardTitle className="text-kyues-dark">{project.title}</CardTitle>
                  <p className="text-kyues-red">{project.status}</p>
                </CardHeader>
                <CardContent>
                  <Button variant="kyues" size="sm">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;