

const LoungesLoader = () => {
    return (
        <>
            <div className="bg-[#1d1d1d] rounded-lg overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                <div className="relative h-64 bg-gradient-to-r from-gray-700 to-gray-800 animate-pulse">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                </div>
                <div className="flex flex-col justify-center gap-4 mb-4 p-4">
                    
                    <div className="h-8 w-20 bg-gradient-to-r from-gray-700 to-gray-800 animate-pulse rounded"/>
                    <div className="h-8 w-48 bg-gradient-to-r from-gray-700 to-gray-800 animate-pulse rounded"/>
                </div>
            </div>
        </>
    )
}

export default LoungesLoader