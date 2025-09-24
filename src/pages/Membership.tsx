import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Award, BookOpen } from "lucide-react";

const Membership = () => {
  return (
    <>
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Join KYUES Today</h1>
          <p className="text-xl">Become part of Uganda's premier engineering community</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Networking", desc: "Connect with industry professionals and peers" },
              { icon: BookOpen, title: "Learning", desc: "Access exclusive workshops and resources" },
              { icon: Award, title: "Recognition", desc: "Showcase your achievements and get recognized" }
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-kyues-dark">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="kyues" size="lg">Apply for Membership</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Membership;