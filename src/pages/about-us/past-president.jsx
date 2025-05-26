import React from 'react'
import PageBanner from '../../components/PageBanner'
import Image from 'next/image'

const PastPresident = () => {
  return (
    <>
        <div className="rac_main_wrapper">
            <PageBanner 
                pageTitle={`Past Presidents`}
                bannerImage="bg-[url('/assets/images/pageBanner/past-leader.PNG')]"
                pageDescription="Honoring the visionary leaders who shaped our club's legacy through their dedication and service"
            />

            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-b from-[#0f0f0f] to-[#161616] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-red-600/5 animate-pulse"></div>
                    <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-red-600/5 animate-pulse" ></div>
                </div>
                <div className="container mx-auto px-4 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="h-1 w-20 bg-red-600"></div>
                            <h2 className="text-4xl md:text-5xl text-white font-light leading-tight">
                                Legacy of
                                <span className="block text-red-500 mt-3">Leadership</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Our past presidents have been instrumental in shaping the club's journey, each contributing uniquely to our growth and success. Their visionary leadership continues to inspire our path forward.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-8">
                                <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-500 group">
                                    <div className="text-red-500 text-4xl font-light mb-3 group-hover:scale-110 transition-transform duration-500">75+</div>
                                    <p className="text-gray-300">Years of Legacy</p>
                                </div>
                                <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-500 group">
                                    <div className="text-red-500 text-4xl font-light mb-3 group-hover:scale-110 transition-transform duration-500">25+</div>
                                    <p className="text-gray-300">Past Presidents</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 md:gap-8">
                            <div className="space-y-6 md:space-y-8">
                                <div className="relative h-80 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-700 shadow-2xl">
                                    <Image
                                        src="/assets/images/leaders/leadership1.jpg"
                                        alt="Historic Moment"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-56 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-700 shadow-2xl">
                                    <Image
                                        src="/assets/images/leaders/leadership2.jpg"
                                        alt="Leadership Meeting"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-6 md:space-y-8 transform translate-y-16">
                                <div className="relative h-56 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-700 shadow-2xl">
                                    <Image
                                        src="/assets/images/leaders/leadership3.jpg"
                                        alt="Club Event"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-80 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-700 shadow-2xl">
                                    <Image
                                        src="/assets/images/leaders/leadership4.jpg"
                                        alt="Award Ceremony"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Past Presidents Timeline */}
            <section className="py-14 bg-gradient-to-b from-[#161616] to-[#0f0f0f]">
                <div className="container mx-auto px-4">

                    <div className="text-center md:pb-10 pb-8">
                        <div className="h-1 w-20 bg-red-600 mx-auto mb-6"></div>
                        <h2 className="text-4xl md:text-5xl text-white font-light mb-4 md:mb-5">Past Presidents</h2>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        Each president has left an indelible mark on our club's history through their unique vision and dedication
                        </p>
                    </div>

                    <div className="space-y-12">
                        {presidents.map((president, index) => (
                            <div key={index} 
                                className="bg-[#1d1d1d] rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-500 shadow-xl group"
                            >
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/3 relative h-80 md:h-auto overflow-hidden">
                                        <Image
                                            src={president.image}
                                            alt={president.name}
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                                    </div>
                                    <div className="md:w-2/3 p-6 md:p-12">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="text-red-500 text-lg">{president.period}</span>
                                            <div className="h-0.5 w-12 bg-red-500/30"></div>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl text-white mb-4 group-hover:text-red-500 transition-colors duration-300">{president.name}</h3>
                                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">{president.description}</p>
                                        <div className="grid grid-cols-2 gap-6">
                                            {president.achievements.map((achievement, idx) => (
                                                <div key={idx} className="flex items-center gap-4 group/item">
                                                    <div className="w-2 h-2 bg-red-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                                                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">{achievement}</span>
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

            {/* Legacy Wall */}
            <section className="pb-10 bg-[#0f0f0f] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-red-600/5 animate-pulse"></div>
                    <div className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-red-600/5 animate-pulse" ></div>
                </div>
                <div className="container mx-auto px-4 relative">

                    <div className="text-center md:pb-10 pb-8">
                        <div className="h-1 w-20 bg-red-600 mx-auto mb-6"></div>
                        <h2 className="text-4xl md:text-5xl text-white font-light mb-4 md:mb-5">Legacy Wall</h2>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            Commemorating the collective achievements and milestones of our past presidents
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="relative">
                                <div className="bg-[#1d1d1d] rounded-lg p-6 md:p-10 h-full border border-gray-800 hover:border-red-500 transition-all duration-500 group">
                                    <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-red-500/20 transition-colors duration-500">
                                        <span className="text-red-500 text-2xl font-light group-hover:scale-125 transition-transform duration-500">{achievement.icon}</span>
                                    </div>
                                    <h3 className="text-2xl text-white mb-4 group-hover:text-red-500 transition-colors duration-300">{achievement.title}</h3>
                                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{achievement.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="relative py-40">
                <Image 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
                    alt="Club Legacy"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
                <div className="relative z-10 container mx-auto px-4">
                    <div className="max-w-3xl">
                        <div className="h-1 w-20 bg-red-600 mb-12"></div>
                        <blockquote className="text-4xl text-white mb-8 font-light leading-tight italic">
                            "Leadership is not about being in charge. It's about taking care of those in your charge."
                        </blockquote>
                        <p className="text-gray-300 text-xl mb-4">- Club Motto</p>
                        <p className="text-gray-400 text-lg">
                            A principle that has guided our presidents through generations
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

// Data
const presidents = [
    {
        name: "Major M Abdus Salam (Retd.)",
        period: "22/10/2011 - 29/03/2019",
        image: "/assets/images/past-presidents/Major M Abdus Salam (Retd.).jpg",
        description: "Led the club through a period of unprecedented growth and modernization, establishing new facilities and expanding membership programs.",
        achievements: [
            "Modernized Club Facilities",
            "Expanded Membership Base",
            "Enhanced Digital Services",
            "Established Youth Programs"
        ]
    },
    {
        name: "Late Md. Abdul Latif Mondal",
        period: "30/03/2019 - 04/05/2019",
        image: "/assets/images/past-presidents/Late Md. Abdul Latif Mondal.jpg",
        description: "Pioneered the club's sustainability initiatives and community outreach programs, setting new standards for social responsibility.",
        achievements: [
            "Green Initiative Launch",
            "Community Partnership",
            "Scholarship Program",
            "Sports Excellence Center"
        ]
    }
]

const achievements = [
    {
        icon: "🏆",
        title: "Club Excellence",
        description: "Multiple awards for outstanding club management and member services under various presidencies"
    },
    {
        icon: "🤝",
        title: "Community Impact",
        description: "Established lasting partnerships and community programs that continue to benefit society"
    },
    {
        icon: "🌟",
        title: "Innovation",
        description: "Pioneered new approaches to club management and member engagement"
    }
]

export default PastPresident