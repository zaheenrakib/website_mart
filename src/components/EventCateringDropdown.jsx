import React from "react";
import Link from "next/link";


const EventCateringDropdown = () => {
    return (
        <div className="fixed left-1/2 transform -translate-x-1/2 top-[87px] w-[1250px] flex items-center px-3 h-[300px] bg-[#D72626] shadow-md z-40 rounded-2xl">

        <div className="w-[20%] h-[90%] bg-[url('/assets/images/dropdown/events.jpg')] rounded-2xl bg-center bg-cover">
        </div>

        <div className="w-[30%] h-full pl-6 flex flex-col justify-evenly">
            <h1 className="text-white text-2xl font-bold mb-3 ">Event Catering</h1>
            <p className="text-white text-md text-justify">
                Experience exceptional dining with our premium catering services. From elegant corporate events to intimate gatherings, our culinary team delivers exquisite menus and impeccable service that elevate every occasion.
            </p>
            <Link href="/event-catering">
                <button className="bg-white px-8 py-1 rounded-2xl text-black font-bold ">
                    Read more
                </button>
            </Link>
        </div>
        <div className="w-[30%] h-full pl-32 flex flex-col justify-evenly ">
            <ul className="text-base/10">
            <li>
                <Link href="/event-catering/food-menu?category=All" className="text-white">Food Menu</Link>
            </li>
            <li>
                <Link href="/event-catering/food-menu?category=Lunch" className="text-white">Lunch</Link>
            </li>
            <li>
                <Link href="/event-catering/food-menu?category=Buffet" className="text-white">Buffet</Link>
            </li>
            
            </ul>
        </div>
        </div>
    )
}

export default EventCateringDropdown