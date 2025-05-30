import { useAuth } from "../context/authContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/signin");
    }
  }, [user, loading, router]);

  if (loading) return <p className="text-center text-lg">Checking authentication...</p>;

  return user ? children : null;
};

export default ProtectedRoute;
