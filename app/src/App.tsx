import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import Auth from "./views/Auth";
import { authStore } from "./store/authStore";
import { useStore } from "zustand";
import Home from "./views/Home";
import AddParking from "./views/AddParking";
import { useEffect } from "react";

function App() {
  const useAuthStore = useStore(authStore);

  useEffect(() => {
    useAuthStore.checkAuth();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="pt-16">
        <Routes>
          {/* {useAuthStore.isLoggedIn ? (
            <> */}
          <Route path="/home" element={<Home />} />
          <Route path="/add-parking" element={<AddParking />} />
          {/* <Route path="/auth" element={<Auth />} /> */}
          {/* </>
          ) : (
            <> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Auth />} />
          {/* </>
          )} */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
