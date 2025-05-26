import React from 'react'
import Layout from '../../components/layout/Layout'
import PageBanner from '../../components/PageBanner'
import Link from 'next/link'
import Image from 'next/image'

function Library() {
    return (
        <div className="rac_main_wrapper">
            <PageBanner 
            pageTitle={`Library`}
            bannerImage="bg-[url('/assets/images/pageBanner/pageBanner-2.jpg')]"
                    pageDescription="Discover our extensive collection of books, journals, and digital resources in a serene and sophisticated environment"
                />

                {/* Elegant Hero Section */}
                <div className='relative bg-[#b4b4b4] py-12 overflow-hidden'>
                    <div className='container mx-auto px-4 relative z-10'>
                        <div className='flex flex-col md:flex-row items-center gap-16'>
                            <div className='md:w-1/2'>
                                <div className='h-1 w-20 bg-red-600 mb-8'></div>
                                <h2 className='text-[#292929] text-4xl md:text-5xl font-serif mb-8 leading-tight'>
                                    A <span className='italic text-red-600'>Sanctuary</span> for <br />
                                    Knowledge and <span className='italic text-red-600'>Discovery</span>
                                </h2>
                                <p className='text-gray-800 text-lg mb-8 leading-relaxed'>Our library offers a tranquil retreat for reading, research, and reflection. With over 10,000 carefully curated volumes spanning literature, history, art, and contemporary affairs, we provide a sophisticated space for intellectual exploration.</p>
                                <Link href="/contact-us" className='inline-block px-10 py-3 bg-[#292929] text-white rounded-sm transition-transform hover:translate-y-[-3px] hover:shadow-lg'>
                                    Explore Collection
                                </Link>
                            </div>
                            <div className='md:w-1/2 relative'>
                                <div className='grid grid-cols-2 gap-2 md:gap-4'>
                                    <div className='space-y-2 md:space-y-4'>
                                        <div className='overflow-hidden rounded-sm shadow-lg transform transition-transform hover:scale-105'>
                                            <Image 
                                                src="https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                                alt="Library Reading Area" 
                                                width={300} 
                                                height={400} 
                                                className='w-full h-64 object-cover'
                                            />
                                        </div>
                                        <div className='overflow-hidden rounded-sm shadow-lg transform transition-transform hover:scale-105'>
                                            <Image 
                                                src="https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                                alt="Library Books" 
                                                width={300} 
                                                height={200} 
                                                className='w-full h-40 object-cover'
                                            />
                                        </div>
                                    </div>
                                    <div className='space-y-2 md:space-y-4 mt-8'>
                                        <div className='overflow-hidden rounded-sm shadow-lg transform transition-transform hover:scale-105'>
                                            <Image 
                                                src="https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                                alt="Library Study Area" 
                                                width={300} 
                                                height={200} 
                                                className='w-full h-40 object-cover'
                                            />
                                        </div>
                                        <div className='overflow-hidden rounded-sm shadow-lg transform transition-transform hover:scale-105'>
                                            <Image 
                                                src="https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                                alt="Library Shelves" 
                                                width={300} 
                                                height={400} 
                                                className='w-full h-64 object-cover'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='absolute -bottom-4 -right-4 w-full h-full border-solid border-1 border-red-600 -z-10'></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Collection Highlights */}
                <div className='py-12 bg-[#b4b4b4]'>
                    <div className='container mx-auto px-4'>
                        <div className='text-center mb-16'>
                            <div className='h-1 w-20 bg-red-600 mx-auto mb-6'></div>
                            <h2 className='text-[36px] md:text-4xl font-serif text-[#292929] mb-4'>Collection Highlights</h2>
                            <p className='text-gray-700 max-w-2xl mx-auto'>Explore our diverse and carefully curated literary treasures</p>
                        </div>
                        
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            <div className='bg-black p-8 rounded-sm shadow-md transition-all duration-300 hover:shadow-xl group'>
                                <div className='w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#292929] transition-colors'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="white">
                                        <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640h-80v280l-100-60-100 60v-280H240v640Zm0 0v-640 640Zm200-360 100-60 100 60-100-60-100 60Z"/>
                                    </svg>
                                </div>
                                <h3 className='text-2xl font-serif mb-4 group-hover:text-red-600 transition-colors'>Rare Classics</h3>
                                <p className=' mb-6'>Our rare classics collection features first editions and limited prints from renowned authors throughout literary history.</p>
                                <ul className='space-y-2 '>
                                    <li className='flex items-center gap-2'>
                                        <div className='w-1 h-1 bg-red-600 rounded-full'></div>
                                        <span>19th Century Literature</span>
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <div className='w-1 h-1 bg-red-600 rounded-full'></div>
                                        <span>Signed First Editions</span>
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <div className='w-1 h-1 bg-red-600 rounded-full'></div>
                                        <span>Historical Manuscripts</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className='bg-black p-8 rounded-sm shadow-md transition-all duration-300 hover:shadow-xl group'>
                                <div className='w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#292929] transition-colors'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M233.33-120q-64 0-108.66-44.67Q80-209.33 80-273.33T124.67-382q44.66-44.67 108.66-44.67T342-382q44.67 44.67 44.67 108.67T342-164.67Q297.33-120 233.33-120Zm494 0q-64 0-108.66-44.67Q574-209.33 574-273.33T618.67-382q44.66-44.67 108.66-44.67T836-382q44.67 44.67 44.67 108.67T836-164.67Q791.33-120 727.33-120Zm-494.06-66.67q35.73 0 61.23-25.44t25.5-61.16q0-35.73-25.44-61.23T233.39-360q-35.72 0-61.22 25.44t-25.5 61.17q0 35.72 25.44 61.22t61.16 25.5Zm494 0q35.73 0 61.23-25.44t25.5-61.16q0-35.73-25.44-61.23T727.39-360q-35.72 0-61.22 25.44t-25.5 61.17q0 35.72 25.44 61.22t61.16 25.5ZM480.67-534q-64 0-108.67-44.67-44.67-44.66-44.67-108.66T372-796q44.67-44.67 108.67-44.67T589.33-796Q634-751.33 634-687.33t-44.67 108.66Q544.67-534 480.67-534Zm-.06-66.67q35.72 0 61.22-25.44t25.5-61.16q0-35.73-25.44-61.23T480.73-774q-35.73 0-61.23 25.44T394-687.39q0 35.72 25.44 61.22t61.17 25.5Zm.06-86.66Zm246.66 414Zm-494 0Z"/></svg>
                                </div>
                                <h3 className='text-2xl font-serif mb-4 group-hover:text-red-600 transition-colors'>Contemporary Works</h3>
                                <p className=' mb-6'>Stay current with our extensive collection of contemporary literature, including bestsellers and award-winning titles.</p>
                                <ul className='space-y-2 '>
                                    <li className='flex items-center gap-2'>
                                        <div className='w-1 h-1 bg-red-600 rounded-full'></div>
                                        <span>Fiction & Non-Fiction</span>
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <div className='w-1 h-1 bg-red-600 rounded-full'></div>
                                        <span>Award Winners</span>
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <div className='w-1 h-1 bg-red-600 rounded-full'></div>
                                        <span>International Authors</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className='bg-black p-8 rounded-sm shadow-md transition-all duration-300 hover:shadow-xl group'>
                                <div className='w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#292929] transition-colors'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="white">
                                        <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z"/>
                                    </svg>
                                </div>
                                <h3 className='text-2xl font-serif mb-4 group-hover:text-red-600 transition-colors'>Digital Resources</h3>
                                <p className=' mb-6'>Access our comprehensive digital library with e-books, audiobooks, and online research databases.</p>
                                <ul className='space-y-2 '>
                                    <li className='flex items-center gap-2'>
                                        <div className='w-1 h-1 bg-red-600 rounded-full'></div>
                                        <span>E-book Collection</span>
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <div className='w-1 h-1 bg-red-600 rounded-full'></div>
                                        <span>Academic Journals</span>
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <div className='w-1 h-1 bg-red-600 rounded-full'></div>
                                        <span>Research Databases</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reading Spaces */}
                <div className='py-12 bg-[#292929] text-white'>
                    <div className='container mx-auto px-4'>
                        <div className='text-center mb-16'>
                            <div className='h-1 w-20 bg-red-600 mx-auto mb-6'></div>
                            <h2 className='text-4xl font-serif text-white mb-4'>Reading Spaces</h2>
                            <p className='text-gray-300 max-w-2xl mx-auto'>Discover our thoughtfully designed spaces for reading, studying, and contemplation</p>
                        </div>
                        
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                            <div className='relative'>
                                <div className='relative overflow-hidden rounded-sm'>
                                    <Image 
                                        src="https://www.contemporist.com/wp-content/uploads/2016/03/reading-rooms_120316_01a.jpg" 
                                        alt="Main Reading Room" 
                                        width={600} 
                                        height={400} 
                                        className='w-full h-[400px] object-cover transition-transform duration-700 hover:scale-105'
                                    />
                                </div>
                                <div className='absolute -bottom-8 -left-8 p-6 bg-red-600 rounded-sm'>
                                    <h3 className='text-2xl font-serif'>Main Reading Room</h3>
                                </div>
                            </div>
                            
                            <div>
                                <p className='text-gray-300 mb-8 leading-relaxed'>Our main reading room offers a sophisticated environment with comfortable seating, natural lighting, and a peaceful atmosphere conducive to focused reading and study.</p>
                                <div className='space-y-6'>
                                    <div className='flex items-start gap-4'>
                                        <div className='w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
                                                <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className='text-xl font-serif mb-2'>Quiet Zone Policy</h4>
                                            <p className='text-gray-400'>Our reading room maintains a strict quiet policy to ensure an optimal environment for concentration and study.</p>
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
                                                <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className='text-xl font-serif mb-2'>Ergonomic Furniture</h4>
                                            <p className='text-gray-400'>All seating is designed for comfort during extended reading or study sessions, with adjustable lighting at each station.</p>
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
                                                <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className='text-xl font-serif mb-2'>Wi-Fi & Power</h4>
                                            <p className='text-gray-400'>High-speed Wi-Fi and convenient power outlets are available throughout the reading room for digital research needs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-24'>
                            <div className='bg-black/30 p-8 rounded-sm transition-transform hover:translate-y-[-5px]'>
                                <div className='w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mb-6'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="white">
                                        <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80Zm-80 320q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640H240v640Zm0 0v-640 640Z"/>
                                    </svg>
                                </div>
                                <h3 className='text-xl font-serif mb-4'>Private Study Rooms</h3>
                                <p className='text-gray-400'>Reserve one of our private study rooms for focused work or small group discussions.</p>
                            </div>
                            
                            <div className='bg-black/30 p-8 rounded-sm transition-transform hover:translate-y-[-5px]'>
                                <div className='w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mb-6'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="white">
                                        <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/>
                                    </svg>
                                </div>
                                <h3 className='text-xl font-serif mb-4'>Quiet Lounges</h3>
                                <p className='text-gray-400'>Comfortable lounges with plush seating for a more relaxed reading experience.</p>
                            </div>
                            
                            <div className='bg-black/30 p-8 rounded-sm transition-transform hover:translate-y-[-5px]'>
                                <div className='w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mb-6'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="white">
                                        <path d="M280-280h400v-400H280v400ZM280-80q-33 0-56.5-23.5T200-160v-640q0-33 23.5-56.5T280-880h400q33 0 56.5 23.5T760-800v640q0 33-23.5 56.5T680-80H280Zm0-80h400v-640H280v640Zm0 0v-640 640Z"/>
                                    </svg>
                                </div>
                                <h3 className='text-xl font-serif mb-4'>Digital Media Center</h3>
                                <p className='text-gray-400'>Access our digital resources with high-performance computers and tablets available for use.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Animated Stats Section */}
                <div className='py-12 bg-[#f8f5f0] relative overflow-hidden'>
                    <div className='absolute top-0 left-0 w-full h-full'>
                        <div className='absolute top-10 right-10 w-40 h-40 bg-red-600 rounded-full opacity-5'></div>
                        <div className='absolute bottom-20 left-20 w-60 h-60 bg-red-600 rounded-full opacity-5'></div>
                    </div>
                    <div className='container mx-auto px-4 relative z-10'>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                            <div className='text-center transform transition-transform hover:scale-105'>
                                <div className='text-red-600 text-5xl font-serif mb-2 animate-pulse'>10,000+</div>
                                <p className=' text-lg'>Books & Publications</p>
                            </div>
                            <div className='text-center transform transition-transform hover:scale-105'>
                                <div className='text-red-600 text-5xl font-serif mb-2 animate-pulse' style={{animationDelay: '0.5s'}}>5,000+</div>
                                <p className=' text-lg'>Digital Resources</p>
                            </div>
                            <div className='text-center transform transition-transform hover:scale-105'>
                                <div className='text-red-600 text-5xl font-serif mb-2 animate-pulse' style={{animationDelay: '1s'}}>50+</div>
                                <p className=' text-lg'>Reading Stations</p>
                            </div>
                            <div className='text-center transform transition-transform hover:scale-105'>
                                <div className='text-red-600 text-5xl font-serif mb-2 animate-pulse' style={{animationDelay: '1.5s'}}>12</div>
                                <p className=' text-lg'>Private Study Rooms</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className='relative py-12 overflow-hidden'>
                    <Image 
                        src="https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Library Interior" 
                        fill
                        className='object-cover'
                    />
                    <div className='absolute inset-0 bg-black opacity-70'></div>
                    <div className='relative z-10 container mx-auto px-4 text-center'>
                        <div className='max-w-2xl mx-auto'>
                            <div className='h-1 w-20 bg-red-600 mx-auto mb-8'></div>
                            <h2 className='text-5xl font-serif text-white mb-6'>Become a Member Today</h2>
                            <p className='text-gray-300 mb-12'>Join our library and gain access to our extensive collection of books, digital resources, and exclusive reading spaces.</p>
                            <Link href="/contact-us" className='inline-block px-12 py-4 bg-red-600 text-white rounded-sm transition-transform hover:translate-y-[-3px] hover:shadow-lg text-lg'>
                                Membership Information
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    ) 
}

export default Library