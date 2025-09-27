import { Container } from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, Scale, Users, Clock, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "Service Agreement",
    content: "These Terms & Conditions govern the use of PT. DCPH Digital Consulting's web development services. By engaging our services, you agree to be bound by these terms."
  },
  {
    icon: Shield,
    title: "Data Protection",
    content: "We are committed to protecting your data and intellectual property. All client information is treated with strict confidentiality and security measures."
  },
  {
    icon: Scale,
    title: "Legal Framework",
    content: "These terms are governed by Indonesian law and international business practices. Any disputes will be resolved through professional mediation."
  },
  {
    icon: Users,
    title: "Client Rights",
    content: "You retain full ownership of all intellectual property created for your project. We provide complete source code and documentation upon project completion."
  }
];

const termsContent = [
  {
    title: "1. Service Scope and Delivery",
    content: [
      "PT. DCPH Digital Consulting provides custom web development, mobile application development, and digital solutions as specified in individual project agreements.",
      "All projects include comprehensive documentation, source code, and deployment assistance.",
      "Timeline estimates are provided in good faith but may vary based on project complexity and client feedback cycles.",
      "We maintain European quality standards while delivering at Indonesian competitive rates."
    ]
  },
  {
    title: "2. Payment Terms and Pricing",
    content: [
      "Project pricing is provided upfront with detailed breakdowns before work commences.",
      "Payment schedules are typically milestone-based: 50% upfront, 40% at project midpoint, 10% upon completion.",
      "All prices are in USD unless otherwise specified. Payment methods include bank transfer, PayPal, and major credit cards.",
      "Late payments may incur a 2% monthly service charge. Projects may be paused for payments overdue by 30+ days."
    ]
  },
  {
    title: "3. Intellectual Property Rights",
    content: [
      "Client retains full ownership of all custom code, designs, and content created specifically for their project.",
      "PT. DCPH Digital Consulting retains rights to general methodologies, frameworks, and reusable components developed internally.",
      "Third-party libraries and frameworks remain under their respective licenses as specified by their creators.",
      "Upon final payment, client receives complete source code, documentation, and deployment instructions."
    ]
  },
  {
    title: "4. Confidentiality and Data Protection",
    content: [
      "All client information, project details, and business data are treated as strictly confidential.",
      "We implement industry-standard security measures including encrypted communications and secure file storage.",
      "Team members sign non-disclosure agreements and are bound by confidentiality obligations.",
      "Client data is never shared with third parties without explicit written consent."
    ]
  },
  {
    title: "5. Project Management and Communication",
    content: [
      "Each project is assigned a dedicated European project manager for clear communication and quality control.",
      "Regular progress updates are provided via email, video calls, and project management tools.",
      "Client feedback and change requests are incorporated within agreed scope and timeline.",
      "Communication channels include WhatsApp, email, and scheduled video meetings."
    ]
  },
  {
    title: "6. Quality Assurance and Support",
    content: [
      "All deliverables undergo rigorous testing and quality assurance before handover.",
      "30 days of post-launch support is included with all projects at no additional cost.",
      "Bug fixes and minor adjustments are covered during the support period.",
      "Major feature additions or significant changes may require additional project scope and pricing."
    ]
  },
  {
    title: "7. Limitation of Liability",
    content: [
      "PT. DCPH Digital Consulting's liability is limited to the total project value paid by the client.",
      "We are not liable for indirect damages, lost profits, or business interruption beyond our direct control.",
      "Force majeure events including natural disasters, government actions, or internet outages are excluded from liability.",
      "Clients are responsible for backing up their data and maintaining appropriate security measures."
    ]
  },
  {
    title: "8. Termination and Cancellation",
    content: [
      "Either party may terminate the agreement with 14 days written notice.",
      "Work completed up to termination date will be invoiced and delivered to the client.",
      "Cancellation fees may apply if project is terminated after significant development work has commenced.",
      "Intellectual property rights transfer as specified in section 3 regardless of termination circumstances."
    ]
  }
];

export default function TermsPage() {
  return (
    <main className="py-20">
      <Container>
        {/* Premium Hero Section */}
        <div className="relative min-h-screen overflow-hidden flex items-center mb-20 w-screen -ml-[50vw] left-1/2">
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
                Terms & Conditions
              </h1>
              
              {/* Aspirational subheadline */}
              <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                Clear, transparent terms that protect both parties and ensure smooth project delivery. Built on trust, fairness, and mutual respect.
              </p>
              
              {/* Premium benefit + proof statements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-pink-600 rounded-xl flex items-center justify-center">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Transparent Agreements</h3>
                    <p className="text-muted-foreground">Clear terms with no hidden fees • Full project scope defined upfront</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-cyan-500 rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Your Rights Protected</h3>
                    <p className="text-muted-foreground">Full IP ownership • Complete source code • 30-day support</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Scale className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Fair Resolution</h3>
                    <p className="text-muted-foreground">Professional mediation • International standards • Client-first approach</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Partnership Focus</h3>
                    <p className="text-muted-foreground">Long-term relationships • Mutual success • Trust-based collaboration</p>
                  </div>
                </div>
              </div>
              
              {/* Premium trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">Last Updated: December 2024</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">Governing Law: Indonesian & International</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">Client-First Approach</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{section.content}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Terms Content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {termsContent.map((section, index) => (
              <Card key={index} className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  {section.title}
                </h2>
                <ul className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-20 p-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Important Notice</h3>
              <p className="text-amber-800 leading-relaxed">
                These terms are designed to protect both parties and ensure successful project delivery. 
                We believe in transparent, fair business practices. If you have any questions about these terms 
                or need clarification on any point, please don't hesitate to contact us. We're here to help 
                and ensure you feel completely comfortable with our working relationship.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Questions About Our Terms?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're committed to transparency and clear communication. If you have any questions about these terms or need clarification on any point, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </a>
            <a 
              href="mailto:hello@dcphdigital.com" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              Email Support
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
