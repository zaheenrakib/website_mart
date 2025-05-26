import React from 'react'
import PageBanner from '../../components/PageBanner'
import Link from 'next/link'
import Image from 'next/image'

function Rooftop_restaurant() {
    return (
        <div className="rac_main_wrapper">
            <PageBanner 
                pageTitle={`Rooftop Restaurant`}
                bannerImage="bg-[url('https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg')]"
                pageDescription="Experience exquisite dining with breathtaking views at our rooftop restaurant"
            />

            {/* Hero Section */}
            <div className='relative bg-[#292929] py-16'>
                <div className='container mx-auto px-4'>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
                        <div className='md:w-1/2'>
                            <div className='h-2 w-14 bg-red-600 mb-8'></div>
                            <h2 className='text-white text-[34px] md:text-5xl font-light mb-8'>Dining Above the City</h2>
                            <p className='text-gray-300 text-lg mb-8'>Elevate your dining experience with our exquisite cuisine served against the backdrop of stunning city views. Our rooftop restaurant combines culinary excellence with an unforgettable atmosphere.</p>
                            <Link href="/contact-us" className='rac_btn'>Make a Reservation</Link>
                        </div>
                        <div className='md:w-1/2'>
                            <div className='relative'>
                                <Image 
                                    src="/assets/images/rooftop/rooftop4.jpg" 
                                    alt="Rooftop Restaurant" 
                                    width={600} 
                                    height={400} 
                                    className='rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300'
                                />
                                <div className='absolute -bottom-12 -left-6 md:-left-20 bg-red-600 text-white p-3 md:p-6 rounded-lg transform hover:-translate-y-2 transition-transform duration-300'>
                                    <p className='text-2xl md:text-4xl font-bold mb-2'>Fine</p>
                                    <p className='text-sm'>Dining Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className='py-12 bg-[#b4b4b4]'>
                <div className='container mx-auto px-4'>
                    <div className='text-center mb-16'>
                        <div className='h-2 w-14 bg-red-600 mx-auto mb-6'></div>
                        <h2 className='text-4xl font-bold text-gray-900 mb-4'>Culinary Excellence</h2>
                        <p className='text-gray-600 max-w-2xl mx-auto'>Discover a world of flavors and exceptional service</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='bg-black p-8 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl'>
                            <div className='bg-red-600 p-4 rounded-full inline-block mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="white">
                                    <path d="M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z"/>
                                </svg>
                            </div>
                            <h3 className='text-xl text-white font-bold mb-4'>Gourmet Cuisine</h3>
                            <p className='text-[#B4B4B4]'>Expertly crafted dishes using the finest ingredients and innovative culinary techniques.</p>
                        </div>
                        <div className='bg-black p-8 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl'>
                            <div className='bg-red-600 p-4 rounded-full inline-block mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="white">
                                    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
                                </svg>
                            </div>
                            <h3 className='text-xl text-white font-bold mb-4'>Panoramic Views</h3>
                            <p className='text-[#B4B4B4]'>Breathtaking 360-degree views of the city skyline from our elegant rooftop setting.</p>
                        </div>
                        <div className='bg-black p-8 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl'>
                            <div className='bg-red-600 p-4 rounded-full inline-block mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="white">
                                    <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"/>
                                </svg>
                            </div>
                            <h3 className='text-xl text-white font-bold mb-4'>Premium Service</h3>
                            <p className='text-[#B4B4B4]'>Exceptional hospitality and attention to detail for an unforgettable dining experience.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Highlights */}
            <div className='py-12 bg-[#292929]'>
                <div className='container mx-auto px-4'>
                    <div className='flex flex-col md:flex-row items-center gap-12 mb-20'>
                        <div className='md:w-1/2'>
                            <Image 
                                src="https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg" 
                                alt="Signature Dish" 
                                width={600} 
                                height={400} 
                                className='rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300'
                            />
                        </div>
                        <div className='md:w-1/2'>
                            <div className='h-2 w-14 bg-red-600 mb-6'></div>
                            <h3 className='text-3xl text-white font-bold mb-6'>Signature Dishes</h3>
                            <p className='text-[#B4B4B4] mb-6'>Our menu features a carefully curated selection of dishes that combine traditional flavors with modern culinary innovation. Each plate is crafted to perfection by our expert chefs.</p>
                            <ul className='space-y-4 mb-8 text-white'>
                                <li className='flex items-center gap-3'>
                                    <div className='bg-red-600 p-1 rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="white">
                                            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                                        </svg>
                                    </div>
                                    <span>Seasonal tasting menus</span>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <div className='bg-red-600 p-1 rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="white">
                                            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                                        </svg>
                                    </div>
                                    <span>Curated wine selection</span>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <div className='bg-red-600 p-1 rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="white">
                                            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                                        </svg>
                                    </div>
                                    <span>Vegetarian & vegan options</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row-reverse items-center gap-12'>
                        <div className='md:w-1/2'>
                            <Image 
                                src="/assets/images/rooftop/rooftop1.jpg" 
                                alt="Private Dining" 
                                width={600} 
                                height={400} 
                                className='rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300'
                            />
                        </div>
                        <div className='md:w-1/2'>
                            <div className='h-2 w-14 bg-red-600 mb-6'></div>
                            <h3 className='text-3xl text-white font-bold mb-6'>Private Dining</h3>
                            <p className='text-[#B4B4B4] mb-6'>Host your special occasions in our exclusive private dining areas. Perfect for intimate gatherings or corporate events.</p>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='bg-red-500 p-4 rounded-lg transform hover:-translate-y-1 transition-transform duration-300'>
                                    <h4 className='font-bold text-white mb-2'>Events</h4>
                                    <p className='text-sm text-gray-200'>Custom menus for your occasion</p>
                                </div>
                                <div className='bg-red-500 p-4 rounded-lg transform hover:-translate-y-1 transition-transform duration-300'>
                                    <h4 className='font-bold text-white mb-2'>Capacity</h4>
                                    <p className='text-sm text-gray-200'>Up to 50 guests</p>
                                </div>
                                <div className='bg-red-500 p-4 rounded-lg transform hover:-translate-y-1 transition-transform duration-300'>
                                    <h4 className='font-bold text-white mb-2'>Service</h4>
                                    <p className='text-sm text-gray-200'>Dedicated staff</p>
                                </div>
                                <div className='bg-red-500 p-4 rounded-lg transform hover:-translate-y-1 transition-transform duration-300'>
                                    <h4 className='font-bold text-white mb-2'>Ambiance</h4>
                                    <p className='text-sm text-gray-200'>Elegant & private</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reservation Section */}
            <div className='bg-[#292929] text-white py-12'>
                <div className='container mx-auto px-4 text-center'>
                    <div className='h-2 w-14 bg-red-600 mx-auto mb-8'></div>
                    <h2 className='text-2xl md:text-4xl font-bold mb-6'>Reserve Your Experience</h2>
                    <p className='text-gray-300 max-w-2xl mx-auto mb-12'>Join us for an unforgettable dining experience with spectacular views and exceptional cuisine.</p>
                    <div className='flex justify-center gap-6'>
                        <Link href="/contact-us" className='rac_btn text-xl'>
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Rooftop_restaurant;