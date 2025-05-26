import PageBanner from "../components/PageBanner";
import TermsCondition from "../components/TermsCondition";

const termsConditions = () => {
  return (
    
    <div className="rac_main_wrapper">
      <PageBanner
        pageTitle={`Terms and conditions`}
        parents={{
          title: "Home",
          link: "/",
        }}
      />

      <TermsCondition />
    </div>
    
  );
};

export default termsConditions;
