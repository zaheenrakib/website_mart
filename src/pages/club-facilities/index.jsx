import React from 'react'
import Layout from '../../components/layout/Layout'
import PageBanner from '../../components/PageBanner'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
// import ClubFacilitiesSlider from '../../components/ClubFacilitiesSlider'
const ClubFacilitiesSlider = dynamic(() => import('../../components/ClubFacilitiesSlider'), { ssr: false });


const ClubFacilities = () => {
    return (
        <div className="rac_main_wrapper">
            <PageBanner 
                    pageTitle="Club Facilities"
                    bannerImage="bg-[url('https://images.pexels.com/photos/261156/pexels-photo-261156.jpeg')]"
                    pageDescription="Discover our world-class facilities designed for your comfort and enjoyment"
                />
                <ClubFacilitiesSlider />

                {/* Features Section */}
                <section className="py-24 bg-[#161616]">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {features.map((feature) => (
                                <div 
                                    key={feature.title}
                                    className="p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-500 group"
                                >
                                    <div className="text-red-500 text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl text-white mb-4">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative py-40">
                    <Image 
                        src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg"
                        alt="Club Facilities"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
                    <div className="relative z-10 container mx-auto px-4">
                        <div className="max-w-2xl">
                            <div className="h-1 w-20 bg-red-600 mb-12"></div>
                            <h2 className="text-5xl text-white mb-8 font-light leading-tight">Experience<br/><span className="text-red-500">World-Class Amenities</span></h2>
                            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                                Join our club today and get access to all our premium facilities and services.
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

const features = [
    {
        title: "24/7 Access",
        description: "Our facilities are available round the clock for your convenience.",
        icon: "⏰"
    },
    {
        title: "Professional Staff",
        description: "Trained and experienced staff to assist you at all times.",
        icon: "👥"
    },
    {
        title: "Modern Equipment",
        description: "Latest equipment and technology for the best experience.",
        icon: "🎯"
    }
]

export default ClubFacilities