import React from 'react'
import PageBanner from '../../components/PageBanner'
import Image from 'next/image'
import Link from 'next/link'
import MediaSummary from '../../components/MediaSummary'

function Media() {

    const stats = [
        {
            value: "50+",
            label: "Events per Year"
        },
        {
            value: "1000+",
            label: "Photo Memories"
        },
        {
            value: "24/7",
            label: "Updates"
        },
        {
            value: "100%",
            label: "Member Satisfaction"
        }
    ]

    return (
        <>
            <div className="rac_main_wrapper">
                <PageBanner 
                    pageTitle="Media Center"
                    bannerImage="bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')]"
                    pageDescription="Stay updated with our latest events, photo galleries, and important announcements"
                />

                {/* Hero Section */}
                <MediaSummary />

                {/* Stats Section */}
                <section className="py-12 bg-[#161616]">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} 
                                    className="bg-[#1d1d1d] p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-500 group text-center"
                                >
                                    <div className="text-red-500 text-4xl font-light mb-4 group-hover:scale-110 transition-transform duration-500">
                                        {stat.value}
                                    </div>
                                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative py-12">
                    <Image 
                        src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg"
                        alt="Media Center"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
                    <div className="relative z-10 container mx-auto px-4">
                        <div className="max-w-2xl">
                            <div className="h-1 w-20 bg-red-600 mb-12"></div>
                            <h2 className="text-5xl text-white mb-8 font-light leading-tight">Stay Updated with<br/><span className="text-red-500">Club Activities</span></h2>
                            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                                Don't miss out on our latest events, announcements, and photo galleries. Follow our media channels to stay connected.
                            </p>
                            <Link href="/contact" className="rac_btn">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}



export default Media;