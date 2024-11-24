import { Star, Shield, Car, Clock } from "lucide-react";

export default function ParkingSpotCard() {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group">
      {/* Image */}
      <div className="relative h-48">
        <img
          src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80"
          alt="Parking spot"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full">
            Available Now
          </span>
        </div>
        <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition">
          <Star className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">
            Downtown Secure Parking
          </h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">4.8</span>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center text-gray-600">
            <Car className="h-5 w-5 mr-2" />
            <span>Covered parking space</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Shield className="h-5 w-5 mr-2" />
            <span>24/7 security</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2" />
            <span>Flexible hours</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-2xl font-bold text-blue-600">$4.50</span>
            <span className="text-gray-600">/hour</span>
          </div>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
