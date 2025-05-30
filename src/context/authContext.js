import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { notifyError, notifySuccess } from "../utils/toast";

const AuthContext = createContext();
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { returnUrl } = router.query;

  // Load user & token from localStorage on app start
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");

      // ✅ Check if storedUser exists and is not "undefined" string
      if (storedUser && storedUser !== "undefined" && storedUser !== "null") {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
        } catch (parseError) {
          console.error("Error parsing stored user:", parseError);
          // Clear invalid data
          localStorage.removeItem("user");
        }
      }

      // ✅ Check if storedToken exists and is valid
      if (storedToken && storedToken !== "undefined" && storedToken !== "null") {
        axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
      }
    } catch (error) {
      console.error("Error loading auth data from localStorage:", error);
      // Clear potentially corrupted data
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  }, []);

  // Login function
  const login = async (userData) => {
    try {
      setLoading(true);

      const response = await axios.post(`${BASE_URL}/users/login`, userData, {
        headers: { "Content-Type": "application/json" },
      });

      const loggedInUser = response.data.user;
      const loggedToken = response.data.token;

      if (!loggedToken) {
        throw new Error("No token received from server");
      }

      setUser(loggedInUser);
      
      // ✅ Safely store data with error handling
      try {
        localStorage.setItem("user", JSON.stringify(loggedInUser));
        localStorage.setItem("token", loggedToken);
      } catch (storageError) {
        console.error("Error saving to localStorage:", storageError);
        // Continue without localStorage if it fails
      }
      
      axios.defaults.headers.common["Authorization"] = `Bearer ${loggedToken}`;

      notifySuccess("Login Successful!");

      if (returnUrl) {
        router.push(returnUrl);
      } else {
        router.push("/");
      }
    } catch (error) {
      notifyError(error?.response?.data?.message || "Login Failed!");
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    
    // ✅ Safely remove items from localStorage
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    } catch (error) {
      console.error("Error removing items from localStorage:", error);
    }
    
    delete axios.defaults.headers.common["Authorization"];
    router.push("/");
    notifySuccess("Logout Successful!");
  };

  // ✅ Helper function to check if user is authenticated
  const isAuthenticated = () => {
    return user !== null && user !== undefined;
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      loading, 
      setUser,
      isAuthenticated 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};