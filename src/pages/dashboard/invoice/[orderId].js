import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useAuth } from "../../../context/authContext";
import { toast } from "react-toastify";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import PageBanner from "../../../components/PageBanner";
import Image from "next/image";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function OrderInvoicePage() {
  const router = useRouter();
  const { orderId } = router.query;
  const { user } = useAuth();
  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (orderId && user) {
      fetchInvoiceData();
    }
  }, [orderId, user]);

  const fetchInvoiceData = async () => {
    try {
      setLoading(true);
      const response = await axiosPublic.get(`${BASE_URL}/orders/${orderId}`);
      if (response.data.user_info.email !== user.email) {
        toast.error("You don't have permission to view this invoice");
        router.push("/dashboard");
        return;
      }
      setInvoice(response.data);
    } catch (error) {
      console.error("Error fetching invoice:", error);
      toast.error("Failed to load invoice details");
    } finally {
      setLoading(false);
    }
  };

  // const handlePrint = () => {
  //   window.print();
  // };

  if (loading) {
    return (
      
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
        </div>
      
    );
  }

  if (!invoice) {
    return (
        <div className="flex flex-col justify-center items-center min-h-[60vh]">
          <h2 className="text-xl text-red-600">Order not found</h2>
          <Link
            href="/dashboard"
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Return to Dashboard
          </Link>
        </div>
    );
  }

  return (
      <div className="rac_main_wrapper">
        <PageBanner
          pageTitle={`Invoice`}
          parents={{
            title: "Dashboard",
            link: "/dashboard",
          }}
        />
        <div className="rac_section rac_about_wrapper max-w-5xl mx-auto px-4 print:px-0">
          <div className="flex justify-between mb-6 print:hidden">
            {/* <div className="flex">
             <Button
               onClick={handlePrint}
               className="flex items-center cursor-pointer bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
             >
               <FontAwesomeIcon icon={faPrint} className="mr-2" />
               Print Invoice
             </Button>
           </div> */}
          </div>

          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg print:shadow-none">
            <div className="flex justify-between">
              <Image
                height={200}
                width={100}
                src="/assets/images/logo1.png"
                className="img-fluid w-[70px]"
                alt="Logo"
              />
              <div className="flex flex-col justify-end items-end">
                <h1 className="text-2xl font-bold text-red-600">ORDER</h1>
                <p className="text-gray-600">#{orderId}</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between  border-b border-gray-200 pb-4">
              <div className=" md:text-left mt-4 md:mt-0">
                <div className="font-bold text-xl">Miraz-Mart</div>
                <div className="text-sm mt-2">
                  <p className="text-gray-600">
                    <span className="font-bold"> Address:</span> Plot # 6, Road
                    # 6/A, Sector # 17/K
                  </p>
                  <p className="text-gray-600">
                    Uttara Dhaka 1230, Dhaka, Bangladesh
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold"> Email:</span> info@mirazmart.com
                  </p>
                  <p className="text-gray-600">
                    <span className="font-bold"> Phone:</span> +880 1956693379
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
              <div>
                <h2 className="text-lg font-semibold mb-2">Bill To:</h2>
                <p className="font-medium">{invoice.user_info.name}</p>
                <p>{invoice?.user_info?.email}</p>
                <p>{invoice.user_info.phone}</p>
                <p>{invoice.user_info.address}</p>
              </div>
              <div className="text-left md:text-right mt-4 md:mt-0">
                <div className="mb-2">
                  <span className="font-semibold">Order Date:</span>
                  <span className="ml-2">
                    {new Date(invoice.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Status:</span>
                  <span
                    className={`ml-2 px-2 py-1 rounded-full text-xs text-white ${
                      invoice.status === "Completed"
                        ? "bg-green-600"
                        : invoice.status === "Pending"
                        ? "bg-yellow-600"
                        : invoice.status === "Cancelled"
                        ? "bg-red-600"
                        : "bg-blue-600"
                    }`}
                  >
                    {invoice.status}
                  </span>
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Payment:</span>
                  <span className="ml-2">{invoice.paymentMethod}</span>
                </div>
                <div>
                  <span className="font-semibold">Shipping: </span>
                  <span className="ml-2">{invoice.shippingLocation} Dhaka</span>
                </div>
              </div>
            </div>

            <div className="my-6 overflow-x-auto">
              <h2 className="text-lg font-semibold mb-4">Order Items</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 text-left">Item</th>
                    <th className="py-2 px-4 text-right">Quantity</th>
                    <th className="py-2 px-4 text-right">Price</th>
                    <th className="py-2 px-4 text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.cart.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-3 px-4">
                        {item?.product?.productName}
                      </td>
                      <td className="py-3 px-4 text-right">{item.quantity}</td>
                      <td className="py-3 px-4 text-right">৳ {item.price}</td>
                      <td className="py-3 px-4 text-right">
                        ৳ {item.price * item.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-4">
              <div className="flex justify-end">
                <div className="w-full md:w-64">
                  <div className="flex justify-between py-1">
                    <span className="font-medium">Subtotal:</span>
                    <span className="px-4 text-right">
                      ৳ {invoice.subTotal}
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-medium">Shipping Fee:</span>
                    <span className="px-4 text-right">
                      ৳ {invoice.shippingCost}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-t border-gray-200 font-bold text-lg">
                    <span>Total:</span>
                    <span className="px-4 text-right">৳ {invoice.total}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center border-t border-gray-200 pt-6">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-green-500 text-2xl mb-2"
              />
              <p className="text-lg font-medium">Thank you for your order!</p>
              <p className="text-gray-600 mt-1">
                If you have any questions, please contact our customer support.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
