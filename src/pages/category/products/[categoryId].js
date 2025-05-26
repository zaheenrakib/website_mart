import { useState } from "react";
import Layout from "../../../components/layout/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Image from "next/image";
import Link from "next/link";
import { UserContext } from "../../../context/UseContext";
import { useContext } from "react";
import PageBanner from "../../../components/PageBanner";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


const CategoryProducts = () => {
 const router = useRouter();
 const { categoryId } = router.query;
 const [products, setProducts] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const axiosPublic = useAxiosPublic();
 const { addToCart } = useContext(UserContext);


 useEffect(() => {
   if (categoryId) {
     fetchCategoryProducts();
   }
 }, [categoryId]);


  const fetchCategoryProducts = async () => {
    try {
      const response = await axiosPublic.get(`/products/cate/${categoryId}`);
      setProducts(response.data);
      setError(null);
    } catch (error) {
      setError("No products found in this category");
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };


  if (loading) {
    return (
      
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
      
    );
  }

  if (error) {
    return (
      <div className="rac_main_wrapper">
        <PageBanner
          pageTitle={`Category`}
          parents={{
            title: "Home",
            link: "/",
          }}
        />
        <div className="flex justify-center items-center min-h-[40vh]">
          <div className="text-center">
            <h2 className="text-2xl text-red-600 mb-4">{error}</h2>
            <Link href="/" className="text-blue-500 hover:text-blue-600">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }


  return (
    
    <div className="rac_main_wrapper">
    <PageBanner
        pageTitle={`Category`}
        parents={{
          title: "Home",
          link: "/",
        }}
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-white">
          Category Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products?.map((item) => (
            <div
              key={item.id}
              className="rounded-lg bg-[#292929] overflow-hidden"
            >
              <div>
                <Link href={`/products/${item.slug}`}>
                  <Image
                    height={1000}
                    width={1000}
                    className="rounded-xl h-[220px] w-full object-cover"
                    src={BASE_URL + item.image}
                    alt={item.title}
                  />
                </Link>
              </div>


              <Link href={`/products/${item.slug}`}>
                <p className="text-[#ee2e2e] text-xl font-bold px-3 my-2">
                  {item.productName}
                </p>
              </Link>
              <div className="mx-3 border-b-2 border-[#ee2e2e]"></div>


              <div className="flex justify-between items-center px-3 py-3">
                <p className="font-bold text-white">
                  Price: {item.salesPrice ? item.salesPrice : 0}৳
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
                  className="text-sm font-bold border-2 border-solid border-red-600 bg-red-600 text-slate-50 hover:bg-slate-50 hover:text-red-600 px-2 rounded-lg py-2"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};


export default CategoryProducts;