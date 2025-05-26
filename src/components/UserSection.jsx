import Image from "next/image";
import { useAuth } from "../context/authContext";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const UserSection = () => {
  const { user } = useAuth();
  return (
    <div className="">
      <div className=" shadow-md bg-[rgba(131,130,130,0.13)] p-3 ml-2 rounded-xl">
        <div className="rounded-full flex justify-center items-center">
          <Image
            height={1000}
            width={1000}
            className="object-cover w-[80px] h-[80px] rounded-full "
            src={BASE_URL + user?.profileImage}
            alt={user?.name}
          />
        </div>

        <h1 className="text-2xl font-bold text-center text-[#ee2e2e] py-2">
          {user?.name}
        </h1>
        <hr className="text-[#ee2e2e] mb-3"></hr>
        {/* <p className="py-2"><span className="text-[#ee2e2e] ">Name :</span> {"Farhan Shahriar"}</p> */}
        <p className="py-2 ">
          <span className="text-[#ee2e2e] ">Email : </span>
          {user?.email}
        </p>
        <p className="py-2">
          <span className="text-[#ee2e2e]  ">Mobile :</span> {user?.mobile}
        </p>
        <p className="py-2">
          <span className="text-[#ee2e2e] ">Address : </span> {user?.residentialAddress}
        </p>
        <p className="py-2">
          <span className="text-[#ee2e2e] ">Status : </span> {user?.status}
        </p>
      </div>
    </div>
  );
};

export default UserSection;
