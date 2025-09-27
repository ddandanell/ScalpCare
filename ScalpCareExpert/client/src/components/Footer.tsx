import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Shield, FileText, AlertTriangle, Sparkles, Users, Target, Award, Star } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#about", label: "About Us", icon: Users },
    { href: "#approach", label: "Our Method", icon: Target },
    { href: "#services", label: "Services", icon: Award },
    { href: "#testimonials", label: "Reviews", icon: Star },
    { href: "#contact", label: "Contact", icon: Phone }
  ];

  const services = [
    { href: "#services", label: "Essential Scalp Assessment" },
    { href: "#services", label: "Premium Lifestyle Consultation" },
    { href: "#services", label: "VIP Executive Hair Health Audit" },
    { href: "#services", label: "Climate-Specific Treatments" }
  ];

  const legalLinks = [
    { href: "/privacy-policy", label: "Privacy Policy", icon: Shield },
    { href: "/terms-of-service", label: "Terms of Service", icon: FileText },
    { href: "/medical-disclaimer", label: "Medical Disclaimer", icon: AlertTriangle }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">ScalpCare Expert</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Dubai's leading scalp health specialists providing professional consultations and personalized treatment plans tailored for the Middle Eastern climate.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors duration-200 text-sm font-medium group"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <a 
                      href={service.href} 
                      className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 text-sm font-medium"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm font-medium">+971 4 XXX XXXX</p>
                    <p className="text-slate-400 text-xs">Call us anytime</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm font-medium">info@scalpcareexpert.com</p>
                    <p className="text-slate-400 text-xs">Email us</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm font-medium">Jumeirah, Dubai, UAE</p>
                    <p className="text-slate-400 text-xs">Visit our clinic</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm font-medium">Mon-Fri: 9AM-6PM</p>
                    <p className="text-slate-400 text-xs">Sat: 9AM-2PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup & CTA */}
        <div className="py-8 border-t border-slate-700">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Newsletter */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-white mb-2">Stay Updated with Scalp Health Tips</h3>
                <p className="text-slate-300 text-sm mb-6">
                  Subscribe to our newsletter for expert scalp health advice, Dubai climate tips, and exclusive offers.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0">
                  <Input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                  <Button className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold px-6">
                    <Mail className="w-4 h-4 mr-2" />
                    Subscribe
                  </Button>
                </div>
              </div>
              
              {/* CTA */}
              <div className="text-center md:text-right">
                <h3 className="text-xl font-semibold text-white mb-2">Ready to Transform Your Hair Health?</h3>
                <p className="text-slate-300 text-sm mb-6">
                  Book your free consultation today and discover personalized solutions for your unique needs.
                </p>
                <Button 
                  className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold px-8 py-3 text-lg"
                  onClick={() => {
                    const chatButton = document.querySelector('[data-chat-button]') as HTMLElement;
                    if (chatButton) chatButton.click();
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="py-6 border-t border-slate-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} ScalpCare Expert. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-6">
              {legalLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm font-medium"
                >
                  <link.icon className="w-3 h-3" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}