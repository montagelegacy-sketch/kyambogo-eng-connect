import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, BookOpen, Award, Briefcase, Globe, Heart } from "lucide-react";

const Benefits = () => {
  return (
    <>
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Member Benefits</h1>
          <p className="text-xl">Discover the advantages of KYUES membership</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Professional Network", items: ["Industry connections", "Alumni network", "Peer collaboration"] },
              { icon: BookOpen, title: "Learning Opportunities", items: ["Workshops & seminars", "Technical training", "Research projects"] },
              { icon: Briefcase, title: "Career Development", items: ["Job placement", "Internship programs", "Career guidance"] },
              { icon: Award, title: "Recognition", items: ["Achievement awards", "Certification programs", "Leadership opportunities"] },
              { icon: Globe, title: "Global Exposure", items: ["International conferences", "Exchange programs", "Global partnerships"] },
              { icon: Heart, title: "Community Impact", items: ["Volunteer projects", "Social initiatives", "Mentorship programs"] }
            ].map((benefit, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-center text-kyues-dark">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.items.map((item, idx) => (
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
    </>
  );
};

export default Benefits;