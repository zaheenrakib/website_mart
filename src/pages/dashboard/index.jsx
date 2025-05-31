import PageBanner from "../../components/PageBanner";
import UserSection from "../../components/UserSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import FoodMenu from "../components/FoodMenu";
import MyProfile from "../../components/MyProfile";
import MyOrder from "../../components/MyOrder";
// import Settings from "../components/Settings";
import Contacts from "../../components/contacts";
import ProfileView from "../../components/ProfileView";
import Link from "next/link";
import ProtectedRoute from "../../components/ProtectedRoute";

const Dashboard = () => {
  const [activediv, setactivediv] = useState(1);

  const handelbtn = (divId) => {
    setactivediv(divId);
  };
  return (
    <ProtectedRoute>
        <div className="rac_main_wrapper">
          <PageBanner
            pageTitle={`Dashboard`}
            parents={{
              title: "Home",
              link: "/",
            }}
          />

          <div className="rac_section rac_about_wrapper">
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
                          <span className="whitespace-nowrap">My Orders</span>
                        </Link>
                      </li>
                      <li onClick={() => handelbtn(3)}>
                        <Link
                          href="#settings"
                          className={`inline-flex items-center px-4 py-3 text-white rounded-lg w-full ${
                            activediv === 3
                              ? "bg-[#ee2e2e]"
                              : "bg-[rgba(131,130,130,0.13)]"
                          }`}
                          aria-current="page"
                        >
                          <svg
                            class="w-4 h-4 me-2 text-white dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                          </svg>
                          Settings
                        </Link>
                      </li>
                      <li onClick={() => handelbtn(4)}>
                        <Link
                          href="#contact"
                          className={`inline-flex items-center px-4 py-3 text-white rounded-lg w-full ${
                            activediv === 4
                              ? "bg-[#ee2e2e]"
                              : "bg-[rgba(131,130,130,0.13)]"
                          }`}
                          aria-current="page"
                        >
                          {" "}
                          <svg
                            class="w-4 h-4 me-2 text-white dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M7.824 5.937a1 1 0 0 0 .726-.312 2.042 2.042 0 0 1 2.835-.065 1 1 0 0 0 1.388-1.441 3.994 3.994 0 0 0-5.674.13 1 1 0 0 0 .725 1.688Z" />
                            <path d="M17 7A7 7 0 1 0 3 7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V7a5 5 0 1 1 10 0v7.083A2.92 2.92 0 0 1 12.083 17H12a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a1.993 1.993 0 0 0 1.722-1h.361a4.92 4.92 0 0 0 4.824-4H17a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Z" />
                          </svg>
                          Contact
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
                              <div className=" col-span-6 lg:col-span-2 ">
                                <UserSection />
                              </div>
                            </div>
                          )}
                          {activediv === 3 && <MyProfile />}
                          {activediv === 4 && <Contacts />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
