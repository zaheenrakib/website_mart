import React from "react";  
import Link from "next/link";


function About_dropdown() {


  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 top-[87px] w-[1250px] flex items-center px-3 h-[300px] bg-[#D72626] shadow-md z-40 rounded-2xl">
      <div className="w-[20%] h-[90%] bg-[url('/assets/images/dropdown/about.jpg')] rounded-2xl bg-center bg-cover">
      </div>

      <div className="w-[30%] h-full pl-6 flex flex-col justify-evenly">
        <h1 className="text-white text-2xl font-bold mb-3 ">About Us</h1>
        <p className="text-white text-md text-justify">
          Uttara Model Club is a vibrant community hub dedicated to fostering unity, creativity, and personal growth. Through events, activities, and shared values, we aim to inspire connection and enrich lives. 
        </p>
        <Link href="/about-us">
            <button className="bg-white px-8 py-1 rounded-2xl text-black font-bold ">
                Read more
            </button> 
        </Link>
      </div>
      <div className="w-[30%] h-[80%] pl-32 flex flex-col justify-evenly overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-thumb]:bg-black">
        <ul className="text-base/10">
          <li>
            <Link href="/about-us/umcl-history" className="text-white hover:text-white no-underline">UMCL History</Link>
          </li>
          <li>
            <Link href="/about-us/president-message" className="text-white hover:text-white no-underline">President Massage</Link>
          </li>
          <li>
            <Link href="/about-us/executive-members" className="text-white hover:text-white no-underline">Executive Members</Link>
          </li>
          <li>
            <Link href="/about-us/past-president" className="text-white hover:text-white no-underline">Past President</Link>
          </li>
          <li>
            <Link href="/about-us/affiliated_clubs" className="text-white hover:text-white no-underline">Affiliated Clubs</Link>
          </li>
          <li>
            <Link href="/about-us/membership_info" className="text-white hover:text-white no-underline">Membership Information</Link>
          </li>
          <li>
            <Link href="/about-us/club_policy" className="text-white hover:text-white no-underline">Club Rules</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About_dropdown;
