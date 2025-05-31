import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import StarRatings from "react-star-ratings";
import { useContext } from 'react';
import { UserContext } from '../context/UseContext';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Add this import

const WishListDrawer = () => {
  const { addToCart, wishList, removeFromWishlist, clearWishlist } = useContext(UserContext);
  const router = useRouter(); // Add this hook
  
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';

  // Function to add all items to cart
  // const addAllToCart = () => {
  //   wishList.forEach(item => {
  //     // Check if item is in stock before adding to cart
  //     if (item.inStock !== false) {
  //       addToCart(item);
  //     }
  //   });
  // };

  // Function to remove single item from wishlist
  const handleRemoveFromWishlist = (itemId) => {
    if (removeFromWishlist) {
      removeFromWishlist(itemId);
    }
  };

  // Function to clear all wishlist items
  // const handleClearWishlist = () => {
  //   if (clearWishlist) {
  //     clearWishlist();
  //   }
  // };

  // Function to add single item to cart
  const handleAddToCart = (item) => {
    if (item.inStock !== false) {
      addToCart(item);
    }
  };

  // Debug function for Start Shopping button
  // const handleStartShopping = () => {
  //   console.log('Start Shopping clicked');
  //   router.push('/products');
  // };

  return (
    <>
      <div className="rac_inr_pages_banner rac_about_wrapper pt-[150px] bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className='flex flex-col items-center mb-12'>
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon icon={faHeart} className="text-red-500 text-3xl" />
              <h1 className='text-white text-4xl font-bold'>My Wishlist</h1>
            </div>
          </div>

          {/* Wishlist Items Grid */}
          {!wishList || wishList.length === 0 ? (
            <div className="relative flex flex-col items-center justify-center py-20">
              <div className="bg-[#2a2a2a] rounded-full p-8 mb-6 border-2 border-red-600/20">
                <FontAwesomeIcon icon={faHeart} className="text-6xl text-gray-600" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Your wishlist is empty</h3>
              <p className="text-gray-400 text-center mb-6 max-w-md">
                Discover amazing products and add them to your wishlist to keep track of items you love.
              </p>
              
              {/* Option 1: Using Link component */}
              <Link 
                href={"/products"}
                className="bg-red-600 cursor-pointer hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Start Shopping
              </Link>
              
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
              {wishList.map((item) => (
                <div
                  title={item.productName}
                  key={item.id}
                  className="bg-[#292929] rounded-lg overflow-hidden w-full shadow-lg hover:shadow-xl transition-all duration-300 relative group"
                >
                  {/* Product Image */}
                  <div className="relative">
                    <Image
                      src={BASE_URL + item.image}
                      alt={item.productName || 'Product'}
                      width={1000}
                      height={1000}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    
                    {/* Static Delete Button on Image - Top Right */}
                    <button
                      onClick={() => handleRemoveFromWishlist(item.id)}
                      className="absolute top-3 right-3 z-10 bg-red-600/90 hover:bg-red-600 text-white p-2 rounded-full transition-all transform hover:scale-110 shadow-lg"
                      title="Remove from wishlist"
                    >
                      <FontAwesomeIcon icon={faTrash} className="text-sm" />
                    </button>
                    
                    {/* Quick View Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-[#ee2e2e]/80 transition-colors">
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </div>
                  </div>

                  <div className="px-3 py-2">
                    {/* Product Name */}
                    <p 
                      className="text-[#ee2e2e] text-[15px] font-bold my-2 hover:underline truncate cursor-pointer"
                      title={item.productName}
                    >
                      {item.productName}
                    </p>

                    <div className="border-b-2 border-[#ee2e2e] mb-2" />

                    {/* Price Section */}
                    <div className="flex justify-between items-center py-2">
                      <div className="flex flex-col">
                        <p className="font-semibold text-[15px] text-white">
                          Price: ৳{item.price || item.salesPrice || 0}
                        </p>
                        {
                          item.salesPrice && (

                            <del className="text-gray-400 text-sm md:text-base">
                              ৳{item.salesPrice}
                            </del>
                          )
                        }
                      </div>

                      <button
                        onClick={() => handleAddToCart(item)}
                        disabled={item.inStock === false}
                        className={`text-sm font-semibold border-1 border-solid px-3 py-2 rounded-lg transition-all ${
                          item.inStock !== false
                            ? 'border-[#ee2e2e] bg-[#ee2e2e] text-slate-50 hover:text-red-600 hover:bg-[#292929]'
                            : 'border-gray-600 bg-gray-600 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <FontAwesomeIcon icon={faShoppingCart} className="mr-1 text-lg" />
                      </button>
                    </div>

                    {/* Rating Section */}
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
                            ({item?.ratingCount || 0})
                          </span>
                        </>
                      ) : (
                        <div className="h-5"></div> // Spacer when no rating
                      )}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}

          
        </div>
      </div>
    </>
  )
}

export default WishListDrawer