import React, { useEffect, useState } from "react";
import { MapPin, Loader } from "lucide-react";

interface Suggestion {
  id: number;
  name: string;
  distance: string;
}

export default function HomeSuggestions() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  useEffect(() => {
    // Fetch user location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
        setLoading(false);
        // Mock fetching nearby suggestions
        setSuggestions([
          { id: 1, name: "Downtown Parking", distance: "0.5 km" },
          { id: 2, name: "Mall Parking", distance: "1.2 km" },
          { id: 3, name: "Stadium Parking", distance: "2.0 km" },
        ]);
      },
      (error) => {
        console.error("Error fetching location:", error);
        setLoading(false);
      }
    );
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-8">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-900 text-center mb-4">
          Nearby Parking Suggestions
        </h2>
        {loading ? (
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Loader className="h-5 w-5 animate-spin" />
            <span>Fetching your location...</span>
          </div>
        ) : location ? (
          <div className="space-y-4">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.id}
                className="flex items-center gap-4 bg-gray-100 p-3 rounded-lg shadow-sm"
              >
                <MapPin className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="text-gray-800 font-medium">{suggestion.name}</p>
                  <p className="text-gray-500 text-sm">{suggestion.distance}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">
            Unable to fetch your location. Please enable GPS.
          </p>
        )}
      </div>
    </div>
  );
}
