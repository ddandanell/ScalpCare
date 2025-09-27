import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Yasmin Al-Rashid",
      role: "Head Trichologist Dubai",
      credentials: [
        "Ph.D. in Dermatology from American University of Beirut",
        "Specialization in Desert Climate Dermatology",
        "12 years of experience treating hair loss in Middle Eastern conditions",
        "Former research director at Dubai Hospital's dermatological department",
        "Expert in ethnic hair types and cultural hair practices",
        "Published researcher on climate effects on scalp health",
        "Fluent in Arabic, English, and French"
      ],
      initials: "YA"
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Senior Climate Specialist",
      credentials: [
        "M.D. Dermatology from University of Sydney",
        "Fellowship in Tropical and Desert Dermatology",
        "10 years treating expatriate hair issues in UAE",
        "Former consultant at Emirates Hospital",
        "Specialist in UV damage and heat-related scalp conditions",
        "Expert in transitional hair loss from climate change",
        "Certified in International Association of Trichologists protocols"
      ],
      initials: "SJ"
    },
    {
      name: "Priya Sharma",
      role: "Nutrition & Lifestyle Consultant",
      credentials: [
        "Master's in Clinical Nutrition from London Metropolitan University",
        "Certified Functional Medicine Practitioner",
        "Specialization in Middle Eastern dietary adaptation for hair health",
        "8 years helping expatriates adjust nutrition for optimal hair growth",
        "Expert in supplement bioavailability in hot climates",
        "Cultural dietary consultant for over 15 nationalities",
        "Fluent in Hindi, English, and basic Arabic"
      ],
      initials: "PS"
    },
    {
      name: "Ahmed Hassan",
      role: "Men's Hair Health Specialist",
      credentials: [
        "Bachelor's in Biomedical Science from University of Dubai",
        "Certified Trichology Practitioner",
        "Specialization in male pattern baldness in desert climates",
        "6 years focusing on professional men's hair concerns in Dubai",
        "Expert in combining cultural grooming practices with modern science",
        "Consultant for several major Dubai corporations",
        "Fluent in Arabic, English, and Urdu"
      ],
      initials: "AH"
    },
    {
      name: "Dr. Maria Lindberg",
      role: "Research Director (Remote from Denmark)",
      credentials: [
        "Ph.D. in Trichology from University of Copenhagen",
        "15+ years in hair loss research and treatment development",
        "Developer of climate-adaptation protocols",
        "Oversees quality control and training for Dubai operations",
        "Regular consultant via video for complex cases",
        "Published author on international hair health standards"
      ],
      initials: "ML"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30" id="team">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground" data-testid="team-headline">
            Meet Our Dubai Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our multidisciplinary team combines international expertise with local understanding of Dubai's unique climate challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`team-member-${index}`}>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src="" alt={member.name} />
                    <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <Badge variant="secondary" className="mb-4">
                    {member.role}
                  </Badge>
                </div>

                <div className="space-y-3">
                  {member.credentials.map((credential, credIndex) => (
                    <div key={credIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {credential}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}