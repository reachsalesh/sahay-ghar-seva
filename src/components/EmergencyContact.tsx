import { Button } from "@/components/ui/button";
import { Phone, Shield, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const EmergencyContact = () => {
  const { t } = useLanguage();
  
  const emergencyContacts = [
    { icon: Phone, number: "100", label: "Police", subLabel: "पुलिस" },
    { icon: Heart, number: "108", label: "Ambulance", subLabel: "एम्बुलेंस" },
    { icon: Shield, number: "101", label: "Fire", subLabel: "अग्निशमन" },
  ];

  return (
    <div className="bg-card rounded-xl p-6 shadow-card border border-border">
      <h2 className="text-senior-lg font-bold text-foreground mb-4 text-center">
        {t('emergencyTitle')}
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {emergencyContacts.map((contact) => (
            <Button
              key={contact.number}
              variant="emergency"
              className="flex-col py-4 h-auto"
              onClick={() => window.open(`tel:${contact.number}`)}
            >
              <contact.icon className="h-6 w-6 mb-2" />
              <span className="text-xl font-bold">{contact.number}</span>
              <span className="text-xs">{contact.label}</span>
              <span className="text-xs">{contact.subLabel}</span>
            </Button>
        ))}
      </div>
    </div>
  );
};

export default EmergencyContact;