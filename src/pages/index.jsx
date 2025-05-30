import Banner from "../components/home/Banner";
import DailyDeals from "../components/DailyDeals"
import FoodMenu from "../components/FoodMenu"
import OfferZone from "../components/home/OfferZone"
import Banner_Video from "../components/Banner_Video"
import Testimonials from "../components/Testimonials"
import TrendingProducts from "../components/TrendingProducts";


export default function Home() {  
  return (  
    <div className="bg-[#2A2A2A]">
      <Banner />
      <TrendingProducts />
      <DailyDeals />
      <FoodMenu />
      <OfferZone />
      <Banner_Video />
      <Testimonials />
    </div>
  );
}
