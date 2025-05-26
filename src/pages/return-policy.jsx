import Layout from "../components/layout/Layout";
import PageBanner from "../components/PageBanner";
import Refund from "./Refund";

const returnPolicy = () => {
  return (
    
      <div className="rac_main_wrapper">
        <PageBanner
          pageTitle={`Refund and Return Policy`}
          parents={{
            title: "Home",
            link: "/",
          }}
        />
        
        <Refund />
      </div>
    
  );
};

export default returnPolicy;
