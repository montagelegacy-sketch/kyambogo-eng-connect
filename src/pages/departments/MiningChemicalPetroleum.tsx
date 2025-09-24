import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mountain, Users, Award, CheckCircle, ArrowRight, Droplets, Zap, Shield } from "lucide-react";

const MiningChemicalPetroleum = () => {
  return (
    <>
      {/* Header Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                Mining, Chemical & Petroleum Engineering
              </Badge>
              <h1 className="text-5xl font-bold mb-6">Harnessing Earth's Resources</h1>
              <p className="text-xl leading-relaxed mb-8">
                Comprehensive engineering education in mining operations, chemical processes, 
                and petroleum systems for sustainable resource development.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Users className="h-5 w-5 mr-2" />
                  <span>180+ Students</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <Award className="h-5 w-5 mr-2" />
                  <span>Industry Accredited</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/10 rounded-2xl p-8 backdrop-blur">
                <div className="h-full flex items-center justify-center">
                  <Mountain className="h-32 w-32 text-white/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Engineering Disciplines */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kyues-dark mb-4">Three Engineering Disciplines</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive programs covering the full spectrum of resource engineering
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Mining Engineering */}
            <Card className="hover-lift">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                  <Mountain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center text-kyues-dark">Mining Engineering</CardTitle>
                <p className="text-center text-muted-foreground text-sm">
                  Sustainable extraction of mineral resources
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-kyues-red mb-2">Specializations:</h4>
                  <ul className="space-y-1 text-sm">
                    {[
                      "Surface & Underground Mining",
                      "Mineral Processing",
                      "Mine Safety & Environmental Impact",
                      "Mining Equipment & Technology"
                    ].map((spec, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-kyues-red mr-2 flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-kyues-red mb-2">Career Paths:</h4>
                  <div className="flex flex-wrap gap-1">
                    {["Mining Companies", "Consulting", "Government", "Research"].map((path, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {path}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chemical Engineering */}
            <Card className="hover-lift">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center text-kyues-dark">Chemical Engineering</CardTitle>
                <p className="text-center text-muted-foreground text-sm">
                  Process design and chemical manufacturing
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-kyues-red mb-2">Specializations:</h4>
                  <ul className="space-y-1 text-sm">
                    {[
                      "Process Engineering & Design",
                      "Petrochemical Processing",
                      "Environmental Engineering",
                      "Biotechnology & Pharmaceuticals"
                    ].map((spec, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-kyues-red mr-2 flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-kyues-red mb-2">Career Paths:</h4>
                  <div className="flex flex-wrap gap-1">
                    {["Chemical Plants", "Oil Refineries", "Pharmaceuticals", "Food Processing"].map((path, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {path}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Petroleum Engineering */}
            <Card className="hover-lift">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center text-kyues-dark">Petroleum Engineering</CardTitle>
                <p className="text-center text-muted-foreground text-sm">
                  Oil & gas exploration and production
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-kyues-red mb-2">Specializations:</h4>
                  <ul className="space-y-1 text-sm">
                    {[
                      "Drilling & Completion",
                      "Reservoir Engineering",
                      "Production Engineering",
                      "Pipeline & Transportation"
                    ].map((spec, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-kyues-red mr-2 flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-kyues-red mb-2">Career Paths:</h4>
                  <div className="flex flex-wrap gap-1">
                    {["Oil Companies", "Service Companies", "Government", "Consulting"].map((path, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {path}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Opportunities */}
      <section className="py-20 bg-kyues-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kyues-dark mb-4">Uganda's Resource Sector</h2>
            <p className="text-xl text-muted-foreground">
              Abundant opportunities in Uganda's growing extractive industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                resource: "Gold Mining",
                locations: "Busia, Mubende",
                companies: "AngloGold Ashanti, Wagagai Gold",
                value: "$800M+ annually"
              },
              {
                resource: "Oil & Gas",
                locations: "Albertine Region",
                companies: "Total Energies, CNOOC, Tullow",
                value: "$20B+ reserves"
              },
              {
                resource: "Industrial Minerals",
                locations: "Nationwide",
                companies: "Hima Cement, Tororo Cement",
                value: "$200M+ market"
              },
              {
                resource: "Rare Earth Elements",
                locations: "Sukulu, Makuutu",
                companies: "Ionic Rare Earths, Rainbow Rare Earths",
                value: "Emerging sector"
              }
            ].map((sector, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-kyues-red text-lg">{sector.resource}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm">Key Locations:</p>
                    <p className="text-muted-foreground text-sm">{sector.locations}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Major Companies:</p>
                    <p className="text-muted-foreground text-xs">{sector.companies}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Market Value:</p>
                    <p className="text-kyues-red font-bold text-sm">{sector.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum & Research */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-kyues-dark mb-6">Comprehensive Curriculum</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-kyues-red mb-3">Core Engineering Foundation</h3>
                  <ul className="space-y-2">
                    {[
                      "Mathematics & Applied Physics",
                      "Chemistry & Materials Science",
                      "Geology & Earth Sciences",
                      "Thermodynamics & Fluid Mechanics",
                      "Environmental Engineering"
                    ].map((subject, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-kyues-red mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{subject}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-kyues-red mb-3">Specialized Training</h3>
                  <ul className="space-y-2">
                    {[
                      "Mine Planning & Design Software (Surpac, MineSight)",
                      "Process Simulation (Aspen HYSYS, ChemCAD)",
                      "Reservoir Modeling (Eclipse, CMG)",
                      "Safety & Environmental Management",
                      "Project Management & Economics"
                    ].map((training, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-kyues-red mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{training}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-gradient-primary text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Research & Innovation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Current Research Projects:</h4>
                    <ul className="text-sm space-y-2 opacity-90">
                      <li>• Sustainable Mining Practices in Tropical Environments</li>
                      <li>• Enhanced Oil Recovery Techniques for Uganda's Crude</li>
                      <li>• Waste-to-Energy Chemical Processes</li>
                      <li>• Environmental Impact Mitigation Strategies</li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-white/20">
                    <h4 className="font-semibold mb-2">Industry Partnerships:</h4>
                    <div className="text-sm space-y-1 opacity-90">
                      <p>• Uganda National Oil Company</p>
                      <p>• Petroleum Authority of Uganda</p>
                      <p>• Directorate of Geological Survey</p>
                      <p>• Mining companies across East Africa</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-white/20">
                    <h4 className="font-semibold mb-2">Research Facilities:</h4>
                    <div className="text-sm space-y-1 opacity-90">
                      <p>• Mineral Processing Laboratory</p>
                      <p>• Petroleum Engineering Lab</p>
                      <p>• Chemical Process Pilot Plant</p>
                      <p>• Environmental Testing Center</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Environment Focus */}
      <section className="py-20 bg-kyues-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kyues-dark mb-4">Safety & Environmental Excellence</h2>
            <p className="text-xl text-muted-foreground">
              Leading the industry in sustainable and safe engineering practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center text-kyues-dark">Safety Engineering</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground text-sm">
                  Comprehensive training in occupational health, risk assessment, 
                  and emergency response procedures.
                </p>
                <ul className="text-xs space-y-1">
                  <li>• Mine Safety Regulations</li>
                  <li>• Process Hazard Analysis</li>
                  <li>• Emergency Response Planning</li>
                  <li>• Personal Protective Equipment</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center text-kyues-dark">Environmental Protection</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground text-sm">
                  Focus on minimizing environmental impact through sustainable 
                  engineering solutions and remediation techniques.
                </p>
                <ul className="text-xs space-y-1">
                  <li>• Environmental Impact Assessment</li>
                  <li>• Water Treatment Systems</li>
                  <li>• Land Rehabilitation</li>
                  <li>• Emission Control Technologies</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                  <Mountain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center text-kyues-dark">Sustainable Development</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground text-sm">
                  Integrating community development and environmental stewardship 
                  with resource extraction activities.
                </p>
                <ul className="text-xs space-y-1">
                  <li>• Community Engagement</li>
                  <li>• Resource Conservation</li>
                  <li>• Circular Economy Principles</li>
                  <li>• Social Impact Assessment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Success & Salaries */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kyues-dark mb-4">Exceptional Career Prospects</h2>
            <p className="text-xl text-muted-foreground">
              High-demand skills with competitive compensation across the region
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                role: "Mining Engineer",
                companies: ["AngloGold Ashanti", "Barrick Gold", "Local Mining Companies"],
                salary: "UGX 8M - 15M",
                growth: "Strong demand in gold mining expansion",
                benefits: "Housing, transport, health insurance"
              },
              {
                role: "Chemical Engineer",
                companies: ["Oil Refineries", "Pharmaceutical Companies", "Food Processing"],
                salary: "UGX 6M - 12M",
                growth: "Growing petrochemical sector",
                benefits: "Professional development, international opportunities"
              },
              {
                role: "Petroleum Engineer",
                companies: ["Total Energies", "CNOOC", "Uganda National Oil Company"],
                salary: "UGX 12M - 25M",
                growth: "Major oil production starting 2025",
                benefits: "Highest salaries in engineering sector"
              }
            ].map((career, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-kyues-red">{career.role}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Top Employers:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {career.companies.map((company, idx) => (
                        <li key={idx}>• {company}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Salary Range:</h4>
                    <p className="text-kyues-red font-bold">{career.salary}</p>
                    <p className="text-xs text-muted-foreground">Per month (experienced)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Market Outlook:</h4>
                    <p className="text-muted-foreground text-xs">{career.growth}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Benefits:</h4>
                    <p className="text-muted-foreground text-xs">{career.benefits}</p>
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
          <h2 className="text-4xl font-bold mb-6">Shape Uganda's Resource Future</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our Mining, Chemical & Petroleum Engineering program and lead the 
            sustainable development of Uganda's abundant natural resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Secure Your Future
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="kyues-outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-kyues-dark">
              Industry Connections
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiningChemicalPetroleum;