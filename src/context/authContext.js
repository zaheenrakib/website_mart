import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { notifyError, notifySuccess } from "../utils/toast";
import useAxiosPublic from "../hooks/useAxiosPublic";

const AuthContext = createContext();
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const axiosPublic = useAxiosPublic();
  const { returnUrl } = router.query; // Get the returned URL from the query parameters

  // Load user & token from localStorage on app start
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    if (storedToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
    }
    setLoading(false); // Set loading to false after checking localStorage
  }, []);


  // Login function
  const login = async (userData) => {
    try {
      setLoading(true); // Set loading to true while logging in
      const response = await axiosPublic.post(`/membership-requests/login-member`, userData);
      const loggedInUser = response.data.member;
      const loggedToken = response.data.token;
      if (!loggedToken) {
        throw new Error("No token received from server");
      }
      setUser(loggedInUser);
      localStorage.setItem("user", JSON.stringify(loggedInUser));
      localStorage.setItem("token", loggedToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${loggedToken}`;
      notifySuccess("Login successful!"); // Notify user of successful login
      if (returnUrl) {
        router.push(returnUrl); // Redirect to the return URL if available
      } else {
        router.push("/");
      } // Redirect to home page if no return URL is provided
    } catch (error) {
      // Handle login error
      setLoading(false); // Set loading to false on error
      if (error.response && error.response.status === 401) {
        notifyError("Invalid credentials! Please try again."); // Notify user of invalid credentials{
      }else{
        notifyError("An error occurred during login. Please try again."); // Notify user of general error
      }
    }
    finally {
      setLoading(false); // Set loading to false after login attempt
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token"); // Remove token from storage
    delete axios.defaults.headers.common["Authorization"];
    router.push("/");
    notifySuccess("Logout successful!"); // Notify user of successful logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access auth context
export const useAuth = () => useContext(AuthContext);
