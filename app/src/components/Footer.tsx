import { Facebook, Twitter, Instagram, Car } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold text-white">ParkEase</span>
            </div>
            <p className="text-gray-400">
              Find and book parking spaces with ease. Available 24/7 for your
              convenience.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: support@parkease.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Parking Street</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} ParkEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
