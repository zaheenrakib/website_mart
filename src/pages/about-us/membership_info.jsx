import PageBanner from '../../components/PageBanner'
import Image from 'next/image'
import Link from 'next/link'

function MembershipInfo() {
    return (
        
        <div className="rac_main_wrapper">
            <PageBanner 
                pageTitle="Membership Info"
                bannerImage="bg-[url('/assets/images/pageBanner/pageBanner-2.jpg')]"
                pageDescription="Join our exclusive club and experience luxury living at its finest"
            />

            {/* Requirements Section */}
            <div className='bg-[#292929] py-14'>
                <div className='container mx-auto px-4'>
                    
                    <div className="text-center md:pb-10 pb-8">
                        <div className="h-1 w-20 bg-red-600 mx-auto mb-6"></div>
                        <h2 className="text-4xl md:text-5xl text-white font-light mb-4 md:mb-5">Membership Requirements</h2>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            To maintain our club's prestigious standards, we require all members to meet the following criteria
                        </p>
                    </div>


                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='bg-black/50 p-8 rounded-lg'>
                            <div className='bg-red-600 rounded-full w-12 h-12 flex items-center justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
                                    <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"/>
                                </svg>
                            </div>
                            <h3 className='text-white text-xl font-bold mb-4'>Age Requirement</h3>
                            <ul className='text-gray-300 space-y-2'>
                                <li>• Minimum age of 21 years</li>
                                <li>• Valid government ID required</li>
                                <li>• Family membership available</li>
                            </ul>
                        </div>
                        <div className='bg-black/50 p-8 rounded-lg'>
                            <div className='bg-red-600 rounded-full w-12 h-12 flex items-center justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
                                    <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"/>
                                </svg>
                            </div>
                            <h3 className='text-white text-xl font-bold mb-4'>Documentation</h3>
                            <ul className='text-gray-300 space-y-2'>
                                <li>• Proof of residence</li>
                                <li>• Professional references</li>
                                <li>• Background verification</li>
                            </ul>
                        </div>
                        <div className='bg-black/50 p-8 rounded-lg'>
                            <div className='bg-red-600 rounded-full w-12 h-12 flex items-center justify-center mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
                                    <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"/>
                                </svg>
                            </div>
                            <h3 className='text-white text-xl font-bold mb-4'>Code of Conduct</h3>
                            <ul className='text-gray-300 space-y-2'>
                                <li>• Professional etiquette</li>
                                <li>• Dress code compliance</li>
                                <li>• Club rules adherence</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Membership Benefits */}
            <div className='pb-1 bg-[#292929]'>
                <div className='container mx-auto px-4'>

                    <div className="text-center md:pb-10 pb-8">
                        <div className="h-1 w-20 bg-red-600 mx-auto mb-6"></div>
                        <h2 className="text-4xl md:text-5xl text-white font-light mb-4 md:mb-5">Exclusive Benefits</h2>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            Enjoy premium amenities and services as a member of our prestigious club
                        </p>
                    </div>

                    {/* Feature 1 */}
                    <div className='flex flex-col md:flex-row items-center mb-20 relative'>
                        <div className='md:w-1/2 z-10'>
                            <Image 
                                src="/assets/images/guest-house-1.png"
                                alt="Premium Facilities" 
                                width={600} 
                                height={400} 
                                className='rounded-lg shadow-xl'
                            />
                        </div>
                        <div className='md:w-1/2 bg-black p-10 md:p-12 rounded-lg md:absolute md:right-0 md:mr-12 z-20'>
                            <div className='h-2 w-14 bg-red-600 mb-6'></div>
                            <h3 className='text-3xl text-white font-bold mb-6'>Premium Facilities</h3>
                            <p className='text-[#B4B4B4] mb-6'>Access to all club amenities including swimming pool, gym, spa, sports facilities, and exclusive lounges.</p>
                            <ul className='text-white space-y-3'>
                                <li className='flex items-center gap-2'>
                                    <div className='bg-red-600 p-1 rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16" fill="white">
                                            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"/>
                                        </svg>
                                    </div>
                                    <span>24/7 access to facilities</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <div className='bg-red-600 p-1 rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16" fill="white">
                                            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"/>
                                        </svg>
                                    </div>
                                    <span>Priority booking for events</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className='flex flex-col md:flex-row-reverse items-center mb-20 relative'>
                        <div className='md:w-1/2 z-10'>
                            <Image 
                                src="/assets/images/event.jpg"
                                alt="Exclusive Events" 
                                width={600} 
                                height={400} 
                                className='rounded-lg shadow-xl'
                            />
                        </div>
                        <div className='md:w-1/2 bg-black p-10 md:p-12 rounded-lg md:absolute md:left-0 md:ml-12 z-20'>
                            <div className='h-2 w-14 bg-red-600 mb-6'></div>
                            <h3 className='text-3xl text-white font-bold mb-6'>Exclusive Events</h3>
                            <p className='text-[#B4B4B4] mb-6'>Special access to member-only events, networking opportunities, and social gatherings.</p>
                            <ul className='text-white space-y-3'>
                                <li className='flex items-center gap-2'>
                                    <div className='bg-red-600 p-1 rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16" fill="white">
                                            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"/>
                                        </svg>
                                    </div>
                                    <span>VIP event access</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <div className='bg-red-600 p-1 rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16" fill="white">
                                            <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"/>
                                        </svg>
                                    </div>
                                    <span>Exclusive dining experiences</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* CTA Section */}
            <div className='relative py-24 overflow-hidden'>
                <Image 
                    src="/assets/images/guest-house-1.png"
                    alt="Membership" 
                    fill
                    className='object-cover'
                />
                <div className='absolute inset-0 bg-black opacity-70'></div>
                <div className='relative z-10 container mx-auto px-4 text-center'>
                    <div className='h-2 w-14 bg-red-600 mx-auto mb-8'></div>
                    <h2 className='text-5xl font-bold text-white mb-6'>Ready to Join?</h2>
                    <p className='text-gray-300 max-w-2xl mx-auto mb-12'>Begin your journey to exclusive club membership and experience luxury living at its finest.</p>
                    <Link href="/contact-us" className='bg-red-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors inline-block'>
                        Apply for Membership
                    </Link>
                </div>
            </div>
        </div>
        
    )
}

export default MembershipInfo;