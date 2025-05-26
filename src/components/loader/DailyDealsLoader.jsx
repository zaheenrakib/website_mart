const DailyDealsLoader = () => {
  return (
    <div className="container mx-auto bg-[#2A2A2A]">
        <div className="bg-gradient-to-r from-red-700/50 to-red-500/50 py-8 px-4 md:px-8 rounded-3xl mx-4 my-8 shadow-2xl">
            {/* Header Skeleton */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0 w-full md:w-auto">
                        <div className="h-8 w-48 bg-red-600/20 rounded-lg animate-pulse mb-2 md:mb-0 md:mr-8"></div>
                        <div className="flex items-center space-x-4">
                        <div className="h-6 w-32 bg-red-600/20 rounded-lg animate-pulse"></div>
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-10 w-14 bg-red-600/20 rounded-md animate-pulse"></div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="h-10 w-24 bg-red-600/20 rounded-full animate-pulse"></div>
            </div>

            {/* Products Grid Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="bg-[#202020] rounded-xl overflow-hidden shadow-lg">
                    <div className="relative">
                        <div className="h-48 w-full bg-gradient-to-r from-red-600/10 to-red-500/10 animate-pulse"></div>
                        <div className="absolute top-2 right-2 h-6 w-16 bg-red-600/20 rounded-full animate-pulse"></div>
                    </div>
                    <div className="p-4">
                        <div className="h-6 w-3/4 bg-red-600/20 rounded-lg animate-pulse mb-2"></div>
                        <div className="border-b-2 border-red-600/20 mb-3"></div>
                        <div className="flex justify-between items-center">
                        <div className="h-6 w-20 bg-red-600/20 rounded-lg animate-pulse"></div>
                        <div className="h-10 w-24 bg-red-600/20 rounded-lg animate-pulse"></div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default DailyDealsLoader