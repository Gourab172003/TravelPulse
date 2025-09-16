import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Shield, Hospital, Flame, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface EmergencyDialogProps {
  children: React.ReactNode;
}

const EmergencyDialog = ({ children }: EmergencyDialogProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleEmergencyService = (serviceType: string) => {
    setOpen(false);
    navigate(`/navigation?service=${serviceType}`);
  };

  const emergencyOptions = [
    {
      icon: Shield,
      title: "Nearest Police Station",
      description: "Find closest police stations in your area",
      color: "text-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      borderColor: "border-blue-200",
      service: "police"
    },
    {
      icon: Hospital,
      title: "Nearest Hospital",
      description: "Locate nearby hospitals and medical centers",
      color: "text-red-600",
      bgColor: "bg-red-50 hover:bg-red-100",
      borderColor: "border-red-200",
      service: "hospital"
    },
    {
      icon: Flame,
      title: "Nearest Fire Department",
      description: "Find fire stations and emergency services",
      color: "text-orange-600",
      bgColor: "bg-orange-50 hover:bg-orange-100",
      borderColor: "border-orange-200",
      service: "fire"
    }
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-foreground flex items-center justify-center gap-2">
            <MapPin className="w-6 h-6 text-navigation-teal" />
            Emergency Services
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {emergencyOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <Button
                key={option.service}
                variant="outline"
                className={`h-auto p-4 ${option.bgColor} ${option.borderColor} hover:scale-105 transition-all duration-300 border-2`}
                onClick={() => handleEmergencyService(option.service)}
              >
                <div className="flex items-center gap-4 w-full">
                  <div className={`p-2 rounded-lg bg-background shadow-sm`}>
                    <IconComponent className={`w-6 h-6 ${option.color}`} />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-foreground">{option.title}</div>
                    <div className="text-sm text-muted-foreground">{option.description}</div>
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmergencyDialog;