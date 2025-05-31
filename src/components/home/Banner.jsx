import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import BannerSkeleton from "./BannerSkeleton";
import useGetDatas from "../../hooks/useGetData";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Banner = () => {
  const { data:banners, isLoading } = useGetDatas("/banners/active", "activeBanners");

  if (isLoading) {
    return <BannerSkeleton />;
  }

  return (
    <div className="rac_banner_wrapper">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {banners?.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="container mx-auto">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="rac_banner_content">
                    <div className="rac_banner_text">
                      {/* <h1>{banner?.title || "Crafting Moments, Not Just Meals."}</h1> */}
                      {/* <h1>{(banner?.title || "Crafting Moments, Not Just Meals.").split(' ').map((word, index) => 
                                index === 0 ? word : <span key={index}> {word}</span>
                            )}</h1> */}
                      <h1>
                        {(banner?.title ? banner?.title : "Crafting Moments, Not Just Meals.")
                          .split(" ")
                          .map((word, index, array) => {
                            if (index === 0 || index === array.length - 1) {
                              return `${word} `;
                            }
                            return <span key={index}>{word} </span>;
                          })}
                      </h1>
                      <p>
                        {banner?.description ? banner?.description :
                          "Every dish is more than just food—it's a chance to connect."}
                      </p>
                    </div>
                    <div className="rac_banner_btn">
                      <a href="#book-now" className="rac_btn">
                        Book Now
                      </a>
                      <a href="#" className="rac_btn bnr_btn">
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 pe-0">
                  <div className="rac_banner_img">
                    <Image
                      width={1000}
                      height={1000}
                      src={
                        banner?.image
                          ? BASE_URL + banner.image
                          : "/assets/images/demo/banner_img.webp"
                      }
                      alt={banner.title || "Banner"}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
