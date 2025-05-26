import React from "react";
import Link from "next/link";
import { FaBan } from "react-icons/fa";

const Cancle = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <FaBan className="text-yellow-500" size={80} />
      <h1 className="text-3xl font-bold text-yellow-500 mt-4">Payment Cancelled</h1>
      <p className="text-gray-300 mt-2 mb-6">
        Your payment was cancelled.<br />
        If this was a mistake, you can try again or return to the shop.
      </p>
      <Link href="/products">
        <span className="rac_btn px-6 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 cursor-pointer">
          Back to Shop
        </span>
      </Link>
    </div>
  );
};

export default Cancle;