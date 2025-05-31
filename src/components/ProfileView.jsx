import Image from "next/image";
import { useAuth } from "../context/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const ProfileView = () => {
  const { user } = useAuth();
  return (
    <div className="p-4 min-h-screen">
      <div className="bg-[rgba(131,130,130,0.13)] p-4 rounded-md shadow-md mb-6">
        <div className="md:flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="md:flex gap-4 items-center">
            {user?.profileImage ? (
              <Image
                src={BASE_URL + user?.profileImage}
                alt="Profile"
                width={1000}
                height={1000}
                className="w-32 h-32 rounded-full  object-cover"
              />
            ) : (
              <FontAwesomeIcon
                icon={faCircleUser}
                className="text-white h-9 cursor-pointer"
              />
            )}
            <div className="text-sm text-white">
              <h1 className="text-xl font-semibold text-[#ee2e2e]">
                {user?.fullName}
              </h1>
              <h2 className="mt-1 flex items-center">
                <i className="zmdi zmdi-email mr-1 text-[#ee2e2e]" />
                <span className="font-medium text-[#ee2e2e]">Mail:</span>{" "}
                {user?.email}
              </h2>
              <p className="mt-1 flex items-center">
                <i className="zmdi zmdi-phone mr-1 text-[#ee2e2e]" />
                <span className="font-medium text-[#ee2e2e]">Mobile:</span>{" "}
                {user?.mobile}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* User Details in Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Account Information Section */}
        <div className="bg-[rgba(131,130,130,0.13)] p-4 rounded-md shadow-md text-white text-sm">
          <div className="">
            <h1 className="font-bold text-xl text-[#ee2e2e]">
              CONTACT INFORMATION
            </h1>
            <hr className="w-24 mt-1 mb-3 border-gray-600" />

            <div className="space-y-2">
              <div>
                <h1 className="text-[#ee2e2e] text-lg">Personal Email</h1>
                <span className="text-md" >{user?.email}</span>
              </div>
              <div>
                <h3 className="text-[#ee2e2e] text-lg">Emergency Phone</h3>
                <span className="text-md">{user?.mobile}</span>
              </div>
            </div>
          </div>

          <h1 className="font-bold text-xl text-[#ee2e2e] mt-6">
            ACCOUNT INFORMATION
          </h1>
          <hr className="w-24 mt-1 mb-3 border-gray-600" />

          <div className="space-y-2">
            <div>
              <h3 className="text-[#ee2e2e] text-lg">Account Status</h3>
              <span className="text-md">{user?.status}</span>
            </div>
          </div>
      </div>

        {/* Location Section */}
        <div className="bg-[rgba(131,130,130,0.13)] p-4 rounded-md shadow-md text-white text-sm">
          <h1 className="font-bold text-base text-[#ee2e2e]">LOCATION</h1>
          <hr className="w-24 mt-1 mb-3 border-gray-600" />
          <div className="space-y-2">
            <div>
              <h3 className="text-[#ee2e2e]">Address</h3>
              <span>{user?.residentialAddress}</span>
            </div>
              <h3 className="text-[#ee2e2e]">Delivery Instructions</h3>
              <span>
                {user?.mailingAddress}
              </span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProfileView;
