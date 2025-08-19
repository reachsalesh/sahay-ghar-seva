import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  description: string;
  onClick: () => void;
  gradient?: string;
}

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  description, 
  onClick,
  gradient = "bg-gradient-warm"
}: ServiceCardProps) => {
  return (
    <Button
      variant="service"
      size="service"
      onClick={onClick}
      className="group relative overflow-hidden"
    >
      <div className={`absolute inset-0 ${gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
      <div className="relative z-10 flex flex-col items-center text-center gap-3">
        <div className="p-4 rounded-full bg-gradient-primary">
          <Icon className="h-8 w-8 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-senior-lg font-bold text-foreground">{title}</h3>
          {subtitle && <p className="text-senior-base font-medium text-primary">{subtitle}</p>}
          <p className="text-sm text-muted-foreground mt-2">{description}</p>
        </div>
      </div>
    </Button>
  );
};

export default ServiceCard;