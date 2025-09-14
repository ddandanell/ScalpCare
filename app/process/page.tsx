import { Container } from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, CreditCard, Eye, ArrowRight, Clock, Users, Shield, MessageCircle } from "lucide-react";

const processSteps = [
  {
    number: "1",
    title: "Discovery Workshops",
    duration: "1-2 days",
    description: "Intensive workshops to define requirements, create detailed roadmaps, and identify success KPIs before any coding begins",
    icon: CheckCircle,
    activities: [
      "Business requirements analysis",
      "Technical architecture planning",
      "User journey mapping", 
      "Success metrics definition",
      "Stakeholder interviews",
      "Competitive analysis"
    ],
    deliverables: [
      "Detailed project roadmap",
      "Technical architecture document",
      "User stories and acceptance criteria",
      "Success metrics dashboard plan"
    ]
  },
  {
    number: "2",
    title: "Complete Documentation",
    duration: "2-3 days",
    description: "Full system architecture, code explanations, API mapping, and deployment guides so you always own and understand your code",
    icon: FileText,
    activities: [
      "System architecture diagrams",
      "API documentation",
      "Database schema documentation",
      "Deployment & maintenance guides",
      "Code commenting and documentation",
      "Technical specifications"
    ],
    deliverables: [
      "Complete system documentation",
      "API documentation with examples",
      "Database schema and relationships",
      "Deployment and maintenance guides"
    ]
  },
  {
    number: "3",
    title: "Milestone Payments",
    duration: "Throughout project",
    description: "Milestone-based payments mean you only pay for completed, tested, and approved results. Review and approve each phase before moving forward",
    icon: CreditCard,
    activities: [
      "Pay only for completed work",
      "Full testing before approval",
      "Change requests handled fairly",
      "No upfront payments required",
      "Transparent billing",
      "Progress-based invoicing"
    ],
    deliverables: [
      "Milestone completion reports",
      "Testing results and documentation",
      "Change request documentation",
      "Transparent billing statements"
    ]
  },
  {
    number: "4",
    title: "Total Transparency",
    duration: "Throughout project",
    description: "Direct access to project tools, dedicated communication channels, weekly video calls, and detailed written progress reports",
    icon: Eye,
    activities: [
      "Direct WhatsApp project groups",
      "Weekly video progress calls",
      "Real-time project dashboard access",
      "Detailed written reports",
      "Code repository access",
      "Regular status updates"
    ],
    deliverables: [
      "Weekly progress reports",
      "Project dashboard access",
      "Code repository with full history",
      "Communication logs and decisions"
    ]
  }
];

const processBenefits = [
  {
    icon: Shield,
    title: "Zero Risk",
    description: "Milestone payments and constant communication eliminate project risks. You only pay for what you approve.",
    features: [
      "No upfront payments required",
      "Milestone-based billing",
      "Full testing before approval",
      "Change request flexibility"
    ]
  },
  {
    icon: Clock,
    title: "Maximum Speed",
    description: "Streamlined process eliminates bureaucracy and focuses on delivery. Get to market 3x faster than competitors.",
    features: [
      "Agile development methodology",
      "Parallel development streams",
      "Automated testing and deployment",
      "Minimal bureaucracy"
    ]
  },
  {
    icon: CheckCircle,
    title: "Perfect Results",
    description: "Continuous feedback loops ensure the final product exceeds expectations and meets all requirements.",
    features: [
      "Regular client feedback sessions",
      "Iterative development approach",
      "Quality assurance at every step",
      "Client approval required for each milestone"
    ]
  }
];

const communicationChannels = [
  {
    channel: "WhatsApp Project Groups",
    description: "Direct access to your development team for instant communication and quick questions",
    frequency: "24/7 availability",
    participants: "Client, Project Manager, Lead Developer"
  },
  {
    channel: "Weekly Video Calls",
    description: "Scheduled progress meetings to review completed work and plan next steps",
    frequency: "Every Friday",
    participants: "Client, Project Manager, Full Team"
  },
  {
    channel: "Project Dashboard",
    description: "Real-time access to project status, timelines, and deliverables",
    frequency: "Updated daily",
    participants: "Client, Project Manager"
  },
  {
    channel: "Written Reports",
    description: "Detailed weekly reports with progress updates, challenges, and next steps",
    frequency: "Every Monday",
    participants: "Client, Project Manager"
  }
];

const qualityAssurance = [
  {
    stage: "Code Review",
    description: "Every line of code is reviewed by senior developers before integration",
    tools: ["GitHub Pull Requests", "Code Review Checklists", "Automated Testing"]
  },
  {
    stage: "Testing",
    description: "Comprehensive testing including unit, integration, and user acceptance testing",
    tools: ["Jest", "Cypress", "Manual Testing", "Performance Testing"]
  },
  {
    stage: "Security Audit",
    description: "Security review of all code and infrastructure before deployment",
    tools: ["OWASP Guidelines", "Security Scanning", "Penetration Testing"]
  },
  {
    stage: "Performance Review",
    description: "Performance optimization and load testing to ensure scalability",
    tools: ["Lighthouse", "Load Testing", "Performance Monitoring"]
  }
];

