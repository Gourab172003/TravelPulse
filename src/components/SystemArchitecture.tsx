import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Database, Smartphone, Cloud, Shield, Zap } from "lucide-react";

const SystemArchitecture = () => {
  const components = [
    {
      icon: Smartphone,
      title: "Mobile & Desktop Apps",
      description: "React Native cross-platform with offline-first capabilities",
      color: "text-primary"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Firebase backend with auto-scaling microservices",
      color: "text-safety"
    },
    {
      icon: Database,
      title: "Geospatial Database",
      description: "PostGIS for location data and real-time geofencing",
      color: "text-emergency"
    },
    {
      icon: Shield,
      title: "Security Layer",
      description: "End-to-end encryption with privacy-preserving analytics",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "ML Pipeline",
      description: "Predictive analytics for proactive safety alerts",
      color: "text-safety"
    }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">System Architecture</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Scalable microservice architecture designed for 99.9% uptime and sub-second emergency response times
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {components.map((component, index) => {
            const IconComponent = component.icon;
            return (
              <Card key={component.title} className="relative overflow-hidden group hover:shadow-elegant transition-all duration-300">
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 ${component.color}`}>
                    <IconComponent className="w-full h-full" />
                  </div>
                  <CardTitle className="text-lg">{component.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm text-center">{component.description}</p>
                </CardContent>
                {index < components.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-primary">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-safety/10 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-center">Data Flow Architecture</h3>
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded">Location Data</span>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <span className="bg-safety text-safety-foreground px-3 py-1 rounded">Geofencing Engine</span>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <span className="bg-emergency text-emergency-foreground px-3 py-1 rounded">Alert System</span>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded">Emergency Response</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture;