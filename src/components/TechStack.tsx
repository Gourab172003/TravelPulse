import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const technologies = {
    "Frontend": ["React Native", "MapLibre GL", "Redux Toolkit", "Geofencing APIs"],
    "Backend": ["Firebase Auth", "Firestore", "Cloud Functions", "Cloud Messaging", "Pub/Sub", "Postgres/PostGIS"],
    "Analytics & ML": ["Node/NestJS", "Python", "Prophet/ARIMA", "OSRM Routing"],
    "Security": ["End-to-End Encryption", "GDPR Compliance", "Privacy Controls", "Anonymous Telemetry"]
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Technology Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built with cutting-edge technologies for maximum performance, security, and scalability
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">{category}</h3>
              <div className="space-y-2">
                {techs.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="block text-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;