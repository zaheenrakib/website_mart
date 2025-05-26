import React from 'react'
import Layout from '../../components/layout/Layout'
import PageBanner from '../../components/PageBanner'
import Image from 'next/image'
import Link from 'next/link'

function LaundryService() {
    return (
        <div className="rac_main_wrapper">
            <PageBanner 
            pageTitle={`Laundry Service`}
                    bannerImage="bg-[url('https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2971&q=80')]"
                    pageDescription="Experience premium garment care with our state-of-the-art laundry services"
                />

                {/* Elegant Introduction Section */}
                <section className="py-20 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-red-600/5 animate-pulse"></div>
                        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-red-600/5 animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                    <div className="container mx-auto px-4 relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="h-1 w-20 bg-red-600"></div>
                                <h2 className="text-4xl md:text-5xl text-white font-light leading-tight">
                                    Elevating Your
                                    <span className="block text-red-500 mt-3">Garment Care Experience</span>
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Discover unparalleled laundry services where each garment receives meticulous attention. Our commitment to excellence ensures your clothes are treated with the finest care and premium products.
                                </p>
                                <div className="grid grid-cols-2 gap-8 pt-8">
                                    <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-500 group">
                                        <div className="text-red-500 text-4xl font-light mb-3 group-hover:scale-110 transition-transform duration-500">24h</div>
                                        <p className="text-gray-300">Express Service</p>
                                    </div>
                                    <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-500 group">
                                        <div className="text-red-500 text-4xl font-light mb-3 group-hover:scale-110 transition-transform duration-500">100%</div>
                                        <p className="text-gray-300">Satisfaction</p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 md:gap-8">
                                <div className="space-y-4 md:space-y-8">
                                    <div className="relative h-80 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-700 shadow-2xl">
                                        <Image
                                            src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
                                            alt="Laundry Service"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="relative h-56 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-700 shadow-2xl">
                                        <Image
                                            src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2971&q=80"
                                            alt="Dry Cleaning"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4 md:space-y-8 transform translate-y-16">
                                    <div className="relative h-56 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-700 shadow-2xl">
                                        <Image
                                            src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
                                            alt="Ironing Service"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="relative h-80 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-700 shadow-2xl">
                                        <Image
                                            src="https://images.unsplash.com/photo-1469504512102-900f29606341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
                                            alt="Folded Clothes"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Premium Services Section */}
                <section className="py-12 bg-[#161616]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-24">
                            <div className="h-1 w-20 bg-red-600 mx-auto mb-8"></div>
                            <h2 className="text-5xl text-white font-light mb-8">Premium Services</h2>
                            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                                Experience the finest in garment care with our comprehensive range of premium laundry services
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
                                        <div className="md:w-2/3 p-4 md:p-12">
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
                            <h2 className="text-5xl text-white font-light mb-8">The Process</h2>
                            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                                Experience seamless service with our simple yet effective process
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
                        src="https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
                        alt="Laundry Interior"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
                    <div className="relative z-10 container mx-auto px-4">
                        <div className="max-w-2xl">
                            <div className="h-1 w-20 bg-red-600 mb-12"></div>
                            <h2 className="text-5xl text-white mb-8 font-light leading-tight">Experience the Finest<br/><span className="text-red-500">Garment Care Service</span></h2>
                            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                                Let us take care of your garments with the attention and expertise they deserve. Schedule your pickup today and experience premium laundry service.
                            </p>
                            <Link href="/contact-us" className="rac_btn">
                                Schedule Service
                            </Link>
                        </div>
                    </div>
                </section>
        </div>
    ) 
}

// Data
const services = [
    {
        title: "Wash & Fold",
        description: "Professional washing and folding service for your everyday garments with premium detergents and fabric softeners.",
        image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2971&q=80",
        features: [
            "Regular Wash",
            "Delicate Wash",
            "Premium Detergents",
            "Expert Folding"
        ]
    },
    {
        title: "Dry Cleaning",
        description: "Specialized dry cleaning service for your delicate and premium garments that require extra care.",
        image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2971&q=80",
        features: [
            "Suits & Formals",
            "Designer Wear",
            "Winter Wear",
            "Delicate Fabrics"
        ]
    },
    {
        title: "Premium Ironing",
        description: "Professional ironing and pressing service to give your garments the perfect finish they deserve.",
        image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
        features: [
            "Steam Ironing",
            "Pressing Service",
            "Starch Options",
            "Hanging Service"
        ]
    }
]

const process = [
    {
        title: "Schedule Pickup",
        description: "Book your pickup time and location through our easy scheduling system"
    },
    {
        title: "We Collect",
        description: "Our professional team collects your garments from your doorstep"
    },
    {
        title: "Processing",
        description: "Your clothes are cleaned and cared for using premium products"
    },
    {
        title: "Delivery",
        description: "Clean, fresh garments delivered back to your doorstep"
    }
]

export default LaundryService;