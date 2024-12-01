import { MapPin, Clock, Filter, ChevronDown } from "lucide-react";

export default function HomeSearch() {
    
  return (
    <div className="bg-gradient-to-br flex items-center justify-center py-8 bg-gray-900 shadow-md shadow-gray-2">
      {/* Search Section Container */}
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-3xl">
        <h1 className="text-xl font-semibold text-gray-900 mb-4">
          Find Your Parking Spot
        </h1>
        <div className="grid md:grid-cols-3 gap-4">
          {/* Location Input */}
          <div className="relative">
            <MapPin className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Location"
              className="w-full pl-10 pr-3 py-2 rounded-md bg-gray-50 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* Date/Time Input */}
          <div className="relative">
            <Clock className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="datetime-local"
              className="w-full pl-10 pr-3 py-2 rounded-md bg-gray-50 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* Search Button */}
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm">
            Search
          </button>
        </div>

        {/* Filters and Sorting */}
        <div className="flex justify-between items-center mt-4 text-sm">
          <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition">
            <Filter className="h-4 w-4" />
            Filters
          </button>
          <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition">
            Sort by
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
