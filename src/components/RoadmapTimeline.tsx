import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Clock } from "lucide-react";

const RoadmapTimeline = () => {
  const phases = [
    {
      phase: "MVP Development",
      timeline: "Weeks 1-4",
      status: "current",
      features: [
        "Core location tracking",
        "Basic geofencing",
        "Emergency SOS button",
        "Multi-agency dispatch"
      ]
    },
    {
      phase: "Enhanced Safety",
      timeline: "Weeks 5-8",
      status: "upcoming",
      features: [
        "Predictive analytics",
        "Offline functionality",
        "Advanced geofencing",
        "Real-time alerts"
      ]
    },
    {
      phase: "Scale & Polish",
      timeline: "Weeks 9-12",
      status: "planned",
      features: [
        "Performance optimization",
        "Advanced ML models",
        "Government integration",
        "National deployment"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="w-5 h-5 text-safety" />;
      case "current": return <Clock className="w-5 h-5 text-emergency" />;
      default: return <Circle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "border-safety bg-safety/10";
      case "current": return "border-emergency bg-emergency/10";
      default: return "border-muted bg-muted/20";
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Development Roadmap</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strategic 12-week development plan designed for Smart India Hackathon 2025 delivery
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <Card key={phase.phase} className={`relative border-2 ${getStatusColor(phase.status)} transition-all duration-300 hover:shadow-elegant`}>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {getStatusIcon(phase.status)}
                  <Badge variant={phase.status === 'current' ? 'default' : 'secondary'}>
                    {phase.timeline}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{phase.phase}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {phase.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-primary"></div>
                </div>
              )}
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-safety/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Post-Launch Scalability</h3>
            <p className="text-muted-foreground">
              Designed to scale from prototype to national deployment, supporting millions of tourists across India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapTimeline;