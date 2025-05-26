import React from 'react'
import Layout from '../../components/layout/Layout'
import PageBanner from '../../components/PageBanner'
import Link from 'next/link'
import Image from 'next/image'

function HealthCenter() {
    return (
        <Layout>
        <div className="rac_main_wrapper">
            <PageBanner 
            pageTitle={`Health Center & Gym`}
            bannerImage="bg-[url('/assets/images/pageBanner/pageBanner-2.jpg')]"
                    pageDescription="Transform your life with our state-of-the-art facilities and expert guidance"
                />

                {/* Hero Section */}
                <div className='relative bg-[#292929] py-24'>
                    <div className='container mx-auto px-4'>
                        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
                            <div className='md:w-1/2'>
                                <div className='h-2 w-14 bg-red-600 mb-8'></div>
                                <h2 className='text-white text-4xl md:text-5xl font-light mb-8'>Your Wellness Journey Begins Here</h2>
                                <p className='text-gray-300 text-lg mb-8'>Experience a transformative fitness journey in our modern health center. With cutting-edge equipment, expert trainers, and a supportive community, we're here to help you achieve your fitness goals.</p>
                                <Link href="/contact-us" className='rac_btn'>Start Your Journey</Link>
                            </div>
                            <div className='md:w-1/2'>
                                <div className='relative'>
                                    <Image 
                                        src="/assets/images/GYM.png" 
                                        alt="Modern Gym Equipment" 
                                        width={600} 
                                        height={400} 
                                        className='rounded-lg shadow-xl'
                                    />
                                    <div className='absolute -bottom-12 -left-5 md:-left-20 bg-red-600 text-white p-6 rounded-lg'>
                                        <p className='text-4xl font-bold mb-2'>24/7</p>
                                        <p className='text-sm'>Access Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- UMCL Gym Description Section --- */}
                <div className="bg-[#b4b4b4] py-16">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-1/2 w-full mb-8 md:mb-0">
                            <Image
                                src="/assets/images/gym.jpg"
                                alt="UMCL Gym Facilities"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 w-full">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">UMCL Gym Facilities</h3>
                            <p className="text-gray-700 text-lg mb-4">
                                The UMCL Gym is equipped with contemporary gym apparatus and facilities, including steam and sauna services.
                                Club Gym is a dependable standard for refining, sculpting, and enhancing your fitness. It encompasses approximately <span className="font-semibold text-red-600">1050 square feet</span> and a wide open space of <span className="font-semibold text-red-600">1683 square sft</span> for yoga and freehand exercise. The gym provides distinct workout schedules for male and female patrons.
                            </p>
                        </div>
                    </div>
                </div>
                {/* --- End UMCL Gym Description Section --- */}

                {/* Features Grid */}
                <div className='py-8 bg-[#b4b4b4]'>
                    <div className='container mx-auto px-4'>
                        <div className='text-center mb-16'>
                            <div className='h-2 w-14 bg-red-600 mx-auto mb-6'></div>
                            <h2 className='text-4xl font-bold text-gray-900 mb-4'>World-Class Facilities</h2>
                            <p className='text-gray-600 max-w-2xl mx-auto'>Our health center offers everything you need for a complete fitness experience</p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            <div className='bg-black p-8 rounded-lg transition-transform duration-300 hover:transform hover:-translate-y-2'>
                                <div className='bg-red-600 p-4 rounded-full inline-block mb-6'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="white">
                                        <path d="M240-120v-80h480v80H240Zm0-320v-80h480v80H240Zm0-320v-80h480v80H240ZM160-240v-480h80v480h-80Zm560 0v-480h80v480h-80Z"/>
                                    </svg>
                                </div>
                                <h3 className='text-xl text-white font-bold mb-4'>Modern Equipment</h3>
                                <p className='text-[#B4B4B4]'>Cycling, Treadmill, Dumbbells, Shoulder Press Machine, 4 Station GYM, Barbell Weight, Body massage vibrator and specialized training equipment from top brands.</p>
                            </div>
                            <div className='bg-black p-8 rounded-lg transition-transform duration-300 hover:transform hover:-translate-y-2'>
                                <div className='bg-red-600 p-4 rounded-full inline-block mb-6'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="white">
                                        <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/>
                                    </svg>
                                </div>
                                <h3 className='text-xl text-white font-bold mb-4'>Expert Trainers</h3>
                                <p className='text-[#B4B4B4]'>Certified personal trainers providing customized workout plans and guidance.</p>
                            </div>
                            <div className='bg-black p-8 rounded-lg transition-transform duration-300 hover:transform hover:-translate-y-2'>
                                <div className='bg-red-600 p-4 rounded-full inline-block mb-6'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="white">
                                        <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Z"/>
                                    </svg>
                                </div>
                                <h3 className='text-xl text-white font-bold mb-4'>Group Classes</h3>
                                <p className='text-[#B4B4B4]'>Diverse range of classes including yoga, HIIT, spinning, and more.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Alternating Content Blocks */}
                <div className='py-20 bg-[#292929]'>
                    <div className='container mx-auto px-4'>
                        <div className='flex flex-col md:flex-row items-center gap-12 mb-20'>
                            <div className='md:w-1/2'>
                                <Image 
                                    src="/assets/images/GYM-2.png" 
                                    alt="Personal Training" 
                                    width={600} 
                                    height={400} 
                                    className='rounded-lg shadow-lg'
                                />
                            </div>
                            <div className='md:w-1/2'>
                                <div className='h-2 w-14 bg-red-600 mb-6'></div>
                                <h3 className='text-3xl text-white font-bold mb-6'>Personal Training</h3>
                                <p className='text-[#B4B4B4] mb-6'>Our certified personal trainers work with you to create customized workout plans that align with your goals. Whether you're looking to build strength, lose weight, or improve overall fitness, we're here to guide you every step of the way.</p>
                                <ul className='space-y-4 mb-8'>
                                    <li className='flex items-center gap-3'>
                                        <div className='bg-red-600 p-1 rounded-full'>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="white">
                                                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                                            </svg>
                                        </div>
                                        <span>Customized workout plans</span>
                                    </li>
                                    <li className='flex items-center gap-3'>
                                        <div className='bg-red-600 p-1 rounded-full'>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="white">
                                                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                                            </svg>
                                        </div>
                                        <span>Nutrition guidance</span>
                                    </li>
                                    <li className='flex items-center gap-3'>
                                        <div className='bg-red-600 p-1 rounded-full'>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="white">
                                                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                                            </svg>
                                        </div>
                                        <span>Progress tracking</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row-reverse items-center gap-12'>
                            <div className='md:w-1/2'>
                                <Image 
                                    src="/assets/images/GYM-3.png" 
                                    alt="Group Classes" 
                                    width={600} 
                                    height={400} 
                                    className='rounded-lg shadow-lg '
                                />
                            </div>
                            <div className='md:w-1/2'>
                                <div className='h-2 w-14 bg-red-600 mb-6'></div>
                                <h3 className='text-3xl text-white font-bold mb-6'>Group Fitness Classes</h3>
                                <p className='text-[#B4B4B4] mb-6'>Join our energetic group classes led by experienced instructors. We offer a variety of classes to keep your workouts exciting and effective.</p>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='bg-red-500 p-4 rounded-lg flex flex-col md:flex-row md:justify-center items-center gap-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M264.67-160q-27.34 0-45.67-18.33-18.33-18.34-18.33-45.67 0-19 10-36.17 10-17.16 28-24.5l166.66-66v-122q-62 75-131.16 113.5Q205-320.67 120-320.67v-66.66q68 0 123.83-30.34 55.84-30.33 100.84-85.66L401.33-568q10.67-12.67 25-20.33 14.34-7.67 31-7.67h45.34q16.66 0 31.33 7.67 14.67 7.66 25.33 20.33L616-503.33q47 54 101.5 85t122.5 31v66.66q-84.33 0-153.83-38.5-69.5-38.5-131.5-113.5v122l166.66 66q18 7.34 28 24.5 10 17.17 10 36.17 0 27.33-18.33 45.67Q722.67-160 695.33-160h-298v-14q0-26 16.34-42.33Q430-232.67 456-232.67h128.67q8.33 0 14.16-5.83 5.84-5.83 5.84-14.17 0-8.33-5.84-14.16-5.83-5.84-14.16-5.84H456q-43.33 0-70.33 27.67t-27 71v14h-94ZM480-649.33q-31 0-53.17-22.17-22.16-22.17-22.16-53.17t22.16-53.16Q449-800 480-800t53.17 22.17q22.16 22.16 22.16 53.16 0 31-22.16 53.17Q511-649.33 480-649.33Z"/></svg>
                                        <div className='flex flex-col md:items-start items-center text-center'>
                                            <h4 className='font-bold text-white mb-2'>Yoga</h4>
                                            <p className='text-sm text-gray-200'>Find your balance and inner peace</p>
                                        </div>
                                    </div>
                                    <div className='bg-red-500 p-4 rounded-lg flex flex-col md:flex-row md:justify-center items-center gap-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M480.67-120.67 372-219.33q-86.67-79-142.83-135.67-56.17-56.67-89.34-101.67-33.16-45-46.33-84.33-13.17-39.33-13.17-82.67 0-92 61.67-154.16Q203.67-840 293.67-840q55.33 0 103.66 25 48.34 25 83.34 72.33Q516.33-790 564-815t103-25q90 0 151.67 62.17 61.66 62.16 61.66 154.16 0 43.34-13.16 82.67-13.17 39.33-46.34 84.33-33.16 45-89.33 101.67T588.67-219.33l-108 98.66ZM161-553.33h639.33q7.34-18.67 10.34-35.34 3-16.66 3-35 0-64.66-42.17-107.16T667-773.33q-49.67 0-92.17 30.16-42.5 30.17-70.16 82.5H456q-27.67-52.33-70.17-82.5-42.5-30.16-92.16-30.16-62.34 0-104.5 42.5Q147-688.33 147-623.67q0 18.34 3.33 35Q153.67-572 161-553.33Zm104 140h431.33q20-21 35.67-39.17 15.67-18.17 28-34.17H201.33q12.34 16 27.67 34.17 15.33 18.17 36 39.17Zm215.67 204q44.66-40.67 81.5-74.17Q599-317 629-346.67H332.33q30 29.67 66.84 63.17 36.83 33.5 81.5 74.17Zm0-344Z"/></svg>
                                        <div className='flex flex-col md:items-start md:text-left text-center'>
                                            <h4 className='font-bold text-white mb-2'>HIIT</h4>
                                            <p className='text-sm text-gray-200'>High intensity interval training</p>
                                        </div>
                                    </div>
                                    
                                    <div className='bg-red-500 p-4 rounded-lg flex flex-col md:flex-row md:justify-center items-center gap-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e3e3e3">
                                            <path d="M240-120v-80h480v80H240Zm0-320v-80h480v80H240Zm0-320v-80h480v80H240ZM160-240v-480h80v480h-80Zm560 0v-480h80v480h-80Z"/>
                                        </svg>
                                        <div className='flex flex-col md:items-start items-center text-center'>
                                            <h4 className='font-bold text-white mb-2'>Strength</h4>
                                            <p className='text-sm text-gray-200'>Build muscle and power</p>
                                        </div>
                                    </div>
                                    <div className='bg-red-500 p-4 rounded-lg flex flex-col md:flex-row md:justify-center items-center gap-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M206-206q-41-48-63.5-107.5T120-440q0-150 105-254.67 105-104.66 255-104.66 7.33 0 15 .33t13.67 1l-75.34-75.33L480-920l160 160-160 160-47.67-47.67L514.67-730q-8-1.33-18.34-2-10.33-.67-16.33-.67-122 0-207.67 85.34Q186.67-562 186.67-440q0 51 16.83 100t50.17 86.33L206-206Zm235.33-7.33q0-21.67-15.16-43.84Q411-279.33 393-302.83q-18-23.5-33.17-49.34-15.16-25.83-15.16-54.5 0-56 39.66-95.66Q424-542 480-542t95.67 39.67q39.66 39.66 39.66 95.66 0 28.67-15.16 54.5Q585-326.33 567-302.83q-18 23.5-33.17 45.66-15.16 22.17-15.16 43.84h-77.34ZM440-120v-53.33h80V-120h-80Zm314-86-47-47q30-36 48.17-83.67 18.16-47.66 18.16-103.33 0-66-27.5-124.5t-80.16-101.17L714-714q58 50 92 120.5T840-440q0 67-22.5 126.5T754-206Z"/></svg>
                                        <div className='flex flex-col md:items-start items-center text-center'>
                                            <h4 className='font-bold text-white mb-2'>Core Training</h4>
                                            <p className='text-sm text-gray-200'>Strengthen your foundation</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Gym Timing Section --- */}
                <div className="bg-[#292929] py-16">
                    <div className="container mx-auto md:px-6">
                        <div className="h-2 w-14 bg-red-600 mb-6"></div>
                        <h3 className="text-3xl font-bold text-white mb-8">Gym Schedule</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-[#232323] rounded-lg shadow-lg text-left">
                                <thead>
                                    <tr>
                                        <th className="px-2 md:px-6 py-4 text-lg text-red-400 font-semibold">Session</th>
                                        <th className="px-2 md:px-6 py-4 text-lg text-red-400 font-semibold">Days</th>
                                        <th className="px-2 md:px-6 py-4 text-lg text-red-400 font-semibold">Hour</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-200 text-xs md:text-lg">
                                    <tr className="border-b border-[#444]">
                                        <td className="px-2 md:px-6 py-4">Morning (Mixed)</td>
                                        <td className="px-2 md:px-6 py-4">Week Days</td>
                                        <td className="px-2 md:px-6 py-4">8:00 AM – 11:00 AM</td>
                                    </tr>
                                    <tr className="border-b border-[#444]">
                                        <td className="px-2 md:px-6 py-4">Afternoon (Mixed)</td>
                                        <td className="px-2 md:px-6 py-4">Week Days</td>
                                        <td className="px-2 md:px-6 py-4">2:30 PM – 10:30 PM</td>
                                    </tr>
                                    <tr className="border-b border-[#444]">
                                        <td className="px-2 md:px-6 py-4">Exclusively for Female</td>
                                        <td className="px-2 md:px-6 py-4">All days except Fri, Sat & Govt. Holiday</td>
                                        <td className="px-2 md:px-6 py-4">11:00 AM – 2:30 PM</td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 md:px-6 py-4">Family</td>
                                        <td className="px-2 md:px-6 py-4">Friday, Saturday & Govt. Holiday</td>
                                        <td className="px-2 md:px-6 py-4">8:00 AM – 10:30 AM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* --- End Gym Timing Section --- */}

                {/* --- Gym Rules Section --- */}
                <div className="bg-[#b4b4b4] py-16">
                    <div className="container mx-auto px-4">
                        <div className="h-2 w-14 bg-red-600 mb-6"></div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-8">Gym Rules</h3>
                        <ol className="list-decimal list-inside text-white text-lg space-y-3 max-w-2xl mx-auto bg-red-600/80 p-8 rounded-lg shadow">
                            <li>Sanitize equipment after use.</li>
                            <li>Return weights to racks.</li>
                            <li>Use a spotter when lifting.</li>
                            <li>Don't bring outside foods.</li>
                            <li>Lock your valuables in the locker.</li>
                            <li>Never slam or drop weights.</li>
                            <li>Follow the gym dress code.</li>
                            <li>Always bring a towel and water.</li>
                            <li>Respect other's personal space.</li>
                            <li>Keep music to yourself.</li>
                            <li>Enjoy your Workout.</li>
                        </ol>
                    </div>
                </div>
                {/* --- End Gym Rules Section --- */}

                {/* Membership Section */}
                
                <div className='bg-[url("https://images.unsplash.com/photo-1734668487893-d686f3c8d0cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center text-white py-20'>
                    <div className='container mx-auto px-4 text-center'>
                        <div className='h-2 w-14 bg-red-600 mx-auto mb-8'></div>
                        <h2 className='text-4xl font-bold mb-6'>Ready to Transform Your Life?</h2>
                        <p className='text-gray-300 max-w-2xl mx-auto mb-12'>Join our health center today and get access to all our premium facilities, expert trainers, and exclusive member benefits.</p>
                        <div className='flex justify-center gap-6'>
                            <Link href="/contact-us" className='rac_btn text-xl h-6 px-4 py-2'>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
        </Layout>
    ) 
}

export default HealthCenter;