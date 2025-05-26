import React from "react";

const Banner_Video = () => {
  return (
    <div className="px-2 sm:px-4 lg:px-0 pt-4 sm:py-6 lg:py-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-4 sm:gap-6 lg:gap-8">
          {/* left card content  */}
          <div className="w-full lg:w-1/2 rac_about_box p-4 sm:p-6 lg:p-8 rounded-2xl bg-[url(https://images.unsplash.com/photo-1732682940642-4f14719d20ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center relative flex items-center min-h-[300px] sm:min-h-[300px] lg:min-h-[350px]">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 to-transparent rounded-2xl"></div>

            <div className="relative w-full sm:w-4/5 lg:w-2/3 text-left space-y-3 sm:space-y-4 z-10">
              <h1 className="text-lg sm:text-xl lg:text-2xl text-white font-bold">
                Discover Premium Club Items
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-white/80">
                Explore our exclusive collection of high-quality sports
                equipment, premium merchandise, and branded accessories.
                Everything you need to enhance your club experience.
              </p>
              <button className="w-full sm:w-auto bg-red-600 border-2 text-slate-50 font-semibold px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl hover:bg-[#E17564] hover:text-black transition duration-300 text-xs sm:text-sm lg:text-base">
                View Collection
              </button>
            </div>
          </div>
    
          {/* right video content  */}
          <div className="w-full lg:w-1/2 min-h-[250px] sm:min-h-[300px] lg:min-h-[350px]">
            <iframe
              className="w-full h-[300px] md:h-full border border-gray-700 rounded-2xl"
              src="https://www.youtube.com/embed/ZToieI7hPoM"
              title="We Dropped 1000 Basketballs from an Airplane"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner_Video;
