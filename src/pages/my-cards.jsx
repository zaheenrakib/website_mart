import { useContext, useState } from "react";
import { useForm } from "react-hook-form"; // Import useForm from react-hook-form
import PageBanner from "../components/PageBanner";
import { UserContext } from "../context/UseContext";
import CardLarge from "../components/CardLarge";
import CardSmall from "../components/CardSmall";
import Image from "next/image";
import { useAuth } from "../context/authContext";
import axios from "axios";
import { toast } from "react-toastify";
import ProtectedRoute from "../components/ProtectedRoutes"
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { MdOutlinePayment } from "react-icons/md";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function MyCards() {
  const { cart, clearCart, updateCart } = useContext(UserContext);
  const [shippingFee, setShippingFee] = useState(60);
  const [location, setLocation] = useState("inside");
  const { user } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState("cashOnDelivery");
  const [selectedItems, setSelectedItems] = useState([]);
  
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => {
      acc[item.id] = item.quantity || 1;

      return acc;
    }, {})
  );


  const router = useRouter();

  const handleSelectedItem = (id) => {
    setSelectedItems((prevSelected) => 
      prevSelected.includes(id)
      ? prevSelected.filter((itemID) => itemID !== id)
      : [...prevSelected, id]
    )
  }

  const deleteSelectedItems = () => {
    if(selectedItems.length === 0) return;

    const remainingItems = cart.filter((item) => !selectedItems.includes(item.id));
    setQuantities((prev) => {
      const updated = { ...prev };
      selectedItems.forEach((id) => delete updated[id]); 
      return updated;
    })
    updateCart(remainingItems);
    setSelectedItems([]);
  }

  const deleteAllItems = () => {
    clearCart();
    setSelectedItems([]);
    setQuantities({});
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: user?.fullName|| "",
      email: user?.email || "",
      phone: user?.phone || "",
      address: user?.address || "",
      shippingLocation: "inside",
      paymentMethod: "cashOnDelivery"
    }
  });


  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => {
      const updatedQuantities = { ...prev };
      updatedQuantities[id] = Math.max(1, (updatedQuantities[id] || 1) + delta);
      return updatedQuantities;
    });
  };

  const calculateSubtotal = () =>
    cart.reduce(
      (sum, item) =>
        sum +
        (Number(item.price) || 0) * (quantities[item.id] || 1),
      0
    );
  const Subtotal = calculateSubtotal();

  const calculateShippingFee = () => (
    cart.length > 0 && Subtotal>1000 ? 0
    : cart.length> 0? shippingFee : 0);
  
  const calculateTotalFee = () => calculateSubtotal() + calculateShippingFee();

  const onSubmit = async (data) => {
    const orderData = {
      user: user?.id,
      cart: cart.map((item) => ({
        productId: item.id,
        quantity: quantities[item.id] || 1,
        price: Number(item.salesPrice) || Number(item.price) || 0,
      })),
      user_info: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        city: data.city || "Dhaka", // Add city if needed
      },
      subTotal: calculateSubtotal(),
      shippingCost: calculateShippingFee(),
      total: calculateTotalFee(),
      shippingOption: location === "inside" ? "Inside" : "Outside",
      paymentMethod: data.paymentMethod,
      status: "Pending",
    };

    try {
      if (data.paymentMethod === "Online Payment") {
        const res = await axios.post(`${BASE_URL}/payment/init`, orderData);
        if (res.data?.url || res.status === 200) {
          // toast.success("Payment initiated successfully");
          clearCart();
          // Redirect to the payment URL
          // You can use window.location.href or router.push
          window.location.href = res.data.url;
        } else {
          toast.error("Payment initiation failed");
        }
      } else {
        const res = await axios.post(`${BASE_URL}/order/add`, orderData);
        if (res.status === 201) {
          toast.success("Order Submitted Successfully");
          clearCart();
          router.push("/dashboard");
        } else {
          toast.error("Error submitting order");
        }
      }
      
    } catch (error) {
      toast.error(error.response?.data?.message || "Error submitting order");
    }
  };




  return (
   <ProtectedRoute>

      <div className="rac_main_wrapper">
        <PageBanner 
          pageTitle="My cart"
          bannerImage="bg-[url('/assets/images/pageBanner/trolley.jpeg')]"
          pageDescription="Stay updated with our exciting events and activities"
        />
        <div className="container">

          <form onSubmit={handleSubmit(onSubmit)} className="p-3 md:p-5 flex flex-col lg:flex-row w-full md:w-[97%] gap-4">
            {/* Personal Details Section */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-xl md:text-2xl font-semibold text-red-600 mb-3">01. Personal Details</h1>
              <div className="flex flex-col m-2 md:m-3">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-col flex w-full md:w-1/2">
                    <label className="font-bold my-2" htmlFor="name">Name</label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      className="pl-2 py-3 rounded-lg w-full text-gray-300 bg-gray-700 focus:border-1 focus:border-solid focus:border-red-600"
                      placeholder="Name"
                      value={user?.fullName}
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                  </div>
                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="font-bold my-2" htmlFor="email">Email Address</label>
                    <input
                      {...register("email")}
                      className="pl-2 py-3 rounded-lg w-full text-gray-300 bg-gray-700 focus:border-1 focus:border-solid focus:border-red-600"
                      placeholder="demo@gmail.com"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="font-bold my-2" htmlFor="phone">Phone</label>
                    <input
                      {...register("phone") }
                      maxLength={11}
                      minLength={11}
                      className="pl-2 py-3 rounded-lg w-full text-gray-300 bg-gray-700 focus:border-1 focus:border-solid focus:border-red-600"
                      type="number"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="flex-col flex w-full md:w-1/2">
                    <label className="font-bold my-2" htmlFor="address">Shipping Address</label>
                    <input
                      {...register("address")}
                      className="pl-2 py-3 rounded-lg w-full text-gray-300 bg-gray-700 focus:border-1 focus:border-solid focus:border-red-600"
                      placeholder="Address"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Options */}
              <h1 className="text-xl md:text-2xl font-semibold text-red-600 mt-5 mb-3">02. Shipping Cost</h1>
              <div className="flex flex-col m-2 md:m-3">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Shipping labels - keep existing content but add responsive classes */}
                  <label className="flex justify-evenly cursor-pointer px-2 border border-[#B4B4B4] rounded-md items-center h-20 w-full md:w-[43%]">
                    <svg
                      height={27}
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M112 0C85.5 0 64 21.5 64 48l0 48L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 208 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 160l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 176 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 224l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 288l0 128c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L112 0zM544 237.3l0 18.7-128 0 0-96 50.7 0L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
                    </svg>
                    <div className="flex-col flex">
                      <h2>
                        Inside{" "}
                        <span className="font-bold text-yellow-500">
                          {" "}
                          Dhaka
                        </span>
                      </h2>
                      <p>
                        Delivery Cost:{" "}
                        <span className="font-bold text-slate-100">
                          ৳ 60.00
                        </span>
                      </p>
                    </div>
                    <input
                      {...register("shippingLocation")}
                      className="w-6 h-6"
                      type="radio"
                      value="inside"
                      onClick={() => setLocation("inside")}
                      checked={location === "inside"}
                      onChange={() => setShippingFee(60)}
                    />  
                  </label>
                  <label
                    name="delivery"
                    htmlFor="fast-delivery2"
                    className="flex justify-evenly cursor-pointer px-2 border border-[#B4B4B4] rounded-md items-center h-20 w-full md:w-[43%]"
                  >
                    <svg
                      height={27}
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M112 0C85.5 0 64 21.5 64 48l0 48L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 208 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 160l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 176 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 224l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 288l0 128c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L112 0zM544 237.3l0 18.7-128 0 0-96 50.7 0L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
                    </svg>
                    <div className="flex-col flex">
                      <h2>
                        Outside{" "}
                        <span className="font-bold text-yellow-500">
                          {" "}
                          Dhaka
                        </span>
                      </h2>
                      <p>
                        Delivery Cost:{" "}
                        <span className="font-bold text-slate-100">
                          ৳ 120.00
                        </span>
                      </p>
                    </div>
                    <input
                      {...register("shippingLocation")}
                      className="w-6 h-6"
                      type="radio"
                      value="outside"
                      onClick={() => setLocation("outside")}
                      checked={location === "outside"}
                      onChange={() => setShippingFee(120)}
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Bill Section */}
            <div
              style={{ border: "1px solid #D72626", minHeight: "fit-content" }}
              className="row rounded-lg h-11 lg:w-2/5 w-full mx-auto"
            >
              <div className="p-3">
                <p className="fs-3">Order Summary</p>
                <div className="rounded-lg">                  <div className="flex items-center justify-between border-b border-red-600 py-3">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="form-check-input"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedItems(cart.map(item => item.id));
                          } else {
                            setSelectedItems([]);
                          }
                        }}
                        checked={selectedItems.length === cart.length && cart.length > 0}
                      />
                      <p className="px-2 rac_banner_text">
                        Select All ({cart?.length})
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={deleteSelectedItems}
                        disabled={selectedItems.length === 0}
                        className={`px-3 py-1 text-sm rounded-md border border-red-600 transition-colors duration-200 
                          ${selectedItems.length === 0 
                            ? 'text-gray-400 border-gray-400 cursor-not-allowed' 
                            : 'text-red-600 hover:bg-red-600 hover:text-white'}`}
                      >
                        Delete Selected
                      </button>
                      <button
                        type="button"
                        onClick={deleteAllItems}
                        disabled={cart.length === 0}
                        className={`px-3 py-1 text-sm rounded-md border border-red-600 transition-colors duration-200
                          ${cart.length === 0 
                            ? 'text-gray-400 border-gray-400 cursor-not-allowed' 
                            : 'text-red-600 hover:bg-red-600 hover:text-white'}`}
                      >
                        Delete All
                      </button>
                    </div>
                  </div>

                  {/* Card for every item */}

                  {/* large Card  */}
                  {cart.map((item) => (
                    <div key={item.id} className="card-large">
                      <CardLarge
                        item={item}
                        handleQuantityChange={handleQuantityChange}
                        quantities={quantities}
                        handleSelectItem={handleSelectedItem}
                        selectedItems={selectedItems}
                      />
                    </div>

                  ))}

                  {/* small card  */}

                  {cart.map((item) => (
                    <div key={item.id} className="card-small">
                      <CardSmall
                        item={item}
                        handleQuantityChange={handleQuantityChange}
                        quantities={quantities}
                        handleSelectItem={handleSelectedItem}
                        selectedItems={selectedItems}
                      />
                    </div>
                  ))}
                </div>

                <div className="d-flex justify-content-between mt-2">
                  <p>Subtotal ({cart.length} items)</p>
                  <p>৳ {calculateSubtotal().toFixed(2)}</p>
                </div>
                <div className="d-flex justify-content-between py-2 fw-bold">
                  <p>
                    <span className="font-thin text-red-600">Shipping Fee</span> (
                    {location} Dhaka)
                  </p>
                  <p>{Subtotal>=1000? "free delivery": `৳ ${calculateShippingFee().toFixed(2)}`  }</p>
                </div>

                <div className="d-flex justify-content-between py-2 fw-bold">
                  <p>Total Fee</p>
                  <p>৳ {calculateTotalFee().toFixed(2)}</p>
                </div>

                {/* <div>
                  <div className="flex items-start gap-3 my-3 justify-between">
                    <div className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        id="cashOnDelivery"
                        name="paymentOption"
                        value="cashOnDelivery"
                        checked
                        onChange={handlePaymentMethodChange}
                        className="form-radio text-[#ee2e2e] focus:ring-[#ee2e2e] h-5 w-5"
                      />
                      <label
                        htmlFor="cashOnDelivery"
                        className="text-[#ee2e2e] font-semibold"
                      >
                        Cash on Delivery
                      </label>
                    </div>
                  </div>

                  {paymentMethod === "payNow" && ( // Conditionally render payment options
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="bkash"
                          name="payment"
                          className="form-radio text-[#4CAF50] focus:ring-[#4CAF50] h-5 w-5"
                        />
                        <label
                          htmlFor="bkash"
                          className="text-[#4CAF50] font-semibold cursor-pointer flex items-center"
                        >
                          <Image
                            src="assets/images/bkash_logo.png"
                            width={70}
                            height={70}
                            alt="bkash logo"
                          />
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="nogod"
                          name="payment"
                          className="form-radio text-[#4CAF50] focus:ring-[#4CAF50] h-5 w-5"
                        />
                        <label
                          htmlFor="nogod"
                          className="text-[#4CAF50] font-semibold cursor-pointer flex items-center"
                        >
                          <Image
                            src="assets/images/nogod.png"
                            width={80}
                            height={80}
                            alt="nogod logo"
                          />
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="rocket"
                          name="payment"
                          className="form-radio text-[#4CAF50] focus:ring-[#4CAF50] h-5 w-5"
                        />
                        <label
                          htmlFor="rocket"
                          className="text-[#4CAF50] font-semibold cursor-pointer flex items-center"
                        >
                          <Image
                            src="https://www.superpaybd.com/assets/uploads/userda39a3ee5e6b4b0d3255bfef95601890afd80709/5932889762496fc0e8aacd507f50aba0.png"
                            width={120}
                            height={120}
                            alt="nogod logo"
                          />
                        </label>
                      </div>
                    </div>
                  )}
                </div> */}
                <div className="mb-4">
                  <label htmlFor="paymentMethod" className="block text-md font-semibold text-white mb-1">
                    Payment Method
                  </label>
                  <select
                    id="paymentMethod"
                    {...register("paymentMethod",
                      {required: "Payment Method is required"}
                    )}
                    className="block w-full px-4 py-2 mt-3 text-sm text-white bg-[#202020] border border-red-500 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-all duration-200"
                  >
                    <option value="">Please select the payment method</option>
                    <option value="Cash on Delivery">🚚 Cash on Delivery</option>
                    <option value="Online Payment">💳 Online Payment</option>
                  </select>
                  {errors.paymentMethod && <span className="text-red-500 text-sm">{errors.paymentMethod.message}</span>}
                </div>

                <Button
                  type="submit"
                  className="rac_btn w-100 text-white font-extrabold text-lg"
                  onClick={handleSubmit(onSubmit)}
                >
                  Order Now
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
   </ProtectedRoute>
  );
}