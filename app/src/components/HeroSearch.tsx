import { MapPin, Clock, ArrowRight, Star, Shield, Car } from "lucide-react";
import parkingImage from "@/assets/images/1.jpg";
import { authStore } from "@/store/authStore";
import { useStore } from "zustand";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function HeroSearch() {
  const useAuthStore = useStore(authStore);
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState({ location: false, date: false });

  function onSearch() {
    const newErrors = {
      location: location === "",
      date: date === "",
    };
    setErrors(newErrors);

    if (newErrors.location || newErrors.date) {
      toast.error("Please enter a location and date");
      return;
    }

    if (useAuthStore.isLoggedIn) {
      navigate("/home");
    } else {
      toast.error("You must be logged in to search");
      navigate("/auth");
    }
  }

  return (
    <section className="relative flex items-center py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Find Your Perfect
              <span className="block text-blue-600">Parking Space</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Book secure parking spots in prime locations. Save time and money
              with our hourly parking solutions.
            </p>

            {/* Search Box */}
            <div className="bg-white p-4 rounded-2xl shadow-lg max-w-2xl">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    onChange={(e) => {
                      setLocation(e.target.value);
                      setErrors((prev) => ({ ...prev, location: false }));
                    }}
                    type="text"
                    placeholder="Location"
                    className={`w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-xl focus:ring-2 ${
                      errors.location
                        ? "border-2 border-red-500"
                        : "border-0 focus:ring-blue-500"
                    }`}
                  />
                </div>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    onChange={(e) => {
                      setDate(e.target.value);
                      setErrors((prev) => ({ ...prev, date: false }));
                    }}
                    type="datetime-local"
                    className={`w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-xl focus:ring-2 ${
                      errors.date
                        ? "border-2 border-red-500"
                        : "border-0 focus:ring-blue-500"
                    }`}
                  />
                </div>
                <button
                  onClick={onSearch}
                  className="bg-blue-600 text-white px-8 py-2.5 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  Search
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-gray-900">50K+</p>
                <p className="text-gray-600">Active Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">100+</p>
                <p className="text-gray-600">Cities</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">4.9</p>
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <p className="text-gray-600">Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={parkingImage}
                alt="Modern parking garage"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating Cards */}
            <div className="absolute -left-12 top-1/4 bg-white p-4 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Secure Parking</p>
                  <p className="text-sm text-gray-600">24/7 surveillance</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-8 bottom-1/4 bg-white p-4 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-3 rounded-xl">
                  <Car className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Easy Access</p>
                  <p className="text-sm text-gray-600">Smart entry system</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
