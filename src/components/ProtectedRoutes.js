import { useAuth } from "../context/authContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GridLoader } from "react-spinners";

const ProtectedRoutes = ({ children }) => {
  const { user , loading} = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin');
    }
  }, [user, router]);

  if (loading) {
    return <>
    <GridLoader color="#dc2626" />
    </>; 
  }

  return user ? children : null;
};

export default ProtectedRoutes;