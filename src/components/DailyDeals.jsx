import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Countdown from "react-countdown";
import Link from "next/link";
import Image from "next/image";
import { useGetDailyDeals } from "../context/api";
import { useContext } from "react";
import { UserContext } from "../context/UseContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faArrowRight,
  faClock,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import DailyDealsLoader from "./loader/DailyDealsLoader";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const DailyDeals = () => {
  const { data: dailyDeals, isLoading } = useGetDailyDeals();
  const { addToCart, addToWishlist } = useContext(UserContext);

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex items-center space-x-2 text-sm md:text-base">
        <div className="flex flex-col items-center">
          <span className="bg-white text-red-600 rounded-md px-2 py-1 font-bold">
            {days}
          </span>
          <span className="text-xs text-white/80">Days</span>
        </div>
        <span className="text-white font-bold">:</span>
        <div className="flex flex-col items-center">
          <span className="bg-white text-red-600 rounded-md px-2 py-1 font-bold">
            {hours}
          </span>
          <span className="text-xs text-white/80">Hours</span>
        </div>
        <span className="text-white font-bold">:</span>
        <div className="flex flex-col items-center">
          <span className="bg-white text-red-600 rounded-md px-2 py-1 font-bold">
            {minutes}
          </span>
          <span className="text-xs text-white/80">Mins</span>
        </div>
        <span className="text-white font-bold">:</span>
        <div className="flex flex-col items-center">
          <span className="bg-white text-red-600 rounded-md px-2 py-1 font-bold">
            {seconds}
          </span>
          <span className="text-xs text-white/80">Secs</span>
        </div>
      </div>
    );
  };
  if (isLoading) {
    return (
      <DailyDealsLoader/>
    );
  }

  if (!dailyDeals || dailyDeals.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto">
      <div className="bg-gradient-to-r from-red-700 to-red-500 py-8 px-4 md:px-8 rounded-3xl mx-4 my-8 shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
            <h1 className="text-3xl font-bold text-white mb-2 md:mb-0 md:mr-8">
              Daily Deals
            </h1>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faClock} className="text-white mr-2" />
              <span className="text-white mr-4">Ends in:</span>
              <Countdown date={Date.now() + 172800000} renderer={renderer} />
            </div>
          </div>
          <Link
            href="/products"
            className="group flex items-center bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300"
          >
            <span className="text-white mr-2">View All</span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-white transform group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          modules={[Pagination, Autoplay]}
          className="pb-12"
        >
          {dailyDeals?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#202020] rounded-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 shadow-lg">
                <div className="relative">
                  <Image
                    height={1000}
                    width={1000}
                    className="h-48 w-full object-cover"
                    src={BASE_URL + item?.product?.image}
                    alt={item?.product?.productName}
                  />
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-sm">
                    {item.quantity} left
                  </div>
                  <button
                    onClick={() => 
                      addToWishlist({
                              id: item.id,
                              price: item.price,
                              productName: item?.product?.productName,
                              image: item?.product?.image,
                              description: item?.product?.description,
                            })}
                    className="absolute top-2 left-2 bg-black/50 p-2 rounded-full transition-colors duration-300 backdrop-blur-sm"
                    title="Add to wishlist"
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-red-600 hover:text-red-500 transition-colors duration-300"
                    />
                  </button>
                </div>

                <div className="p-4">
                  <h2 className="text-red-600 font-bold text-lg mb-2 truncate">
                    {item?.product?.productName}
                  </h2>
                  <div className="border-b-2 border-red-600 mb-3"></div>
                  <div className="flex justify-between items-center">
                    <div className="text-white font-bold">৳{item.price}</div>
                    <button
                      onClick={() =>
                        addToCart({
                          id: item.id,
                          price: item.price,
                          productName: item?.product?.productName,
                          image: item?.product?.image,
                          description: item?.product?.description,
                        })
                      }
                      className="flex items-center bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg transition-colors duration-300"
                    >
                      <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DailyDeals;