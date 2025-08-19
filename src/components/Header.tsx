import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Menu, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { languageNames, cities, Language } from "@/lib/translations";

const Header = () => {
  const { currentLanguage, setLanguage, t } = useLanguage();
  const [selectedCity, setSelectedCity] = useState("del");

  return (
    <header className="bg-card shadow-card border-b border-border px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-primary">{t('appName')}</h1>
            <p className="text-xs text-muted-foreground">{t('appTagline')}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {/* City Selector */}
          <div className="flex items-center gap-2 bg-accent px-3 py-2 rounded-lg">
            <MapPin className="h-4 w-4 text-secondary" />
            <select 
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-transparent text-senior-base font-medium focus:outline-none cursor-pointer relative z-50"
              style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}
            >
              {cities.map((city) => {
                const displayText = currentLanguage === 'hi' || currentLanguage === 'mr' 
                  ? `${city.hi} • ${city.en}` 
                  : city.en;
                return (
                  <option 
                    key={city.code} 
                    value={city.code}
                    className="bg-card text-card-foreground py-2 px-4"
                    style={{ backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--card-foreground))' }}
                  >
                    {displayText}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-2 bg-accent px-3 py-2 rounded-lg">
            <Globe className="h-4 w-4 text-primary" />
            <select 
              value={currentLanguage}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-transparent text-senior-base font-medium focus:outline-none cursor-pointer relative z-50"
              style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}
            >
              {Object.entries(languageNames).map(([code, lang]) => (
                <option 
                  key={code} 
                  value={code}
                  className="bg-card text-card-foreground py-2 px-4"
                  style={{ backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--card-foreground))' }}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;