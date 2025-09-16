import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  metrics?: string;
}

const FeatureCard = ({ icon, title, description, metrics }: FeatureCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (title === "Live Location Fusion") {
      navigate('/navigation');
    }
  };

  return (
    <Card 
      className="group hover:shadow-glow transition-all duration-500 hover:scale-105 border-2 border-border/30 hover:border-navigation-cyan/40 bg-card/60 backdrop-blur-sm cursor-pointer"
      onClick={handleClick}
    >
      <CardHeader className="text-center">
        <div className="w-20 h-20 mx-auto mb-6 relative">
          <div className="absolute inset-0 bg-gradient-navigation rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <img 
            src={icon} 
            alt={`${title} icon`}
            className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <CardTitle className="text-2xl font-bold text-foreground mb-3">{title}</CardTitle>
        {metrics && (
          <CardDescription className="text-navigation-teal font-bold text-lg bg-navigation-teal/10 px-4 py-2 rounded-xl border border-navigation-teal/20">
            {metrics}
          </CardDescription>
        )}
        {title === "Live Location Fusion" && (
          <CardDescription className="text-navigation-cyan/70 font-medium mt-2">
            Click to open navigation →
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed text-lg">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;