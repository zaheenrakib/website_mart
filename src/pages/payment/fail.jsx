import React from "react";
import Link from "next/link";
import { FaTimesCircle } from "react-icons/fa";

const Fail = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <FaTimesCircle className="text-red-500" size={80} />
      <h1 className="text-3xl font-bold text-red-500 mt-4">Payment Failed</h1>
      <p className="text-gray-300 mt-2 mb-6">
        Sorry, your payment could not be processed.<br />
        Please try again or contact support if the issue persists.
      </p>
      <Link href="/products">
        <span className="rac_btn px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer">
          Back to Shop
        </span>
      </Link>
    </div>
  );
};

export default Fail;
