import React from 'react'
import Link from 'next/link'

function Club_facilities_dropdown() {
  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 top-[87px] w-[1250px] flex items-center px-3 h-[300px] bg-[#D72626] shadow-md z-40 rounded-2xl">

      <div className="w-[20%] h-[90%] bg-[url('/assets/images/dropdown/clubFacilities.jpg')] rounded-2xl bg-center bg-cover">
      </div>

      <div className="w-[30%] h-full pl-6 flex flex-col justify-evenly">
        <h1 className="text-white text-2xl font-bold mb-3">Club Facilities</h1>
        <p className="text-white text-md text-justify">
          Discover our world-class amenities designed for your comfort and enjoyment. From sports and fitness to leisure and entertainment, we offer comprehensive facilities that define luxury club living.
        </p>
        <Link href="/club-facilities">
          <button className="bg-white px-8 py-1 rounded-2xl text-black font-bold">
            Read more
          </button>
        </Link>
      </div>
      <div className="w-[30%] h-[80%] pl-32 flex flex-col justify-evenly overflow-auto [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:bg-white
      [&::-webkit-scrollbar-thumb]:bg-black">
        <ul className="text-base/10">
          <li>
            <Link href={"/club-facilities/guest-house"} className="text-white">Guest House</Link>
          </li>
          <li>
            <Link href={"/club-facilities/swimming-pool"} className="text-white">Swimming Pool</Link>
          </li>
          <li>
            <Link href={"/club-facilities/sports"} className="text-white">Sports (Indoor & Out Door)</Link>
          </li>
          <li>
            <Link href={"/club-facilities/health-center"} className="text-white">Health Center & Gym</Link>
          </li>
          <li>
            <Link href={"/club-facilities/library"} className="text-white">Library</Link>
          </li>
          <li>
            <Link href={"/club-facilities/saloon"} className="text-white">Saloon</Link>
          </li>
          <li>
            <Link href={"/club-facilities/beauty-parlor"} className="text-white">Beauty Parlor</Link>
          </li>
          <li>
            <Link href={"/club-facilities/laundry-service"} className="text-white">Laundry Service</Link>
          </li>
          <li>
            <Link href={"/club-facilities/rooftop-restaurant"} className="text-white">Rooftop Restaurant</Link>
          </li>
          <li>
            <Link href={"/club-facilities/kids-zone"} className="text-white">Kids Zone</Link>
          </li>
          <li>
            <Link href={"/club-facilities/prayer-room"} className="text-white">Prayer Room</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Club_facilities_dropdown