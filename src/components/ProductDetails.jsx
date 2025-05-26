import { useContext, useState } from "react";
import QuantityCount from "./QuantityCount";
// import ProductMultiImage from "./ProductMultiImage";
import ProductAditionalDetails from "./ProductAditionalDetails";
import ReactImageMagnify from "react-image-magnify";
import { UserContext } from "../context/UseContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSlugProducts } from "../context/api";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import axios from "axios";
import { notifyError, notifySuccess } from "../utils/toast";
import StarRatings from "react-star-ratings";
import Image from "next/image";
import  useGetData from "../hooks/useGetData";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const ProductDetails = () => {
  const { user } = useAuth();
  const router = useRouter();
  const { slug } = router.query;
  const { data: slugProduct, isLoading: isProductLoading } = useSlugProducts(slug);
  const { data: reviewData, isLoading: loadingReview, refetch } = useGetData(
    `/review/${slugProduct?.id}`, 
    "reviewData",
    { enabled: !!slugProduct?.id}
  )

  const { addToCart } = useContext(UserContext);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitReview = async (data) => {
    try {
      const reviewData = {
        ...data,
        productId: slugProduct?.id,
        userId: user?.id,
        status: "Pending",
        rating: parseInt(data.rating),
      };

      const response = await axios.post(`${BASE_URL}/review/add`, reviewData);

      if (response.status === 201) {
        notifySuccess("Review submitted successfully!");
        reset();
        await refetch();  
      }
    } catch (error) {
      notifyError(error.response?.data?.message || "Error submitting review");
    }
  };

  // Show loader for the whole page if product is loading or not ready
  // if (isProductLoading || !slugProduct) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <div className="loader">Loading...</div>
  //     </div>
  //   );
  // }

  return (
    <div>
      <div
        className="rac_section rac_about_wrapper "
        style={{ padding: "80px 0 33px" }}
      >
        <div className="rac_about_content p-2">
          <div className="rac_about_box">
            <div className="grid md:grid-cols-2 gap-3 p-3">
              <div className="">
                <div className="mb-3  md:w-[500px]  rounded-xl md:img-hover relative z-20">
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Product",
                        isFluidWidth: true,
                        src: BASE_URL + slugProduct?.image,
                      },
                      largeImage: {
                        src: BASE_URL + slugProduct?.image,
                        width: 500,
                        height: 500,
                      },
                      enlargedImageContainerStyle: { background: '#000' },
                      lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
                    }}
                  />
                </div>
                {/* <div>
                  <ProductMultiImage
                    slugProduct={slugProduct}
                    onImageClick={handleImageClick}
                  />
                </div> */}
              </div>

              <div className="">
                <Link href="/products">
                  <p className="text-3xl font-semibold rac_about_text px-4 text-[#ee2e2e]">
                    {slugProduct?.productName}
                  </p>
                </Link>
                <hr className="text-[#ee2e2e] border-2 mx-4 my-2"></hr>
                <p className="text-xl px-4">{slugProduct?.title}</p>
                <p className="text-2xl px-4 text-[#ee2e2e] font-bold">
                  <span className="text-slate-200 font-thin">Price: </span>{" "}
                  {slugProduct?.salesPrice} ৳
                </p>

                <QuantityCount
                  quantity={quantity}
                  onQuantityChange={handleQuantityChange}
                />

                <div className="flex px-4 mt-1 w-full bg--300">
                  <div className="rac_banner_btn">
                    <Link
                      href="/my-cards"
                      className="rac_btn"
                      onClick={() =>
                        addToCart({
                          id: slugProduct.id,
                          price: slugProduct.salesPrice,
                          productName: slugProduct.productName,
                          image: slugProduct.image,
                          description: slugProduct.title,
                          quantity: quantity || 1,
                        })
                      }
                    >
                      Buy Now
                    </Link>
                    <a
                      onClick={() =>
                        addToCart({
                          id: slugProduct.id,
                          price: slugProduct.salesPrice,
                          productName: slugProduct.productName,
                          image: slugProduct.image,
                          description: slugProduct.title,
                          quantity: quantity || 1,
                        })
                      }
                      href="#"
                      className="rac_btn bnr_btn"
                    >
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rac_about_wrapper p-2">
        <div className="md:w-[1080px] mx-auto">
          <div className="rac_about_box">
            <ProductAditionalDetails productDescription={slugProduct} />
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="rac_about_wrapper mt-5 p-2">
        <div className="md:w-[1080px] mx-auto">
          <div className="rac_about_box">
            <div className="md:grid md:grid-cols-2 gap-4 w-full px-4 mt-3">
              <div>
                <div className="rac_section_heading flex justify-start ml-5">
                  <h3 className="text-2xl">Reviews</h3>
                </div>
                {(isProductLoading || loadingReview || !reviewData) ? (
                  <div className="rac_review_box">
                    {
                      [1,2,3].map((i) => (
                        <div
                          key={i}
                          className="rac_review_item flex items-start mb-4"
                        >
                          <div className="mr-4 w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 animate-pulse rounded-full"/>
                          
                          <div>
                            <div className="w-40 h-5 bg-gradient-to-r from-gray-600 to-gray-800 animate-pulse rounded-full"/>
                            <div className="w-20 h-3 mt-2 bg-gradient-to-r from-gray-600 to-gray-800 animate-pulse rounded-full" />
                            <div className="flex gap-1 mt-2">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className="w-5 h-5 bg-gradient-to-r from-gray-600 to-gray-800 animate-pulse rounded"
                                />
                              ))}
                            </div>
                            <div className="w-80 h-3 mt-2 bg-gradient-to-r from-gray-600 to-gray-800 animate-pulse rounded-full"/>
                            <div className="w-80 h-3 mt-2 bg-gradient-to-r from-gray-600 to-gray-800 animate-pulse rounded-full"/>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                ) : (
                  <div className="rac_review_box">
                    {
                      reviewData.map((review) => (
                        <div
                          key={review.id}
                          className="rac_review_item flex items-start mb-4"
                        >
                          <div className="mr-4">
                            <Image
                              src={BASE_URL + review?.user?.profileImage}
                              width={48}
                              height={48}
                              alt={review.user?.fullName}
                              className="w-12 h-12 rounded-full"
                            />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold">
                              {review.user?.fullName}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {new Date(review.createdAt).toLocaleDateString()}
                            </p>
                            <StarRatings
                                rating={review?.rating}
                                starRatedColor={
                                  review?.rating >= 4.6
                                    ? "#10b981" // emerald
                                    : review?.rating >= 4
                                    ? "#22c55e" // green
                                    : review?.rating >= 3
                                    ? "#facc15" // yellow
                                    : review?.rating >= 2
                                    ? "#f97316" // orange
                                     : "#ef4444" // red
                                  } 
                                starEmptyColor="#e5e7eb"  
                                numberOfStars={5}
                                name={`rating-${review?.rating?.id}`} 
                                starDimension="20px"
                                starSpacing="2px"
                              />
                            <p>{review.comment}</p>
                          </div>
                        </div>
                      ))
                     }
                  </div>
                )}
              </div>

              <div className="">
                <div className="max-w-md mx-auto border-[#ee2e2e] rounded-lg">
                  <div className="rac_section_heading flex justify-start ml-4">
                    <h3 className="text-2xl">Leave a Review</h3>
                    <hr className="text-[#ee2e2e] mb-2"></hr>
                  </div>
                  {!user ? (
                    <div className="text-center p-4">
                      <p className="text-gray-300 mb-4">
                        Please login to submit a review
                      </p>
                      <Link
                        href={{
                          pathname: "/signin",
                          query: { returnUrl: router.asPath },
                        }}
                        className="rac_btn inline-block px-6 py-2"
                      >
                        Login
                      </Link>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmitReview)}>
                      <div className="mb-4">
                        <label className="block text-white font-medium mb-2">
                          Your Name
                        </label>
                        <input
                          {...register("name", {
                            required: "Name is required",
                          })}
                          type="text"
                          defaultValue={user?.fullName}
                          value={user?.fullName}
                          placeholder="Enter your name"
                          className="bg-[rgba(131,130,130,0.13)] w-full p-2 border-solid border-red-400 focus:border-1 focus:border-solid focus:border-red-600 rounded-lg"
                        />
                        {errors.name && (
                          <span className="text-red-500 text-sm">
                            {errors.name.message}
                          </span>
                        )}
                      </div>

                      <div className="mb-4">
                        <label className="block text-white font-medium mb-2">
                          Rating
                        </label>
                        <select
                          {...register("rating", {
                            required: "Please select a rating",
                          })}
                          className="bg-[rgba(131,130,130,0.13)] w-full p-2 border-solid border-red-400 focus:border-1 focus:border-solid focus:border-red-600 rounded-lg"
                        >
                          <option className="bg-[#353535] hover:bg-red-950" value="">Select rating</option>
                          <option value="1">1 Star</option>
                          <option value="2">2 Stars</option>
                          <option value="3">3 Stars</option>
                          <option value="4">4 Stars</option>
                          <option value="5">5 Stars</option>
                        </select>
                        {errors.rating && (
                          <span className="text-red-500 text-sm">
                            {errors.rating.message}
                          </span>
                        )}
                      </div>

                      <div className="mb-4">
                        <label className="block text-white font-medium mb-2">
                          Your Review
                        </label>
                        <textarea
                          {...register("comment", {
                            required: "Please write your comment",
                          })}
                          rows="4"
                          placeholder="Share your experience"
                          className="bg-[rgba(131,130,130,0.13)] w-full p-2 border-solid border-red-400 focus:border-1 focus:border-solid focus:border-red-600 rounded-lg"
                        ></textarea>
                        {errors.comment && (
                          <span className="text-red-500 text-sm">
                            {errors.comment.message}
                          </span>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="rac_btn w-full p-2 hover:text-red-600  font-semibold rounded-lg"
                      >
                        Submit Review
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
