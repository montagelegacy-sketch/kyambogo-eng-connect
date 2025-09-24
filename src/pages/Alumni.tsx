import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Briefcase, GraduationCap } from "lucide-react";

const Alumni = () => {
  return (
    <>
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">KYUES Alumni Network</h1>
          <p className="text-xl">Connecting graduates worldwide in engineering excellence</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <GraduationCap className="h-12 w-12 mx-auto text-kyues-red mb-4" />
                <CardTitle className="text-3xl text-kyues-red">500+</CardTitle>
                <p className="text-muted-foreground">Alumni Worldwide</p>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Briefcase className="h-12 w-12 mx-auto text-kyues-red mb-4" />
                <CardTitle className="text-3xl text-kyues-red">50+</CardTitle>
                <p className="text-muted-foreground">Countries</p>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-kyues-red mb-4" />
                <CardTitle className="text-3xl text-kyues-red">95%</CardTitle>
                <p className="text-muted-foreground">Employment Rate</p>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-kyues-red mb-4" />
                <CardTitle className="text-3xl text-kyues-red">100+</CardTitle>
                <p className="text-muted-foreground">Industry Leaders</p>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-kyues-dark mb-8">Featured Alumni</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Eng. Sarah Nakato", role: "Chief Engineer", company: "Uganda National Roads Authority", year: "Class of 2018" },
                { name: "Dr. David Mukasa", role: "Project Director", company: "African Development Bank", year: "Class of 2015" },
                { name: "Eng. Grace Auma", role: "Technical Manager", company: "Kiira Motors Corporation", year: "Class of 2019" }
              ].map((alumni, index) => (
                <Card key={index} className="hover-lift">
                  <CardHeader>
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-kyues-dark">{alumni.name}</CardTitle>
                    <p className="text-kyues-red">{alumni.role}</p>
                    <p className="text-muted-foreground text-sm">{alumni.company}</p>
                    <p className="text-muted-foreground text-xs">{alumni.year}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Alumni;