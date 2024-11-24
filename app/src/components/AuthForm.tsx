import React, { useState } from "react";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import BaseInput from "./BaseInput";
import { authStore } from "@/store/authStore";
import { useStore } from "zustand";

export default function AuthForm({
  isSigningUp,
  setIsSigningUp,
}: {
  isSigningUp: boolean;
  setIsSigningUp: (isSigningUp: boolean) => void;
}) {
  const useAuthStore = useStore(authStore);

  const [user, setUser] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSigningUp) {
      await useAuthStore.register(user);
    } else {
      await useAuthStore.login(user);
    }
  }

  return (
    <div className="w-full">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          {isSigningUp ? "Create your account" : "Welcome back!"}
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          {!isSigningUp ? (
            <>
              New to ParkEase?{" "}
              <span
                onClick={() => setIsSigningUp(true)}
                className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer"
              >
                Create an account
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setIsSigningUp(false)}
                className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer"
              >
                Sign in
              </span>
            </>
          )}
        </p>
      </div>

      {/* Social Buttons */}
      <div className="space-y-3">
        <button className="w-full flex items-center justify-center px-4 py-2.5 border border-gray-300 hover:scale-[101%] transition-all duration-300 rounded-lg shadow-sm bg-[#E37400] text-white hover:border-white">
          <span className="ml-3 font-medium  text-white">
            Continue with Google
          </span>
        </button>
        <button className="w-full flex items-center justify-center px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm bg-[#2b3137] text-white transition-all duration-300 hover:scale-[101%]">
          <span className="ml-3  font-medium">Continue with GitHub</span>
        </button>
      </div>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-500">
            Or continue with email
          </span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {isSigningUp && (
          <div className="grid grid-cols-2 gap-4">
            <BaseInput
              icon={User}
              type="text"
              name="firstname"
              placeholder="First name"
              value={user.firstname}
              onChange={handleChange}
              required
            />
            <BaseInput
              icon={User}
              type="text"
              name="lastname"
              placeholder="Last name"
              value={user.lastname}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <BaseInput
          icon={Mail}
          type="email"
          name="email"
          placeholder="Email address"
          value={user.email}
          onChange={handleChange}
          required
        />

        <BaseInput
          icon={Lock}
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />

        {!isSigningUp && (
          <div className="flex items-center justify-end">
            <span
              onClick={() => setIsSigningUp(false)}
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Forgot password?
            </span>
          </div>
        )}

        <button
          type="submit"
          className="w-full flex items-center justify-center px-4 py-2.5 border border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <span className="flex items-center">
            {isSigningUp ? "Create account" : "Sign in"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </span>
        </button>
      </form>
    </div>
  );
}
