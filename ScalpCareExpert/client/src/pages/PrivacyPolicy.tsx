import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Lock, Database, UserCheck, FileText } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you book a consultation, contact us, or use our services. This includes your name, email address, phone number, and any health information you choose to share during consultations."
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: "We use your information to provide our scalp health services, schedule appointments, communicate with you about your treatment, and improve our services. We never sell your personal information to third parties."
    },
    {
      icon: Lock,
      title: "Data Security",
      content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data is encrypted and stored securely."
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: "You have the right to access, update, or delete your personal information. You can also opt out of marketing communications at any time by contacting us directly."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-emerald-50/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Privacy & Security
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Your privacy and data security are our top priorities. Learn how we protect and handle your personal information at ScalpCare Expert.
              </p>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-slate max-w-none">
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Last Updated: September 27, 2024</h2>
                  <p className="text-slate-600 leading-relaxed">
                    At ScalpCare Expert, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                  </p>
                </div>

                {/* Key Sections */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {sections.map((section, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-emerald-100 rounded-xl">
                            <section.icon className="w-6 h-6 text-emerald-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">{section.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{section.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Detailed Content */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
                    <div className="space-y-4 text-slate-600">
                      <p>
                        <strong>Personal Information:</strong> When you book a consultation or contact us, we collect your name, email address, phone number, and any health information you choose to share.
                      </p>
                      <p>
                        <strong>Usage Information:</strong> We automatically collect certain information about your device and how you interact with our website, including IP address, browser type, and pages visited.
                      </p>
                      <p>
                        <strong>Health Information:</strong> During consultations, we may collect information about your scalp condition, hair health, and treatment history to provide personalized care.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
                    <div className="space-y-4 text-slate-600">
                      <p>We use your information to:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Provide scalp health consultations and treatments</li>
                        <li>Schedule and manage appointments</li>
                        <li>Communicate with you about your treatment plan</li>
                        <li>Improve our services and develop new treatments</li>
                        <li>Comply with legal and regulatory requirements</li>
                        <li>Send you important updates about our services</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
                    <div className="space-y-4 text-slate-600">
                      <p>
                        We implement industry-standard security measures to protect your personal information, including:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Encryption of all data in transit and at rest</li>
                        <li>Secure servers and databases</li>
                        <li>Regular security audits and updates</li>
                        <li>Limited access to personal information on a need-to-know basis</li>
                        <li>Secure backup and recovery procedures</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
                    <div className="space-y-4 text-slate-600">
                      <p>You have the following rights regarding your personal information:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Access:</strong> Request a copy of your personal information</li>
                        <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                        <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                        <li><strong>Portability:</strong> Receive your data in a structured format</li>
                        <li><strong>Objection:</strong> Object to certain uses of your information</li>
                        <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
                    <div className="space-y-4 text-slate-600">
                      <p>
                        If you have any questions about this Privacy Policy or our data practices, please contact us:
                      </p>
                      <div className="bg-slate-50 p-6 rounded-lg">
                        <p><strong>Email:</strong> privacy@scalpcareexpert.com</p>
                        <p><strong>Phone:</strong> +971 4 XXX XXXX</p>
                        <p><strong>Address:</strong> Jumeirah, Dubai, UAE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
