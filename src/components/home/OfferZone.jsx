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
        <div className=" py-12 bg-[#2A2A2A]">        
            <div className="text-center mb-10">
              <div className="h-1 w-20 bg-red-600 mx-auto mb-6"></div>
              <h2 className="text-4xl md:text-5xl text-white font-light mb-6">Offer Zone</h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Popular Dishes Of Our Caterers
              </p>
            </div>          
            {isLoading ? (
            // Loader
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <div className="" key={index}>
                      <div className="flex items-center">
                        <div className="z-10">
                          <div className="h-32 w-32 rounded-full bg-gray-700 animate-pulse"></div>
                        </div>
                        <div className="text-center border border-[var(--rac-border-color)] bg-[#1d1d1d] rounded-[var(--rac-border-radius)] p-6 relative -ml-24 pl-32">
                          <div className="space-y-3">
                            <div className="h-4 bg-gray-700 rounded-full w-32 animate-pulse"></div>
                            <div className="h-4 bg-gray-700 rounded-full w-24 animate-pulse"></div>
                          </div>
                          <div className="mt-4">
                            <div className="flex gap-2 flex-wrap items-center justify-center">
                              <div className="h-4 bg-gray-700 rounded-full w-16 animate-pulse"></div>
                              <div className="h-4 bg-gray-700 rounded-full w-16 animate-pulse"></div>
                              <div className="h-8 bg-gray-700 rounded-lg w-20 animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Data after loading
              <div className="flex flex-wrap lg:gap-2 gap-4">
                {data?.map((item, index) => (
                  <div className="w-[405px]" key={index} title={`${item?.product?.productName}`}>
                    <div className="flex items-center">
                      <div className="z-10">
                        <Image
                          width={500}
                          height={500}
                          src={BASE_URL + item?.product?.image}
                          alt=""
                          className="h-32 w-32 rounded-full animate-rotate"
                        />
                      </div>
                      <div className="text-center border border-[var(--rac-border-color)] bg-[#1d1d1d] rounded-[var(--rac-border-radius)] p-6 relative -ml-24 pl-32">
                        <div className="rac_offer_text">
                          <Link 
                          
                          href={`/products/${item?.product?.slug}`}
                          >
                            <h2 className="text-sm lg:text-lg w-40 truncate ">

                              {item?.product?.productName}
                            </h2>
                          </Link>
                        </div>
                        <div>
                          <div className="flex gap-2 flex-wrap items-center justify-center">
                            <h4 className="text-sm lg:text-lg">
                              <del>৳{item?.product?.salesPrice} </del>
                            </h4>
                            <h4>৳{item?.offerPrice}</h4>
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
                              className="flex items-center bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg transition-colors duration-300"
                            >
                              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                              <span>Add</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>

      )
    }
    </>
  );
};

export default OfferZone;
