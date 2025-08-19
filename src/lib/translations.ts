export type Language = 'hi' | 'en' | 'bn' | 'ta' | 'te' | 'mr' | 'gu' | 'kn';

export const languageNames: Record<Language, { name: string; english: string }> = {
  hi: { name: "हिंदी", english: "Hindi" },
  en: { name: "English", english: "English" },
  bn: { name: "বাংলা", english: "Bengali" },
  ta: { name: "தமிழ்", english: "Tamil" },
  te: { name: "తెలుగు", english: "Telugu" },
  mr: { name: "मराठी", english: "Marathi" },
  gu: { name: "ગુજરાતી", english: "Gujarati" },
  kn: { name: "ಕನ್ನಡ", english: "Kannada" },
};

export const cities = [
  { code: "del", hi: "दिल्ली", en: "Delhi" },
  { code: "mum", hi: "मुंबई", en: "Mumbai" },
  { code: "blr", hi: "बेंगलुरु", en: "Bangalore" },
  { code: "che", hi: "चेन्नई", en: "Chennai" },
  { code: "hyd", hi: "हैदराबाद", en: "Hyderabad" },
  { code: "kol", hi: "कोलकाता", en: "Kolkata" },
  { code: "pun", hi: "पुणे", en: "Pune" },
  { code: "ahm", hi: "अहमदाबाद", en: "Ahmedabad" },
  { code: "jai", hi: "जयपुर", en: "Jaipur" },
  { code: "lko", hi: "लखनऊ", en: "Lucknow" },
];

type TranslationsType = {
  // App branding
  appName: string;
  appTagline: string;
  
  // Hero section
  heroTitle: string;
  heroSubtitle: string;
  
  // Services
  mainServicesTitle: string;
  quickAccessTitle: string;
  travelService: string;
  foodDelivery: string;
  homeServices: string;
  nearbyStores: string;
  instantService: string;
  favorites: string;
  
  // Service descriptions
  travelDesc: string;
  foodDesc: string;
  homeDesc: string;
  
  // Emergency
  emergencyTitle: string;
  emergencyCall: string;
  
  // Footer
  footerTagline: string;
  
  // Cities (display format)
  cityFormat: string;
};

export type TranslationKeys = keyof TranslationsType;

