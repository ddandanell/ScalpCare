import { Container } from "@/components/container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. MVPs take 15-30 days, full-stack web apps take 30-90 days, mobile apps take 30-60 days, and enterprise solutions take 60-120 days. We provide detailed timelines during our initial consultation."
  },
  {
    question: "Do you work with businesses outside the US?",
    answer: "Yes! We work with clients globally. Our team is experienced in remote collaboration and can accommodate different time zones. We use modern project management tools to keep everyone aligned."
  },
  {
    question: "What's included in your monthly retainer?",
    answer: "Our monthly retainers include ongoing maintenance, content updates, performance monitoring, security updates, and monthly strategy calls. Specific services depend on your chosen plan and can be customized to your needs."
  },
  {
    question: "Can you help with our existing website?",
    answer: "Absolutely! We can audit your current site, identify improvement opportunities, and provide recommendations. We also offer website redesign services and can migrate your content to a new platform if needed."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer various support packages to ensure your website continues to perform optimally. This includes technical support, content updates, security monitoring, and performance optimization."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, proven technologies including React, Next.js, TypeScript, Node.js, and various headless CMS options. We choose the best tools for each project's specific requirements and your team's capabilities."
  },
  {
    question: "How do you measure project success?",
    answer: "We establish clear KPIs at the start of each project, such as conversion rates, page load speeds, search rankings, and user engagement metrics. We provide regular reports and work with you to optimize performance."
  },
  {
    question: "What's your process for new projects?",
    answer: "Our process starts with a discovery call to understand your goals, followed by a detailed proposal. Once approved, we begin with strategy and design, then move to development and testing. We keep you involved throughout with regular check-ins and demos."
  }
];

export function FAQ() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Here are some common questions we receive from potential clients.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <Button>
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
