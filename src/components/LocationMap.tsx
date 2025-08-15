import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Loader2 } from "lucide-react";

/// <reference types="google.maps" />

interface LocationMapProps {
  selectedCity: string;
  onLocationUpdate?: (location: { lat: number; lng: number; address: string }) => void;
}

const LocationMap = ({ selectedCity, onLocationUpdate }: LocationMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [currentLocation, setCurrentLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [apiKey, setApiKey] = useState<string>("");
  const [showApiInput, setShowApiInput] = useState(true);

  // City coordinates for Indian metro cities
  const cityCoordinates: { [key: string]: { lat: number; lng: number } } = {
    "दिल्ली": { lat: 28.6139, lng: 77.2090 },
    "मुंबई": { lat: 19.0760, lng: 72.8777 },
    "बेंगलुरु": { lat: 12.9716, lng: 77.5946 },
    "चेन्नई": { lat: 13.0827, lng: 80.2707 },
    "हैदराबाद": { lat: 17.3850, lng: 78.4867 },
    "कोलकाता": { lat: 22.5726, lng: 88.3639 },
    "पुणे": { lat: 18.5204, lng: 73.8567 },
    "अहमदाबाद": { lat: 23.0225, lng: 72.5714 },
    "जयपुर": { lat: 26.9124, lng: 75.7873 },
    "लखनऊ": { lat: 26.8467, lng: 80.9462 },
  };

  useEffect(() => {
    // Check if API key is stored in localStorage
    const storedApiKey = localStorage.getItem("googleMapsApiKey");
    if (storedApiKey) {
      setApiKey(storedApiKey);
      setShowApiInput(false);
    }
  }, []);

  useEffect(() => {
    if (!apiKey || !mapRef.current) return;

    const loader = new Loader({
      apiKey: apiKey,
      version: "weekly",
      libraries: ["places"]
    });

    loader.load().then(() => {
      const cityCoords = cityCoordinates[selectedCity] || cityCoordinates["दिल्ली"];
      
      const mapInstance = new google.maps.Map(mapRef.current!, {
        center: cityCoords,
        zoom: 12,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ],
      });

      setMap(mapInstance);

      // Add a marker for the city center
      new google.maps.Marker({
        position: cityCoords,
        map: mapInstance,
        title: `${selectedCity} Center`,
        icon: {
          url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#f97316"/>
            </svg>
          `),
          scaledSize: new google.maps.Size(32, 32),
          anchor: new google.maps.Point(16, 32),
        }
      });
    }).catch(error => {
      console.error("Error loading Google Maps:", error);
    });
  }, [apiKey, selectedCity]);

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by this browser.");
      return;
    }

    setIsLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const location = { lat: latitude, lng: longitude };
        setCurrentLocation(location);

        if (map) {
          map.setCenter(location);
          map.setZoom(16);

          // Add user location marker
          new google.maps.Marker({
            position: location,
            map: map,
            title: "Your Location",
            icon: {
              url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="8" fill="#3b82f6" stroke="#ffffff" stroke-width="2"/>
                  <circle cx="12" cy="12" r="3" fill="#ffffff"/>
                </svg>
              `),
              scaledSize: new google.maps.Size(24, 24),
              anchor: new google.maps.Point(12, 12),
            }
          });

          // Reverse geocoding to get address
          const geocoder = new google.maps.Geocoder();
          geocoder.geocode({ location }, (results, status) => {
            if (status === "OK" && results?.[0]) {
              const address = results[0].formatted_address;
              onLocationUpdate?.({ lat: latitude, lng: longitude, address });
            }
          });
        }

        setIsLoadingLocation(false);
      },
      (error) => {
        console.error("Error getting location:", error);
        alert("Unable to get your location. Please enable location services.");
        setIsLoadingLocation(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 600000
      }
    );
  };

  const handleApiKeySubmit = () => {
    if (apiKey.trim()) {
      localStorage.setItem("googleMapsApiKey", apiKey.trim());
      setShowApiInput(false);
    }
  };

  if (showApiInput) {
    return (
      <div className="bg-card rounded-xl p-6 shadow-card border border-border">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-senior-lg font-bold text-foreground mb-4">
            स्थान सेवा • Location Service
          </h3>
          <p className="text-senior-base text-muted-foreground mb-6">
            To show your location on the map, please enter your Google Maps API key:
          </p>
          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Enter Google Maps API Key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="px-4 py-3 border border-border rounded-lg text-senior-base focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button 
              onClick={handleApiKeySubmit}
              size="lg"
              disabled={!apiKey.trim()}
            >
              Enable Location Services
            </Button>
            <p className="text-sm text-muted-foreground">
              Get your API key from <a href="https://console.cloud.google.com/apis/credentials" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Cloud Console</a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl p-6 shadow-card border border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-senior-lg font-bold text-foreground">
          आपका स्थान • Your Location
        </h3>
        <Button
          onClick={getCurrentLocation}
          variant="secondary"
          size="lg"
          disabled={isLoadingLocation}
          className="flex items-center gap-2"
        >
          {isLoadingLocation ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Navigation className="h-5 w-5" />
          )}
          {isLoadingLocation ? "Finding..." : "Find Me"}
        </Button>
      </div>
      
      <div 
        ref={mapRef} 
        className="w-full h-64 rounded-lg shadow-inner"
        style={{ minHeight: "300px" }}
      />
      
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
          Current city: <span className="font-medium text-foreground">{selectedCity}</span>
        </p>
        {currentLocation && (
          <p className="text-xs text-muted-foreground mt-1">
            Precise location: {currentLocation.lat.toFixed(6)}, {currentLocation.lng.toFixed(6)}
          </p>
        )}
      </div>
    </div>
  );
};

export default LocationMap;