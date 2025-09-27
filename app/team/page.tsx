import { Container } from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Globe, Clock, CheckCircle, Star, MessageCircle, Shield, ArrowRight } from "lucide-react";

const teamStats = [
  { number: "45", label: "In-House Specialists", description: "Full-stack developers, designers, project managers, and marketing experts" },
  { number: "6+", label: "Years Average Experience", description: "Highly trained professionals from top universities" },
  { number: "98%", label: "Client Satisfaction", description: "Consistent high-quality delivery and communication" },
  { number: "750+", label: "Projects Completed", description: "Across 20+ industries and various technologies" }
];

const teamStructure = [
  {
    category: "Senior Full-Stack Developers",
    count: 15,
    description: "Expert developers with 6+ years experience in modern technologies",
    skills: ["React/Next.js", "Node.js", "Python", "AWS", "Docker"]
  },
  {
    category: "Project Managers", 
    count: 8,
    description: "Agile-certified project managers ensuring smooth delivery and communication",
    skills: ["Scrum Master", "Agile Methodologies", "Jira", "Confluence", "Client Relations"]
  },
  {
    category: "Sales & Marketing Team",
    count: 6,
    description: "Growth specialists driving client acquisition and business development",
    skills: ["Lead Generation", "CRM Management", "Digital Marketing", "Sales Strategy", "Client Onboarding"]
  },
  {
    category: "Frontend Specialists", 
    count: 8,
    description: "UI/UX experts focused on creating exceptional user experiences",
    skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Figma"]
  },
  {
    category: "Backend Engineers",
    count: 5,
    description: "Server-side specialists ensuring robust and scalable architectures",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    category: "UI/UX Designers",
    count: 3,
    description: "Creative designers who understand both aesthetics and functionality",
    skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping", "Design Systems"]
  }
];

const leadership = [
  {
    name: "David Dandanell",
    role: "Project Manager & Co-Founder",
    location: "Bali, Indonesia",
    experience: "22+ years",
    expertise: "Project Management, MVP Development, Team Onboarding, Strategic Planning",
    description: "David has been working with projects for over 22 years across Singapore, Denmark, and Indonesia, leading diverse teams and managing complex international initiatives. He has extensive experience in onboarding teams, finding value in MVPs, and strategic project management across multiple industries and markets. With his deep understanding of both European and Asian business cultures, David ensures seamless communication and delivery excellence. He's been living in Indonesia for 6 years now, based in Bali, and brings a unique perspective to every project, ensuring they meet the highest standards while maintaining clear communication, transparency, and cultural sensitivity throughout the development process."
  },
  {
    name: "Michael Kirana",
    role: "CEO & Co-Founder",
    location: "Denmark", 
    experience: "25+ years",
    expertise: "Account Management, Business Strategy, Financial Planning, Market Analysis, Client Relations",
    description: "Michael has been living in Indonesia for 25 years and is a super expert at handling teams and business operations across diverse cultural and economic landscapes. As CEO, he oversees comprehensive business strategy, account management, financial planning, and ensures our company's sustainable growth and client satisfaction across all markets and industries. With his deep understanding of both European business practices and Indonesian market dynamics, Michael has successfully built and scaled multiple ventures, establishing strong partnerships and driving innovation in the technology sector. His leadership combines strategic vision with operational excellence, ensuring every client relationship is nurtured and every business opportunity is maximized for long-term success and mutual benefit."
  },
  {
    name: "Muhammad Mulkhaq",
    role: "Head of Supervision & Control",
    location: "Jakarta, Indonesia",
    experience: "15+ years", 
    expertise: "Data Architecture, Full-Stack Development, Project Supervision, Talent Mentorship",
    description: "Muhammad has been working in technology and development for over 15 years, leading large-scale projects across Asia and beyond. With a Ph.D. in Data Architecture & Database Systems, he combines academic depth with hands-on coding expertise. He has received awards and MVP recognition for his ability to design robust system structures and guide technical execution at scale. Muhammad also collaborates with universities, teaching and mentoring future developers while helping identify the best talent to join our teams. Based in Indonesia, he ensures every major build is delivered with precision, stability, and vision."
  }
];

const certifications = [
  { name: "AWS Certified Solutions Architect", count: 8 },
  { name: "Google Cloud Professional", count: 6 },
  { name: "Microsoft Azure Expert", count: 5 },
  { name: "Scrum Master Certified", count: 4 },
  { name: "React Professional", count: 10 },
  { name: "Node.js Certified", count: 7 }
];

export default function TeamPage() {
  return (
    <>
      {/* Premium Hero Section */}
      <div className="relative min-h-screen overflow-hidden flex items-center w-screen -ml-[50vw] left-1/2">
          {/* Full-screen background elements */}
          <div className="absolute inset-0 w-full">
            {/* Modern gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-blue-600/5 to-purple-600/10" />
            
            {/* Abstract tech grid overlay */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 255, 204, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 0, 200, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '45px 45px'
              }} />
            </div>
            
            {/* Glowing orbs */}
            <div className="absolute top-16 left-16 w-28 h-28 bg-green-500/20 rounded-full blur-2xl" />
            <div className="absolute bottom-16 right-16 w-36 h-36 bg-blue-500/20 rounded-full blur-3xl" />
          </div>
          
          <div className="relative py-16 sm:py-20 md:py-24 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="max-w-5xl mx-auto text-center">
              {/* Main headline with emotional punch */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
                Your Dream Team Awaits
              </h1>
              
              {/* Aspirational subheadline */}
              <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                Meet the 45 brilliant minds who turn your boldest visions into reality, led by European excellence and powered by Indonesian innovation.
              </p>
              
              {/* Premium benefit + proof statements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-pink-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">45 Elite Specialists</h3>
                    <p className="text-muted-foreground">6+ years average experience • Top university graduates</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-cyan-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">European Leadership</h3>
                    <p className="text-muted-foreground">Perfect communication & quality control • 25 years experience</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">98% Client Satisfaction</h3>
                    <p className="text-muted-foreground">500+ projects delivered • 85% repeat business</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Ready to Start</h3>
                    <p className="text-muted-foreground">Available immediately • No recruitment delays</p>
                  </div>
                </div>
              </div>
              
              {/* Premium CTA Buttons with trust sublabels */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <div className="text-center">
                  <Button size="lg" className="h-14 px-10 text-lg font-semibold mb-2 bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90">
                    Meet the Team
                    <Users className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-xs text-muted-foreground">45 specialists across 6 departments</p>
                </div>
                <div className="text-center">
                  <Button variant="outline" size="lg" className="h-14 px-10 text-lg font-semibold mb-2 border-2 hover:bg-white/10">
                    <Award className="mr-2 h-5 w-5" />
                    View Certifications
                  </Button>
                  <p className="text-xs text-muted-foreground">AWS, Google Cloud, Microsoft Azure</p>
                </div>
              </div>
              
              {/* Premium trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">45 In-House Specialists</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">6+ Years Average Experience</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">40+ Professional Certifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {teamStats.map((stat, index) => (
            <Card key={index} className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>

      <main className="py-20">
        <Container>
          {/* Premium Team Structure */}
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
            {/* Bold, aspirational headline */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Elite Talent, Global Scale
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                45 world-class specialists across 6 departments, delivering enterprise-grade solutions at startup prices. 
                <span className="font-semibold text-foreground"> European leadership meets Indonesian innovation.</span>
              </p>
            </div>
            
            {/* Premium 6-card grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamStructure.map((team, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gradient-to-r from-primary/20 via-accent/20 to-primary/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                    borderImage: 'linear-gradient(135deg, rgba(255,0,200,0.2), rgba(0,255,204,0.2), rgba(255,0,200,0.2)) 1'
                  }}
                >
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
                  
                  {/* Header with flag and count */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {team.category}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-2xl">🇮🇩</span>
                          <span className="text-sm text-muted-foreground">Indonesian Excellence</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                        {team.count}
                      </div>
                      <div className="text-xs text-muted-foreground">Specialists</div>
                    </div>
                  </div>
                  
                  {/* Benefit-driven description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {team.description}
                  </p>
                  
                  {/* Skills with modern styling */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <span className="text-lg">⚡</span>
                      Core Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {team.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 text-foreground text-sm rounded-full border border-primary/20 hover:border-primary/40 hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-all duration-300 group-hover:scale-105"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover effect indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom trust indicators */}
            <div className="mt-16 text-center">
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/60 backdrop-blur-sm border border-white/40">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-medium text-foreground">All Available Immediately</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/60 backdrop-blur-sm border border-white/40">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="font-medium text-foreground">6+ Years Average Experience</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/60 backdrop-blur-sm border border-white/40">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                  <span className="font-medium text-foreground">European Project Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">European Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <div className="text-primary font-semibold">{leader.role}</div>
                  <div className="text-sm text-muted-foreground">{leader.location}</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold">Experience: </span>
                      <span className="text-muted-foreground">{leader.experience}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Expertise: </span>
                      <span className="text-muted-foreground">{leader.expertise}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">{leader.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Team Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <span className="font-medium">{cert.name}</span>
                <span className="text-primary font-bold">{cert.count} certified</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Our Team Delivers */}
        <div className="bg-muted/30 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Our Team Delivers Superior Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Certified Experts</h3>
              <p className="text-sm text-muted-foreground">
                AWS, Google Cloud, Microsoft Azure certifications across the team
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Proven Track Record</h3>
              <p className="text-sm text-muted-foreground">
                750+ successful projects across 20+ industries
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Continuous Learning</h3>
              <p className="text-sm text-muted-foreground">
                Monthly training on latest technologies and best practices
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Client Satisfaction</h3>
              <p className="text-sm text-muted-foreground">
                98% client satisfaction rate with 85% repeat business
              </p>
            </div>
          </div>
        </div>

        {/* Team Management Tools & Capabilities */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Advanced Team Management & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Project Management</h3>
              <p className="text-muted-foreground mb-4">
                Jira, Confluence, Asana, Monday.com, and custom project tracking systems for seamless workflow management
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Jira</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Confluence</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Asana</span>
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Communication Hub</h3>
              <p className="text-muted-foreground mb-4">
                Slack, Microsoft Teams, WhatsApp Business, Zoom, and dedicated communication channels for instant collaboration
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Slack</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Teams</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Zoom</span>
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics & Reporting</h3>
              <p className="text-muted-foreground mb-4">
                Custom dashboards, time tracking, performance metrics, and real-time project status reporting
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Custom Dashboards</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Time Tracking</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">KPI Reports</span>
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
              <p className="text-muted-foreground mb-4">
                Enterprise-grade security, GDPR compliance, data encryption, and secure file sharing protocols
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">GDPR</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Encryption</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">2FA</span>
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sales & CRM</h3>
              <p className="text-muted-foreground mb-4">
                HubSpot, Salesforce, Pipedrive, and custom CRM systems for lead management and client relations
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">HubSpot</span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">Salesforce</span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">Pipedrive</span>
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Development Tools</h3>
              <p className="text-muted-foreground mb-4">
                GitHub, GitLab, Docker, Kubernetes, CI/CD pipelines, and automated deployment systems
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">GitHub</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Docker</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">CI/CD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Communication & Culture */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Communication & Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Perfect Communication</h3>
              <p className="text-muted-foreground">
                European project leadership ensures crystal-clear communication. Direct WhatsApp access, 
                weekly video calls, and project managers who actually understand your business.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Every project undergoes rigorous quality checks by European managers to ensure 
                the highest standards before delivery to clients.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cultural Understanding</h3>
              <p className="text-muted-foreground">
                Our European leadership understands both European business culture and Indonesian 
                work practices, creating the perfect bridge for successful collaboration.
              </p>
            </div>
          </div>
        </div>

      </Container>

      {/* CTA Section */}
      <div className="w-full bg-black text-white py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work with Our Team?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get direct access to our talented team and experience the perfect blend of Indonesian talent and European leadership
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="min-h-[44px]">
                Meet the Team
              </Button>
              <Button size="lg" variant="outline" className="min-h-[44px] bg-transparent border-white/20 text-white hover:bg-white/10">
                Start Your Project
              </Button>
            </div>
          </div>
        </Container>
      </div>
      </main>
    </>
  );
}
