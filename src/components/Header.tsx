import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("हिंदी");
  
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
          <div className="flex items-center gap-2 bg-accent px-3 py-2 rounded-lg">
            <Globe className="h-4 w-4 text-primary" />
            <select 
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-transparent text-senior-base font-medium focus:outline-none"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.name}>
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