export default function ProcessPage() {
  return (
    <>
      {/* Premium Hero Section */}
      <div className="relative min-h-screen overflow-hidden flex items-center w-screen -ml-[50vw] left-1/2">
          {/* Full-screen background elements */}
          <div className="absolute inset-0 w-full">
            {/* Modern gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-red-600/5 to-pink-600/10" />
            
            {/* Abstract tech grid overlay */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 255, 204, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 0, 200, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '35px 35px'
              }} />
            </div>
            
            {/* Glowing orbs */}
            <div className="absolute top-12 right-12 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl" />
            <div className="absolute bottom-12 left-12 w-40 h-40 bg-red-500/20 rounded-full blur-3xl" />
          </div>
          
          <div className="relative py-16 sm:py-20 md:py-24 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="max-w-5xl mx-auto text-center">
              {/* Main headline with emotional punch */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
                Zero-Risk, Maximum Results
              </h1>
              
              {/* Aspirational subheadline */}
              <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                Our battle-tested 4-phase process eliminates every risk while delivering 3x faster results. You stay in complete control, every step of the way.
              </p>
              
              {/* Premium benefit + proof statements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-pink-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Zero Risk Guarantee</h3>
                    <p className="text-muted-foreground">Milestone payments only • You approve every step</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-cyan-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">3x Faster Delivery</h3>
                    <p className="text-muted-foreground">Streamlined process • No bureaucracy delays</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">👁️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Total Transparency</h3>
                    <p className="text-muted-foreground">Real-time access • Weekly progress calls</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Complete Documentation</h3>
                    <p className="text-muted-foreground">Own your code • Full system documentation</p>
                  </div>
                </div>
              </div>
              
              {/* Premium CTA Buttons with trust sublabels */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <div className="text-center">
                  <Button size="lg" className="h-14 px-10 text-lg font-semibold mb-2 bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-xs text-muted-foreground">4-phase process • Zero risk</p>
                </div>
                <div className="text-center">
                  <Button variant="outline" size="lg" className="h-14 px-10 text-lg font-semibold mb-2 border-2 hover:bg-white/10">
                    <FileText className="mr-2 h-5 w-5" />
                    Download Process Guide
                  </Button>
                  <p className="text-xs text-muted-foreground">Detailed methodology • Free PDF</p>
                </div>
              </div>
              
              {/* Premium trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">4-Phase Process</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">Milestone Payments</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">Real-Time Communication</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      <main className="py-20">
        <Container>
          {/* Process Steps */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="h-6 w-6 text-primary" />
                          <CardTitle className="text-xl">{step.title}</CardTitle>
                          <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Activities:</h4>
                        <ul className="space-y-2">
                          {step.activities.map((activity, activityIndex) => (
                            <li key={activityIndex} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Deliverables:</h4>
                        <ul className="space-y-2">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <li key={deliverableIndex} className="flex items-center text-sm text-muted-foreground">
                              <FileText className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Why This Process Works */}
        <div className="bg-muted/30 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why This Process Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-6">{benefit.description}</p>
                  <ul className="space-y-2 text-sm">
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Communication Channels */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Communication Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communicationChannels.map((channel, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">{channel.channel}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{channel.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-semibold">Frequency: </span>
                      <span className="text-muted-foreground">{channel.frequency}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Participants: </span>
                      <span className="text-muted-foreground">{channel.participants}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Quality Assurance Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityAssurance.map((stage, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">{stage.stage}</CardTitle>
                  <p className="text-muted-foreground">{stage.description}</p>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold mb-3">Tools & Methods:</h4>
                    <div className="flex flex-wrap gap-2">
                      {stage.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </Container>

      {/* Process Timeline */}
      <div className="w-full bg-black text-white py-20">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">Typical Project Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1-2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Discovery</h3>
              <p className="text-sm opacity-90">Days</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2-3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Planning</h3>
              <p className="text-sm opacity-90">Days</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">30-45</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Development</h3>
              <p className="text-sm opacity-90">Days</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1-2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Deployment</h3>
              <p className="text-sm opacity-90">Days</p>
            </div>
          </div>
        </Container>
      </div>

      <Container>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Our Process?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            See how our proven process can deliver your project faster, cheaper, and better than European agencies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="min-h-[44px]">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="min-h-[44px]">
              Download Process Guide
            </Button>
          </div>
        </div>
        </Container>
      </main>
    </>
  );
}
