import {
  ArrowRight,
  DollarSign,
  Calendar,
  Shield,
  Wallet,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeAddParking() {
  return (
    <div className=" bg-white">
      {/* Hero Section */}
      <section className="relative flex">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto px-4 relative py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}

            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?auto=format&fit=crop&q=80"
                  alt="Empty parking space"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-12 top-1/4 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <Wallet className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Easy Earnings</p>
                    <p className="text-sm text-gray-600">Get paid monthly</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-8 bottom-1/4 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Flexible Schedule
                    </p>
                    <p className="text-sm text-gray-600">
                      You control availability
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-medium">
                <DollarSign className="h-5 w-5 mr-2" />
                Turn Your Empty Space Into Income
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Have an Empty
                <span className="block text-blue-600">Parking Space?</span>
                Let It Earn For You
              </h1>

              <p className="text-xl text-gray-600 max-w-lg">
                Join thousands of property owners earning passive income by
                renting out their unused parking spaces. It's simple, secure,
                and profitable.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  List Your Space
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition border-2 border-gray-200">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div>
                  <p className="text-3xl font-bold text-gray-900">$350</p>
                  <p className="text-gray-600">Avg. Monthly Earnings</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">15K+</p>
                  <p className="text-gray-600">Active Hosts</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">98%</p>
                  <p className="text-gray-600">Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Features */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition">
                <Clock className="h-6 w-6 text-blue-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Flexible Hours
              </h3>
              <p className="text-gray-600">
                Set your own schedule and availability. Rent hourly, daily, or
                monthly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition">
                <Wallet className="h-6 w-6 text-blue-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Passive Income
              </h3>
              <p className="text-gray-600">
                Earn money from your unused parking space with zero effort
                required.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition">
                <Shield className="h-6 w-6 text-blue-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Full Protection
              </h3>
              <p className="text-gray-600">
                We provide insurance coverage and handle all payments securely.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
