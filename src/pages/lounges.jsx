import React from 'react'
import Layout from '../components/layout/Layout'
import PageBanner from '../components/PageBanner'
import Image from 'next/image'
import Link from 'next/link'

const Lounges = () => {
    return (
        <div className="rac_main_wrapper">
            <PageBanner 
                pageTitle={`Club Lounges`}
                bannerImage="bg-[url('https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg')]"
                pageDescription="Experience luxury and comfort in our exclusive member lounges"
            />

            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-red-600/5 animate-pulse"></div>
                    <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-red-600/5 animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                <div className="container mx-auto px-3 md:px-4 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="h-1 w-20 bg-red-600"></div>
                            <h2 className="text-4xl md:text-5xl text-white font-light leading-tight">
                                Your Private
                                <span className="block text-red-500 mt-3">Sanctuary</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Discover our exclusive lounges designed for relaxation, business, and social gatherings. Each space offers a unique ambiance with premium amenities and impeccable service.
                            </p>
                            <div className="grid grid-cols-2 gap-3 md:gap-8 pt-8">
                                <div className="bg-[#1a1a1a] p-4 md:p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-500 group">
                                    <div className="text-red-500 text-4xl font-light mb-3 group-hover:scale-110 transition-transform duration-500">5+</div>
                                    <p className="text-gray-300">Exclusive Lounges</p>
                                </div>
                                <div className="bg-[#1a1a1a] p-4 md:p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-500 group">
                                    <div className="text-red-500 text-4xl font-light mb-3 group-hover:scale-110 transition-transform duration-500">24/7</div>
                                    <p className="text-gray-300">Access</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 md:gap-x-8">
                            <div className="space-y-4 md:space-y-8">
                                <div className="relative h-80 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-700 shadow-2xl">
                                    <Image
                                        src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg"
                                        alt="Executive Lounge"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="relative h-56 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-700 shadow-2xl">
                                    <Image
                                        src="https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg"
                                        alt="Business Center"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 md:space-y-8 transform translate-y-16">
                                <div className="relative h-56 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-700 shadow-2xl">
                                    <Image
                                        src="https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg"
                                        alt="Social Lounge"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-80 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-700 shadow-2xl">
                                    <Image
                                        src="https://images.pexels.com/photos/5997967/pexels-photo-5997967.jpeg"
                                        alt="Reading Room"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Lounges Section */}
            <section className="py-12 bg-[#161616]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-24">
                        <div className="h-1 w-20 bg-red-600 mx-auto mb-8"></div>
                        <h2 className="text-4xl md:text-5xl text-white font-light mb-8">Our Lounges</h2>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            Each lounge is thoughtfully designed to provide a distinct atmosphere and experience
                        </p>
                    </div>

                    <div className="space-y-12">
                        {lounges.map((lounge, index) => (
                            <div key={index} 
                                className="bg-[#1d1d1d] rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-500 shadow-xl group"
                            >
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/3 relative h-80 md:h-auto overflow-hidden">
                                        <Image
                                            src={lounge.image}
                                            alt={lounge.title}
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                                    </div>
                                    <div className="md:w-2/3 p-6 md:p-12">
                                        <h3 className="text-3xl text-white mb-6 group-hover:text-red-500 transition-colors duration-300">{lounge.title}</h3>
                                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">{lounge.description}</p>
                                        <div className="grid grid-cols-2 gap-6">
                                            {lounge.amenities.map((amenity, idx) => (
                                                <div key={idx} className="flex items-center gap-4 group/item">
                                                    <div className="w-2 h-2 bg-red-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                                                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">{amenity}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-12 bg-[#0f0f0f] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-red-600/5 animate-pulse"></div>
                    <div className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-red-600/5 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                </div>
                <div className="container mx-auto px-4 relative">
                    <div className="text-center mb-24">
                        <div className="h-1 w-20 bg-red-600 mx-auto mb-8"></div>
                        <h2 className="text-4xl md:text-5xl text-white font-light mb-8">Premium Services</h2>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            Enjoy exclusive services and amenities in all our lounges
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="relative">
                                <div className="bg-[#1d1d1d] rounded-lg p-10 h-full border border-gray-800 hover:border-red-500 transition-all duration-500 group">
                                    <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-red-500/20 transition-colors duration-500">
                                        <span className="text-red-500 text-2xl font-light group-hover:scale-125 transition-transform duration-500">{service.icon}</span>
                                    </div>
                                    <h3 className="text-2xl text-white mb-4 group-hover:text-red-500 transition-colors duration-300">{service.title}</h3>
                                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Policies & Rates Section */}
            <section className="py-12 bg-[#161616]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-24">
                        <div className="h-1 w-20 bg-red-600 mx-auto mb-8"></div>
                        <h2 className="text-4xl md:text-5xl text-white font-light mb-8">Policies & Rates</h2>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            Understanding our lounge policies and services for a seamless experience
                        </p>
                    </div>
                    
                    {/* Policies & Rates Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
                        {/* Room Rates */}
                        <div className="lg:col-span-2 2xl:col-span-3 bg-[#1d1d1d] p-6 md:p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-500">
                            <h3 className="text-xl md:text-2xl text-white mb-4 md:mb-6">Room Rates</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {lounges.map((lounge, index) => (
                                    <div key={index} className="bg-[#242424] rounded-lg p-4">
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                                            <p className="text-white">{lounge.title}</p>
                                        </div>
                                        <div className="space-y-1 pl-5">
                                            <p className="text-gray-400 text-sm">BDT 5,000/hour (Members)</p>
                                            <p className="text-gray-400 text-sm">BDT 8,000/hour (Non-Members)</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Cancellation Policy */}
                        <div className="bg-[#1d1d1d] p-6 md:p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-500">
                            <h3 className="text-xl md:text-2xl text-white mb-4 md:mb-6">Cancellation Policy</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                                    <p className="text-gray-300">48+ hours notice: Full refund</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                                    <p className="text-gray-300">24-48 hours notice: 50% refund</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                                    <p className="text-gray-300">Less than 24 hours: No refund</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                                    <p className="text-gray-300">Rescheduling available with 24+ hours notice</p>
                                </li>
                            </ul>
                        </div>

                        {/* Booking Process */}
                        <div className="bg-[#1d1d1d] p-6 md:p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-500">
                            <h3 className="text-xl md:text-2xl text-white mb-4 md:mb-6">Booking Process</h3>
                            <div className="space-y-4 md:space-y-6">
                                {[1, 2, 3, 4].map((step, index) => (
                                    <div key={index} className="flex items-start md:items-center gap-4">
                                        <div className="w-6 h-6 md:w-8 md:h-8 bg-red-500/10 rounded-full flex items-center justify-center text-red-500 flex-shrink-0">
                                            {step}
                                        </div>
                                        <p className="text-sm md:text-base text-gray-300">
                                            {step === 1 && "Check availability through member portal or reception"}
                                            {step === 2 && "Make reservation with required details"}
                                            {step === 3 && "Receive confirmation and access details"}
                                            {step === 4 && "Check-in 15 minutes before booking time"}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Parking Services */}
                        <div className="lg:col-span-2 bg-[#1d1d1d] p-6 md:p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-500">
                            <h3 className="text-xl md:text-2xl text-white mb-4 md:mb-6">Parking Services</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                <div className="bg-[#242424] p-4 md:p-6 rounded">
                                    <h4 className="text-lg md:text-xl text-red-500 mb-3 md:mb-4">Valet Parking</h4>
                                    <ul className="space-y-2 md:space-y-3">
                                        <li className="text-sm md:text-base text-gray-300">• Complimentary for premium members</li>
                                        <li className="text-sm md:text-base text-gray-300">• $10/day for regular members</li>
                                        <li className="text-sm md:text-base text-gray-300">• Available 24/7</li>
                                    </ul>
                                </div>
                                <div className="bg-[#242424] p-4 md:p-6 rounded">
                                    <h4 className="text-lg md:text-xl text-red-500 mb-3 md:mb-4">Self-Parking</h4>
                                    <ul className="space-y-2 md:space-y-3">
                                        <li className="text-sm md:text-base text-gray-300">• Free for all members</li>
                                        <li className="text-sm md:text-base text-gray-300">• Secured parking area</li>
                                        <li className="text-sm md:text-base text-gray-300">• 24/7 surveillance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-12">
                <Image 
                    src="https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg"
                    alt="Lounge Interior"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
                <div className="relative z-10 container mx-auto px-4">
                    <div className="max-w-2xl">
                        <div className="h-1 w-20 bg-red-600 mb-12"></div>
                        <h2 className="text-4xl md:text-5xl text-white mb-8 font-light leading-tight">Experience Exclusive<br/><span className="text-red-500">Club Lounges</span></h2>
                        <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                            Join us and enjoy access to our premium lounges. Whether for business or leisure, our spaces are designed for your comfort.
                        </p>
                        <Link href="/membership" className="rac_btn">
                            Become a Member
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

// Data
const lounges = [
    {
        title: "Executive Lounge",
        description: "A sophisticated space designed for business professionals, featuring private meeting rooms and state-of-the-art facilities.",
        image: "/assets/images/lounges/lounges6.jpg",
        amenities: [
            "Private Meeting Rooms",
            "High-speed WiFi",
            "Business Center",
            "Concierge Service"
        ]
    },
    {
        title: "Social Lounge",
        description: "A vibrant space perfect for casual meetings and social gatherings, complete with comfortable seating and entertainment options.",
        image: "/assets/images/lounges/lounges4.jpg",
        amenities: [
            "Entertainment System",
            "Bar Service",
            "Comfortable Seating",
            "Game Room"
        ]
    },
    {
        title: "Reading Room",
        description: "A tranquil environment for reading and relaxation, featuring an extensive collection of books and periodicals.",
        image: "https://images.pexels.com/photos/5997967/pexels-photo-5997967.jpeg",
        amenities: [
            "Curated Library",
            "Reading Nooks",
            "Quiet Zones",
            "Coffee Service"
        ]
    }
]

const services = [
    {
        icon: "🍸",
        title: "Premium Refreshments",
        description: "Enjoy a selection of fine beverages and gourmet snacks available throughout the day"
    },
    {
        icon: "💼",
        title: "Business Services",
        description: "Access to printing, scanning, and other essential business services"
    },
    {
        icon: "👔",
        title: "Concierge Support",
        description: "Dedicated staff to assist with your requests and ensure a comfortable experience"
    }
]

export default Lounges