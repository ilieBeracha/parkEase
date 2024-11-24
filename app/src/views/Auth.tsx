import { useState } from "react";
import AuthForm from "../components/AuthForm";
import AuthSidebar from "../components/AuthSidebar";

export default function Auth() {
  const [isSigningUp, setIsSigningUp] = useState(false);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="w-full max-w-md">
          <AuthForm isSigningUp={isSigningUp} setIsSigningUp={setIsSigningUp} />
        </div>
      </div>

      {/* Sidebar */}
      <AuthSidebar isSigningUp={isSigningUp} />
    </div>
  );
}
