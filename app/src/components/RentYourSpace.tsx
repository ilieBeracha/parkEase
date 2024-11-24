import { Search, DollarSign, Car, Shield } from "lucide-react";
import parkingImg from "../assets/images/exampleImgParking1.webp";

export default function RentYourSpace() {
  return (
    <div className="relative ">
      {/* Rent Your Space Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Turn Your Empty Parking Space Into Income
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of property owners earning passive income by
                renting out their unused parking spaces.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600/10 p-3 rounded-lg">
                    <DollarSign className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Earn Monthly Income
                    </h3>
                    <p className="text-gray-400">
                      Set your own rates and earn consistent monthly revenue
                      from your space.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600/10 p-3 rounded-lg">
                    <Car className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Flexible Control
                    </h3>
                    <p className="text-gray-400">
                      Choose your availability and manage bookings through our
                      easy-to-use platform.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600/10 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Secure & Protected
                    </h3>
                    <p className="text-gray-400">
                      Our platform handles payments and provides insurance
                      coverage for your peace of mind.
                    </p>
                  </div>
                </div>
              </div>

              <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center space-x-2">
                <span>List Your Space</span>
                <Search className="h-5 w-5" />
              </button>
            </div>

            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src={parkingImg}
                  alt="Private parking space"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-full">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">
                        Average Monthly Earnings
                      </p>
                      <p className="text-2xl font-bold text-gray-900">$350</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
