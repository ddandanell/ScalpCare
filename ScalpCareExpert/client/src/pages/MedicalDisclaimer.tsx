import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Stethoscope, Shield, FileText, CheckCircle, XCircle } from "lucide-react";

export default function MedicalDisclaimer() {
  const warnings = [
    {
      icon: AlertTriangle,
      title: "Not Medical Advice",
      content: "Our consultations are educational and informational only. They do not constitute medical advice, diagnosis, or treatment."
    },
    {
      icon: Stethoscope,
      title: "Consult Healthcare Professionals",
      content: "Always consult with qualified healthcare professionals for medical concerns, especially for serious scalp or hair conditions."
    },
    {
      icon: Shield,
      title: "No Guarantees",
      content: "We cannot guarantee specific results from our consultations or recommendations. Individual results may vary."
    },
    {
      icon: FileText,
      title: "Educational Purpose",
      content: "Our services are designed to educate and inform about scalp health, not to replace professional medical care."
    }
  ];

  const doNotUse = [
    "If you have open wounds or infections on your scalp",
    "If you are experiencing severe hair loss or scalp pain",
    "If you have been diagnosed with a serious medical condition",
    "If you are pregnant or breastfeeding (without doctor's approval)",
    "If you are taking medications that may affect hair growth",
    "If you have had recent scalp surgery or procedures"
  ];

  const seekMedicalHelp = [
    "Sudden or severe hair loss",
    "Scalp pain, burning, or itching",
    "Open sores or wounds on the scalp",
    "Signs of infection (redness, swelling, pus)",
    "Changes in scalp texture or appearance",
    "Any concerning symptoms that persist or worsen"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-amber-50 to-red-50/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6">
                <AlertTriangle className="w-4 h-4" />
                Medical Disclaimer
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Medical Disclaimer
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Important information about the nature of our services and when to seek professional medical care.
              </p>
            </div>
          </div>
        </section>

        {/* Critical Warning */}
        <section className="py-8 bg-red-50 border-l-4 border-red-400">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-red-800 mb-2">Important Medical Notice</h2>
                  <p className="text-red-700 leading-relaxed">
                    <strong>Our services are NOT a substitute for professional medical care.</strong> If you have a medical emergency or serious health concern, contact your local emergency services immediately or visit the nearest hospital.
                  </p>
                </div>
              </div>
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
                    This Medical Disclaimer explains the nature of our services and important limitations. Please read carefully before booking a consultation.
                  </p>
                </div>

                {/* Key Warnings */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {warnings.map((warning, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-amber-200">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-amber-100 rounded-xl">
                            <warning.icon className="w-6 h-6 text-amber-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3">{warning.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{warning.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Detailed Content */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Nature of Our Services</h2>
                    <div className="space-y-4 text-slate-600">
                      <p>
                        ScalpCare Expert provides <strong>educational and consultative services</strong> related to scalp and hair health. Our services include:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Educational consultations about scalp health</li>
                        <li>Information about hair care practices</li>
                        <li>Lifestyle and environmental factors affecting hair health</li>
                        <li>General recommendations for scalp care</li>
                        <li>Climate-specific hair health advice for Dubai residents</li>
                      </ul>
                      <p className="font-semibold text-amber-700">
                        Our services are NOT medical diagnosis, treatment, or cure for any medical condition.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">When NOT to Use Our Services</h2>
                    <div className="space-y-4 text-slate-600">
                      <p>Do not use our services if you have any of the following conditions:</p>
                      <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                        <ul className="space-y-2">
                          {doNotUse.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">When to Seek Medical Help</h2>
                    <div className="space-y-4 text-slate-600">
                      <p>Seek immediate medical attention if you experience:</p>
                      <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                        <ul className="space-y-2">
                          {seekMedicalHelp.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitations and Disclaimers</h2>
                    <div className="space-y-4 text-slate-600">
                      <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                        <p className="font-semibold text-amber-800 mb-2">No Medical Advice:</p>
                        <p>
                          Our consultations do not constitute medical advice, diagnosis, or treatment. We are not licensed medical professionals and cannot provide medical care.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <p><strong>No Guarantees:</strong> We cannot guarantee specific results from our consultations or recommendations. Individual results may vary based on many factors.</p>
                        <p><strong>Educational Purpose Only:</strong> Our services are designed to educate and inform, not to replace professional medical care.</p>
                        <p><strong>Not a Substitute:</strong> Our services should not be used as a substitute for professional medical advice, diagnosis, or treatment.</p>
                        <p><strong>Individual Responsibility:</strong> You are responsible for your own health decisions and should consult with qualified healthcare professionals.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Professional Medical Care</h2>
                    <div className="space-y-4 text-slate-600">
                      <p>
                        For any medical concerns, we strongly recommend consulting with qualified healthcare professionals, including:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Dermatologists:</strong> For skin and scalp conditions</li>
                        <li><strong>Trichologists:</strong> For specialized hair and scalp disorders</li>
                        <li><strong>General Practitioners:</strong> For general health concerns</li>
                        <li><strong>Specialists:</strong> For specific medical conditions</li>
                      </ul>
                      <p>
                        In case of medical emergency, contact your local emergency services immediately or visit the nearest hospital.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Assumption of Risk</h2>
                    <div className="space-y-4 text-slate-600">
                      <p>
                        By using our services, you acknowledge and agree that:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>You understand the educational nature of our services</li>
                        <li>You will not rely on our consultations as medical advice</li>
                        <li>You will consult with qualified healthcare professionals for medical concerns</li>
                        <li>You assume all risks associated with following our recommendations</li>
                        <li>You release ScalpCare Expert from any liability for health outcomes</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
                    <div className="space-y-4 text-slate-600">
                      <p>
                        If you have any questions about this Medical Disclaimer, please contact us:
                      </p>
                      <div className="bg-slate-50 p-6 rounded-lg">
                        <p><strong>Email:</strong> info@scalpcareexpert.com</p>
                        <p><strong>Phone:</strong> +971 4 XXX XXXX</p>
                        <p><strong>Address:</strong> Jumeirah, Dubai, UAE</p>
                      </div>
                      <p className="text-sm text-slate-500">
                        <strong>Emergency:</strong> For medical emergencies, call 999 or visit your nearest hospital.
                      </p>
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
