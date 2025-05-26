import Image from "next/image";
import { useState, useEffect } from "react";
import useGetDatas from "../../hooks/useGetData";
import Link from "next/link";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const {data, isLoading } = useGetDatas("/banners/active", "activeBanners");

    useEffect(() => {


        const timer = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => 
                    prevIndex === (data?.length - 1 || 0) ? 0 : prevIndex + 1
                );
                setIsTransitioning(false);
            }, 500);
        }, 9000);

        return () => {
            clearInterval(timer);
        };
    }, [data?.length]);    const currentBanner = data?.[currentImageIndex] || {};

    if (isLoading) {
        return (
            <div className="relative h-[600px] w-full overflow-hidden bg-gray-900">
                {/* Skeleton Gradient overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/50 to-black/50" />
                
                {/* Skeleton Background */}
                <div className="relative h-full w-full">
                    <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                </div>

                {/* Skeleton Content */}
                <div className="absolute inset-0 z-20 flex items-center">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center">
                            {/* Title Skeleton */}
                            <div className="h-12 bg-gray-700 rounded-lg w-3/4 mx-auto mb-6 animate-pulse" />
                            
                            {/* Description Skeleton */}
                            <div className="h-4 bg-gray-700 rounded-full w-full mx-auto mb-3 animate-pulse" />
                            <div className="h-4 bg-gray-700 rounded-full w-2/3 mx-auto mb-8 animate-pulse" />
                            
                            {/* Buttons Skeleton */}
                            <div className="flex justify-center space-x-4">
                                <div className="h-12 w-44 bg-red-700/50 rounded-full animate-pulse" />
                                <div className="h-12 w-32 bg-gray-700 rounded-full animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative h-[600px] w-full overflow-hidden">

            {/* Gradient overlay with diagonal dark transformation */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/50 to-black/50" />
            
            {/* Background Image */}
            <div className="relative h-full w-full">
                <Image
                    src={BASE_URL + currentBanner?.image }
                    alt={currentBanner?.title || "Club Facilities"}
                    fill
                    className={`object-cover object-center transition-all duration-1000 ease-in-out ${
                        isTransitioning ? "opacity-30 scale-105" : "opacity-100 scale-100"
                    }`}
                    priority
                />
            </div>

            {/* Content */}
            <div className="absolute inset-0 z-20 flex items-center">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className={`text-4xl md:text-5xl font-sans font-bold text-white mb-6 transition-all duration-700 ease-in-out ${
                            isTransitioning ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
                        }`}>
                            {(currentBanner?.title || "Welcome to Our Club").split(' ').map((word, index) => 
                                index === 0 ? word : <span key={index} className="text-red-600"> {word}</span>
                            )}
                        </h1>
                        <p className={`text-lg text-gray-200 mb-8 transition-all duration-700 ease-in-out delay-100 ${
                            isTransitioning ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
                        }`}>
                            {currentBanner?.description || "Experience luxury and comfort at its finest."}
                        </p>
                        <div className={`flex justify-center space-x-4 transition-all duration-700 ease-in-out delay-200 ${
                            isTransitioning ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
                        }`}>
                            <Link href="/membership" className="bg-red-600 text-white md:px-6 px-3 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300">
                                Request For Membership
                            </Link>
                            <Link href="/contact-us" className="border border-solid border-red-600 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors duration-300">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );  
};

export default Banner;
