import { UserProvider } from "../context/UseContext";
import "../styles/globals.css";
import Head from "next/head";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "../context/authContext";
import Layout from "../components/layout/Layout";
import NextTopLoader from 'nextjs-toploader';
import { useEffect, useState } from "react";
import InitialLoader from "../components/loader/InitialLoader";

function MyApp({ Component, pageProps }) {
  // Create a new instance of QueryClient
  const client = new QueryClient();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(()=> {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  },[])



  
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Your site description" />
        {/* Add more meta tags as necessary */}
      </Head>

      {/* Wrapping the app with necessary context providers */}
      <UserProvider>
        <HelmetProvider>
          <QueryClientProvider client={client}>
            {/* Toast notifications will be shown from anywhere in the app */}
            <ToastContainer />
              <AuthProvider>
                <NextTopLoader
                  color="#E53E3E" // customize color
                  initialPosition={0.08}
                  crawlSpeed={200}
                  height={3}
                  crawl={true}
                  showSpinner={false}
                  easing="ease"
                  speed={200}
                  shadow="0 0 10px #29d,0 0 5px #29d"
                />
                <Layout>
                  {showSplash ? <InitialLoader /> : <Component {...pageProps} />}
                </Layout>
              </AuthProvider> 
          </QueryClientProvider>
        </HelmetProvider>
      </UserProvider>
    </>
  );

}

export default MyApp;
