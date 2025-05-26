import React from 'react'
import PageBanner from '../../components/PageBanner'
import Image from 'next/image'

const presidentMessage = () => {
  return (
    <div className="rac_main_wrapper">

        <PageBanner 
            pageTitle={`President's Message`}
            bannerImage="bg-[url('/assets/images/pageBanner/pageBanner-2.jpg')]"
            pageDescription="A warm welcome from our club president, S. M. Masud Alam (Tapan). Discover his vision for UMCL."
        />
        <div className="rac_section rac_about_wrapper py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="rac_about_content">
                    <div className="rac_about_box p-4 md:p-10 bg-[#1a1a1a] rounded-xl">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
                            <div className="w-full lg:w-2/3">
                                <div className="rac_about_text space-y-6">
                                    <h4 className="text-2xl md:text-3xl mb-2 text-white">President's Message</h4>
                                    <p className="text-gray-300">
                                        Dear Viewers and Members,
                                    </p>
                                    <p className="text-gray-300">
                                        I am delighted and excited to welcome you to the Uttara Model Club Limited (UMCL) website!
                                    </p>
                                    <p className="text-gray-300 text-justify">
                                        Our group is more than simply a club; it's a family where people with similar interests join together to celebrate each other's victories and support one another when things get tough. We are a group of people who cherish friendship, support, and fellowship; we are more than just a club.
                                    </p>
                                    <p className="text-gray-300 text-justify">
                                        Since its founding in 2011 by a foundation of legend, UMCL has advanced significantly moved to its own land, and constructed a six-storied building with larger facilities. We are developing and expanding every day, and this website is just another phase in our future-focused process. It serves as a channel for communication with our members' families.
                                        Our website provides a portal for exploring our history, achievements, and events; it serves as more than just a webpage. We can interact, exchange ideas, and display our skills there. With about 952 members, we are a family that takes pride in becoming an exclusive club. Leading figures from a wide range of industries, including engineers, commerce, civil and military bureaucracy, professionals, the arts, culture, literature, and the media, as well as prominent corporate executives, are among our members.
                                        I'm confident that you will experience the warmth and passion of our community as you explore our website. As a home away from home, we are more than just a club. Thus, join our family, keep up with our happenings, and allow us to develop and change together. Together, we can fortify the ties that bind the UMCL family and make this an interactive experience. If we work together, we can do anything!
                                    </p>
                                    <p className="text-gray-300">Best wishes,</p>
                                </div>
                                <div className="rac_about_bottom mt-8">
                                    <div className="rac_about_name space-y-4">
                                        <Image
                                            // src="/assets/images/demo/signature.webp"
                                            src="/assets/images/president_sign/president-sign.png"
                                            alt="President's signature"
                                            height={1000}
                                            width={160}
                                            className="object-contain"
                                        />
                                        <h4 className="text-xl text-white">S. M. Masud Alam (Tapan)</h4>
                                        <p className="text-gray-400">President, Constitution, Membership, Discipline, Development & Maintenance, and Internal Audit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3">
                                <Image
                                    src="/assets/images/members/1. S M Masud Alam Tapan AC- 0043 FL President.jpg"
                                    alt="President S. M. Masud Alam (Tapan)"
                                    height={800}
                                    width={400}
                                    className="rounded-xl w-full h-auto object-cover shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default presidentMessage