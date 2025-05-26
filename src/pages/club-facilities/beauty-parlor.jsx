import React from 'react'
import Layout from '../../components/layout/Layout'
import PageBanner from '../../components/PageBanner'
import Image from 'next/image'
import Link from 'next/link'

function BeautyParlor() {
    return (
        <div className="rac_main_wrapper">
            <PageBanner 
            pageTitle={`Beauty Parlor`}
                bannerImage="bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80')]"
                pageDescription="Discover a world of beauty and wellness in our luxurious beauty parlor"
            />

            {/* Hero Section with Overlapping Elements */}
            <section className="py-12 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-600/10 to-transparent"></div>
                <div className="container mx-auto px-4 relative">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-light mb-6">
                            Where Beauty Meets
                            <span className="block text-red-500 mt-2">Elegance & Grace</span>
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Welcome to our sanctuary of beauty, where traditional wisdom meets modern expertise. Experience personalized care that enhances your natural beauty.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        <div className="relative group">
                            <div className="overflow-hidden rounded-lg">
                                <Image 
                                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                                    alt="Facial Treatment"
                                    width={400}
                                    height={500}
                                    className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <h3 className="text-xl font-medium mb-2">Facial Treatments</h3>
                                <p className="text-sm text-gray-200">Experience our signature facial treatments</p>
                            </div>
                        </div>

                        <div className="relative group md:mt-0">
                            <div className="overflow-hidden rounded-lg">
                                <Image 
                                    src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" 
                                    alt="Professional Makeup"
                                    width={400}
                                    height={500}
                                    className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <h3 className="text-xl font-medium mb-2">Professional Makeup</h3>
                                <p className="text-sm text-gray-200">Perfect makeup for every occasion</p>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="overflow-hidden rounded-lg">
                                <Image 
                                    src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                                    alt="Threading Services"
                                    width={400}
                                    height={500}
                                    className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <h3 className="text-xl font-medium mb-2">Threading Services</h3>
                                <p className="text-sm text-gray-200">Expert eyebrow and facial threading</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-12 bg-[#161616]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <div className="h-1 w-16 bg-red-600 mb-6"></div>
                            <h2 className="text-4xl text-white font-light">Our Premium<br/><span className="text-red-500">Beauty Services</span></h2>
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-gray-300 text-lg">
                                Discover our range of premium beauty services designed to enhance your natural beauty and provide a relaxing experience.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-[#1d1d1d] rounded-lg overflow-hidden group"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image 
                                        src={service.image}
                                        alt={service.title}
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                                </div>
                                <div className="p-8 border-t border-gray-800">
                                    <h3 className="text-xl text-white mb-4 group-hover:text-red-500 transition-colors">{service.title}</h3>
                                    <p className="text-gray-400 mb-6">{service.description}</p>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-gray-300">
                                                <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Package */}
            <section className="py-12 bg-[#0f0f0f] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-red-600/10"></div>
                    <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-red-600/10"></div>
                </div>
                
                <div className="container mx-auto px-4 relative">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="h-1 w-16 bg-red-600 mb-6"></div>
                                <h2 className="text-4xl text-white font-light mb-6">Bridal Beauty<br/><span className="text-red-500">Package</span></h2>
                                <p className="text-gray-300 mb-8">
                                    Make your special day even more memorable with our comprehensive bridal beauty package. Our expert beauticians will ensure you look and feel your absolute best.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {[
                                        "Complete Bridal Makeup",
                                        "Pre-bridal Skincare Routine",
                                        "Hair Styling & Treatment",
                                        "Nail Care & Art",
                                        "Complimentary Consultation"
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
                            <div className="relative">
                                <div className="rounded-lg overflow-hidden">
                                    <Image 
                                        src="https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                        alt="Bridal Beauty Package"
                                        width={600}
                                        height={800}
                                        className="w-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-red-600 rounded-lg -z-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-12">
                <Image 
                    src="https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Beauty Parlor Interior"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                <div className="relative z-10 container mx-auto px-4">
                    <div className="max-w-xl">
                        <div className="h-1 w-16 bg-red-600 mb-8"></div>
                        <h2 className="text-5xl text-white mb-6 font-light">Begin Your<br/>Beauty Journey</h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Experience the perfect blend of traditional and modern beauty treatments. Book your appointment today.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact" className="rac_btn">
                                Schedule Appointment
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    ) 
}

// Data
const services = [
    {
        title: "Facial Care",
        description: "Revitalize your skin with our premium facial treatments",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        features: [
            "Deep Cleansing",
            "Anti-aging Treatment",
            "Hydrating Facial",
            "Face Masks"
        ]
    },
    {
        title: "Threading & Waxing",
        description: "Expert threading and waxing services for perfect grooming",
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        features: [
            "Eyebrow Threading",
            "Upper Lip Threading",
            "Full Face Threading",
            "Body Waxing"
        ]
    },
    {
        title: "Makeup Services",
        description: "Professional makeup services for all occasions",
        image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
        features: [
            "Bridal Makeup",
            "Party Makeup",
            "Natural Makeup",
            "Eye Makeup"
        ]
    },
    {
        title: "Bleach & Detan",
        description: "Safe and effective skin brightening treatments",
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        features: [
            "Face Bleach",
            "Full Body Bleach",
            "Detan Pack",
            "Skin Brightening"
        ]
    },
    {
        title: "Hair Treatments",
        description: "Comprehensive hair care solutions",
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
        features: [
            "Hair Spa",
            "Hair Masks",
            "Oil Treatments",
            "Scalp Treatments"
        ]
    },
    {
        title: "Bridal Services",
        description: "Complete bridal beauty solutions",
        image: "https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        features: [
            "Bridal Makeup",
            "Pre-bridal Services",
            "Family Makeup",
            "Reception Makeup"
        ]
    }
]

export default BeautyParlor;