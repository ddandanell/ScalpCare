import { Container } from "@/components/container";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar, ArrowRight, CheckCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email and we'll respond within 24 hours",
    contact: "hello@dcphdigital.com",
    response: "Within 24 hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our European project managers",
    contact: "+62 812 3456 7890",
    response: "Indonesian Business Hours"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick questions and instant communication",
    contact: "+62 812 3456 7890",
    response: "24/7 availability"
  },
  {
    icon: Calendar,
    title: "Schedule Call",
    description: "Book a free 30-minute consultation",
    contact: "Book Online",
    response: "Next available slot"
  }
];

const offices = [
  {
    city: "Bali",
    country: "Indonesia",
    flag: "🇮🇩",
    title: "Sales & Business Development Hub",
    description: "Our sales team and business development specialists work from our beautiful Bali office",
    team: "Sales & Marketing Team",
    address: "Sunset Road 819, Bali Ruko Sunset Indah II No., Kuta, Kuta, Badung Regency, Bali 80361, Indonesia",
    phone: "+62 812 3456 7890",
    email: "hello@dcphdigital.com"
  },
  {
    city: "Jakarta", 
    country: "Indonesia",
    flag: "🇮🇩",
    title: "Development & Technical Center",
    description: "Our main development team of 45+ specialists works from our Jakarta office",
    team: "Development Team",
    address: "Menara BCA, 15th Floor, Jl. Thamrin No. 1, Menteng, Central Jakarta 10310, Indonesia",
    phone: "+62 812 3456 7890",
    email: "hello@dcphdigital.com"
  }
];

const faqContact = [
  {
    question: "How quickly can you start my project?",
    answer: "We can typically begin development within 1 week of project approval. For urgent projects, we can start even sooner with our dedicated team."
  },
  {
    question: "What's included in the free consultation?",
    answer: "A 30-minute call where we discuss your project requirements, provide accurate estimates, and explain our process. No obligation, just honest advice."
  },
  {
    question: "Do you work with startups or only established companies?",
    answer: "We work with everyone! From early-stage startups to Fortune 500 companies. Our flexible pricing models work for any budget."
  },
  {
    question: "Can I visit your offices?",
    answer: "Absolutely! We'd love to show you around our development centers. Contact us to schedule a visit to any of our locations."
  }
];

