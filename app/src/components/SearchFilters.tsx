import React from "react";
import { Sliders, DollarSign, Clock, Shield, Car } from "lucide-react";

export default function SearchFilters() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700">
          Reset all
        </button>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="flex items-center text-gray-700 font-medium mb-3">
          <DollarSign className="h-5 w-5 mr-2" />
          Price Range
        </label>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="100"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>$0</span>
            <span>$100</span>
          </div>
        </div>
      </div>

      {/* Duration */}
      <div className="mb-6">
        <label className="flex items-center text-gray-700 font-medium mb-3">
          <Clock className="h-5 w-5 mr-2" />
          Duration
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2 text-gray-600">Hourly</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2 text-gray-600">Daily</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2 text-gray-600">Weekly</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2 text-gray-600">Monthly</span>
          </label>
        </div>
      </div>

      {/* Features */}
      <div className="mb-6">
        <label className="flex items-center text-gray-700 font-medium mb-3">
          <Shield className="h-5 w-5 mr-2" />
          Features
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2 text-gray-600">24/7 Access</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2 text-gray-600">Security Camera</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2 text-gray-600">Covered Parking</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2 text-gray-600">EV Charging</span>
          </label>
        </div>
      </div>

      {/* Type */}
      <div>
        <label className="flex items-center text-gray-700 font-medium mb-3">
          <Car className="h-5 w-5 mr-2" />
          Parking Type
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2 text-gray-600">Street Parking</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2 text-gray-600">Garage</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2 text-gray-600">Private Driveway</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2 text-gray-600">Parking Lot</span>
          </label>
        </div>
      </div>
    </div>
  );
}
