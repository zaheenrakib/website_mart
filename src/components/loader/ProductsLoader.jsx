const ProductsLoader = () => {
    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {[1,2,3,4,5,7,8].map((item,index) => (
            <div
                key={index}
                className="bg-[#292929] rounded-lg overflow-hidden w-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
                <div className="w-full aspect-[4/3] bg-gradient-to-r from-gray-600 to-gray-800 animate-pulse"/>
                    <div className="px-3 py-2">
            
                        <div className="w-full h-3 bg-gradient-to-r from-gray-600 to-gray-800 animate-pulse"/>

                        <div className="flex justify-between items-center py-2">
                        <div className="w-16 h-3  bg-gradient-to-r from-gray-600 to-gray-800 animate-pulse"/>

                        <div className="h-7 w-8 bg-gradient-to-r from-gray-600 to-gray-800 animate-pulse"/>
                    </div>
                </div>
            </div>
        ))}
    </div>
    )
}

export default ProductsLoader