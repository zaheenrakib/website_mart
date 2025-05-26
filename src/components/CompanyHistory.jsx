import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const CompanyHistory = () => {
  const [selectedHistory, setSelectedHistory] = useState(null); 
  const [showModal, setShowModal] = useState(false); 

  const history_data = [
    {
      years: "2011-2012",
      date: "March 15, 2011",
      title: "Foundation of UMCL",
      image: "/assets/images/umcl-history/PCE05159.jpg",
      description:
        "The journey began with the establishment of UMCL, marking the start of a new era in corporate excellence. Our founding members laid the groundwork for what would become a leading institution in the industry.",
    },
    {
      years: "2013-2014",
      date: "July 20, 2013",
      title: "Market Expansion Phase",
      image: "/assets/images/umcl-history/PCE05159.jpg",
      description:
        "During this period, UMCL experienced significant market expansion, establishing key partnerships and extending our reach to new territories. This phase was crucial in building our market presence.",
    },
    {
      years: "2015-2016",
      date: "April 10, 2015",
      title: "Innovation & Technology Integration",
      image: "/assets/images/umcl-history/PCE05159.jpg",
      description:
        "A transformative period marked by major technological advancements and innovative solutions. We integrated cutting-edge technologies to enhance our service delivery and operational efficiency.",
    },
    {
      years: "2017-2018",
      date: "September 5, 2017",
      title: "Global Recognition Achievement",
      image: "/assets/images/umcl-history/PCE05159.jpg",
      description:
        "UMCL gained international recognition for excellence in service and innovation. This period saw us winning multiple industry awards and establishing our position as a global leader.",
    },
    {
      years: "2019-2020",
      date: "January 15, 2019",
      title: "Sustainability Initiative Launch",
      image: "/assets/images/umcl-history/PCE05159.jpg",
      description:
        "We launched major sustainability initiatives, focusing on environmental responsibility and sustainable business practices. This marked our commitment to a greener future.",
    },
    {
      years: "2021-2022",
      date: "June 30, 2021",
      title: "Digital Transformation Era",
      image: "/assets/images/umcl-history/PCE05159.jpg",
      description:
        "A period of comprehensive digital transformation, where we revolutionized our processes and services through advanced digital solutions and customer-centric innovations.",
    },
    {
      years: "2023-2024",
      date: "October 12, 2023",
      title: "Community Impact Focus",
      image: "/assets/images/umcl-history/PCE05159.jpg",
      description:
        "Current focus on strengthening community relationships and social impact initiatives. We're expanding our CSR programs and developing sustainable community partnerships.",
    },
    {
      years: "2024-2025",
      date: "January 1, 2024",
      title: "Future Vision & Growth",
      image: "/assets/images/umcl-history/PCE05159.jpg",
      description:
        "Looking ahead with ambitious plans for growth and innovation. Our roadmap includes expansion into new markets, enhanced service offerings, and continued technological advancement.",
    },
  ];

  // const openModal = (history) => {
  //   setSelectedHistory(history);
  //   setShowModal(true);
  //   document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  // };

  const closeModal = () => {
    setSelectedHistory(null);
    setShowModal(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  return (
    <div className="relative">
      <div className="container">
        <div className="row">
          <div className="text-center pb-2 md:pb-5">
            <div className="h-1 w-20 bg-red-600 mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl text-white font-light mb-4 md:mb-5">UMCL history</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Roads we have passed till now
            </p>
          </div>
          <div className="col-auto">
            <div className="rac_history_slider">
              <div className="row">
                <div className="col-xl-2" style={{ position: "relative", zIndex: 20 }}>
                  <div className="swiper-pagination"></div>
                </div>
                <div className="col-xl-9" style={{ position: "relative", zIndex: 10 }}>
                  <Swiper
                    slidesPerView={1}
                    loop={true}
                    spaceBetween={30}
                    speed={3000}
                    height={400}
                    autoplay={{
                      delay: 1500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      type: "bullets",
                      el: ".rac_history_slider .swiper-pagination",
                      clickable: true,
                      renderBullet: (index, className) =>
                        `<span class="${className}">${history_data[index].years}</span>`,
                    }}
                    breakpoints={{
                      1199: {
                        direction: "vertical",
                        spaceBetween: 30,
                      },
                      0: {
                        direction: "horizontal",
                      },
                    }}
                    modules={[Autoplay, Pagination]}
                  >
                    {history_data.map((year, i) => (
                      <SwiperSlide key={i}>
                        <div className="row align-items-center">
                          <div className="col-lg-6">
                            <div className="rac_history_img">
                              <Image
                                src={year.image}
                                alt={`UMCL History ${year.years}`}
                                height={400}
                                width={600}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 text-justify">
                            <div className="rac_history_date flex items-center gap-2">
                              <FontAwesomeIcon icon={faCalendarAlt} className="text-red-500" />
                              <p className="mb-0">{year.date}</p>
                            </div>
                            <div className="rac_history_text">
                              <h4>{year.title}</h4>
                              <p>
                                {year.description.substring(0, 200)}
                                {year.description.length > 200 && "..."}
                              </p>
                              {year.description.length > 200 && (
                                <Link
                                  href="#"
                                  className="flex items-center text-red-500 hover:underline"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedHistory(year);
                                    setShowModal(true);
                                    document.body.style.overflow = "hidden";
                                  }}
                                >
                                  <span className="mr-2">Read More</span>
                                  <FontAwesomeIcon icon={faArrowRight} />
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Full Description */}
      {showModal && selectedHistory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300">
          <div
            className="bg-gradient-to-b from-[#1d1d1d] to-[#252525] w-[95%] md:w-[80%] max-w-6xl max-h-[80vh] rounded-2xl overflow-y-auto shadow-2xl shadow-black/50 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-red-500 text-white p-2 rounded-full transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image section */}
              <div className="relative h-80">
                <Image
                  src={selectedHistory.image}
                  alt={selectedHistory.title}
                  fill
                  className="object-cover"
                  sizes="80vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] to-transparent"></div>
              </div>

              {/* Content section */}
              <div className="p-8">
                <h2 className="text-4xl text-white font-medium mb-6">{selectedHistory.title}</h2>
                <p className="text-2xl text-red-500 font-light mb-6 flex justify-end"> • {selectedHistory.years}</p>
                <p className="text-gray-300 leading-relaxed">{selectedHistory.description}</p>
                <div className="pt-6 flex justify-end">
                  <button
                    onClick={closeModal}
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyHistory;
