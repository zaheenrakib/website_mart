import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import useGetData from "../hooks/useGetData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Testimonials = () => {
  const { data, isLoading } = useGetData("/testimonials/active", "testimonials");
  console.log(data);

  

  return (
    <div className="rac_section rac_testimonial_wrapper">
      <div className="container">
        <div className="row">

          <div className="text-center mb-10">
              <div className="h-1 w-20 bg-red-600 mx-auto mb-6"></div>
              <h2 className="text-4xl md:text-5xl text-white font-light mb-6">Testimonials</h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  What our customers say about us
              </p>
          </div>

          <div className="col-12">
            <div className="rac_testimonial_slider">
              {
                isLoading? (
                  <>
                    <Swiper
                      slidesPerView={2}
                      spaceBetween={30}
                      loop={true}
                      speed={3000}
                      autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        el: ".rac_testimonial_slider .swiper-pagination",
                        clickable: true,
                      }}
                      breakpoints={{
                        992: {
                          slidesPerView: 2,
                          spaceBetween: 30,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 30,
                        },
                        575: {
                          slidesPerView: 1,
                          spaceBetween: 15,
                        },
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 15,
                        },
                        0: {
                          slidesPerView: 1,
                          spaceBetween: 15,
                        },
                      }}
                      modules={[Autoplay, Pagination]}
                    >
                      {[1,2,3,4].map((i) => (
                        <SwiperSlide key={i}>
                          <div className="rac_testimonial_slide">
                            <div className="rac_testimonial_box">
                              <div className="w-full h-3 bg-gradient-to-r from-gray-600 to-gray-800 animate-pulse rounded-xl" />
                              <div className="flex justify-between my-3">
                                <div className="rac_testi_user">
                                  
                                  <div className="h-12 w-12 bg-gradient-to-r from-gray-600 to-gray-800 animate-pulse rounded-full" />

                                  <div className="rac_testi_user_info">
                                    <div className="h-4 w-12 bg-gradient-to-r from-gray-600 to-gray-800 animate-pulse rounded-xl" />
                                    <div className="h-3 w-32 bg-gradient-to-r from-gray-600 to-gray-800 animate-pulse rounded-xl mt-2" />
                                  </div>
                                </div>
                                <div className="rac_testi_rating">
                                  <div className="flex items-center mb-2">
                                    {[1,2,3,4].map((index) => (
                                      <div key={index} className="h-5 w-5 bg-gradient-to-r from-gray-600 to-gray-800 animate-pulse rounded-full m-1"/>  
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </>
                ): (

                <Swiper
                  slidesPerView={2}
                  spaceBetween={30}
                  loop={true}
                  speed={3000}
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    el: ".rac_testimonial_slider .swiper-pagination",
                    clickable: true,
                  }}
                  breakpoints={{
                    992: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    575: {
                      slidesPerView: 1,
                      spaceBetween: 15,
                    },
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 15,
                    },
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 15,
                    },
                  }}
                  modules={[Autoplay, Pagination]}
                >
                  {data?.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="rac_testimonial_slide">
                        <div className="rac_testimonial_box">
                          <p>{testimonial?.message}</p>
                          <div className="rac_testi_btm">
                            <div className="rac_testi_user">
                              <Image
                                width={1000}
                                height={1000}
                                alt=""
                                src={BASE_URL + testimonial?.image}
                                className="img-fluid"
                              />
                              <div className="rac_testi_user_info">
                                <h6>{testimonial?.name}</h6>
                                <p>{testimonial?.designation}</p>
                              </div>
                            </div>
                            <div className="rac_testi_rating">
                              <div className="flex items-center mb-2">
                                {[...Array(testimonial?.rating)].map((_, index) => (
                                  <FontAwesomeIcon
                                    key={index}
                                    icon={faStar}
                                    className={`${testimonial?.rating === 5 ? "text-[#4CAF50]"
                                      :testimonial?.rating === 4? "text-[#8BC34A]" 
                                      :testimonial?.rating === 3? "text-[#FFEB3B]" 
                                      :testimonial?.rating === 2? "text-[#FF9800]"
                                      : "text-[#F44336]" }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                )
              }
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
