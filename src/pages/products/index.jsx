import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MultiCard from "../../components/MultiCard";
import MenuCategory from "../../components/MenuCategory";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import PageBannerShop from "../../components/PageBannerShop";
import { useProducts } from "../../context/api";
import ProductsLoader from "../../components/loader/ProductsLoader";
const Products = () => {
  const { data: products, isLoading } = useProducts();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };


  return (
      <div className="rac_about_wrapper">
        <div className="rac_main_wrapper">
          <PageBannerShop />
          <div className="flex flex-col md:grid md:grid-cols-5 gap-4 w-11/12 mx-auto">
            <div className="mb-2 lg:h-[900px] overflow-y-scroll overflow-x-hidden">
              <MenuCategory onCategoryChange={handleCategoryChange} />
            </div>

            <div className="md:col-span-4">
              <div className="md:flex md:justify-between items-center">
                <div className="md:text-xl md:ml-10">
                  <p className="font-bold text-center">Showing {products?.rows?.length} foods from Uttara Model Club</p>
                </div>

                <div className="mt-2 md:flex flex gap-2 justify-center items-center">
                  <div className="mx-1">
                    <div className="bg-[rgba(131,130,130,0.13)] w-60 sm:w-62 rounded-lg md:flex items-center">
                      <input
                        className="rounded-lg p-[.4rem] bg-[rgba(131,130,130,0.13)]"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleSearch}
                      />
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="text-xl mx-1 pr-2"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <hr className="text-[#ee2e2e] mt-3 sm:mb-0 mb-2 ml-10" />


              {
                isLoading? (
                  <>
                    <ProductsLoader />
                  </>
                ):(

                  <MultiCard 
                    selectedCategories={selectedCategories}
                    searchQuery={searchQuery}
                  />
                )

              }
            </div>
          </div>
        </div>
      </div>
  );
};

export default Products;
