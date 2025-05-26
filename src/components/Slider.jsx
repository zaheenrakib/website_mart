import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { useCategories } from "../context/api";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Slider = () => {
  const { data: categoryList, isLoading } = useCategories();



  if (isLoading ) {
    return (
      <>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={categoryList?.length > 1}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 5 },
            480: { slidesPerView: 3, spaceBetween: 5 },
            768: { slidesPerView: 3, spaceBetween: 5 },
            1024: { slidesPerView: 6, spaceBetween: 10 },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper pb-5"
        >
          {[1,2,4,6,7,8].map((cate, index) => (
            <SwiperSlide key={cate.id || index}>
              <div className="flex flex-col items-center">

                <div className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 animate-pulse transition-all"/>
                
                <div className="mt-2 h-2 w-28 rounded-3xl bg-gradient-to-r from-gray-600 to-gray-800 animate-pulse text-sm sm:text-base " />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }

  return (
    <>
      <div className="container mx-auto">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={categoryList?.length > 1}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 5 },
            480: { slidesPerView: 3, spaceBetween: 5 },
            768: { slidesPerView: 3, spaceBetween: 5 },
            1024: { slidesPerView: 6, spaceBetween: 10 },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper pb-5"
        >
          {categoryList?.map((cate, index) => (
            <SwiperSlide key={cate.id || index}>
              <div className="flex flex-col items-center">
                <Link href={`/category/products/${cate.id}`}>
                  <div className="relative group">
                    <Image
                      height={1000}
                      width={1000}
                      className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 rounded-full object-cover group-hover:border-2 group-hover:border-[#c9322a] transition-all"
                      src={BASE_URL + cate?.image}
                      alt={cate?.name || "Category"}
                    />
                  </div>
                </Link>
                <p className="font-bold mt-2 text-center text-sm sm:text-base text-white">
                  {cate.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
