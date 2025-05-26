import React from 'react'
import PageBanner from '../../components/PageBanner'
import Link from 'next/link'
import Image from 'next/image'

function SwimmingPool() {
    return (
        
        <div className="rac_main_wrapper">
            <PageBanner 
            pageTitle={`Swimming Pool`}
            bannerImage="bg-[url('/assets/images/pageBanner/pageBanner-2.jpg')]"
                    pageDescription="Experience luxury and relaxation in our Olympic-sized swimming pool with state-of-the-art facilities"
                />


                {/* Stats Section */}
                <div className='bg-[#292929] py-16'>
                    <div className='container mx-auto px-4'>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                            <div className='text-center'>
                                <div className='text-red-600 text-5xl font-bold mb-2'>25m</div>
                                <p className='text-white text-lg'>Pool Length</p>
                            </div>
                            <div className='text-center'>
                                <div className='text-red-600 text-5xl font-bold mb-2'>8</div>
                                <p className='text-white text-lg'>Swimming Lanes</p>
                            </div>
                            <div className='text-center'>
                                <div className='text-red-600 text-5xl font-bold mb-2'>28°C</div>
                                <p className='text-white text-lg'>Water Temperature</p>
                            </div>
                            <div className='text-center'>
                                <div className='text-red-600 text-5xl font-bold mb-2'>12+</div>
                                <p className='text-white text-lg'>Weekly Classes</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Zigzag Content Section */}
                <div className='py-20 bg-[#b4b4b4]'>
                    <div className='container mx-auto px-4'>
                        <div className='text-center mb-16'>
                            <div className='h-2 w-14 bg-red-600 mx-auto mb-6'></div>
                            <h2 className='text-4xl font-bold text-gray-900 mb-4'>Experience Aquatic Excellence</h2>
                            <p className='text-gray-600 max-w-2xl mx-auto'>Our swimming pool offers a range of features designed for your comfort and enjoyment</p>
                        </div>

                        {/* Feature 1 */}
                        <div className='flex flex-col md:flex-row items-center mb-20 relative'>
                            <div className='md:w-1/2 z-10'>
                                <Image 
                                    src="https://images.pexels.com/photos/1006311/pexels-photo-1006311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                    alt="Temperature Controlled Pool" 
                                    width={600} 
                                    height={400} 
                                    className='rounded-lg shadow-xl'
                                />
                            </div>
                            <div className='md:w-1/2 bg-black p-12 rounded-lg md:absolute md:right-0 md:mr-12 z-20'>
                                <div className='h-2 w-14 bg-red-600 mb-6'></div>
                                <h3 className='text-3xl text-white font-bold mb-6'>Temperature Controlled</h3>
                                <p className='text-[#B4B4B4] mb-6'>Our pool is maintained at the perfect temperature year-round, ensuring a comfortable swimming experience regardless of the season. The advanced climate control system keeps the water at an ideal 28°C.</p>
                                <div className='flex items-center gap-3'>
                                    <div className='bg-red-600 p-3 rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="white">
                                            <path d="M480-260q-92 0-156-64t-64-156q0-92 64-156t156-64q92 0 156 64t64 156q0 92-64 156t-156 64Z"/>
                                        </svg>
                                    </div>
                                    <span className='text-white'>Constant 28°C water temperature</span>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className='flex flex-col md:flex-row-reverse items-center mb-20 relative'>
                            <div className='md:w-1/2 z-10'>
                                <Image 
                                    src="https://images.pexels.com/photos/20045760/pexels-photo-20045760/free-photo-of-people-freediving-in-swimming-pool.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                    alt="Professional Instructors" 
                                    width={600} 
                                    height={400} 
                                    className='rounded-lg shadow-xl'
                                />
                            </div>
                            <div className='md:w-1/2 bg-black p-12 rounded-lg md:absolute md:left-0 md:ml-12 z-20'>
                                <div className='h-2 w-14 bg-red-600 mb-6'></div>
                                <h3 className='text-3xl text-white font-bold mb-6'>Expert Instruction</h3>
                                <p className='text-[#B4B4B4] mb-6'>Our team of certified swimming instructors provides top-quality training for swimmers of all ages and skill levels. Whether you're a beginner or looking to refine your technique, our coaches are here to help.</p>
                                <div className='flex items-center gap-3'>
                                    <div className='bg-red-600 p-3 rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="white">
                                            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"/>
                                        </svg>
                                    </div>
                                    <span className='text-white'>Certified professional instructors</span>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className='flex flex-col md:flex-row items-center relative'>
                            <div className='md:w-1/2 z-10'>
                                <Image 
                                    src="https://images.pexels.com/photos/6144105/pexels-photo-6144105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                    alt="Advanced Filtration" 
                                    width={600} 
                                    height={400} 
                                    className='rounded-lg shadow-xl'
                                />
                            </div>
                            <div className='md:w-1/2 bg-black p-12 rounded-lg md:absolute md:right-0 md:mr-12 z-20'>
                                <div className='h-2 w-14 bg-red-600 mb-6'></div>
                                <h3 className='text-3xl text-white font-bold mb-6'>Crystal Clear Water</h3>
                                <p className='text-[#B4B4B4] mb-6'>Our state-of-the-art filtration system ensures the water is always pristine and safe. We use the latest technology to maintain perfect water quality and clarity at all times.</p>
                                <div className='flex items-center gap-3'>
                                    <div className='bg-red-600 p-3 rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="white">
                                            <path d="M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Z"/>
                                        </svg>
                                    </div>
                                    <span className='text-white'>Advanced water purification system</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Full-width Hero Image */}
                <div className='relative w-full h-[600px] overflow-hidden'>
                    <Image 
                        src="https://images.pexels.com/photos/6012016/pexels-photo-6012016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Swimming Pool Panorama" 
                        fill
                        className='object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70'></div>
                    <div className='absolute bottom-0 left-0 right-0 py-24 px-4 md:p-16 text-white'>
                        <div className='container mx-auto'>
                            <div className='h-2 w-14 bg-red-600 mb-6'></div>
                            <h2 className='text-4xl md:text-5xl font-light mb-4 max-w-2xl'>Immerse Yourself in Luxury</h2>
                            <p className='text-xl max-w-2xl mb-8'>Our Olympic-sized swimming pool is designed for both competitive training and leisurely enjoyment.</p>
                            <div className='flex gap-4'>
                                
                                <div className='flex items-center gap-2 '>
                                    <div className='bg-red-600 rounded-full p-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
                                            <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
                                        </svg>
                                    </div>
                                    <span>Open 7 days a week</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='bg-red-600 rounded-full p-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
                                            <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
                                        </svg>
                                    </div>
                                    <span>25m Olympic Standard</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Activities Grid */}
                <div className='py-20 bg-[#b4b4b4]'>
                    <div className='container mx-auto px-4'>
                        <div className='text-center mb-16'>
                            <div className='h-2 w-14 bg-red-600 mx-auto mb-6'></div>
                            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>Aquatic Activities</h2>
                            <p className='text-gray-600 max-w-2xl mx-auto'>Discover the variety of activities available at our swimming pool</p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            <div className='relative group overflow-hidden rounded-lg'>
                                <Image 
                                    src="https://images.pexels.com/photos/1263425/pexels-photo-1263425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                    alt="Lap Swimming" 
                                    width={400} 
                                    height={300} 
                                    className='w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70'></div>
                                <div className='absolute bottom-0 left-0 right-0 p-6'>
                                    <h3 className='text-white text-2xl font-bold mb-2'>Lap Swimming</h3>
                                    <p className='text-gray-200'>Dedicated lanes for fitness and training</p>
                                </div>
                            </div>
                            <div className='relative group overflow-hidden rounded-lg'>
                                <Image 
                                    src="https://images.pexels.com/photos/9030301/pexels-photo-9030301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                    alt="Aqua Aerobics" 
                                    width={400} 
                                    height={300} 
                                    className='w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70'></div>
                                <div className='absolute bottom-0 left-0 right-0 p-6'>
                                    <h3 className='text-white text-2xl font-bold mb-2'>Aqua Aerobics</h3>
                                    <p className='text-gray-200'>Low-impact, high-energy fitness classes</p>
                                </div>
                            </div>
                            <div className='relative group overflow-hidden rounded-lg'>
                                <Image 
                                    src="https://images.pexels.com/photos/6011942/pexels-photo-6011942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                    alt="Swimming Lessons" 
                                    width={400} 
                                    height={300} 
                                    className='w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70'></div>
                                <div className='absolute bottom-0 left-0 right-0 p-6'>
                                    <h3 className='text-white text-2xl font-bold mb-2'>Swimming Lessons</h3>
                                    <p className='text-gray-200'>Professional instruction for all ages</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pool Schedule Section - Updated with new time slots and rules */}
                <div className='pb-16 bg-gradient-to-b from-[#b4b4b4] to-[#292929] text-white'>
                    <div className='container mx-auto md:px-4'>
                        <div className='text-center mb-16'>
                            <div className='h-2 w-14 bg-red-600 mx-auto mb-6'></div>
                            <h2 className='text-4xl md:text-5xl font-bold text-black mb-4'>Pool Schedule</h2>
                            <p className='text-gray-600 max-w-2xl mx-auto'>
                                The club’s indoor swimming pool is located on the ground floor. It features auto water treatment and an auto-adjustable water temperature system.
                            </p>
                        </div>
                        <div className='max-w-4xl mx-auto bg-black rounded-lg overflow-hidden shadow-2xl border border-gray-700 mb-12'>
                            <div className='bg-red-600 text-white py-4 px-6'>
                                <h3 className='text-xl font-bold'>Time Slots (8:00 AM – 10:30 PM)</h3>
                            </div>
                            <div className='p-3 md:p-6'>
                                <table className='min-w-full text-left'>
                                    <thead>
                                        <tr>
                                            <th className='px-6 py-4 text-lg text-red-400 font-semibold'>Session</th>
                                            <th className='px-6 py-4 text-lg text-red-400 font-semibold'>Days</th>
                                            <th className='px-6 py-4 text-lg text-red-400 font-semibold'>Hour</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-gray-200 text-sm md:text-base'>
                                        <tr className="border-b border-[#444]">
                                            <td className="md:px-6 py-4">Morning Session (Mixed)</td>
                                            <td className="md:px-6 py-4">Week Days</td>
                                            <td className="md:px-6 py-4">8:00 AM – 12:00 NOON</td>
                                        </tr>
                                        <tr className="border-b border-[#444]">
                                            <td className="md:px-6 py-4">Afternoon Session (Mixed)</td>
                                            <td className="md:px-6 py-4">Week Days</td>
                                            <td className="md:px-6 py-4">3:00 PM – 10:30 PM</td>
                                        </tr>
                                        <tr className="border-b border-[#444]">
                                            <td className="md:px-6 py-4">Exclusively for Female</td>
                                            <td className="md:px-6 py-4">All days except Fri, Sat & Govt. Holiday</td>
                                            <td className="md:px-6 py-4">12:00 NOON – 3:00 PM</td>
                                        </tr>
                                        <tr>
                                            <td className="md:px-6 py-4">Family</td>
                                            <td className="md:px-6 py-4">Friday, Saturday & Govt. Holiday</td>
                                            <td className="md:px-6 py-4">8:00 AM – 10:30 PM</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* Pool Rules Section */}
                        <div className="max-w-3xl mx-auto bg-black rounded-lg shadow-lg p-4 md:p-8">
                            <div className="h-2 w-14 bg-red-600 mb-6"></div>
                            <h3 className="text-3xl font-bold text-white mb-6">Pool Rules</h3>
                            <ul className="space-y-3 text-white text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-3 h-3 rounded-full bg-red-600 inline-block"></span>
                                    <span>Children must be supervised by an adult. Running on the pool deck is prohibited.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-3 h-3 rounded-full bg-red-600 inline-block"></span>
                                    <span>Diving is not allowed in shallow areas.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-3 h-3 rounded-full bg-red-600 inline-block"></span>
                                    <span>Proper swimsuit is required.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-3 h-3 rounded-full bg-red-600 inline-block"></span>
                                    <span>All swimmers must shower before entering the pool.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-3 h-3 rounded-full bg-red-600 inline-block"></span>
                                    <span>Glass containers are not allowed in the pool area.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-3 h-3 rounded-full bg-red-600 inline-block"></span>
                                    <span>Eating and drinking are permitted in the swimming pool areas.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-3 h-3 rounded-full bg-red-600 inline-block"></span>
                                    <span>Rough play, pushing, or dunking others is prohibited.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-3 h-3 rounded-full bg-red-600 inline-block"></span>
                                    <span>Only swim during designated pool hours.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-3 h-3 rounded-full bg-red-600 inline-block"></span>
                                    <span>Use of floating devices is subject to lifeguard approval.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-3 h-3 rounded-full bg-red-600 inline-block"></span>
                                    <span>Smoking is prohibited in the pool area.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-3 h-3 rounded-full bg-red-600 inline-block"></span>
                                    <span>Loud music or disruptive behavior is not allowed.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-3 h-3 rounded-full bg-red-600 inline-block"></span>
                                    <span>Users must keep valuable items and personal belongings in the designated locker.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 w-3 h-3 rounded-full bg-red-600 inline-block"></span>
                                    <span>Locker and The club management is not responsible for loss of items.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className='relative py-24 overflow-hidden'>
                    <Image 
                        src="/assets/images/guest-house-1.png" 
                        alt="Swimming Pool" 
                        fill
                        className='object-cover'
                    />
                    <div className='absolute inset-0 bg-black opacity-70'></div>
                    <div className='relative z-10 container mx-auto px-4 text-center'>
                        <div className='h-2 w-14 bg-red-600 mx-auto mb-8'></div>
                        <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>Ready to Dive In?</h2>
                        <p className='text-gray-300 max-w-2xl mx-auto mb-12'>Join our swimming pool today and experience the perfect blend of luxury, fitness, and relaxation.</p>
                        <Link href="/contact-us" className='rac_btn px-12 py-4 text-lg inline-block'>
                            Contact us
                        </Link>
                    </div>
                </div>
        </div>
        
    ) 
}

export default SwimmingPool;