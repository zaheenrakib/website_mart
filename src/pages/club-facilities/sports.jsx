import React from 'react'
import Layout from '../../components/layout/Layout'
import PageBanner from '../../components/PageBanner'
import Link from 'next/link'
import Image from 'next/image'

function Sports() {
    return (
        <div className="rac_main_wrapper">
            <PageBanner 
            pageTitle={`Sports (Indoor & Outdoor)`}
            bannerImage="bg-[url('/assets/images/pageBanner/pageBanner-2.jpg')]"
                    pageDescription="Experience world-class sporting facilities for both indoor and outdoor activities in a premium environment"
                />

                {/* Animated Hero Section */}
                <div className='relative overflow-hidden bg-gradient-to-r from-[#1a1a1a] to-[#292929] py-24'>
                    <div className='absolute top-0 left-0 w-full h-full'>
                        <div className='absolute top-20 left-10 w-20 h-20 bg-red-600 rounded-full opacity-20 animate-pulse'></div>
                        <div className='absolute top-40 right-20 w-32 h-32 bg-red-600 rounded-full opacity-10 animate-pulse' style={{animationDelay: '1s'}}></div>
                        <div className='absolute bottom-20 left-1/4 w-24 h-24 bg-red-600 rounded-full opacity-15 animate-pulse' style={{animationDelay: '2s'}}></div>
                    </div>
                    <div className='container mx-auto px-4 relative z-10'>
                        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
                            <div className='md:w-1/2'>
                                <h2 className='text-white text-4xl md:text-5xl font-light mb-8 md:leading-tight'>
                                    <span className='text-red-600'>Elevate</span> Your Game <br />
                                    <span className='text-red-600'>Unleash</span> Your Potential
                                </h2>
                                <p className='text-gray-300 text-lg mb-8'>Our state-of-the-art sports facilities cater to both casual enthusiasts and serious athletes. With professional-grade equipment and expert coaching, we provide the perfect environment to pursue your sporting passions.</p>
                                <div className='flex gap-4'>
                                    <Link href="/membership" className='inline-block px-8 py-3 border-2 border-solid border-red-600 text-red-600 rounded-md transition-colors hover:bg-red-600 hover:text-white'>
                                        Request for Membership
                                    </Link>
                                </div>
                            </div>
                            <div className='md:w-1/2 relative'>
                                <div className='absolute -top-4 -left-4 w-full h-full border-2 border-red-600 rounded-lg'></div>
                                <Image 
                                    src="https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                    alt="Sports Facilities" 
                                    width={600} 
                                    height={400} 
                                    className='rounded-lg shadow-xl relative z-10'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sports Categories */}
                <div className='py-20 bg-[#b4b4b4]'>
                    <div className='container mx-auto px-4'>
                        <div className='text-center mb-16'>
                            <div className='h-2 w-14 bg-red-600 mx-auto mb-6'></div>
                            <h2 className='text-4xl font-bold text-gray-900 mb-4'>Our Sports Facilities</h2>
                            <p className='text-gray-600 max-w-2xl mx-auto'>Discover our range of premium indoor and outdoor sporting facilities</p>
                        </div>
                        
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16]'>
                            <div className='bg-black rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2'>
                                <div className='relative h-64 overflow-hidden'>
                                    <Image 
                                        src="https://images.pexels.com/photos/2277981/pexels-photo-2277981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                        alt="Indoor Sports" 
                                        fill
                                        className='object-cover transition-transform duration-700 group-hover:scale-110'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70'></div>
                                    <div className='absolute bottom-0 left-0 right-0 p-6'>
                                        <h3 className='text-red-600 text-3xl font-bold'>Indoor Sports</h3>
                                    </div>
                                </div>
                                <div className='p-6'>
                                    <p className='text-white mb-6'>Our climate-controlled indoor facilities offer year-round comfort for a variety of sports and activities.</p>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-2 h-2 bg-red-600 rounded-full'></div>
                                            <span>Basketball Court</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-2 h-2 bg-red-600 rounded-full'></div>
                                            <span>Badminton Courts</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-2 h-2 bg-red-600 rounded-full'></div>
                                            <span>Squash Courts</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-2 h-2 bg-red-600 rounded-full'></div>
                                            <span>Table Tennis</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-2 h-2 bg-red-600 rounded-full'></div>
                                            <span>Indoor Pool</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-2 h-2 bg-red-600 rounded-full'></div>
                                            <span>Gymnasium</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='bg-black rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2'>
                                <div className='relative h-64 overflow-hidden'>
                                    <Image 
                                        src="https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                        alt="Outdoor Sports" 
                                        fill
                                        className='object-cover transition-transform duration-700 group-hover:scale-110'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70'></div>
                                    <div className='absolute bottom-0 left-0 right-0 p-6'>
                                        <h3 className='text-red-600 text-3xl font-bold'>Outdoor Sports</h3>
                                    </div>
                                </div>
                                <div className='p-6'>
                                    <p className='text-white mb-6'>Our beautifully maintained outdoor facilities provide the perfect setting for sports and recreation in the fresh air.</p>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-2 h-2 bg-red-600 rounded-full'></div>
                                            <span>Tennis Courts</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-2 h-2 bg-red-600 rounded-full'></div>
                                            <span>Football Field</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-2 h-2 bg-red-600 rounded-full'></div>
                                            <span>Cricket Pitch</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-2 h-2 bg-red-600 rounded-full'></div>
                                            <span>Outdoor Pool</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-2 h-2 bg-red-600 rounded-full'></div>
                                            <span>Jogging Track</span>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-2 h-2 bg-red-600 rounded-full'></div>
                                            <span>Golf Course</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Facilities with Parallax */}
                <div className='pb-4 bg-[#b4b4b4]'>
                    <div className='container mx-auto px-4'>
                        <div className='text-center mb-16'>
                            <div className='h-2 w-14 bg-red-600 mx-auto mb-6'></div>
                            <h2 className='text-4xl font-bold text-gray-900 mb-4'>Featured Facilities</h2>
                            <p className='text-gray-600 max-w-2xl mx-auto'>Explore our premium sporting venues designed for excellence</p>
                        </div>
                        
                        {/* Tennis Courts */}
                        <div className='mb-24 relative'>
                            <div className='flex flex-col md:flex-row items-center gap-8'>
                                <div className='md:w-1/2 relative'>
                                    <div className='relative overflow-hidden rounded-lg group'>
                                        <Image 
                                            src="https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                            alt="Tennis Courts" 
                                            width={600} 
                                            height={400} 
                                            className='rounded-lg transition-transform duration-700 group-hover:scale-105'
                                        />
                                        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300'></div>
                                    </div>
                                    <div className='absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-lg shadow-lg'>
                                        <p className='text-3xl font-bold'>6</p>
                                        <p className='text-sm'>Professional Courts</p>
                                    </div>
                                </div>
                                <div className='md:w-1/2'>
                                    <h3 className='text-3xl text-red-600 font-bold mb-4'>Tennis Courts</h3>
                                    <p className='text-gray-700 mb-6'>Our six professional-grade tennis courts are maintained to international standards. With both clay and hard court options, players of all levels can enjoy the perfect playing surface for their game.</p>
                                    <ul className='space-y-3 text-black font-bold'>
                                        <li className='flex items-center gap-3 '>
                                            <div className='bg-red-600 p-1 rounded-full'>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="white">
                                                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                                                </svg>
                                            </div>
                                            <span>Professional coaching available</span>
                                        </li>
                                        <li className='flex items-center gap-3'>
                                            <div className='bg-red-600 p-1 rounded-full'>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="white">
                                                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                                                </svg>
                                            </div>
                                            <span>Night lighting for evening play</span>
                                        </li>
                                        <li className='flex items-center gap-3'>
                                            <div className='bg-red-600 p-1 rounded-full'>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="white">
                                                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                                                </svg>
                                            </div>
                                            <span>Equipment rental service</span>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                        
                        {/* Basketball Court */}
                        <div className='mb-24 relative'>
                            <div className='flex flex-col md:flex-row-reverse items-center gap-8'>
                                <div className='md:w-1/2 relative'>
                                    <div className='relative overflow-hidden rounded-lg group'>
                                        <Image 
                                            src="https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                            alt="Basketball Court" 
                                            width={600} 
                                            height={400} 
                                            className='rounded-lg transition-transform duration-700 group-hover:scale-105'
                                        />
                                        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300'></div>
                                    </div>
                                    <div className='absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-lg shadow-lg'>
                                        <p className='text-3xl font-bold'>2</p>
                                        <p className='text-sm'>Full-Size Courts</p>
                                    </div>
                                </div>
                                <div className='md:w-1/2'>
                                    <h3 className='text-3xl text-red-600 font-bold mb-4'>Basketball Courts</h3>
                                    <p className='text-gray-700 mb-6'>Our indoor basketball facilities feature two full-size courts with professional flooring and equipment. Perfect for casual games, serious training, or organized tournaments.</p>
                                    <ul className='space-y-3 text-black font-bold'>
                                        <li className='flex items-center gap-3'>
                                            <div className='bg-red-600 p-1 rounded-full'>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="white">
                                                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                                                </svg>
                                            </div>
                                            <span>Climate-controlled environment</span>
                                        </li>
                                        <li className='flex items-center gap-3'>
                                            <div className='bg-red-600 p-1 rounded-full'>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="white">
                                                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                                                </svg>
                                            </div>
                                            <span>Electronic scoreboard</span>
                                        </li>
                                        <li className='flex items-center gap-3'>
                                            <div className='bg-red-600 p-1 rounded-full'>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="white">
                                                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                                                </svg>
                                            </div>
                                            <span>Weekly tournaments and leagues</span>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Animated Stats Section */}
                <div className='py-16 bg-[#292929] text-white relative overflow-hidden'>
                    <div className='absolute top-0 left-0 w-full h-full'>
                        <div className='absolute top-10 right-10 w-40 h-40 bg-red-600 rounded-full opacity-10 animate-pulse'></div>
                        <div className='absolute bottom-20 left-20 w-60 h-60 bg-red-600 rounded-full opacity-5 animate-pulse' style={{animationDelay: '1.5s'}}></div>
                    </div>
                    <div className='container mx-auto px-4 relative z-10'>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                            <div className='text-center transform transition-transform hover:scale-105'>
                                <div className='text-red-600 text-5xl font-bold mb-2 animate-pulse'>15+</div>
                                <p className='text-white text-lg'>Sports Facilities</p>
                            </div>
                            <div className='text-center transform transition-transform hover:scale-105'>
                                <div className='text-red-600 text-5xl font-bold mb-2 animate-pulse' style={{animationDelay: '0.5s'}}>20+</div>
                                <p className='text-white text-lg'>Professional Coaches</p>
                            </div>
                            <div className='text-center transform transition-transform hover:scale-105'>
                                <div className='text-red-600 text-5xl font-bold mb-2 animate-pulse' style={{animationDelay: '1s'}}>50+</div>
                                <p className='text-white text-lg'>Weekly Classes</p>
                            </div>
                            <div className='text-center transform transition-transform hover:scale-105'>
                                <div className='text-red-600 text-5xl font-bold mb-2 animate-pulse' style={{animationDelay: '1.5s'}}>1000+</div>
                                <p className='text-white text-lg'>Active Members</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Schedule Section */}
                <div className='py-20 bg-gradient-to-b from-[#292929] to-[#1a1a1a] text-white'>
                    <div className='container mx-auto px-4'>
                        <div className='text-center mb-16'>
                            <div className='h-2 w-14 bg-red-600 mx-auto mb-6'></div>
                            <h2 className='text-4xl font-bold text-white mb-4'>Weekly Schedule</h2>
                            <p className='text-gray-300 max-w-2xl mx-auto'>Join our organized sports activities throughout the week</p>
                        </div>
                        <div className='max-w-4xl mx-auto bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl border border-gray-700'>
                            <div className='bg-red-600 text-white py-4 px-6'>
                                <h3 className='text-xl font-bold'>Featured Activities</h3>
                            </div>
                            <div className='p-6'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    <div>
                                        <h4 className='font-bold text-lg mb-4 text-white'>Weekdays</h4>
                                        <ul className='space-y-3'>
                                            <li className='flex justify-between text-gray-200'>
                                                <span className='font-medium'>Tennis Coaching</span>
                                                <span>7:00 AM - 9:00 AM</span>
                                            </li>
                                            <li className='flex justify-between text-gray-200'>
                                                <span className='font-medium'>Basketball League</span>
                                                <span>5:00 PM - 7:00 PM</span>
                                            </li>
                                            <li className='flex justify-between text-gray-200'>
                                                <span className='font-medium'>Badminton Sessions</span>
                                                <span>7:00 PM - 9:00 PM</span>
                                            </li>
                                            <li className='flex justify-between text-gray-200'>
                                                <span className='font-medium'>Squash Tournament</span>
                                                <span>6:00 PM - 8:00 PM</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className='font-bold text-lg mb-4 text-white'>Weekends</h4>
                                        <ul className='space-y-3'>
                                            <li className='flex justify-between text-gray-200'>
                                                <span className='font-medium'>Family Sports Day</span>
                                                <span>9:00 AM - 12:00 PM</span>
                                            </li>
                                            <li className='flex justify-between text-gray-200'>
                                                <span className='font-medium'>Cricket Match</span>
                                                <span>2:00 PM - 6:00 PM</span>
                                            </li>
                                            <li className='flex justify-between text-gray-200'>
                                                <span className='font-medium'>Tennis Tournament</span>
                                                <span>10:00 AM - 4:00 PM</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section with Parallax */}
                <div className='relative py-24 overflow-hidden'>
                    <Image 
                        src="https://images.pexels.com/photos/2277981/pexels-photo-2277981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Sports Facilities" 
                        fill
                        className='object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80'></div>
                    <div className='relative z-10 container mx-auto px-4'>
                        <div className='max-w-2xl'>
                            <div className='h-2 w-14 bg-red-600 mb-8'></div>
                            <h2 className='text-5xl font-bold text-white mb-6'>Ready to Join Our Sporting Community?</h2>
                            <p className='text-gray-300 mb-12'>Become a member today and gain access to our world-class sports facilities, expert coaching, and vibrant community of sports enthusiasts.</p>
                            <div className='flex flex-wrap gap-4'>
                                <Link href="/contact-us" className='rac_btn px-12 py-4 text-lg inline-block transition-transform hover:scale-105'>
                                    Contact Us
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    ) 
}

export default Sports;