export default function ContactPage() {
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
                backgroundSize: '55px 55px'
              }} />
            </div>
            
            {/* Glowing orbs */}
            <div className="absolute top-24 right-24 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-24 left-24 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
          </div>
          
          <div className="relative py-16 sm:py-20 md:py-24 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="max-w-5xl mx-auto text-center">
              {/* Main headline with emotional punch */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
                Let's Build Something Amazing
              </h1>
              
              {/* Aspirational subheadline */}
              <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                Ready to transform your boldest ideas into reality? Our European project managers are standing by to turn your vision into your next success story.
              </p>
              
              {/* Premium benefit + proof statements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-pink-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">24-Hour Response</h3>
                    <p className="text-muted-foreground">Average 4-hour response time • Even on weekends</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-cyan-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Free Consultation</h3>
                    <p className="text-muted-foreground">30-minute call • No obligation • Expert advice</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Detailed Estimates</h3>
                    <p className="text-muted-foreground">Complete project breakdown • Timeline & costs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">European Leadership</h3>
                    <p className="text-muted-foreground">Direct communication • Perfect English • Cultural understanding</p>
                  </div>
                </div>
              </div>
              
              {/* Premium CTA Buttons with trust sublabels */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <div className="text-center">
                  <Button size="lg" className="h-14 px-10 text-lg font-semibold mb-2 bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90">
                    Book Free Consultation
                    <Calendar className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-xs text-muted-foreground">30-minute call • No obligation</p>
                </div>
                <div className="text-center">
                  <Button variant="outline" size="lg" className="h-14 px-10 text-lg font-semibold mb-2 border-2 hover:bg-white/10">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Start WhatsApp Chat
                  </Button>
                  <p className="text-xs text-muted-foreground">Instant response • 24/7 availability</p>
                </div>
              </div>
              
              {/* Premium trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">4-Hour Average Response</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">Free Consultation</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">3 Global Offices</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      <main className="py-20">
        <Container>
          {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="font-semibold text-primary">{method.contact}</div>
                    <div className="text-xs text-muted-foreground">{method.response}</div>
                    {method.title === "Schedule Call" ? (
                      <Button size="sm" className="w-full mt-4">
                        Book Now
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" className="w-full mt-4">
                        Contact
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Free Consultation</h4>
                    <p className="text-sm text-muted-foreground">30-minute call with no obligation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">24-Hour Response</h4>
                    <p className="text-sm text-muted-foreground">We respond to all inquiries within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Detailed Estimates</h4>
                    <p className="text-sm text-muted-foreground">Complete project breakdown with timeline and costs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">European Leadership</h4>
                    <p className="text-sm text-muted-foreground">Direct communication with European project managers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-6">
              <h4 className="font-semibold mb-3">Quick Response Guarantee</h4>
              <p className="text-sm text-muted-foreground mb-4">
                We guarantee a response to all inquiries within 24 hours, 
                including weekends and holidays.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span>Average response time: 4 hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Company Information</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Legal Details</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-foreground">Company Name:</span>
                      <p className="text-muted-foreground">PT. DCPH Digital Consulting</p>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Tax Number (NPWP):</span>
                      <p className="text-muted-foreground">63.637.046.2-905.000</p>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Registration Date:</span>
                      <p className="text-muted-foreground">10 March 2022</p>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Authority:</span>
                      <p className="text-muted-foreground">Direktorat Jenderal Pajak (DJP – Directorate General of Taxes, Indonesia)</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Office Address</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-foreground">Main Office:</span>
                      <p className="text-muted-foreground">Sunset Road 819, Bali Ruko Sunset Indah II No., Kuta, Kuta, Badung Regency, Bali</p>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Country:</span>
                      <p className="text-muted-foreground">Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Team Distribution Explanation */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Two-Office Strategy</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We strategically operate from two locations in Indonesia to provide you with the best of both worlds: 
              creative business development in Bali and technical excellence in Jakarta.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                <div className="text-3xl mb-3">🏝️</div>
                <h3 className="font-semibold text-lg mb-2">Bali Office</h3>
                <p className="text-sm text-muted-foreground">
                  Our sales and business development team works from our beautiful Bali location, 
                  bringing creativity and client relationship expertise to every project.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-green-50 to-cyan-50 rounded-xl border border-green-200">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="font-semibold text-lg mb-2">Jakarta Office</h3>
                <p className="text-sm text-muted-foreground">
                  Our main development team of 45+ specialists works from Jakarta, 
                  delivering technical excellence and rapid development capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Visit Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{office.flag}</div>
                  <CardTitle className="text-xl">{office.city}</CardTitle>
                  <p className="text-muted-foreground">{office.country}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <h3 className="font-semibold text-lg text-primary mb-2">{office.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{office.description}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {office.team}
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-1">Address:</h4>
                      <address className="text-sm not-italic text-muted-foreground leading-relaxed">
                        {office.address}
                      </address>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2">
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-1">Phone:</h4>
                        <a href={`tel:${office.phone}`} className="text-sm text-primary hover:underline">
                          {office.phone}
                        </a>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-1">Email:</h4>
                        <a href={`mailto:${office.email}`} className="text-sm text-primary hover:underline">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqContact.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>

      </Container>

      {/* CTA Section */}
      <div className="w-full bg-black text-white py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Don't waste another €50,000 on an agency that takes 4 months to deliver. 
              Let us show you how much faster, cheaper, and better your next project can be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="min-h-[44px]">
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="min-h-[44px] bg-transparent border-white/20 text-white hover:bg-white/10">
                Get Project Estimate
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-6">
              ✓ No obligation • ✓ Free consultation • ✓ Response within 24 hours
            </p>
          </div>
        </Container>
      </div>
      </main>
    </>
  );
}