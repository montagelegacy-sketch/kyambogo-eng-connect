import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Eye, Heart, Award, Calendar } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Header Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            About KYUES
          </Badge>
          <h1 className="text-5xl font-bold mb-6">Empowering Engineering Excellence</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            The Kyambogo University Engineering Society (KYUES) has been at the forefront of 
            engineering education and professional development in Uganda for over a decade.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-kyues-dark mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Founded in 2010, the Kyambogo University Engineering Society emerged from 
                  a vision to create a unified platform for engineering students to collaborate, 
                  innovate, and excel in their chosen fields.
                </p>
                <p>
                  What started as a small group of passionate engineering students has grown 
                  into Uganda's premier engineering society, representing over 2,000 students 
                  across five major engineering disciplines.
                </p>
                <p>
                  Our society serves as a bridge between academic learning and professional 
                  practice, fostering innovation, leadership, and technical excellence among 
                  the next generation of African engineers.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-2xl p-8 text-white">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">KYUES by Numbers</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-3xl font-bold">2,000+</div>
                        <div className="text-sm opacity-90">Active Members</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">500+</div>
                        <div className="text-sm opacity-90">Alumni Network</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">50+</div>
                        <div className="text-sm opacity-90">Industry Partners</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">100+</div>
                        <div className="text-sm opacity-90">Events Annually</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold">Established 2010</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-kyues-gray-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 mx-auto mb-4 text-kyues-red" />
                <CardTitle className="text-2xl text-kyues-dark">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  To advance engineering education, promote innovation, and develop competent 
                  engineers who contribute meaningfully to society's technological progress 
                  and sustainable development.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="text-center">
                <Eye className="h-12 w-12 mx-auto mb-4 text-kyues-red" />
                <CardTitle className="text-2xl text-kyues-dark">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading engineering society in East Africa, recognized for 
                  excellence in engineering education, research, innovation, and the 
                  development of world-class engineers.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 text-kyues-red" />
                <CardTitle className="text-2xl text-kyues-dark">Our Values</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 text-muted-foreground">
                  <p>• Excellence in all endeavors</p>
                  <p>• Innovation and creativity</p>
                  <p>• Integrity and ethics</p>
                  <p>• Collaboration and teamwork</p>
                  <p>• Continuous learning</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features/Milestones */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kyues-dark mb-4">Key Milestones & Achievements</h2>
            <p className="text-xl text-muted-foreground">
              Celebrating our journey of excellence and impact
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                year: "2010", 
                title: "Society Founded", 
                desc: "Established with 50 founding members" 
              },
              { 
                year: "2015", 
                title: "First Conference", 
                desc: "Hosted the inaugural KYUES Engineering Conference" 
              },
              { 
                year: "2018", 
                title: "Industry Partnerships", 
                desc: "Formed partnerships with 25+ industry leaders" 
              },
              { 
                year: "2023", 
                title: "2000+ Members", 
                desc: "Reached milestone of 2000 active members" 
              }
            ].map((milestone, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                    <span className="text-white font-bold">{milestone.year}</span>
                  </div>
                  <CardTitle className="text-kyues-dark">{milestone.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{milestone.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-kyues-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kyues-dark mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Meet the dedicated leaders driving KYUES forward
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: "Eng. Robert Ssekitoleko", 
                role: "President", 
                department: "Civil Engineering",
                bio: "Leading KYUES with vision for engineering excellence and innovation."
              },
              { 
                name: "Sarah Nakimuli", 
                role: "Vice President", 
                department: "Electrical Engineering",
                bio: "Driving academic programs and student development initiatives."
              },
              { 
                name: "David Mukasa", 
                role: "Secretary General", 
                department: "Mechanical Engineering",
                bio: "Coordinating society activities and member engagement programs."
              },
              { 
                name: "Grace Namukasa", 
                role: "Treasurer", 
                department: "Bio-Medical Engineering",
                bio: "Managing society finances and sustainability initiatives."
              }
            ].map((leader, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-kyues-dark">{leader.name}</CardTitle>
                  <p className="text-kyues-red font-medium">{leader.role}</p>
                  <p className="text-sm text-muted-foreground">{leader.department}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of Uganda's premier engineering society and connect with like-minded 
            individuals who are passionate about engineering excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Become a Member
            </Button>
            <Button size="lg" variant="kyues-outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-kyues-dark">
              Contact Leadership
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;