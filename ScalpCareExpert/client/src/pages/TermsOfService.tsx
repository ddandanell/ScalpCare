import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Clock } from "lucide-react";

export default function TermsOfService() {
  const sections = [
    {
      icon: FileText,
      title: "Service Agreement",
      content: "By booking a consultation with ScalpCare Expert, you agree to these terms and conditions. Our services are provided for educational and consultation purposes only."
    },
    {
      icon: Scale,
      title: "Liability Limitations",
      content: "While we provide professional scalp health advice, we cannot guarantee specific results. Our consultations are educational and should not replace professional medical advice."
    },
    {
      icon: Shield,
      title: "Privacy Protection",
      content: "We are committed to protecting your privacy and maintaining the confidentiality of all information shared during consultations."
    },
    {
      icon: AlertTriangle,
      title: "Medical Disclaimer",
      content: "Our services are not a substitute for professional medical diagnosis, treatment, or advice. Always consult with qualified healthcare professionals for medical concerns."
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
                <FileText className="w-4 h-4" />
                Legal Terms
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Terms of Service
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Please read these terms carefully before using our services. By booking a consultation, you agree to be bound by these terms and conditions.
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
                    These Terms of Service ("Terms") govern your use of ScalpCare Expert's website and services. By accessing our website or booking a consultation, you agree to be bound by these Terms.
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
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Service Description</h2>
                    <div className="space-y-4 text-slate-600">
                      <p>
                        ScalpCare Expert provides professional scalp health consultations and educational services. Our services include:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Comprehensive scalp health assessments</li>
                        <li>Personalized treatment recommendations</li>
                        <li>Educational consultations about hair and scalp care</li>
                        <li>Climate-specific hair health advice for Dubai residents</li>
                        <li>Follow-up consultations and progress monitoring</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Booking and Payment</h2>
                    <div className="space-y-4 text-slate-600">
                      <p>
                        <strong>Consultation Booking:</strong> All consultations must be booked in advance through our website or by phone. We require 24-hour notice for cancellations.
                      </p>
                      <p>
                        <strong>Payment Terms:</strong> Payment is due at the time of booking. We accept major credit cards and bank transfers. All prices are in UAE Dirhams (AED).
                      </p>
                      <p>
                        <strong>Refund Policy:</strong> Refunds are available for cancellations made at least 24 hours in advance. No refunds for no-shows or same-day cancellations.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Medical Disclaimer</h2>
                    <div className="space-y-4 text-slate-600">
                      <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                        <p className="font-semibold text-amber-800 mb-2">Important Notice:</p>
                        <p>
                          Our services are educational and consultative in nature. We do not provide medical diagnosis, treatment, or cure for any medical condition. Our consultations are not a substitute for professional medical advice, diagnosis, or treatment.
                        </p>
                      </div>
                      <p>
                        Always seek the advice of qualified healthcare professionals regarding any medical condition. If you have a medical emergency, contact your local emergency services immediately.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Client Responsibilities</h2>
                    <div className="space-y-4 text-slate-600">
                      <p>As a client, you agree to:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Provide accurate and complete information about your health history</li>
                        <li>Follow the recommendations provided during consultations</li>
                        <li>Attend scheduled appointments on time</li>
                        <li>Respect our staff and other clients</li>
                        <li>Maintain confidentiality of other clients' information</li>
                        <li>Notify us of any changes to your contact information</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
                    <div className="space-y-4 text-slate-600">
                      <p>
                        To the maximum extent permitted by law, ScalpCare Expert shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Your use of our services or website</li>
                        <li>Any information provided during consultations</li>
                        <li>Any results or outcomes from following our recommendations</li>
                        <li>Any technical issues or website downtime</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Intellectual Property</h2>
                    <div className="space-y-4 text-slate-600">
                      <p>
                        All content on our website, including text, graphics, logos, and images, is the property of ScalpCare Expert and is protected by copyright and other intellectual property laws.
                      </p>
                      <p>
                        You may not reproduce, distribute, or use our content without written permission. Any materials provided during consultations are for your personal use only.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Privacy and Confidentiality</h2>
                    <div className="space-y-4 text-slate-600">
                      <p>
                        We are committed to protecting your privacy and maintaining the confidentiality of all information shared during consultations. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your data.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Changes to Terms</h2>
                    <div className="space-y-4 text-slate-600">
                      <p>
                        We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on our website. Your continued use of our services after such changes constitutes acceptance of the new Terms.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Governing Law</h2>
                    <div className="space-y-4 text-slate-600">
                      <p>
                        These Terms are governed by the laws of the United Arab Emirates. Any disputes arising from these Terms or our services will be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact Information</h2>
                    <div className="space-y-4 text-slate-600">
                      <p>
                        If you have any questions about these Terms of Service, please contact us:
                      </p>
                      <div className="bg-slate-50 p-6 rounded-lg">
                        <p><strong>Email:</strong> legal@scalpcareexpert.com</p>
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
