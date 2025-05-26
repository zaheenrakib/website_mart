
const PageBanner = ({ pageTitle, bannerImage, pageDescription }) => {
  return (
    <div className="pt-16 md:pt-24 relative overflow-hidden">
      <div className={`rac_inr_pages_banner h-[300px] md:h-[400px] ${bannerImage} bg-cover bg-center relative group transition-all duration-500 ease-in-out`}>
        {/* Enhanced gradient overlay with animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent transform transition-transform duration-500 group-hover:scale-105"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 h-full">
          <div className="flex items-center h-full">
            <div className="w-full">
              <div className="flex flex-col gap-4 md:gap-6 max-w-4xl animate-fadeIn">
                <h1 
                  className="text-red-600 text-3xl md:text-5xl lg:text-6xl font-bold 
                  border-l-4 md:border-l-8 border-t-0 border-r-0 border-b-0 border-solid border-red-600 
                  pl-4 md:pl-8 transform transition-all duration-300 hover:scale-102 hover:text-red-500"
                >
                  {pageTitle}
                </h1>
                <p className="text-white text-lg md:text-2xl lg:text-3xl max-w-[90%] md:max-w-[700px] leading-relaxed opacity-90 transition-opacity duration-300 hover:opacity-100">
                  {pageDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
