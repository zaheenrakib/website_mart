import Image from "next/image";
import Link from "next/link";
import useGetData from "../../hooks/useGetData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { UserContext } from "../../context/UseContext";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const OfferZone = () => {
  const { data, isLoading } = useGetData(
    "/offer-zone",
    "offer-zone"
  );
    const { addToCart } = useContext(UserContext);

  
  return (
    <>
    {
      data?.length > 0   && (
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#2A2A2A] to-[#2A2A2A]">
          <div className="container mx-auto px-4 md:px-6">
            {/* Header Section */}
            <div className="text-center mb-12 md:mb-16">
              <div className="h-1 w-20 bg-red-600 mx-auto mb-6 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl xl:text-6xl text-white font-light mb-6 tracking-wide">
                Offer Zone
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto px-4">
                Popular Dishes Of Our Caterers
              </p>
            </div>

            {isLoading ? (
              // Loader Grid
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#1d1d1d] rounded-xl p-4 shadow-lg animate-pulse"
                  >
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <div className="h-32 w-32 rounded-full bg-gray-700"></div>
                      <div className="flex-1 space-y-4 w-full text-center sm:text-left">
                        <div className="h-4 bg-gray-700 rounded-full w-3/4"></div>
                        <div className="h-4 bg-gray-700 rounded-full w-1/2"></div>
                        <div className="flex gap-3 justify-center sm:justify-start">
                          <div className="h-8 bg-gray-700 rounded-lg w-20"></div>
                          <div className="h-8 bg-gray-700 rounded-lg w-20"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Product Grid
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {data?.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#1d1d1d] rounded-xl p-4 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20"
                    title={item?.product?.productName}
                  >
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <div className="relative">
                        <Image
                          width={128}
                          height={128}
                          src={BASE_URL + item?.product?.image}
                          alt={item?.product?.productName}
                          className="h-32 w-32 rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                        />
                        <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          OFFER
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-3 text-center sm:text-left">
                        <Link 
                          href={`/products/${item?.product?.slug}`}
                          className="block hover:text-red-500 transition-colors duration-300"
                        >
                          <h2 className="text-lg md:text-xl text-white font-medium line-clamp-2">
                            {item?.product?.productName}
                          </h2>
                        </Link>
                        
                        <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-start">
                          <del className="text-gray-400 text-sm md:text-base">
                            ৳{item?.product?.salesPrice}
                          </del>
                          <span className="text-red-500 text-lg md:text-xl font-semibold">
                            ৳{item?.offerPrice}
                          </span>
                        </div>
                        
                        <button
                          onClick={() =>
                            addToCart({
                              id: item?.product?.id,
                              price: item?.offerPrice,
                              productName: item?.product?.productName,
                              image: item?.product?.image,
                              description: item?.product?.description,
                              salesPrice: item?.product?.salesPrice,
                            })
                          }
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
                        >
                          <FontAwesomeIcon icon={faShoppingCart} className="text-lg" />
                          <span>Add to Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )
    }
    </>
  );
};

export default OfferZone;
