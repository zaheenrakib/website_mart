import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-flip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Autoplay, Pagination, Navigation, EffectFlip } from "swiper/modules";

const ProductMultiImage = ({ onImageClick, slugProduct }) => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  
  const [loading, setLoading] = useState(true);
  
  const images = slugProduct?.image;
  console.log('Raw image data:', slugProduct?.image);
  console.log('Parsed images:', images);

  
  const handleImageLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
  }, [slugProduct]);

  const renderImages = () => {
    if (!Array.isArray(images)) {
      console.error('Images is not an array:', images);
      return null;
    }

    return images.map((chef, index) => (
      <SwiperSlide key={index}>
        <div className="cursor-pointer">
          <Image
            src={chef}
            alt={slugProduct?.productName || 'Product Image'}
            width={100}
            height={100}
            className="rounded"
            onClick={() => onImageClick(chef)}
            onLoad={handleImageLoad}
            priority
          />
        </div>
      </SwiperSlide>
    ));
  };

  return (
    <div className="relative">
      {/* Navigation buttons */}
      <div className="absolute top-1/2 -left-0 transform -translate-y-1/2">
        <button ref={prevButtonRef} className="text-2xl">
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
      </div>
      <div className="absolute top-1/2 -right-0 transform -translate-y-1/2">
        <button ref={nextButtonRef} className="text-2xl">
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>

      <div className="w-[120px] md:w-[440px] h-[70px] mx-auto">
        {/* Show loading spinner if loading */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span>Loading...</span>
          </div>
        )}
        
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          keyboard={{ enabled: true }}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          pagination={{
            el: ".rac_chefs_slider .swiper-pagination",
            clickable: true,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevButtonRef.current;
            swiper.params.navigation.nextEl = nextButtonRef.current;
          }}
          breakpoints={{
            1199: { slidesPerView: 4 },
            992: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            575: { slidesPerView: 1 },
            320: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
          modules={[Autoplay, EffectFlip, Pagination, Navigation]}
        >
          {renderImages()}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductMultiImage;
