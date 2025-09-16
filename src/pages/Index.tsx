import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FeatureCard from "@/components/FeatureCard";
import EmergencyDialog from "@/components/EmergencyDialog";
import { useNavigate } from "react-router-dom";
import { Shield, MapPin, Zap, Users, AlertTriangle, Clock } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import locationIcon from "@/assets/location-icon.png";
import emergencyIcon from "@/assets/emergency-icon.png";
import geofencingIcon from "@/assets/geofencing-icon.png";

const Index = () => {
  const navigate = useNavigate();
  const coreFeatures = [
    {
      icon: locationIcon,
      title: "Live Location Fusion",
      description: "Ultra-precise real-time tracking with GPS, cellular, and WiFi triangulation for accurate positioning even in challenging environments.",
      metrics: "±3m accuracy"
    },
    {
      icon: geofencingIcon,
      title: "Dynamic Geofencing",
      description: "Intelligent virtual boundaries that adapt to real-time risk assessments, providing instant alerts for high-risk or restricted areas.",
      metrics: "Real-time alerts"
    },
    {
      icon: emergencyIcon,
      title: "Multi-Agency Dispatch",
      description: "Seamless coordination with police, ambulance, and disaster departments using intelligent triage to minimize emergency response times.",
      metrics: "<60s response"
    }
  ];

  const safetyMetrics = [
    { icon: Shield, label: "Tourist Safety Score", value: "98.7%" },
    { icon: Clock, label: "Emergency Response", value: "<60s" },
    { icon: MapPin, label: "Location Accuracy", value: "±3m" },
    { icon: Users, label: "Multi-Agency", value: "24/7" }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/30 shadow-elegant">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 sm:gap-3">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-navigation-teal" />
              <span className="text-xl sm:text-3xl font-bold bg-gradient-navigation bg-clip-text text-transparent">TravelPulse</span>
              <Badge className="ml-2 sm:ml-3 bg-navigation-lime/20 text-navigation-lime border-navigation-lime/30 text-xs sm:text-sm">SIH 2025</Badge>
            </div>
            <div className="flex gap-2 sm:gap-4">
              <Button 
                className="bg-gradient-navigation text-white font-semibold shadow-primary hover:scale-105 transition-all duration-300 text-sm sm:text-base px-3 sm:px-4"
                onClick={() => navigate('/help-lines')}
              >
                Help Lines
              </Button>
              <EmergencyDialog>
                <Button className="bg-gradient-navigation text-white font-semibold shadow-primary hover:scale-105 transition-all duration-300 text-sm sm:text-base px-3 sm:px-4">
                  Get Emergency Help
                </Button>
              </EmergencyDialog>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-28 bg-gradient-section overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 sm:mb-8 bg-navigation-lime/20 text-navigation-lime border-navigation-lime/30 text-sm sm:text-lg px-4 sm:px-6 py-2">Team GarudaX - Smart India Hackathon 2025</Badge>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-foreground mb-6 sm:mb-8 leading-tight drop-shadow-lg">
              Smart Tourist Safety Platform for{" "}
              <span className="bg-gradient-navigation bg-clip-text text-transparent">
                Modern India
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              Revolutionary safety platform combining live location fusion, dynamic geofencing, and intelligent emergency dispatch to protect tourists with cutting-edge technology and sub-second response times.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-4">
              <Button size="lg" className="bg-gradient-navigation text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 shadow-primary hover:scale-105 transition-all duration-300">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                Explore Features
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-navigation-cyan text-navigation-cyan hover:bg-navigation-cyan hover:text-background text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 font-semibold transition-all duration-300">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                Emergency Demo
              </Button>
            </div>
            
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-20 px-4">
              {safetyMetrics.map((metric) => {
                const IconComponent = metric.icon;
                return (
                  <div key={metric.label} className="text-center group">
                    <div className="bg-navigation-teal/20 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center backdrop-blur-sm border border-navigation-teal/30 group-hover:scale-110 transition-all duration-300 shadow-accent">
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-navigation-teal" />
                    </div>
                    <div className="text-xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">{metric.value}</div>
                    <div className="text-sm sm:text-lg text-muted-foreground font-medium">{metric.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 sm:py-24 bg-gradient-section">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">Core Safety Features</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Advanced technology stack designed for maximum tourist protection and rapid emergency response
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {coreFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-primary/5 to-safety/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Privacy-First Security</h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4">
              End-to-end encryption with GDPR-style controls. Users choose between anonymous telemetry for insights or identifiable data for enhanced emergency response - complete transparency and control.
            </p>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-background/50 p-4 sm:p-6 rounded-lg border">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-safety mb-3 sm:mb-4 mx-auto" />
                <h3 className="text-base sm:text-lg font-semibold mb-2">Anonymous Mode</h3>
                <p className="text-muted-foreground text-sm">Privacy-preserving analytics with zero personal data retention</p>
              </div>
              <div className="bg-background/50 p-4 sm:p-6 rounded-lg border">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4 mx-auto" />
                <h3 className="text-base sm:text-lg font-semibold mb-2">Enhanced Response</h3>
                <p className="text-muted-foreground text-sm">Identifiable mode for faster emergency services and family alerts</p>
              </div>
            </div>
          </div>
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
              Smart Tourist Safety Platform by Team GarudaX
            </p>
            <p className="text-background/60 text-sm">
              Smart India Hackathon 2025 • Built for Scale • Engineered for Safety
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
