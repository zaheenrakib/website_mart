import { useContext } from "react";
import { UserContext } from "../context/UseContext";
import Link from "next/link";
import Image from "next/image";
import { useProducts } from "../context/api";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarRatings from "react-star-ratings";
 

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const MultiCard = ({ selectedCategories, searchQuery }) => {
  const { addToCart, addToWishlist } = useContext(UserContext);
  const { data: products } = useProducts();

  console.log(products);

  const filteredProducts = products?.rows?.filter(product => {
    const categoryMatch = selectedCategories.length === 0 || 
      selectedCategories.includes(product.categories);
    const searchMatch = product?.productName?.toLowerCase()
      .includes(searchQuery?.toLowerCase() || '');
    return categoryMatch && searchMatch;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {filteredProducts?.map((item) => (
        <div
          title={item.productName}
          key={item.id}
          className="bg-[#292929] rounded-lg overflow-hidden w-full shadow-lg hover:shadow-xl transition-all duration-300 relative group"
        >
          {/* Wishlist Icon - Top Right */}
          <button
            onClick={() =>addToWishlist({
                    id: item.id,
                    price: item.salesPrice,
                    productName: item.productName,
                    image: item.image,
                    description: item.title,
                  })}
            className="absolute top-2 right-2 z-10 bg-black/60 hover:bg-red-600 text-white p-2 rounded-full transition-all duration-300"
            title="Add to wishlist"
          >
            <FontAwesomeIcon icon={faHeart} className="text-sm" />
          </button>

          <Link href={`/products/${item.slug}`}>
            <Image
              src={BASE_URL + item.image}
              alt={item.productName}
              width={1000}
              height={1000}
              className="w-full aspect-[4/3] object-cover"
            />
          </Link>
          
          <div className="px-3 py-2">
            <Link href={`/products/${item.slug}`}>
              <p 
              className="text-[#ee2e2e] text-[15px] font-bold my-2 hover:underline truncate"
              title={item.productName}
              >
                {item.productName}
              </p>
            </Link>

            <div className="border-b-2 border-[#ee2e2e] mb-2" />

            <div className="flex justify-between items-center py-2">
              <p className="font-semibold text-[15px] text-white">
                Price: {item.salesPrice || 0}৳
              </p>

              <button
                onClick={() =>
                  addToCart({
                    id: item.id,
                    price: item.salesPrice,
                    productName: item.productName,
                    image: item.image,
                    description: item.title,
                  })
                }
                className="text-sm font-semibold border-1 border-solid border-[#ee2e2e] bg-[#ee2e2e] text-slate-50 hover:text-red-600 hover:bg-[#292929] transition-all px-3 py-2 rounded-lg"
              >
                <FontAwesomeIcon icon={faCartShopping} className="mr-1 text-lg" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              {item?.rating ? (
                <>
                  <StarRatings
                    rating={item?.rating}
                    starRatedColor={
                      item.rating >= 4.6
                        ? "#10b981" // emerald
                        : item.rating >= 4
                        ? "#22c55e" // green
                        : item.rating >= 3
                        ? "#facc15" // yellow
                        : item.rating >= 2
                        ? "#f97316" // orange
                        : "#ef4444" // red
                      } 
                    starEmptyColor="#e5e7eb"  
                    numberOfStars={5}
                    name={`rating-${item.id}`} 
                    starDimension="20px"
                    starSpacing="2px"
                  />
                  <span className="text-gray-400 text-sm">
                    ({item?.ratingCount})
                  </span>
                </>
              ):(" ")}
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default MultiCard;