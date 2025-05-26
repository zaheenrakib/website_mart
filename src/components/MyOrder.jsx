import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faArrowDownShortWide,
  faFileInvoice
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/authContext";
import { getOrderByID } from "../context/api";
import Link from "next/link";

const MyOrder = () => {
  const { user } = useAuth();

  const { data: myOrders, isLoading } = getOrderByID("Orders", user?.id);

  if (isLoading) {
    return (
      <>
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="min-w-screen text-white lg:p-4 p-1">
        {/* User Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between gap-4 mb-6">
          <div className="w-full sm:w-52 h-[90px] rounded-md shadow-xl bg-[rgba(131,130,130,0.13)] font-bold text-center flex flex-col justify-center">
            <div className="flex justify-between p-3 items-center">
              <p className="text-[#d6a213]">User ID</p>
              <FontAwesomeIcon className="text-blue-600" icon={faAddressCard} />
            </div>
            <p className="mb-3 text-left ml-4 text-sm md:text-base">
              {user?.id}
            </p>
          </div>
          <div className="w-full sm:w-52 h-[90px] rounded-md shadow-xl bg-[rgba(131,130,130,0.13)] font-bold text-center flex flex-col justify-center">
            <div className="flex justify-between p-3 items-center">
              <p className="text-[#d6a213]">Total Orders</p>
              <FontAwesomeIcon
                className="text-pink-500"
                icon={faArrowDownShortWide}
              />
            </div>
            <p className="mb-3 text-left ml-4 text-sm md:text-base">
              {myOrders?.length}
            </p>
          </div>
        </div>

        {/* Order Table */}
        <div className="overflow-x-auto bg-[rgba(131,130,130,0.13)] rounded-lg shadow-lg">
          <div className="flex justify-between p-3 bg-[#444444]">
            <p className="text-sm md:text-base">My Cart</p>
            <p className="text-sm md:text-base">{myOrders?.length} Items</p>
          </div>

          {/* Mobile View */}
          <div className="block md:hidden">
            {myOrders?.map((order) => (
              <div
                key={order.id}
                className="p-4 border-b border-gray-600 hover:bg-[#555555]"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Date:</span>
                  <span>{order?.createdAt?.split("T")[0]}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Order ID:</span>
                  <span>{order?.id}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Invoice:</span>
                  <Link
                    href={`/dashboard/invoice/${order?.id}`}
                    className="text-blue-400"
                  >
                    <FontAwesomeIcon icon={faFileInvoice} className="mr-2" />
                    {order?.invoice}
                  </Link>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Payment:</span>
                  <span>{order?.paymentMethod}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Status:</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      order?.status === "Completed"
                        ? "bg-green-800"
                        : order?.status === "Pending"
                        ? "bg-yellow-800"
                        : order?.status === "Cancelled"
                        ? "bg-red-800"
                        : "bg-blue-800"
                    }`}
                  >
                    {order?.status}
                  </span>
                </div>
                <div className="flex justify-end mt-3">
                  <Link
                    href={`/dashboard/invoice/${order.id}`}
                    className="bg-[#ee2e2e] rounded-md px-3 py-1 text-white text-sm"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop/Tablet View */}
          <div className="hidden md:block">
            <table className="min-w-full border-collapse text-sm text-center text-white">
              <thead>
                <tr>
                  <th className="px-6 py-4 border-b border-gray-500">
                    Order Date
                  </th>
                  <th className="px-6 py-4 border-b border-gray-500">
                    Order ID
                  </th>
                  <th className="px-6 py-4 border-b border-gray-500">
                    Invoice
                  </th>
                  <th className="px-6 py-4 border-b border-gray-500">
                    Payment
                  </th>
                  <th className="px-6 py-4 border-b border-gray-500">Status</th>
                  <th className="px-6 py-4 border-b border-gray-500">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {myOrders?.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-[#555555] transition-all duration-300"
                  >
                    <td className="px-6 py-4 border-b border-gray-600">
                      {order?.createdAt?.split("T")[0]}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-600">
                      {order?.id}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-600">
                      <Link
                        href={`/dashboard/invoice/${order.id}`}
                        className="text-blue-400 hover:text-blue-300 flex items-center justify-center"
                      >
                        <FontAwesomeIcon
                          icon={faFileInvoice}
                          className="mr-2"
                        />
                        {order?.invoice}
                      </Link>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-600">
                      {order?.paymentMethod}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-600">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          order?.status === "Completed"
                            ? "bg-green-800"
                            : order?.status === "Pending"
                            ? "bg-yellow-800"
                            : order?.status === "Cancelled"
                            ? "bg-red-800"
                            : "bg-blue-800"
                        }`}
                      >
                        {order?.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-600">
                      <Link
                        href={`/dashboard/invoice/${order.id}`}
                        className="bg-[#ee2e2e] rounded-md px-3 py-1 text-white"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrder;
