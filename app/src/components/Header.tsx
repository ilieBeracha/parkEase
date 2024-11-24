import { authStore } from "@/store/authStore";
import { Car, Menu, User } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useStore } from "zustand";

export default function Header() {
  const navigate = useNavigate();
  const useAuthStore = useStore(authStore);
  return (
    <header className="fixed top-0 w-full bg-white/80  backdrop-blur-sm shadow-md z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Car className="h-6 w-6 text-blue-600" />
          <span
            className="text-xl font-bold text-gray-900 cursor-pointer"
            onClick={() => navigate("/")}
          >
            ParkEase
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-900 hover:text-blue-600 transition">
            About
          </a>
          {!useAuthStore.isLoggedIn ? (
            <NavLink
              to="/auth"
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300"
            >
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </NavLink>
          ) : (
            <button
              onClick={() => useAuthStore.logout()}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300"
            >
              <User className="h-4 w-4" />
              <span>Sign Out</span>
            </button>
          )}
        </div>

        <button className="md:hidden">
          <Menu className="h-6 w-6 text-white" />
        </button>
      </nav>
    </header>
  );
}
