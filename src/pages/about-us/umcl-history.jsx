import React from "react";
import Layout from "../../components/layout/Layout";
import PageBanner from "../../components/PageBanner";
import Image from "next/image";
import CompanyHistory from "../../components/CompanyHistory";
import About from "../../components/About";

const umclHistory = () => {
  return (
    
    <div className="rac_main_wrapper">
      <PageBanner
        pageTitle={`UMCL History`}
        bannerImage="bg-[url('/assets/images/pageBanner/pageBanner-2.jpg')]"
        pageDescription="Discover the rich heritage and evolution of Uttara Model Club Limited, a prestigious institution built on the foundation of friendship and excellence."
      />
      <div className="mt-7">

        <CompanyHistory />
      </div>
      <About />

    </div>
    
  );
};

export default umclHistory;
