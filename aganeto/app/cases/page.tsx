import { Container } from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Award } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Whatagraph Marketing Intelligence Platform",
    description: "Two-year partnership providing backend solutions, tracking systems, and integrations for a streamlined reporting platform.",
    detailedWork: "For the past two years, we have supported Whatagraph with a dedicated 15-person team focused on backend development, tracking, and new integrations. Our work has streamlined their reporting application, improved platform stability, and accelerated feature delivery. We collaborate closely with their internal team and partners, ensuring new features roll out smoothly, code quality is maintained, and testing is automated to minimize bugs. This long-term collaboration has enabled Whatagraph to scale faster and serve their global customer base more effectively.",
    client: {
      name: "Eleanor Jensen",
      role: "Head of Product, Whatagraph"
    },
    similarProjects: 12,
    industry: "Marketing Intelligence",
    icon: "📊",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "Rocket Agency Digital Marketing",
    description: "Three-year outsourced development partnership, providing technical execution to help Rocket Agency scale without stretching internal resources.",
    detailedWork: "We act as Rocket Agency's outsourced partner, supporting their digital operations with advanced tracking systems, high-converting landing page builds, and large-scale link building campaigns. Our contribution also covers backend integrations, data accuracy, testing, and conversion rate optimization. By collaborating directly with their strategy and creative teams, we've helped Rocket deliver campaigns more efficiently while keeping technical quality high. This ongoing partnership allows them to focus on client strategy while we ensure flawless execution behind the scenes.",
    client: {
      name: "David Lawrence",
      role: "Managing Director & Co-Founder, Rocket Agency"
    },
    similarProjects: 8,
    industry: "Digital Marketing Agency",
    icon: "🚀",
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: 3,
    title: "First Page Digital Web Development",
    description: "Three-year partnership as outsourced developers, building and maintaining hundreds of websites and handling technical execution.",
    detailedWork: "Our work with First Page Digital Singapore has been purely focused on coding and development. Over three years, we've built and maintained more than 300 websites, set up tracking systems, optimized frontend and backend performance, and delivered responsive landing pages. We manage integrations, ensure cross-browser compatibility, improve site speed, and provide continuous maintenance. Acting as their extended development arm, we ensure clean handovers, fast deployment, and stable code quality.",
    client: {
      name: "Shane Liuw",
      role: "Development Lead, First Page Digital Singapore"
    },
    similarProjects: 15,
    industry: "Web Development",
    icon: "🌐",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    id: 4,
    title: "Linkee.ai Backlink Automation Platform",
    description: "Eight-month partnership supporting product launch with MVP build and full-time developer support.",
    detailedWork: "We worked with Linkee.ai from concept to launch, building their MVP in just three months. Our team developed the backend architecture, frontend dashboards, prospect vetting, email verification integrations, outreach scheduling workflows, and reporting features. After launch, we continued with two full-time developers dedicated to scaling the product, fixing bugs, adding features, refining UI/UX flows, and ensuring data integrity. Our role has been critical in stabilizing and growing the system through its first months on the market.",
    client: {
      name: "Vahan Poghosyan",
      role: "CEO & Co-Founder, Linkee.ai"
    },
    similarProjects: 6,
    industry: "SaaS Platform",
    icon: "🔗",
    gradient: "from-emerald-500 to-cyan-500"
  },
  {
    id: 5,
    title: "Waitlister Pre-Launch Platform",
    description: "Five-month collaboration delivering MVP and ongoing development support for scaling and stability.",
    detailedWork: "We partnered with Waitlister to build their MVP over three months, covering the entire technical stack: waitlist builder, embedded forms, referral engine, welcome emails, analytics dashboard, and domain integrations. Since launch, two of our developers have continued to support them full-time, focusing on scaling, feature expansion, bug fixes, and improving system reliability. This ongoing work ensures Waitlister can grow smoothly and meet the needs of thousands of startups using their platform.",
    client: {
      name: "Product Team Lead",
      role: "Waitlister"
    },
    similarProjects: 9,
    industry: "Startup Tools",
    icon: "⏰",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    id: 6,
    title: "Trackabi Time Tracking Platform",
    description: "Two-and-a-half-year partnership as a long-term outsourced support team, building new features and continuously updating the platform.",
    detailedWork: "We've supported Trackabi with backend and frontend development, building new functions, strengthening integrations, and optimizing their desktop and mobile applications. Our work has included performance tuning, leave planning modules, reporting and invoicing features, and ongoing feature updates. Over the course of the collaboration, much of the work has been shifted to our Indonesian team, accelerating development cycles and reducing turnaround time while keeping quality high through rigorous testing.",
    client: {
      name: "Andrey Mishenin",
      role: "Founder & Product Lead, Trackabi"
    },
    similarProjects: 11,
    industry: "Productivity Tools",
    icon: "⏱️",
    gradient: "from-green-500 to-teal-500"
  }
];

