import Image from "next/image";
import { useContext, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import useGetData from "../hooks/useGetData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../context/UseContext";
import { useRouter } from "next/router";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const FoodMenu = () => {
  const router = useRouter();
  const [tabIndex, setTabIndex] = useState(0);
  const { data: menuData, isLoading } = useGetData("/menus/products", "menus");
  const { addToCart } = useContext(UserContext);
  
  const allProducts = menuData?.menus?.flatMap(item => item.products) || [];

  const handleProductClick = (product) => {
    router.push(`/products/${product.slug}`);
  };
  console.log(menuData) 

  return (
    <>
      { (menuData?.totalMenus > 0 && allProducts.length > 0) && (

        <div className="py-3 bg-[#2A2A2A]"> 
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <div className="h-1 w-20 bg-red-600 mx-auto mb-6"></div>
              <h2 className="text-4xl md:text-5xl text-white font-light mb-6">Our Menu</h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Discover our exquisite selection of dishes crafted with passion and precision
              </p>
            </div>
            {
              !isLoading ? (
                <>
                  <Tabs
                    className="col-12"
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                  >
                    <TabList className="flex flex-wrap justify-center gap-4 mb-8">

                      <Tab
                        className={`px-6 py-3 cursor-pointer rounded-lg transition-all duration-300 transform hover:-translate-y-1 ${
                          tabIndex === 0
                            ? 'bg-red-600 text-white'
                            : 'bg-[#1d1d1d] text-gray-300 hover:bg-red-600/10'
                        }`}
                      >
                        All
                      </Tab>
                        
                      {menuData?.menus?.map((item, index) => (
                        <Tab
                          key={index}
                          className={`px-6 py-3 cursor-pointer rounded-lg transition-all duration-300 transform hover:-translate-y-1 ${
                            tabIndex === index+1
                              ? 'bg-red-600 text-white'
                              : 'bg-[#1d1d1d] text-gray-300 hover:bg-red-600/10'
                          }`}
                        >
                          {item?.menu?.name}
                        </Tab>
                      ))}
                    </TabList>

                    <TabPanel className="mt-4" key="all">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {allProducts.map((product, i) => (
                          <div
                              key={i}
                              className="bg-[#1D1D1D] rounded-lg overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-500 group transform hover:-translate-y-1 hover:shadow-xl"
                              title={product?.productName}
                            >
                              <div className="p-4 flex flex-col h-full">
                                <div className="relative mb-4 overflow-hidden rounded-lg">
                                  <Image
                                    height={1000}
                                    width={1000}
                                    alt={product?.productName}
                                    src={BASE_URL + product.image}
                                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                                    onClick={() => handleProductClick(product)}
                                  />
                                </div>

                                <div className="flex-1">
                                  <h4 
                                    className="text-xl font-semibold text-white mb-2 group-hover:text-red-500 transition-colors duration-300 cursor-pointer truncate"
                                    onClick={() => handleProductClick(product)}
                                  >
                                    {product.productName}
                                  </h4>
                                  <h2 className="text-red-600 text-2xl font-bold mb-2">৳ {product.salesPrice}</h2>
                                  
                                </div>

                                <button
                                  onClick={() =>
                                    addToCart({
                                      id: product?.id,
                                      price: product?.salesPrice,
                                      productName: product?.productName,
                                      image: product?.image,
                                      description: product?.description,
                                    })
                                  }
                                  className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                                >
                                  <FontAwesomeIcon icon={faShoppingCart} className="text-lg" />
                                  <span className="font-semibold">Add to Cart</span>
                                </button>
                              </div>
                            </div>
                        ))}
                      </div>
                    </TabPanel>

                    {menuData?.menus?.map((item, index) => (
                      <TabPanel className="mt-4" key={index}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                          {item?.products?.map((product, i) => (
                            <div
                              key={i}
                              className="bg-[#1D1D1D] rounded-lg overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-500 group transform hover:-translate-y-1 hover:shadow-xl"
                              title={product?.productName}
                            >
                              <div className="p-4 flex flex-col h-full">
                                <div className="relative mb-4 overflow-hidden rounded-lg">
                                  <Image
                                    height={1000}
                                    width={1000}
                                    alt={product?.productName}
                                    src={BASE_URL + product.image}
                                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                                    onClick={() => handleProductClick(product)}
                                  />
                                </div>

                                <div className="flex-1">
                                  <h4 
                                    className="text-xl font-semibold text-white mb-2 group-hover:text-red-500 transition-colors duration-300 cursor-pointer truncate"
                                    onClick={() => handleProductClick(product)}
                                  >
                                    {product.productName}
                                  </h4>
                                  <h2 className="text-red-600 text-2xl font-bold mb-2">৳ {product.salesPrice}</h2>
                                </div>

                                <button
                                  onClick={() =>
                                    addToCart({
                                      id: product?.id,
                                      price: product?.salesPrice,
                                      productName: product?.productName,
                                      image: product?.image,
                                      description: product?.description,
                                    })
                                  }
                                  className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                                >
                                  <FontAwesomeIcon icon={faShoppingCart} className="text-lg" />
                                  <span className="font-semibold">Add to Cart</span>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabPanel>
                    ))}
                  </Tabs>
                </>
              ):(
                <div className="py-3 bg-[#2A2A2A]">
                  <div className="container mx-auto px-4">

                    {/* Tab List Skeleton */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                      {[1, 2, 3, 4].map((tab) => (
                        <div
                          key={tab}
                          className="h-12 w-32 bg-[#1d1d1d] rounded-lg animate-pulse"
                        ></div>
                      ))}
                    </div>

                    {/* Menu Items Grid Skeleton */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[1, 2, 3, 4].map((item) => (
                        <div
                          key={item}
                          className="bg-[#1D1D1D] rounded-lg overflow-hidden border border-gray-800 p-4"
                        >
                          {/* Image Skeleton */}
                          <div className="relative mb-4 overflow-hidden rounded-lg">
                            <div className="w-full h-48 bg-gradient-to-r from-gray-700 to-gray-800 animate-pulse"></div>
                          </div>

                          {/* Content Skeleton */}
                          <div>
                            <div className="h-6 w-3/4 bg-gradient-to-r from-gray-700 to-gray-800 rounded mb-2 animate-pulse"></div>
                            <div className="h-8 w-24 bg-gradient-to-r from-gray-700 to-gray-800 rounded mb-2 animate-pulse"></div>
                            <div className="space-y-2 mb-4">
                              <div className="h-3 w-full bg-gradient-to-r from-gray-700 to-gray-800 rounded animate-pulse"></div>
                              <div className="h-3 w-2/5 bg-gradient-to-r from-gray-700 to-gray-800 rounded animate-pulse"></div>
                            </div>
                            <div className="h-12 w-full bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg animate-pulse mt-4"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              )
            }

            </div>
        </div>
      )}
    </>
    
  );
};

export default FoodMenu;
