import PageBanner from "../../components/PageBanner";
import UserSection from "../../components/UserSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAddressBook, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MyProfile from "../../components/MyProfile";
import MyOrder from "../../components/MyOrder";
import ProfileView from "../../components/ProfileView";
import MemberContacts from "../../components/MemberContacts";
import BookingOrders from "../../components/BookingOrders";
import Link from "next/link";
import useGetDatas from "../../hooks/useGetData";
import ProtectedRoutes from "../../components/ProtectedRoutes";


const Dashboard = () => {
  const [activediv, setactivediv] = useState(1);
  const {data} = useGetDatas("/membership-requests/getall", "membership-requests");


  const handelbtn = (divId) => {
    setactivediv(divId);
  };
  return (
    <ProtectedRoutes>

      
        <div className="rac_main_wrapper ">
          <PageBanner
            pageTitle={`Dashboard`}
            parents={{
              title: "Home",
              link: "/",
            }}
          />

          <div className="">
            <div className="" style={{ padding: "0px 0px" }}>
              <div className="w-11/12 mx-auto">
                <div className="rac_about_box px-3 py-3">
                  <div class="md:flex">
                    <ul class="flex-column space-y space-y-4 mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                      <li onClick={() => handelbtn(1)}>
                        <Link
                          href="#profile"
                          className={`inline-flex items-center px-4 py-3 text-white rounded-lg w-full ${
                            activediv === 1
                              ? "bg-[#ee2e2e]"
                              : "bg-[rgba(131,130,130,0.13)]"
                          }`}
                          aria-current="page"
                        >
                          <svg
                            class="w-4 h-4 me-2 text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                          </svg>
                          Profile
                        </Link>
                      </li>
                      <li onClick={() => handelbtn(2)}>
                        <Link
                          href="#myOrders"
                          className={`inline-flex items-center px-4 py-3 text-white rounded-lg w-full ${
                            activediv === 2
                              ? "bg-[#ee2e2e]"
                              : "bg-[rgba(131,130,130,0.13)]"
                          }`}
                          aria-current="page"
                        >
                          <FontAwesomeIcon
                            className="text-sm pr-2"
                            icon={faBars}
                          />
                          My Orders
                        </Link>
                      </li>
                      <li onClick={() => handelbtn(4)}>
                        <Link
                          href="#bookings"
                          className={`inline-flex items-center px-4 py-3 text-white rounded-lg w-full ${
                            activediv === 4
                              ? "bg-[#ee2e2e]"
                              : "bg-[rgba(131,130,130,0.13)]"
                          }`}
                          aria-current="page"
                        >
                          <FontAwesomeIcon
                            icon={faCalendarCheck}
                            className="w-4 h-4 me-2 text-white"
                          />
                          My Bookings
                        </Link>
                      </li>
                    </ul>

                    <div class="p-3  text-medium text-white dark:text-gray-400  rounded-lg w-full">
                      <div className="grid md:grid-cols-8   gap-4">
                        <div className="col-span-8">
                          {activediv === 1 && <ProfileView />}

                          {activediv === 2 && (
                            <div className="grid md:grid-cols-8 gap-2">
                              <div className="col-span-6">
                                <MyOrder />
                              </div>
                              <div className="col-span-2">
                                <UserSection />
                              </div>
                            </div>
                          )}
                          {activediv === 3 && <MyProfile />}
                          {activediv === 4 && <BookingOrders />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </ProtectedRoutes>
  );
};

export default Dashboard;
