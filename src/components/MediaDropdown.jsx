import React from "react";
import Link from "next/link";


function MediaDropdown() {

  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 top-[87px] w-[1250px] flex items-center px-3 h-[300px] bg-[#D72626] shadow-md z-40 rounded-2xl">

      <div className="w-[20%] h-[90%] bg-[url('/assets/images/dropdown/media.jpg')] rounded-2xl bg-center bg-cover">
      </div>

      <div className="w-[30%] h-full pl-6 flex flex-col justify-evenly">
        <h1 className="text-white text-2xl font-bold mb-3 ">Media</h1>
        <p className="text-white text-md text-justify">
          Stay connected with our latest news, events, and club activities. Explore our rich gallery of memorable moments, browse upcoming events, and stay informed with important announcements through our comprehensive media section.
        </p>
        <Link href="/media">
          <button className="bg-white px-8 py-1 rounded-2xl text-black font-bold ">
            Read more
          </button>
        </Link>
      </div>
      <div className="w-[30%] h-full pl-32 flex flex-col justify-evenly ">
        <ul className="text-base/10">
          <li>
            <Link href="/media/upcoming-event" className="text-white">Upcoming Event</Link>
          </li>
          <li>
            <Link href="/media/gallery" className="text-white">Gallery</Link>
          </li>
          <li>
            <Link href="/media/news" className="text-white">News</Link>
          </li>
          <li>
            <Link href="/media/notice" className="text-white">Notice Board</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MediaDropdown;
