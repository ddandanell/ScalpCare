import Link from "next/link";
import { Container } from "@/components/container";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/ui/logo";
import { Linkedin, Twitter, Github, FileText, Shield, Mail, HelpCircle, Rocket, Globe, Smartphone, ShoppingCart, Building, Code, Users, Target, Workflow, Award, DollarSign } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "MVP Development", href: "/services", icon: Rocket },
      { name: "Full-Stack Web Apps", href: "/services", icon: Globe },
      { name: "Mobile Applications", href: "/services", icon: Smartphone },
      { name: "E-commerce Platforms", href: "/services", icon: ShoppingCart },
      { name: "Enterprise Solutions", href: "/services", icon: Building },
      { name: "API Development", href: "/services", icon: Code },
    ],
    company: [
      { name: "About Us", href: "/team", icon: Target },
      { name: "Our Team", href: "/team", icon: Users },
      { name: "Our Process", href: "/process", icon: Workflow },
      { name: "Cases", href: "/cases", icon: Award },
      { name: "Pricing", href: "/pricing", icon: DollarSign },
      { name: "Contact", href: "/contact", icon: Mail },
    ],
    support: [
      { name: "Contact", href: "/contact", icon: Mail },
      { name: "FAQ", href: "/contact", icon: HelpCircle },
      { name: "Privacy Policy", href: "/privacy", icon: Shield },
      { name: "Terms & Conditions", href: "/terms", icon: FileText },
    ],
  };

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "GitHub", href: "#", icon: Github },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <Link href="/" className="inline-block">
                <Logo size="md" />
              </Link>
              <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
                PT. DCPH Digital Consulting - Delivering world-class outsourcing solutions with Indonesian talent and European leadership. Registered in Indonesia since 2022.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                      aria-label={social.name}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 py-1"
                      >
                        {Icon && <Icon className="h-3.5 w-3.5" />}
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 py-1"
                      >
                        {Icon && <Icon className="h-3.5 w-3.5" />}
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Support & Legal */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Support & Legal</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-2 py-1"
                      >
                        {Icon && <Icon className="h-3.5 w-3.5" />}
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <Separator className="my-12" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {currentYear} PT. DCPH Digital Consulting. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <span>Made with ❤️ in Bali, Indonesia</span>
              <span>NPWP: 63.637.046.2-905.000</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
