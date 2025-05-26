import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import useGetData from "../hooks/useGetData";
import TrendingProductsLoader from "./loader/TrendingProductsLoader";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const TrendingProducts = () => {
  const { data, isLoading} = useGetData("/slider-image", "sliderImage");
  console.log(data);

  if (isLoading) {
    return (
      <TrendingProductsLoader />
    );
  }

  return (
    <>
      {
        (data?.otherData?.length>0 || data?.positionOneData?.length>0) && (

          <div className="rac_booking_wrapper">
            <div className=" container mx-auto grid grid-cols-1 md:grid-cols-5 gap-3 p-3 md:h-[500px]">
              {/* Swiper Section (Full width on mobile, Left Side on desktop) */}
              <div className="col-span-1 md:col-span-3 sm:mb-3 md:mb-0">
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="mySwiper h-[300px] md:h-full"
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                >
                  {data?.positionOneData?.map((item, index) => (
                    <SwiperSlide
                      key={index}
                      className="flex items-center bg-red-500 justify-center min-h-[350px] md:min-h-[450px]  text-white rounded-lg shadow-lg"
                    >
                      <Link href={item?.link}>
                        <Image
                          src={BASE_URL + item?.image}
                          alt={item?.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg h-[550] bg-red-500"
                        />
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Right Section with Boxes - Single row on mobile, 2x2 grid on desktop */}
              <div className="col-span-1 md:col-span-2">
                <div className="grid grid-cols-2 md:grid-rows-2 gap-3 h-full">
                  {data?.otherData?.map((item, index) => (
                    <div
                      key={index}
                      className="relative p-4 h-[150px] md:h-full bg-purple-500 text-white text-center rounded-md shadow-md"
                    >
                      <Link href={item?.link}>
                        <Image
                          src={BASE_URL + item?.image}
                          alt={item?.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md"
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default TrendingProducts;
