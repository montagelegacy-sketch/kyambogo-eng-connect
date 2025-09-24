import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Join = () => {
  return (
    <>
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Apply for KYUES Membership</h1>
          <p className="text-xl">Complete the form below to join our engineering community</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-kyues-dark">Membership Application</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label htmlFor="department">Department</Label>
                <Input id="department" placeholder="Your engineering department" />
              </div>
              <div>
                <Label htmlFor="year">Year of Study</Label>
                <Input id="year" placeholder="e.g., 3rd Year" />
              </div>
              <div>
                <Label htmlFor="motivation">Why do you want to join KYUES?</Label>
                <Textarea id="motivation" placeholder="Tell us about your motivation..." />
              </div>
              <Button variant="kyues" className="w-full">Submit Application</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Join;