import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faArrowDownShortWide,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/authContext";
import  useGetDatas  from "../hooks/useGetData";
import Link from "next/link";


const BookingOrders = () => {
  const { user } = useAuth();
  const { data: bookings, isLoading } = useGetDatas(`/booking/user/${user?.id}`, "bookings");
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
              <p className="text-[#d6a213]">Total Bookings</p>
              <FontAwesomeIcon
                className="text-pink-500"
                icon={faArrowDownShortWide}
              />
            </div>
            <p className="mb-3 text-left ml-4 text-sm md:text-base">
              {bookings?.length}
            </p>
          </div>
        </div>

        {/* Booking Table */}
        <div className="overflow-x-auto bg-[rgba(131,130,130,0.13)] rounded-lg shadow-lg">
          <div className="flex justify-between p-3 bg-[#444444]">
            <p className="text-sm md:text-base">My Bookings</p>
          </div>

          {/* Mobile View */}
          <div className="block md:hidden">
            {bookings?.map((booking) => (
              <div
                key={booking.id}
                className="p-4 border-b border-gray-600 hover:bg-[#555555]"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Date:</span>
                  <span>{booking?.createdAt?.split("T")[0]}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Booking ID:</span>
                  <span>{booking?.id}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Event Type:</span>
                  <span>{booking?.eventType }</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Status:</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${booking?.status === 1 ? "bg-yellow-500 text-black" : booking?.status === 2 ? "bg-green-500" :  "bg-red-500" }`}
                  >
                    {booking?.status===1 ? "Pending"
                      :booking?.status===2? "Accepted"
                      :"Cancelled"
                    }
                  </span>
                </div>
                <div className="flex justify-end mt-3">
                  <Link
                    href={`/dashboard/booking/${booking.id}`}
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
                    Booking Date
                  </th>
                  <th className="px-6 py-4 border-b border-gray-500">
                    Booking ID
                  </th>
                  <th className="px-6 py-4 border-b border-gray-500">
                    Event Type
                  </th>
                  <th className="px-6 py-4 border-b border-gray-500">
                    Status
                  </th>
                  
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {bookings?.map((booking) => (
                  <tr
                    key={booking.id}
                    className="hover:bg-[#555555] transition-all duration-300"
                  >
                    <td className="px-6 py-4 border-b border-gray-600">
                      {booking?.createdAt?.split("T")[0]}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-600">
                      {booking?.id}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-600">
                      {booking?.eventType}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-600">
                      <span
                        className={`px-3 py-2 font-semibold rounded-full text-xs ${booking?.status === 1 ? "bg-yellow-500 text-black" : booking?.status === 2 ? "bg-green-500 text-white" :  "bg-red-500" }`}
                      >
                        {booking?.status===1 ? "Pending"
                          :booking?.status===2? "Accepted"
                          :"Cancelled"
                        }
                      </span>
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

export default BookingOrders;