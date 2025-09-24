import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, BookOpen, Award, Calendar, Star, Quote } from "lucide-react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            Welcome to KYUES
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Kyambogo University
            <span className="block text-kyues-red-light">Engineering Society</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering tomorrow's engineers through innovation, collaboration, and excellence. 
            Join Uganda's premier engineering society at Kyambogo University.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="kyues" className="text-lg px-8 py-4">
              Join KYUES Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="kyues-outline" className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-kyues-dark">
              Explore Programs
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kyues-dark mb-4">About KYUES</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The Kyambogo University Engineering Society is a premier student organization 
              dedicated to fostering engineering excellence and professional development.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center text-kyues-red">
                  <Award className="h-6 w-6 mr-3" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To advance engineering education, promote innovation, and develop competent 
                  engineers who contribute meaningfully to society's technological progress.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center text-kyues-red">
                  <BookOpen className="h-6 w-6 mr-3" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the leading engineering society in East Africa, recognized for 
                  excellence in engineering education, research, and professional development.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center text-kyues-red">
                  <Users className="h-6 w-6 mr-3" />
                  Our Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Excellence, Innovation, Integrity, Collaboration, and Continuous Learning 
                  guide everything we do as we build tomorrow's engineering leaders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-kyues-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kyues-dark mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive programs and services for engineering excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: "Academic Support", desc: "Tutoring, study groups, and academic resources" },
              { icon: Users, title: "Professional Development", desc: "Workshops, seminars, and industry connections" },
              { icon: Award, title: "Research Opportunities", desc: "Cutting-edge research projects and publications" },
              { icon: Calendar, title: "Events & Networking", desc: "Conferences, competitions, and social events" }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-kyues-dark">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-kyues-dark mb-6">Our Services</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We provide comprehensive support and opportunities for engineering students 
                to excel in their academic and professional journey.
              </p>
              <div className="space-y-4">
                {[
                  "Technical Workshops and Seminars",
                  "Industry Mentorship Programs", 
                  "Engineering Project Competitions",
                  "Career Guidance and Job Placement",
                  "Research and Innovation Support",
                  "Professional Certification Programs"
                ].map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-2 w-2 bg-kyues-red rounded-full mr-4" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
              <Button variant="kyues" size="lg" className="mt-8">
                Learn More About Our Services
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-2xl p-8 text-white">
                <div className="h-full flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4">Join 500+</h3>
                  <p className="text-xl mb-6">Engineering students advancing their careers</p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-sm opacity-90">Programs</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">100+</div>
                      <div className="text-sm opacity-90">Events/Year</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-kyues-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kyues-dark mb-4">Member Benefits</h2>
            <p className="text-xl text-muted-foreground">
              Exclusive advantages for KYUES members
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Networking Opportunities",
                description: "Connect with industry professionals, alumni, and peers in your field",
                benefits: ["Industry mentorship", "Alumni network access", "Professional connections"]
              },
              {
                title: "Skill Development",
                description: "Access to workshops, training programs, and certification courses",
                benefits: ["Technical workshops", "Soft skills training", "Professional certifications"]
              },
              {
                title: "Career Advancement",
                description: "Job placement assistance, internship opportunities, and career guidance",
                benefits: ["Job placement support", "Internship programs", "Career counseling"]
              }
            ].map((benefit, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-kyues-red">{benefit.title}</CardTitle>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.benefits.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <Star className="h-4 w-4 text-kyues-red mr-2" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kyues-dark mb-4">What Our Members Say</h2>
            <p className="text-xl text-muted-foreground">
              Hear from students and alumni about their KYUES experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Nakato",
                role: "Civil Engineering Graduate",
                quote: "KYUES provided me with incredible networking opportunities and practical skills that helped me land my dream job at a leading construction company.",
                year: "Class of 2023"
              },
              {
                name: "David Okello",
                role: "Electrical Engineering Student",
                quote: "The mentorship program connected me with industry professionals who guided my academic choices and career path. Invaluable experience!",
                year: "4th Year Student"
              },
              {
                name: "Grace Auma",
                role: "Mechanical Engineering Alumni",
                quote: "The research opportunities and project collaborations at KYUES shaped my engineering mindset and prepared me for real-world challenges.",
                year: "Class of 2022"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <Quote className="h-8 w-8 text-kyues-red mb-4" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-kyues-dark">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-kyues-red">{testimonial.year}</p>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Join KYUES?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards advancing your engineering career. Join hundreds of students 
            who are already benefiting from KYUES membership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link to="/join" className="flex items-center">
                Become a Member
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="kyues-outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-kyues-dark">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;