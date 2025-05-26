import React from 'react'
import PageBanner from '../../components/PageBanner';
import Layout from '../../components/layout/Layout';
import Image from 'next/image';

const PrayerRoom = () => {
    const features = [
        {
            title: "Multi-Faith Spaces",
            description: "Dedicated areas for all religions and beliefs",
            icon: "🕊️"
        },
        {
            title: "Prayer Times",
            description: "Digital displays showing prayer timings for different faiths",
            icon: "⏰"
        },
        {
            title: "Sacred Facilities",
            description: "Clean and respectful facilities for all religious practices",
            icon: "💧"
        },
        {
            title: "Peaceful Environment",
            description: "Soundproof walls for undisturbed spiritual practices",
            icon: "🌟"
        }
    ];

    const religiousSpaces = [
        {
            religion: "Islam",
            features: ["Prayer mats", "Wudu area", "Qibla direction"]
        },
        {
            religion: "Christianity",
            features: ["Chapel setup", "Cross symbols", "Prayer benches"]
        },
        {
            religion: "Buddhism",
            features: ["Meditation cushions", "Zen atmosphere", "Incense holders"]
        },
        {
            religion: "Hinduism",
            features: ["Altar space", "Sacred symbols", "Prayer bells"]
        }
    ];

    return (
        <div className="rac_main_wrapper">
            <PageBanner 
                pageTitle="Multi-Faith Prayer Room"
                bannerImage="bg-[url('https://images.unsplash.com/photo-1519817650390-64a93db51149?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]"
                pageDescription="A serene space dedicated to spiritual reflection and prayer for all faiths"
            />

            {/* Introduction Section */}
            <section className="py-12 bg-[#292929]">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="h-1 w-20 bg-red-600 mx-auto mb-8"></div>
                        <h2 className="text-4xl font-light text-white mb-6">
                            A Sacred Space for All
                            <span className="block text-red-600 mt-2">Spiritual Connections</span>
                        </h2>
                        <p className="text-gray-300 text-lg">
                            Our multi-faith prayer room provides a peaceful sanctuary for spiritual reflection and prayer, 
                            welcoming people of all faiths and beliefs in an atmosphere of mutual respect and understanding.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-12 bg-[#b4b4b4]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                className="group bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-black/20 transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-700">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Religious Spaces Section */}
            <section className="py-12 bg-[#292929]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-light text-white">
                            Dedicated Spaces for All Faiths
                        </h2>
                        <div className="h-1 w-20 bg-red-600 mx-auto mt-4"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {religiousSpaces.map((space, index) => (
                            <div key={index} className="bg-white/5 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-white mb-4">{space.religion}</h3>
                                <ul className="space-y-2">
                                    {space.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="text-gray-300 flex items-center gap-2">
                                            <span className="text-red-500">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-12 bg-[#292929]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <Image 
                                src="https://m.ambatel.com/RES/PRODUCT/202105/playerpc_20210525111202.png"
                                alt="Prayer Room Interior"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-2xl"
                            />
                            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-red-600 rounded-lg -z-10"></div>
                        </div>
                        <div>
                            <div className="h-1 w-16 bg-red-600 mb-6"></div>
                            <h3 className="text-3xl font-light text-white mb-6">
                                Thoughtfully Designed
                                <span className="block text-red-600">For All Faiths</span>
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Separate spaces for different religious practices",
                                    "Multi-faith reference materials available",
                                    "Temperature-controlled environment",
                                    "Storage facilities for religious items",
                                    "24/7 accessibility for members",
                                    "Interfaith meditation area"
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

            {/* Prayer Times Section */}
            <section className="py-12 bg-[#b4b4b4]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl">
                        <div className="bg-red-600 text-white py-4 px-6">
                            <h3 className="text-xl font-bold">Islamic Prayer Times</h3>
                        </div>
                        <div className="p-8 grid grid-cols-1 md:grid-cols-5 gap-4">
                            {[
                                { name: 'Fajr', time: '5:30 AM' },
                                { name: 'Zuhr', time: '1:30 PM' },
                                { name: 'Asr', time: '4:45 PM' },
                                { name: 'Maghrib', time: '7:15 PM' },
                                { name: 'Isha', time: '8:45 PM' }
                            ].map((prayer, index) => (
                                <div key={index} className="text-center p-4 bg-white/10 rounded-lg">
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{prayer.name}</h4>
                                    <div className="text-gray-700 font-medium">
                                        {prayer.time}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrayerRoom;