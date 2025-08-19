import { Car, UtensilsCrossed, Home, MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import EmergencyContact from "@/components/EmergencyContact";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const { t } = useLanguage();

  const mainServices = [
    {
      icon: Car,
      title: t('travelService'),
      description: t('travelDesc'),
      gradient: "bg-gradient-primary"
    },
    {
      icon: UtensilsCrossed,
      title: t('foodDelivery'),
      description: t('foodDesc'),
      gradient: "bg-gradient-trust"
    },
    {
      icon: Home,
      title: t('homeServices'),
      description: t('homeDesc'),
      gradient: "bg-gradient-warm"
    }
  ];

  const quickServices = [
    { icon: MapPin, label: t('nearbyStores') },
    { icon: Clock, label: t('instantService') },
    { icon: Star, label: t('favorites') },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-warm">
            <img 
              src={heroImage} 
              alt="Seva - Digital services for seniors"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60">
              <div className="flex items-center justify-center h-full text-center text-white p-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    {t('heroTitle')}
                  </h1>
                  <p className="text-xl md:text-2xl mb-2">{t('heroSubtitle')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact - Moved to second position */}
      <section className="px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <EmergencyContact />
        </div>
      </section>

      {/* Main Services */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-senior-xl font-bold text-center mb-8 text-foreground">
            {t('mainServicesTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                gradient={service.gradient}
                onClick={() => {
                  console.log(`Opening ${service.title} service`);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-senior-lg font-bold text-center mb-6 text-foreground">
            {t('quickAccessTitle')}
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {quickServices.map((service, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className="flex-col py-6 h-auto"
                onClick={() => console.log(`Quick access: ${service.label}`)}
              >
                <service.icon className="h-6 w-6 mb-2" />
                <span className="text-sm font-medium">{service.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-6 px-4 mt-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-senior-base font-medium text-foreground mb-2">
            {t('appName')}
          </p>
          <p className="text-sm text-muted-foreground">
            {t('footerTagline')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
