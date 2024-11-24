import { MapPin } from "lucide-react";

export default function MapView() {
  return (
    <div className="relative h-[calc(100vh-16rem)] rounded-xl overflow-hidden bg-gray-100">
      <div className="absolute inset-0 bg-gray-200 animate-pulse">
        {/* Map placeholder - In a real app, integrate with Google Maps or similar */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Map view will be integrated here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
