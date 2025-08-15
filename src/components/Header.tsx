import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Menu, MapPin } from "lucide-react";

interface HeaderProps {
  selectedCity: string;
  onCityChange: (city: string) => void;
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

const Header = ({ selectedCity, onCityChange, selectedLanguage, onLanguageChange }: HeaderProps) => {
  
  const languages = [
    { code: "hi", name: "हिंदी", english: "Hindi" },
    { code: "en", name: "English", english: "English" },
    { code: "bn", name: "বাংলা", english: "Bengali" },
    { code: "ta", name: "தமிழ்", english: "Tamil" },
    { code: "te", name: "తెలుగు", english: "Telugu" },
    { code: "mr", name: "मराठी", english: "Marathi" },
    { code: "gu", name: "ગુજરાતી", english: "Gujarati" },
    { code: "kn", name: "ಕನ್ನಡ", english: "Kannada" },
  ];

  const cities = [
    { code: "del", name: "दिल्ली", english: "Delhi" },
    { code: "mum", name: "मुंबई", english: "Mumbai" },
    { code: "blr", name: "बेंगलुरु", english: "Bangalore" },
    { code: "che", name: "चेन्नई", english: "Chennai" },
    { code: "hyd", name: "हैदराबाद", english: "Hyderabad" },
    { code: "kol", name: "कोलकाता", english: "Kolkata" },
    { code: "pun", name: "पुणे", english: "Pune" },
    { code: "ahm", name: "अहमदाबाद", english: "Ahmedabad" },
    { code: "jai", name: "जयपुर", english: "Jaipur" },
    { code: "lko", name: "लखनऊ", english: "Lucknow" },
  ];

  return (
    <header className="bg-card shadow-card border-b border-border px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-primary">सेवा</h1>
            <p className="text-xs text-muted-foreground">Seva - Your Digital Helper</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {/* City Selector */}
          <div className="flex items-center gap-2 bg-accent px-3 py-2 rounded-lg">
            <MapPin className="h-4 w-4 text-secondary" />
            <select 
              value={selectedCity}
              onChange={(e) => onCityChange(e.target.value)}
              className="bg-transparent text-senior-base font-medium focus:outline-none cursor-pointer relative z-50"
              style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}
            >
              {cities.map((city) => (
                <option 
                  key={city.code} 
                  value={city.name}
                  className="bg-card text-card-foreground py-2 px-4"
                  style={{ backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--card-foreground))' }}
                >
                  {city.name} • {city.english}
                </option>
              ))}
            </select>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-2 bg-accent px-3 py-2 rounded-lg">
            <Globe className="h-4 w-4 text-primary" />
            <select 
              value={selectedLanguage}
              onChange={(e) => onLanguageChange(e.target.value)}
              className="bg-transparent text-senior-base font-medium focus:outline-none cursor-pointer relative z-50"
              style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}
            >
              {languages.map((lang) => (
                <option 
                  key={lang.code} 
                  value={lang.name}
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