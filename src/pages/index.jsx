import Banner from "../components/home/Banner";
import ClubFacilitiesSlider from "../components/ClubFacilitiesSlider"
import LoungesSummary from "../components/LoungesSummary"
import TrendingProducts from "../components/TrendingProducts"
import DailyDeals from "../components/DailyDeals"
import FoodMenu from "../components/FoodMenu"
import OfferZone from "../components/home/OfferZone"
import BookUs from "../components/BookUs"
import About from "../components/About"
import Banner_Video from "../components/Banner_Video"
import Testimonials from "../components/Testimonials"
import MediaSummary from "../components/MediaSummary"


export default function Home() {
  return (  
    <div className="rac_main_wrapper">
      <Banner />
      <ClubFacilitiesSlider />
      <LoungesSummary />
      <TrendingProducts />
      <DailyDeals />
      <FoodMenu />
      <OfferZone />
      <BookUs />
      <About />
      <Banner_Video />
      <Testimonials />
      <MediaSummary />
    </div>
  );
}