const whyThisWorks = [
  {
    icon: "🎯",
    title: "Industry Expertise",
    description: "We understand the unique challenges of each sector and build solutions that actually work."
  },
  {
    icon: "⚡",
    title: "Rapid Delivery",
    description: "Most projects completed in 30-45 days, not months like traditional agencies."
  },
  {
    icon: "💰",
    title: "Cost Efficiency",
    description: "Same quality as European agencies at 60% less cost, with better communication."
  },
  {
    icon: "🔄",
    title: "Scalable Solutions",
    description: "Built to grow with your business, not just meet immediate needs."
  }
];

export default function CasesPage() {
  return (
    <>
      {/* Premium Hero Section */}
      <div className="relative min-h-screen overflow-hidden flex items-center w-screen -ml-[50vw] left-1/2">
          {/* Full-screen background elements */}
          <div className="absolute inset-0 w-full">
            {/* Modern gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-purple-600/5 to-pink-600/10" />
            
            {/* Abstract tech grid overlay */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 255, 204, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 0, 200, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }} />
            </div>
            
            {/* Glowing orbs */}
            <div className="absolute top-20 left-20 w-36 h-36 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-28 h-28 bg-purple-500/20 rounded-full blur-2xl" />
          </div>
          
          <div className="relative py-16 sm:py-20 md:py-24 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="max-w-5xl mx-auto text-center">
              {/* Main headline with emotional punch */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
                Projects That Drive Growth
              </h1>
              
              {/* Aspirational subheadline */}
              <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                From marketplaces to service platforms, we help businesses launch faster, scale smarter, and stand out in their industry.
              </p>
              
              {/* Premium trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">30+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">5+ Industries Served</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">98% Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      <main className="py-20">
        <Container>
          {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {caseStudies.map((caseStudy) => (
            <Card 
              key={caseStudy.id} 
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-0 border border-white/30 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-3 overflow-hidden"
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${caseStudy.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-700 -z-10 blur-sm`} />
              
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={caseStudy.id === 1 
                    ? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    : caseStudy.id === 2
                    ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    : caseStudy.id === 3
                    ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    : caseStudy.id === 4
                    ? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    : caseStudy.id === 5
                    ? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    : "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  } 
                  alt={`${caseStudy.title} project showcase`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Industry Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold ${caseStudy.gradient.includes('purple') ? 'text-purple-600' : caseStudy.gradient.includes('blue') ? 'text-blue-600' : caseStudy.gradient.includes('green') ? 'text-green-600' : 'text-orange-600'}`}>
                    {caseStudy.industry}
                  </div>
                </div>
                
                {/* Project Icon */}
                <div className="absolute top-4 right-4">
                  <div className={`w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl">{caseStudy.icon}</span>
                  </div>
                </div>
                
                {/* Results Badge */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <div className="text-xs text-muted-foreground">Similar Projects</div>
                    <div className="text-sm font-bold text-foreground">+{caseStudy.similarProjects}</div>
                  </div>
                </div>
              </div>

              {/* Header with industry icon */}
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${caseStudy.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{caseStudy.icon}</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {caseStudy.title}
                      </CardTitle>
                      <div className="text-sm text-muted-foreground mt-1">
                        {caseStudy.industry}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Team note */}
                <div className="bg-muted/30 rounded-lg p-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">💬</span>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground italic">
                        <span className="font-semibold text-foreground">Note from our team:</span> {caseStudy.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Detailed Work */}
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-accent">⚙️</span>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">What we delivered:</span> {caseStudy.detailedWork}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Client info */}
                <div className="flex items-center gap-4 mb-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm">
                    <img 
                      src={`https://images.unsplash.com/photo-${caseStudy.id === 1 ? '1494790108755-2616b612b786' : 
                        caseStudy.id === 2 ? '1507003211169-0a1dd7228f2d' :
                        caseStudy.id === 3 ? '1472099645785-5658abf4ff4e' :
                        caseStudy.id === 4 ? '1500648767791-00dcc994a43e' :
                        caseStudy.id === 5 ? '1438761681033-6461ffad8d80' :
                        '1506794778202-cad84cf45f1d'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80`}
                      alt={`${caseStudy.client.name} profile`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground text-base mb-1">{caseStudy.client.name}</div>
                    <div className="text-sm text-muted-foreground">{caseStudy.client.role}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground mb-1">Project Status</div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium text-green-600">Completed</span>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-muted-foreground">
                      +{caseStudy.similarProjects} similar projects
                    </span>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why This Works Section */}
        <div className="relative mb-20">
          {/* Background gradient with tech patterns */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 rounded-3xl" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 204, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 0, 200, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }} />
          </div>
          
          <div className="relative p-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Why This Works
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Our proven approach delivers results that matter, not just code that works.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyThisWorks.map((item, index) => (
                <div 
                  key={index}
                  className="group text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </Container>

      {/* CTA Section */}
      <div className="w-full bg-black text-white py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's build your next project that drives real growth and delivers measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="min-h-[44px]">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="min-h-[44px] bg-transparent border-white/20 text-white hover:bg-white/10">
                View All Cases
              </Button>
            </div>
          </div>
        </Container>
      </div>
      </main>
    </>
  );
}
