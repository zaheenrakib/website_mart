import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LoungesLoader from './loader/LoungesLoader';


const LoungesSummary = () => {
    const [showLoader, setShowLoader] = useState(true);
    useEffect(()=> {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 3000);
        return () => clearTimeout(timer);
    })
    return (
        <section className="pt-2 pb-3 bg-gradient-to-b bg-[#2A2A2A] ">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <div className="h-1 w-20 bg-red-600 mx-auto mb-6"></div>
                    <h2 className="text-4xl md:text-5xl text-white font-light mb-6">Club Lounges</h2>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        Your Private Sanctuary for Relaxation and Business
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    { showLoader? (
                        
                        Array(3).fill(0).map((_, index) => (
                            <LoungesLoader key={index} />
                        ))
                            
                        
                    ) : (
                        <>
                        
                            {/* Executive Lounge */}
                            <div className="bg-[#1d1d1d] rounded-lg overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                                <div className="relative h-48">
                                    <Image
                                        src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg"
                                        alt="Executive Lounge"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl text-white mb-2 group-hover:text-red-500 transition-colors">Executive Lounge</h3>
                                    <p className="text-gray-400 text-sm">Premium space for business meetings and private gatherings</p>
                                </div>
                            </div>

                            {/* Social Lounge */}
                            <div className="bg-[#1d1d1d] rounded-lg overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                                <div className="relative h-48">
                                    <Image
                                        src="https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg"
                                        alt="Social Lounge"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl text-white mb-2 group-hover:text-red-500 transition-colors">Social Lounge</h3>
                                    <p className="text-gray-400 text-sm">Relaxed atmosphere for casual meetings and entertainment</p>
                                </div>
                            </div>

                            {/* Reading Room */}
                            <div className="bg-[#1d1d1d] rounded-lg overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                                <div className="relative h-48">
                                    <Image
                                        src="https://images.pexels.com/photos/5997967/pexels-photo-5997967.jpeg"
                                        alt="Reading Room"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl text-white mb-2 group-hover:text-red-500 transition-colors">Reading Room</h3>
                                    <p className="text-gray-400 text-sm">Quiet space for reading and focused work</p>
                                </div>
                            </div>
                        </>
                    )
                }
                </div>
                <div className='flex justify-center my-4'>
                    <Link href="/lounges" className='rac_btn'>Learn More</Link>
                </div>
                
                <div className="mt-8 flex justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 text-center">
                            <div className="text-red-500 text-3xl font-light mb-2">5+</div>
                            <p className="text-gray-300 text-sm">Exclusive Lounges</p>
                        </div>
                        <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 text-center">
                            <div className="text-red-500 text-3xl font-light mb-2">24/7</div>
                            <p className="text-gray-300 text-sm">Access</p>
                        </div>
                        <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 text-center">
                            <div className="text-red-500 text-3xl font-light mb-2">Premium</div>
                            <p className="text-gray-300 text-sm">Services</p>
                        </div>
                        <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 text-center">
                            <div className="text-red-500 text-3xl font-light mb-2">Luxury</div>
                            <p className="text-gray-300 text-sm">Amenities</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoungesSummary;