import EventCompoment from "../../components/Events";
import PageBanner from "../../components/PageBanner";
import OurServices from "../../components/OurServices";
import OfferZone from "../../components/home/OfferZone";
import { Helmet } from "react-helmet";

export default function Events() {
  return (
    <>
      <Helmet>
        <title>Uttara Model Club Limited  | Events</title>
      </Helmet>
      <div className="rac_main_wrapper">
        <PageBanner 
          pageTitle={`Event Catering`}
          bannerImage="bg-[url('/assets/images/pageBanner/pageBanner-2.jpg')]"
          pageDescription="Discover our premier event catering services that blend culinary artistry with impeccable service."
        />
        <OurServices />
        <OfferZone />

        <EventCompoment />
    
      </div>
    </>

  );
}
