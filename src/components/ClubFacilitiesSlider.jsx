import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const ClubFacilitiesSlider = () => {
    const [loading, setLoading] = useState(true);
    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        // Simulating data loading
        const facilityData = [
            {
                title: "Guest House",
                description: "Luxurious accommodation for members and their guests.",
                image: "/assets/images/club-facilities/guest-house.jpg",
                icon: "🏠",
                link: "/club-facilities/guest-house"
            },
            {
                title: "Lounges",
                description: "Elegant and comfortable lounges for relaxation and social gatherings.",
                image: "/assets/images/club-facilities/lounges.jpg",
                icon: "🛋️",
                link: "/lounges"
            },
            {
                title: "Shop",
                description: "Convenient retail shop offering sports equipment, accessories, and club merchandise.",
                image: "/assets/images/club-facilities/shop.jpg",
                icon: "🛍️",
                link: "/products"
            },
            {
                title: "Event Catering",
                description: "Professional catering services for all your special events and gatherings.",
                image: "/assets/images/club-facilities/event-catering.jpg",
                icon: "🍽️",
                link: "/club-facilities/event-catering"
            },
            {
                title: "Swimming Pool",
                description: "Olympic-sized swimming pool with temperature control and professional trainers.",
                image: "/assets/images/club-facilities/swimming-pool.jpg",
                icon: "🏊‍♂️",
                link: "/club-facilities/swimming-pool"
            },
            {
                title: "Sports (Indoor & Out Door)",
                description: "State-of-the-art sports facilities including tennis courts, basketball courts, and more.",
                image: "/assets/images/club-facilities/sports.jpg",
                icon: "🏆",
                link: "/club-facilities/sports"
            },
            {
                title: "Gym & Health Center",
                description: "Modern gym equipment and wellness programs for your fitness journey.",
                image: "/assets/images/club-facilities/gym.png",
                icon: "💪",
                link: "/club-facilities/health-center"
            },
            {
                title: "Beauty Parlor",
                description: "Professional beauty services and treatments for both men and women.",
                image: "/assets/images/club-facilities/parlour.png",
                icon: "✨",
                link: "/club-facilities/beauty-parlor"
            },
            {
                title: "Saloon",
                description: "Expert hair styling and grooming services.",
                image: "/assets/images/club-facilities/saloon.jpg",
                icon: "💇‍♀️",
                link: "/club-facilities/saloon"
            },
            {
                title: "Library",
                description: "Extensive collection of books, magazines, and digital resources.",
                image: "/assets/images/club-facilities/library.jpg",
                icon: "📚",
                link: "/club-facilities/library"
            },
            {
                title: "Laundry Service",
                description: "Professional laundry and dry cleaning services.",
                image: "/assets/images/club-facilities/laundry.jpg",
                icon: "👕",
                link: "/club-facilities/laundry-service"
            },
            {
                title: "Kids Zone",
                description: "Safe and entertaining space for children with supervised activities and play areas.",
                image: "/assets/images/club-facilities/kids.jpg",
                icon: "🎮",
                link: "/club-facilities/kids-zone"
            },
            {
                title: "Rooftop Restaurant",
                description: "Elegant dining with panoramic views, serving international cuisine and local delicacies.",
                image: "/assets/images/club-facilities/rooftop.png",
                icon: "🍽️",
                link: "/club-facilities/rooftop-restaurant"
            },
            {
                title: "Prayer Room",
                description: "Peaceful and serene space dedicated for spiritual reflection and prayer.",
                image: "/assets/images/club-facilities/prayer-room.jpg",
                icon: "🕌",
                link: "/club-facilities/prayer-room"
            },
            
        ]
        
        setTimeout(() => {
            setFacilities(facilityData);
            setLoading(false);
        }, 1500); // Simulate loading delay
    }, []);

    const SkeletonCard = () => (
        <div className="group relative bg-[#1d1d1d] rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-500">
            <div className="relative h-64 bg-gradient-to-r from-gray-700 to-gray-800 animate-pulse"></div>
            <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 animate-pulse"></div>
                    <div className="h-8 w-48 bg-gradient-to-r from-gray-700 to-gray-800 animate-pulse rounded"></div>
                </div>
                <div className="h-4 w-full bg-gradient-to-r from-gray-700 to-gray-800 animate-pulse rounded mb-2"></div>
                <div className="h-4 w-3/4 bg-gradient-to-r from-gray-700 to-gray-800 animate-pulse rounded mb-6"></div>
                <div className="h-4 w-24 bg-gradient-to-r from-gray-700 to-gray-800 animate-pulse rounded"></div>
            </div>
        </div>
    );

    return (
        <section className="py-4 bg-gradient-to-b from-black to-[#2A2A2A] relative overflow-hidden">
            
            <div className="container mx-auto px-4 relative">
                <div className="text-center mb-10">
                    <div className="h-1 w-20 bg-red-600 mx-auto mb-6"></div>
                    <h2 className="text-4xl md:text-5xl text-white font-light mb-6">Our Club Facilities</h2>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        Experience luxury and comfort with our comprehensive range of club facilities
                    </p>
                </div>

                {/* Facilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? (
                        // Skeleton loading state
                        Array(9).fill(0).map((_, index) => (
                            <SkeletonCard key={index} />
                        ))
                    ) : (
                        // Actual content
                        facilities.map((facility) => (
                            <Link 
                                href={facility.link} 
                                key={facility.title}
                                className="group relative bg-[#1d1d1d] rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-500"
                            >
                                <div className="relative h-64">
                                    <Image
                                        src={facility.image}
                                        alt={facility.title}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] to-transparent opacity-80"></div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-red-500">{facility.icon}</span>
                                        <h3 className="text-2xl text-white group-hover:text-red-500 transition-colors duration-300">
                                            {facility.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-400 mb-6 line-clamp-2">
                                        {facility.description}
                                    </p>
                                    <div className="flex items-center text-red-500 group-hover:translate-x-2 transition-transform duration-300">
                                        Explore <span className="ml-2">→</span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default ClubFacilitiesSlider;