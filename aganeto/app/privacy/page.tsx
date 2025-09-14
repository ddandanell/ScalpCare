import { Container } from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, UserCheck, Globe, AlertCircle, CheckCircle, ArrowRight } from "lucide-react";

const privacyHighlights = [
  {
    icon: Shield,
    title: "Data Protection",
    content: "We implement industry-standard security measures to protect your personal and business data from unauthorized access, use, or disclosure."
  },
  {
    icon: Lock,
    title: "Secure Storage",
    content: "All data is encrypted both in transit and at rest using enterprise-grade encryption protocols and secure cloud infrastructure."
  },
  {
    icon: Eye,
    title: "Transparency",
    content: "We clearly explain what data we collect, how we use it, and who has access to it. No hidden data collection or usage."
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    content: "You have full control over your data with rights to access, modify, delete, or export your information at any time."
  }
];

const dataTypes = [
  {
    category: "Contact Information",
    data: ["Name", "Email address", "Phone number", "Company name", "Job title"],
    purpose: "Communication, project management, and service delivery",
    retention: "Duration of project + 2 years for support"
  },
  {
    category: "Project Data",
    data: ["Project requirements", "Technical specifications", "Source code", "Design files", "Documentation"],
    purpose: "Service delivery, quality assurance, and ongoing support",
    retention: "Duration of project + 5 years for support purposes"
  },
  {
    category: "Communication Records",
    data: ["Email correspondence", "Meeting notes", "Feedback", "Support tickets"],
    purpose: "Project coordination, quality improvement, and dispute resolution",
    retention: "Duration of project + 3 years"
  },
  {
    category: "Technical Information",
    data: ["IP addresses", "Browser information", "Usage analytics", "Error logs"],
    purpose: "Website functionality, security monitoring, and service improvement",
    retention: "12 months maximum"
  }
];

const privacySections = [
  {
    title: "1. Information We Collect",
    content: [
      "We collect information you provide directly to us, such as when you contact us, request a quote, or engage our services.",
      "This includes contact information (name, email, phone), company details, project requirements, and communication records.",
      "We automatically collect certain technical information when you visit our website, including IP address, browser type, and usage patterns.",
      "We may collect information from third-party sources with your consent, such as social media profiles or business directories."
    ]
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "To provide, maintain, and improve our web development services and customer support.",
      "To communicate with you about your projects, including progress updates, questions, and deliverables.",
      "To process payments, send invoices, and manage our business relationship with you.",
      "To analyze website usage and improve our services, user experience, and marketing effectiveness.",
      "To comply with legal obligations and protect our rights and interests."
    ]
  },
  {
    title: "3. Information Sharing and Disclosure",
    content: [
      "We do not sell, trade, or rent your personal information to third parties for marketing purposes.",
      "We may share information with trusted service providers who assist us in operating our business (hosting, payment processing, analytics).",
      "We may disclose information if required by law, court order, or to protect our rights and safety.",
      "In case of business transfer or merger, your information may be transferred to the new entity with the same privacy protections.",
      "We may share aggregated, non-personally identifiable information for business analysis and industry insights."
    ]
  },
  {
    title: "4. Data Security and Protection",
    content: [
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      "All data is encrypted using industry-standard encryption protocols both in transit and at rest.",
      "We use secure cloud infrastructure with regular security audits and compliance certifications.",
      "Access to personal information is restricted to authorized personnel who need it for legitimate business purposes.",
      "We regularly review and update our security practices to address emerging threats and vulnerabilities."
    ]
  },
  {
    title: "5. Your Rights and Choices",
    content: [
      "You have the right to access, update, or correct your personal information at any time.",
      "You can request a copy of all personal information we hold about you in a portable format.",
      "You have the right to request deletion of your personal information, subject to legal and contractual obligations.",
      "You can opt out of marketing communications at any time by clicking unsubscribe or contacting us directly.",
      "You have the right to object to certain processing activities and request restriction of processing."
    ]
  },
  {
    title: "6. Cookies and Tracking Technologies",
    content: [
      "We use cookies and similar technologies to enhance your browsing experience and analyze website usage.",
      "Essential cookies are necessary for website functionality and cannot be disabled.",
      "Analytics cookies help us understand how visitors interact with our website and improve our services.",
      "You can control cookie preferences through your browser settings, though this may affect website functionality.",
      "We do not use cookies for advertising or tracking across other websites."
    ]
  },
  {
    title: "7. International Data Transfers",
    content: [
      "As an international company, we may transfer your personal information to countries outside your residence.",
      "We ensure appropriate safeguards are in place for international transfers, including standard contractual clauses.",
      "All data transfers comply with applicable data protection laws and regulations.",
      "We maintain the same level of protection for your information regardless of where it is processed.",
      "You can contact us for more information about specific data transfer arrangements."
    ]
  },
  {
    title: "8. Data Retention and Deletion",
    content: [
      "We retain personal information only as long as necessary for the purposes outlined in this privacy policy.",
      "Project-related data is typically retained for the duration of the project plus additional time for support purposes.",
      "Marketing data is retained until you opt out or for a maximum of 3 years of inactivity.",
      "Legal and regulatory requirements may require us to retain certain information for longer periods.",
      "When data is no longer needed, we securely delete or anonymize it in accordance with our retention schedule."
    ]
  }
];

export default function PrivacyPage() {
  return (
    <main className="py-20">
      <Container>
        {/* Premium Hero Section */}
        <div className="relative min-h-screen overflow-hidden flex items-center mb-20 w-screen -ml-[50vw] left-1/2">
          {/* Full-screen background elements */}
          <div className="absolute inset-0 w-full">
            {/* Modern gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-pink-600/10" />
            
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
            <div className="absolute top-20 left-20 w-36 h-36 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-28 h-28 bg-purple-500/20 rounded-full blur-2xl" />
          </div>
          
          <div className="relative py-16 sm:py-20 md:py-24 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="max-w-5xl mx-auto text-center">
              {/* Main headline with emotional punch */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
                Privacy Policy
              </h1>
              
              {/* Aspirational subheadline */}
              <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                Your privacy matters. We're committed to protecting your personal information with transparency, security, and respect for your rights.
              </p>
              
              {/* Premium benefit + proof statements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-pink-600 rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Enterprise Security</h3>
                    <p className="text-muted-foreground">Bank-level encryption • Secure infrastructure • Regular audits</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-cyan-500 rounded-xl flex items-center justify-center">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Full Transparency</h3>
                    <p className="text-muted-foreground">Clear data practices • No hidden collection • Your rights explained</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Your Control</h3>
                    <p className="text-muted-foreground">Access your data • Delete anytime • Export options</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Global Standards</h3>
                    <p className="text-muted-foreground">GDPR compliant • International best practices • Regular updates</p>
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
                  <span className="font-medium">GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">Enterprise Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {privacyHighlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{highlight.content}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Data Types Table */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">What Data We Collect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataTypes.map((type, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <Database className="h-6 w-6 text-primary" />
                    {type.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Data Collected:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      {type.data.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Purpose:</h4>
                    <p className="text-muted-foreground">{type.purpose}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Retention:</h4>
                    <p className="text-muted-foreground">{type.retention}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Privacy Policy Content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {privacySections.map((section, index) => (
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

        {/* Contact Information */}
        <div className="mt-20 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Questions About Your Privacy?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're committed to transparency and protecting your privacy. If you have any questions about how we handle your data or want to exercise your rights, we're here to help.
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
                href="mailto:privacy@dcphdigital.com" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                Privacy Officer
              </a>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
