import React from 'react'
import Layout from '../../components/layout/Layout'
import PageBanner from '../../components/PageBanner'
import Image from 'next/image'
import Link from 'next/link'

const Kids_zone = () => {
    const activities = [
        {
            title: "Indoor Playground",
            description: "Safe and exciting play areas for children of all ages",
            image: "https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            features: ["Soft Play Area", "Ball Pit", "Climbing Frames", "Slides"]
        },
        {
            title: "Arts & Crafts",
            description: "Creative space for artistic expression",
            image: "https://images.pexels.com/photos/8612921/pexels-photo-8612921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            features: ["Drawing", "Painting", "Clay Modeling", "DIY Crafts"]
        },
        {
            title: "Gaming Zone",
            description: "Interactive gaming experience for kids",
            image: "https://images.pexels.com/photos/7915289/pexels-photo-7915289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            features: ["Video Games", "Board Games", "Educational Games", "Interactive Screens"]
        }
    ];

    return (
        <div className="rac_main_wrapper">
            <PageBanner 
                pageTitle={`Kids Zone`}
                bannerImage="bg-[url('https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]"
                pageDescription="A magical world of fun and learning for your little ones"
            />

            {/* Hero Section */}
            <section className="py-12 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-600/10 to-transparent"></div>
                <div className="container mx-auto px-4 relative">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-light mb-6 animate-fade-in-up">
                            Where Fun Meets
                            <span className="block text-red-500 mt-2">Learning & Adventure</span>
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fade-in-up delay-100">
                            Welcome to our kids' paradise! A safe and exciting space where children can play, learn, and make unforgettable memories.
                        </p>
                    </div>

                    {/* Activity Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {activities.map((activity, index) => (
                            <div key={index} className="group relative transform hover:-translate-y-2 transition-all duration-300">
                                <div className="relative h-[400px] rounded-lg overflow-hidden">
                                    <Image 
                                        src={activity.image}
                                        alt={activity.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <h3 className="text-2xl font-medium mb-2">{activity.title}</h3>
                                        <p className="text-gray-200 mb-4">{activity.description}</p>
                                        <ul className="space-y-2">
                                            {activity.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12 bg-[#161616]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <Image 
                                src="https://images.pexels.com/photos/8612977/pexels-photo-8612977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Kids Playing"
                                width={600}
                                height={400}
                                className="rounded-lg"
                            />
                            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-red-600 rounded-lg -z-10"></div>
                        </div>
                        <div>
                            <div className="h-1 w-16 bg-red-600 mb-6"></div>
                            <h2 className="text-4xl text-white font-light mb-6">
                                Safe & Supervised
                                <span className="block text-red-500">Play Environment</span>
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "Professional Child Care Staff",
                                    "CCTV Monitored Areas",
                                    "Age-Appropriate Activities",
                                    "First Aid Trained Personnel",
                                    "Regular Safety Inspections"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-300">
                                        <div className="w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-12">
                <Image 
                    src="https://images.pexels.com/photos/8612906/pexels-photo-8612906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Kids Zone"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                <div className="relative z-10 container mx-auto px-4">
                    <div className="max-w-xl">
                        <div className="h-1 w-16 bg-red-600 mb-8"></div>
                        <h2 className="text-4xl md:text-5xl text-white mb-6 font-light">Let the Fun<br/>Begin Today!</h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Book a visit to our Kids Zone and give your children an unforgettable experience of fun and learning.
                        </p>
                        <Link href="/contact-us" className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300">
                            Book Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Kids_zone;