import { Search, Clock, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative h-[700px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80"
          alt="Private beautiful parking in the city"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
            Discover Your Perfect Parking Spot
          </h1>
          <h3 className="text-2xl text-gray-200 mb-2">
            Join Our Community Today!
          </h3>
          <p className="text-xl text-gray-200 mb-8">
            Join a community of parking space sharers. Rent out your spot or
            find safe parking with ease and convenience.
          </p>

          {/* <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter location"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div className="flex-1 relative">
                <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="datetime-local"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <button className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Search</span>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
