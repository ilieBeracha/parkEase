import parking from "../assets/images/1.jpg";
import { Shield, Clock, MapPin } from "lucide-react";


export default function AuthSidebar({ isSigningUp }: { isSigningUp: boolean }) {
  return (
    <div className="hidden lg:flex lg:w-1/2 xl:w-2/3">
      <div className="relative w-full">
        <img
          src={parking}
          alt="Parking garage"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-600/90 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="max-w-xl text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              {isSigningUp
                ? "Join the ParkEase Community"
                : "Welcome back to ParkEase"}
            </h2>
            <div className="grid grid-cols-1 gap-8">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <p className="text-lg text-white">
                  Book parking spaces anytime, anywhere
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <p className="text-lg text-white">
                  Find the perfect spot in prime locations
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <p className="text-lg text-white">
                  Secure and guaranteed parking spaces
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