export const translations: Record<Language, TranslationsType> = {
  hi: {
    appName: "सेवा",
    appTagline: "Seva - Your Digital Helper",
    heroTitle: "आपकी सेवा में हाजिर",
    heroSubtitle: "सभी सेवाएं आपके दरवाजे पर",
    mainServicesTitle: "मुख्य सेवाएं",
    quickAccessTitle: "त्वरित पहुंच",
    travelService: "यात्रा सेवा",
    foodDelivery: "खाना ऑर्डर",
    homeServices: "घर की सेवा",
    nearbyStores: "नजदीकी दुकानें",
    instantService: "तुरंत सेवा",
    favorites: "पसंदीदा",
    travelDesc: "आपकी दैनिक जरूरतों के लिए सुरक्षित यात्रा",
    foodDesc: "ताजा खाना आपके दरवाजे तक",
    homeDesc: "फर्नीचर, मरम्मत और रखरखाव",
    emergencyTitle: "आपातकाल सहायता",
    emergencyCall: "तुरंत कॉल करें",
    footerTagline: "सभी के लिए डिजिटल सेवाएं सुलभ बनाना",
    cityFormat: "{hindi} • {english}",
  },
  en: {
    appName: "Seva",
    appTagline: "Seva - Your Digital Helper",
    heroTitle: "At Your Service",
    heroSubtitle: "All services at your doorstep",
    mainServicesTitle: "Main Services",
    quickAccessTitle: "Quick Access",
    travelService: "Travel Service",
    foodDelivery: "Food Delivery",
    homeServices: "Home Services",
    nearbyStores: "Nearby Stores",
    instantService: "Instant Service",
    favorites: "Favorites",
    travelDesc: "Safe rides for your daily needs",
    foodDesc: "Fresh meals delivered to your door",
    homeDesc: "Furniture, repairs & maintenance",
    emergencyTitle: "Emergency Support",
    emergencyCall: "Call Now",
    footerTagline: "Making digital services accessible for everyone",
    cityFormat: "{english}",
  },
  bn: {
    appName: "সেবা",
    appTagline: "সেবা - আপনার ডিজিটাল সহায়ক",
    heroTitle: "আপনার সেবায় নিয়োজিত",
    heroSubtitle: "সকল সেবা আপনার দোরগোড়ায়",
    mainServicesTitle: "প্রধান সেবাসমূহ",
    quickAccessTitle: "দ্রুত প্রবেশ",
    travelService: "ভ্রমণ সেবা",
    foodDelivery: "খাবার অর্ডার",
    homeServices: "গৃহস্থালী সেবা",
    nearbyStores: "কাছাকাছি দোকান",
    instantService: "তাৎক্ষণিক সেবা",
    favorites: "পছন্দের",
    travelDesc: "আপনার দৈনন্দিন প্রয়োজনে নিরাপদ যাত্রা",
    foodDesc: "তাজা খাবার আপনার দরজায়",
    homeDesc: "আসবাবপত্র, মেরামত ও রক্ষণাবেক্ষণ",
    emergencyTitle: "জরুরি সহায়তা",
    emergencyCall: "এখনই কল করুন",
    footerTagline: "সবার জন্য ডিজিটাল সেবা সহজলভ্য করা",
    cityFormat: "{english}",
  },
  ta: {
    appName: "சேவா",
    appTagline: "சேவா - உங்கள் டிஜிட்டல் உதவியாளர்",
    heroTitle: "உங்கள் சேவையில்",
    heroSubtitle: "எல்லா சேவைகளும் உங்கள் வாசலில்",
    mainServicesTitle: "முக்கிய சேவைகள்",
    quickAccessTitle: "விரைவு அணுகல்",
    travelService: "பயண சேவை",
    foodDelivery: "உணவு ஆர்டர்",
    homeServices: "வீட்டு சேவைகள்",
    nearbyStores: "அருகிலுள்ள கடைகள்",
    instantService: "உடனடி சேவை",
    favorites: "விருப்பமானவை",
    travelDesc: "உங்கள் தினசரி தேவைகளுக்கு பாதுகாப்பான பயணம்",
    foodDesc: "புதிய உணவு உங்கள் வாசலில்",
    homeDesc: "மரச்சாமான்கள், பழுதுபார்ப்பு மற்றும் பராமரிப்பு",
    emergencyTitle: "அவசர உதவி",
    emergencyCall: "இப்போதே அழைக்கவும்",
    footerTagline: "அனைவருக்கும் டிஜிட்டல் சேவைகளை அணுகக்கூடியதாக்குதல்",
    cityFormat: "{english}",
  },
  te: {
    appName: "సేవా",
    appTagline: "సేవా - మీ డిజిటల్ సహాయకుడు",
    heroTitle: "మీ సేవలో",
    heroSubtitle: "అన్ని సేవలు మీ గుమ్మం వద్ద",
    mainServicesTitle: "ప్రధాన సేవలు",
    quickAccessTitle: "త్వరిత యాక్సెస్",
    travelService: "ప్రయాణ సేవ",
    foodDelivery: "ఫుడ్ ఆర్డర్",
    homeServices: "గృహ సేవలు",
    nearbyStores: "దగ్గరలోని దుకాణాలు",
    instantService: "తక్షణ సేవ",
    favorites: "ఇష్టమైనవి",
    travelDesc: "మీ దైనందిన అవసరాలకు సురక్షిత ప్రయాణాలు",
    foodDesc: "తాజా భోజనం మీ గుమ్మం వద్దకు",
    homeDesc: "ఫర్నిచర్, మరమ్మతులు మరియు నిర్వహణ",
    emergencyTitle: "అత్యవసర సహాయం",
    emergencyCall: "ఇప్పుడే కాల్ చేయండి",
    footerTagline: "అందరికీ డిజిటల్ సేవలను అందుబాటులోకి తేవడం",
    cityFormat: "{english}",
  },
  mr: {
    appName: "सेवा",
    appTagline: "सेवा - तुमचा डिजिटल मदतनीस",
    heroTitle: "तुमच्या सेवेत",
    heroSubtitle: "सर्व सेवा तुमच्या दारी",
    mainServicesTitle: "मुख्य सेवा",
    quickAccessTitle: "द्रुत प्रवेश",
    travelService: "प्रवास सेवा",
    foodDelivery: "खाण्याची ऑर्डर",
    homeServices: "घरगुती सेवा",
    nearbyStores: "जवळची दुकाने",
    instantService: "तत्काल सेवा",
    favorites: "आवडीची",
    travelDesc: "तुमच्या दैनंदिन गरजांसाठी सुरक्षित प्रवास",
    foodDesc: "ताजे जेवण तुमच्या दारी",
    homeDesc: "फर्निचर, दुरुस्ती आणि देखभाल",
    emergencyTitle: "आपत्कालीन मदत",
    emergencyCall: "आताच कॉल करा",
    footerTagline: "सर्वांसाठी डिजिटल सेवा सुलभ करणे",
    cityFormat: "{hindi} • {english}",
  },
  gu: {
    appName: "સેવા",
    appTagline: "સેવા - તમારો ડિજિટલ સહાયક",
    heroTitle: "તમારી સેવામાં",
    heroSubtitle: "બધી સેવાઓ તમારા ઘર પર",
    mainServicesTitle: "મુખ્ય સેવાઓ",
    quickAccessTitle: "ઝડપી એક્સેસ",
    travelService: "પ્રવાસ સેવા",
    foodDelivery: "ફૂડ ઓર્ડર",
    homeServices: "ઘરની સેવાઓ",
    nearbyStores: "નજીકની દુકાનો",
    instantService: "તત્કાલ સેવા",
    favorites: "મનપસંદ",
    travelDesc: "તમારી દૈનિક જરૂરિયાતો માટે સુરક્ષિત પ્રવાસ",
    foodDesc: "તાજું ખાણું તમારા ઘર સુધી",
    homeDesc: "ફર્નિચર, મરામત અને જાળવણી",
    emergencyTitle: "કટોકટી સહાય",
    emergencyCall: "હમણાં જ કૉલ કરો",
    footerTagline: "બધા માટે ડિજિટલ સેવાઓને સુલભ બનાવવું",
    cityFormat: "{english}",
  },
  kn: {
    appName: "ಸೇವಾ",
    appTagline: "ಸೇವಾ - ನಿಮ್ಮ ಡಿಜಿಟಲ್ ಸಹಾಯಕ",
    heroTitle: "ನಿಮ್ಮ ಸೇವೆಯಲ್ಲಿ",
    heroSubtitle: "ಎಲ್ಲಾ ಸೇವೆಗಳು ನಿಮ್ಮ ಬಾಗಿಲಲ್ಲಿ",
    mainServicesTitle: "ಮುಖ್ಯ ಸೇವೆಗಳು",
    quickAccessTitle: "ತ್ವರಿತ ಪ್ರವೇಶ",
    travelService: "ಪ್ರಯಾಣ ಸೇವೆ",
    foodDelivery: "ಆಹಾರ ಆರ್ಡರ್",
    homeServices: "ಮನೆಯ ಸೇವೆಗಳು",
    nearbyStores: "ಹತ್ತಿರದ ಅಂಗಡಿಗಳು",
    instantService: "ತತ್ಕ್ಷಣ ಸೇವೆ",
    favorites: "ಮೆಚ್ಚಿನವುಗಳು",
    travelDesc: "ನಿಮ್ಮ ದೈನಂದಿನ ಅಗತ್ಯಗಳಿಗೆ ಸುರಕ್ಷಿತ ಪ್ರಯಾಣ",
    foodDesc: "ತಾಜಾ ಆಹಾರ ನಿಮ್ಮ ಬಾಗಿಲಿಗೆ",
    homeDesc: "ಪೀಠೋಪಕರಣಗಳು, ದುರಸ್ತಿ ಮತ್ತು ನಿರ್ವಹಣೆ",
    emergencyTitle: "ತುರ್ತು ಸಹಾಯ",
    emergencyCall: "ಈಗಲೇ ಕರೆ ಮಾಡಿ",
    footerTagline: "ಎಲ್ಲರಿಗೂ ಡಿಜಿಟಲ್ ಸೇವೆಗಳನ್ನು ಪ್ರವೇಶಿಸುವಂತೆ ಮಾಡುವುದು",
    cityFormat: "{english}",
  },
};