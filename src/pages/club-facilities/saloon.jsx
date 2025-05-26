import React from 'react'
import Layout from '../../components/layout/Layout'
import PageBanner from '../../components/PageBanner'
import Image from 'next/image'
import Link from 'next/link'

function Saloon() {
    // Data
    const services = [
        {
            title: "Hair Styling & Care",
            description: "Expert hair styling services from our master stylists using premium products and techniques.",
            image: "/assets/images/saloon/saloon4.jpg",
            features: [
                "Haircuts & Styling",
                "Color & Highlights",
                "Treatment & Spa",
                "Bridal Services"
            ]
        },
        {
            title: "Facial & Skincare",
            description: "Rejuvenating facial treatments customized for your skin type and concerns.",
            image: "/assets/images/saloon/saloon5.jpg",
            features: [
                "Deep Cleansing",
                "Anti-aging Treatment",
                "Hydration Therapy",
                "Skin Brightening"
            ]
        },
        {
            title: "Nail Care & Art",
            description: "Premium nail care services with artistic designs and lasting finish.",
            image: "https://images.unsplash.com/photo-1610992015762-45dca7fa3a85?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            features: [
                "Manicure",
                "Pedicure",
                "Nail Art",
                "Gel Extensions"
            ]
        }
    ]

    const process = [
        {
            title: "Book Online",
            description: "Schedule your appointment through our easy booking system"
        },
        {
            title: "Consultation",
            description: "Meet with our experts to discuss your style preferences"
        },
        {
            title: "Treatment",
            description: "Enjoy your selected services with our skilled professionals"
        },
        {
            title: "Aftercare",
            description: "Receive personalized care tips and product recommendations"
        }
    ]

    return (
        <div className="rac_main_wrapper">
            <PageBanner 
                pageTitle="Saloon"
                bannerImage="bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3')]"
                pageDescription="Experience luxury grooming and wellness at our premium saloon and spa facilities"
            />

            {/* Elegant Introduction Section */}
            <section className="py-16 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-red-600/5 animate-pulse"></div>
                    <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-red-600/5 animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                <div className="container mx-auto px-4 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="h-1 w-20 bg-red-600"></div>
                            <h2 className="text-4xl md:text-5xl text-white font-light leading-tight">
                                Discover Your
                                <span className="block text-red-500 mt-3">Perfect Style</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Indulge in a world of beauty and relaxation at our premium saloon. Our expert stylists and therapists are dedicated to enhancing your natural beauty and ensuring complete rejuvenation.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-8">
                                <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-500 group">
                                    <div className="text-red-500 text-4xl font-light mb-3 group-hover:scale-110 transition-transform duration-500">15+</div>
                                    <p className="text-gray-300">Expert Stylists</p>
                                </div>
                                <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-500 group">
                                    <div className="text-red-500 text-4xl font-light mb-3 group-hover:scale-110 transition-transform duration-500">100%</div>
                                    <p className="text-gray-300">Satisfaction</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 md:gap-8">
                            <div className="space-y-5 md:space-y-8">
                                <div className="relative h-80 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-700 shadow-2xl">
                                    <Image
                                        src="/assets/images/saloon/saloon1.jpg"
                                        alt="Hair Styling"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-56 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-700 shadow-2xl">
                                    <Image
                                        src="/assets/images/saloon/saloon2.jpg"
                                        alt="Facial Treatment"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 md:space-y-8 transform translate-y-16">
                                <div className="relative h-56 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-700 shadow-2xl">
                                    <Image
                                        src="/assets/images/saloon/saloon3.jpg"
                                        alt="Manicure"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-80 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-700 shadow-2xl">
                                    <Image
                                        src="/assets/images/saloon/saloon4.jpg"
                                        alt="Spa Treatment"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-12 bg-[#161616]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-24">
                        <div className="h-1 w-20 bg-red-600 mx-auto mb-8"></div>
                        <h2 className="text-4xl md:text-5xl text-white font-light mb-8">Our Services</h2>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            Discover our range of premium beauty and wellness services
                        </p>
                    </div>

                    <div className="space-y-12">
                        {services.map((service, index) => (
                            <div key={index} 
                                className="bg-[#1d1d1d] rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-500 shadow-xl group"
                            >
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/3 relative h-80 md:h-auto overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                                    </div>
                                    <div className="md:w-2/3 p-6 md:p-12">
                                        <h3 className="text-3xl text-white mb-6 group-hover:text-red-500 transition-colors duration-300">{service.title}</h3>
                                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">{service.description}</p>
                                        <div className="grid grid-cols-2 gap-6">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-4 group/item">
                                                    <div className="w-2 h-2 bg-red-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                                                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">{feature}</span>
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

            {/* Process Section */}
            <section className="py-12 bg-[#0f0f0f] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-red-600/5 animate-pulse"></div>
                    <div className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-red-600/5 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                </div>
                <div className="container mx-auto px-4 relative">
                    <div className="text-center mb-24">
                        <div className="h-1 w-20 bg-red-600 mx-auto mb-8"></div>
                        <h2 className="text-4xl md:text-5xl text-white font-light mb-8">How It Works</h2>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            Your journey to beauty and relaxation made simple
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {process.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="bg-[#1d1d1d] rounded-lg p-10 h-full border border-gray-800 hover:border-red-500 transition-all duration-500 group">
                                    <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-red-500/20 transition-colors duration-500">
                                        <span className="text-red-500 text-2xl font-light group-hover:scale-125 transition-transform duration-500">{index + 1}</span>
                                    </div>
                                    <h3 className="text-2xl text-white mb-4 group-hover:text-red-500 transition-colors duration-300">{step.title}</h3>
                                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{step.description}</p>
                                </div>
                                {index < process.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-red-500/20"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-12">
                <Image 
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3"
                    alt="Saloon Interior"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
                <div className="relative z-10 container mx-auto px-4">
                    <div className="max-w-2xl">
                        <div className="h-1 w-20 bg-red-600 mb-12"></div>
                        <h2 className="text-4xl md:text-5xl text-white mb-8 font-light leading-tight">Transform Your Look<br/><span className="text-red-500">With Our Experts</span></h2>
                        <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                            Book your appointment today and experience the perfect blend of style, luxury, and professional care.
                        </p>
                        <Link href="/contact-us" className="rac_btn">
                            Book Appointment
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}



export default Saloon;