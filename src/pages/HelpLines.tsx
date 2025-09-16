import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Phone, Mail, MapPin, ArrowLeft, Users, AlertTriangle, Heart, Shield as ShieldIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HelpLines = () => {
  const navigate = useNavigate();

  const emergencyContacts = [
    {
      category: "Emergency Response",
      icon: AlertTriangle,
      color: "text-navigation-lime",
      bgColor: "bg-navigation-lime/20",
      borderColor: "border-navigation-lime/30",
      contacts: [
        {
          name: "Emergency Response Support System (ERSS)",
          number: "112",
          description: "Single, pan-India emergency number for all services including police, fire, and ambulance",
          features: ["Phone call", "SMS", "Email", "112 India mobile app with SHOUT feature"]
        },
        {
          name: "Police",
          number: "100 or 112",
          description: "Direct police assistance and law enforcement support"
        },
        {
          name: "Fire Service",
          number: "101",
          description: "Fire emergency response and rescue operations"
        },
        {
          name: "Ambulance",
          number: "102",
          description: "Medical emergency response and ambulance services"
        }
      ]
    },
    {
      category: "Tourist & Travel",
      icon: MapPin,
      color: "text-navigation-cyan",
      bgColor: "bg-navigation-cyan/20",
      borderColor: "border-navigation-cyan/30",
      contacts: [
        {
          name: "24x7 Tourist Helpline",
          number: "1800-11-1363 or 1363",
          description: "Toll-free helpline supported in multiple languages including English, Hindi, Arabic, French, German, Japanese",
          features: ["Multi-language support", "24/7 availability", "Tourist assistance"]
        },
        {
          name: "Road Accident Emergency (National Highways)",
          number: "1033",
          description: "Emergency assistance for road accidents on national highways"
        }
      ]
    },
    {
      category: "Specialized Services",
      icon: Heart,
      color: "text-navigation-teal",
      bgColor: "bg-navigation-teal/20",
      borderColor: "border-navigation-teal/30",
      contacts: [
        {
          name: "Women's Helpline",
          number: "1091",
          description: "Support for women in distress and emergency situations"
        },
        {
          name: "Domestic Abuse Helpline",
          number: "181",
          description: "24/7 support for domestic violence victims"
        },
        {
          name: "Children in Difficult Situations",
          number: "1098",
          description: "Child protection and emergency assistance"
        },
        {
          name: "Senior Citizen Helpline",
          number: "1091 or 1291",
          description: "Support services for senior citizens"
        },
        {
          name: "Disaster Management",
          number: "1078",
          description: "Natural disaster response and coordination"
        },
        {
          name: "Cyber Crime Helpline",
          number: "1930",
          description: "Report cyber crimes and online fraud"
        },
        {
          name: "Railway Enquiry",
          number: "139",
          description: "Train schedules, booking, and railway information"
        }
      ]
    }
  ];

  const frroOffices = [
    {
      city: "Delhi",
      phone: "011-26711443 or 011-26713851",
      timing: "9 AM to 9 PM",
      email: "frrodli@nic.in"
    },
    {
      city: "Mumbai",
      phone: "022-22620446",
      email: "helpdesk.mum-ivfrt@gov.in"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/30 shadow-elegant">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="text-foreground hover:text-navigation-cyan hover:bg-card/50 p-2"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-navigation-teal" />
              <span className="text-xl sm:text-3xl font-bold bg-gradient-navigation bg-clip-text text-transparent">Help Lines</span>
            </div>
            <Badge className="bg-navigation-lime/20 text-navigation-lime border-navigation-lime/30 text-sm">Emergency Contacts</Badge>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-12 sm:py-20 bg-gradient-section">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              National Emergency{" "}
              <span className="bg-gradient-navigation bg-clip-text text-transparent">
                Help Lines
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Complete directory of emergency contacts and support services available across India
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-navigation-lime/20 rounded-xl px-4 sm:px-6 py-3 border border-navigation-lime/30">
                <div className="text-2xl sm:text-3xl font-bold text-navigation-lime">112</div>
                <div className="text-sm text-muted-foreground">Primary Emergency</div>
              </div>
              <div className="bg-navigation-cyan/20 rounded-xl px-4 sm:px-6 py-3 border border-navigation-cyan/30">
                <div className="text-2xl sm:text-3xl font-bold text-navigation-cyan">24/7</div>
                <div className="text-sm text-muted-foreground">Always Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-12 sm:py-16 bg-gradient-section">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-12">
            {emergencyContacts.map((category) => {
              const IconComponent = category.icon;
              return (
                <div key={category.category}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`${category.bgColor} rounded-xl w-12 h-12 flex items-center justify-center border ${category.borderColor}`}>
                      <IconComponent className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{category.category}</h2>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.contacts.map((contact, index) => (
                      <Card key={index} className="group hover:shadow-glow transition-all duration-500 hover:scale-105 border-2 border-border/30 hover:border-navigation-cyan/40 bg-card/60 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-lg text-foreground flex items-center gap-2">
                            <Phone className="w-5 h-5 text-navigation-teal" />
                            {contact.name}
                          </CardTitle>
                          <CardDescription className="text-2xl font-bold text-navigation-lime">
                            {contact.number}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">{contact.description}</p>
                          {contact.features && (
                            <div className="space-y-2">
                              <div className="text-sm font-medium text-foreground">Available via:</div>
                              <div className="flex flex-wrap gap-2">
                                {contact.features.map((feature, featureIndex) => (
                                  <Badge key={featureIndex} variant="secondary" className="text-xs">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FRRO Offices */}
      <section className="py-12 sm:py-16 bg-gradient-section">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-navigation-teal/20 rounded-xl w-12 h-12 flex items-center justify-center border border-navigation-teal/30">
              <Users className="w-6 h-6 text-navigation-teal" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Foreigner Regional Registration Office (FRRO)</h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            For visa and other official issues, foreigners can contact their nearest FRRO. These offices are located in major cities.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {frroOffices.map((office, index) => (
              <Card key={index} className="border-2 border-border/30 bg-card/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-navigation-cyan" />
                    FRRO {office.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-navigation-teal" />
                    <span className="font-semibold text-navigation-lime">{office.phone}</span>
                  </div>
                  {office.timing && (
                    <div className="text-sm text-muted-foreground">
                      Timing: {office.timing}
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-navigation-cyan" />
                    <span className="text-navigation-cyan">{office.email}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* eVisa Helpdesk */}
          <Card className="mt-8 border-2 border-border/30 bg-card/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center gap-2">
                <ShieldIcon className="w-5 h-5 text-navigation-lime" />
                eVisa Helpdesk
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-navigation-teal" />
                <span className="font-semibold text-navigation-lime">+91-40-6717-4100</span>
                <Badge variant="outline" className="text-xs">Paid Service</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-navigation-cyan" />
                <span className="text-navigation-cyan">indian-evisa@gov.in</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-6 h-6" />
              <span className="text-xl font-bold">TravelPulse</span>
            </div>
            <p className="text-background/80 mb-4">
              Emergency Help Lines Directory
            </p>
            <p className="text-background/60 text-sm">
              Smart India Hackathon 2025 • Always Here to Help • Stay Safe
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HelpLines;