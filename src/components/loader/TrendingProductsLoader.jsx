const TrendingProductsLoader = () => {
    return (

    <div className="rac_booking_wrapper">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-3 p-3 md:h-[500px]">
          {/* Skeleton for main slider */}
            <div className="col-span-1 md:col-span-3 sm:mb-3 md:mb-0">
                <div className="w-full h-[300px] md:h-full bg-gradient-to-r from-gray-800 to-gray-700 animate-pulse rounded-lg"/>
            </div>

            {/* Skeleton for grid items */}
            <div className="col-span-1 md:col-span-2">
                <div className="grid grid-cols-2 md:grid-rows-2 gap-3 h-full">
                    {[1, 2, 3, 4].map((item) => (
                        <div 
                            key={item}
                            className="relative h-[150px] md:h-full bg-gradient-to-r from-gray-800 to-gray-700 animate-pulse rounded-md"
                        >
                            <div className="absolute inset-0 flex items-center justify-center"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    )
}

export default TrendingProductsLoader