import React from 'react'
import PageBanner from '../../components/PageBanner'
import Image from 'next/image'
import Link from 'next/link'

const Club_policy = () => {
  return (
    <div className="rac_main_wrapper bg-[#1c1c1c]">
      <PageBanner 
        pageTitle="Club Rules"
        bannerImage="bg-[url('/assets/images/pageBanner/pageBanner-2.jpg')]"
        pageDescription="Understanding our guidelines and regulations for a harmonious club experience"
      />

      {/* Main Policy Section */}
      <div className='relative bg-[#1C1C1C] py-14 overflow-hidden'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row gap-16'>
            <div className='md:w-1/2'>
              <div className='h-1 w-20 bg-red-600 mb-8'></div>
              <h2 className='text-white text-4xl md:text-5xl font-serif mb-8 leading-tight'>
                Club <span className='italic text-red-600'>Guidelines</span> & <br />
                <span className='italic text-red-600'>Regulations</span>
              </h2>
              <p className='   text-lg mb-8 leading-relaxed'>
                Our club policies are designed to ensure all members enjoy their experience while maintaining the highest standards of conduct and mutual respect.
              </p>
              <div className='space-y-6'>
                <div className='flex items-start gap-4 group'>
                  <div className='w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#292929] transition-colors'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
                      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-xl font-serif mb-2 text-red-600'>Membership Guidelines</h3>
                    <p className='text-slate-100'>Comprehensive information about membership categories, fees, and privileges.</p>
                  </div>
                </div>

                <div className='flex items-start gap-4 group'>
                  <div className='w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#292929] transition-colors'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
                      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-xl font-serif mb-2 text-red-600'>Code of Conduct</h3>
                    <p className='text-slate-100'>Expected behavior and etiquette for all club members and guests.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='md:w-1/2 relative'>
              <div className='overflow-hidden rounded-sm shadow-xl'>
                <Image 
                  src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Club Policy"
                  width={600}
                  height={400}
                  className='w-full h-[500px] object-cover'
                />
              </div>
              <div className='absolute -bottom-4 -right-4 w-full h-full border border-red-600 -z-10'></div>
            </div>
          </div>
        </div>
      </div>

      {/* Guest Policy Section */}
      <div className='bg-[#1C1C1C] py-8'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='flex items-center gap-4 mb-12'>
              <div className='w-12 h-12 bg-red-600 rounded-full flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
                  <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Z"/>
                </svg>
              </div>
              <h3 className='text-3xl font-serif text-white'>Guest Policies</h3>
            </div>

            <div className='bg-black rounded-lg shadow-2xl p-4 md:p-8 border-1 border-solid border-gray-400'>
              <ul className='space-y-4 text-white text-sm md:text-lg'>
                <li className='flex items-start gap-3'>
                  <span className='mt-2 w-3 h-3 rounded-full bg-red-600 flex-shrink-0'></span>
                  <span>Permanent, Life and Donor Members may introduce guests in the club, if accompanied themselves.</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-2 w-3 h-3 rounded-full bg-red-600 flex-shrink-0'></span>
                  <span className='text-red-400 font-medium'>"Local Guest" (residents of Dhaka) is strictly not allowed in the Club premises.</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-2 w-3 h-3 rounded-full bg-red-600 flex-shrink-0'></span>
                  <span>"Foreign National Guest" (holding Foreign Passport) is allowed for using the Lounge and Restaurants only.</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-2 w-3 h-3 rounded-full bg-red-600 flex-shrink-0'></span>
                  <span>"Outstation Guest" (resident of areas other than Dhaka) is allowed the use of Club Facilities for a period of 07 (seven) days in a calendar month.</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-2 w-3 h-3 rounded-full bg-red-600 flex-shrink-0'></span>
                  <span>Family Members other than Spouse and Children are allowed to use Restaurants for dining purpose with prior intimation.</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-2 w-3 h-3 rounded-full bg-red-600 flex-shrink-0'></span>
                  <span>Members introducing guest(s) are required to register the name(s), address, contact number(s) of their guest(s) in the "Guest Register" available with the Main Reception for issuance of "VISITOR PASS".</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-2 w-3 h-3 rounded-full bg-red-600 flex-shrink-0'></span>
                  <span>All Guests must maintain the Dress Code of the Club.</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-2 w-3 h-3 rounded-full bg-red-600 flex-shrink-0'></span>
                  <span>Member and his/her Guest(s) must obtain Liquor Permit from the Department of Narcotics Control while using the Lounge facility.</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-2 w-3 h-3 rounded-full bg-red-600 flex-shrink-0'></span>
                  <span className='text-red-400 font-medium'>Any miss-declaration will be treated as violation of the club discipline against the member introducing guests.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Policy Sections */}
      <div className='bg-[#1c1c1c]  '>
        <div className='container mx-auto px-4'>
          <div className='space-y-20'>
            {/* Dress Code Policy */}
            <div className='md:px-10 pt-4 rounded-sm shadow-lg'>
              <div className='flex items-center gap-4 mb-8'>
                <div className='w-12 h-12 bg-red-600 rounded-full flex items-center justify-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
                    <path d="M480-120q-33 0-56.5-23.5T400-200v-160H280q-33 0-56.5-23.5T200-440v-280q0-33 23.5-56.5T280-800h400q33 0 56.5 23.5T760-720v280q0 33-23.5 56.5T680-360H560v160q0 33-23.5 56.5T480-120Zm0-440Zm-40 160h80v-160h160v-160H280v160h160v160Z"/>
                  </svg>
                </div>
                <h3 className='text-3xl font-serif text-red-600'>Dress Code Rules</h3>
              </div>
              <div className='grid md:grid-cols-3 gap-8'>
                <div className='p-6 border border-gray-200 rounded-sm'>
                  <h4 className='text-xl font-serif mb-4 text-red-600'>Formal Areas</h4>
                  <ul className='space-y-3'>
                    <li>• Business formal or smart casual attire</li>
                    <li>• Collared shirts required for men</li>
                    <li>• No denim or athletic wear</li>
                    <li>• Formal footwear required</li>
                    <li>• No shorts or sleeveless attire</li>
                  </ul>
                </div>
                <div className='p-6 border border-gray-200 rounded-sm'>
                  <h4 className='text-xl font-serif mb-4 text-red-600'>Casual Areas</h4>
                  <ul className='space-y-3 '>
                    <li>• Smart casual attire acceptable</li>
                    <li>• Clean, neat denim permitted</li>
                    <li>• Polo shirts and t-shirts allowed</li>
                    <li>• Casual but presentable footwear</li>
                    <li>• No beachwear or flip-flops</li>
                  </ul>
                </div>
                <div className='p-6 border border-gray-200 rounded-sm'>
                  <h4 className='text-xl font-serif mb-4 text-red-600'>Sports Areas</h4>
                  <ul className='space-y-3 '>
                    <li>• Proper sports attire required</li>
                    <li>• Clean athletic shoes mandatory</li>
                    <li>• Swimming attire for pool area only</li>
                    <li>• Change of clothes required after sports</li>
                    <li>• Sports-specific gear as needed</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* Club Timing Policy */}
            <div className='md:px-10 pb-16 rounded-sm shadow-lg'>
              <div className='flex items-center gap-4 mb-8'>
                <div className='w-12 h-12 bg-red-600 rounded-full flex items-center justify-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
                    <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/>
                  </svg>
                </div>
                <h3 className='text-3xl font-serif text-red-600'>Club Timing Rules</h3>
              </div>
              <div className='grid md:grid-cols-3 gap-8'>
                <div className='p-6 border border-gray-200 rounded-sm'>
                  <h4 className='text-xl font-serif mb-4 text-red-600'>General Hours</h4>
                  <ul className='space-y-3 '>
                    <li>• Weekdays: 6:00 AM - 11:00 PM</li>
                    <li>• Weekends: 7:00 AM - 10:00 PM</li>
                    <li>• Holidays: 8:00 AM - 9:00 PM</li>
                    <li>• Last entry: 1 hour before closing</li>
                  </ul>
                </div>
                <div className='p-6 border border-gray-200 rounded-sm'>
                  <h4 className='text-xl font-serif mb-4 text-red-600'>Facility-Specific Times</h4>
                  <ul className='space-y-3 '>
                    <li>• Swimming Pool: 6:00 AM - 9:00 PM</li>
                    <li>• Gym: 5:00 AM - 10:00 PM</li>
                    <li>• Restaurant: 7:00 AM - 11:00 PM</li>
                    <li>• Sports Courts: 7:00 AM - 10:00 PM</li>
                  </ul>
                </div>
                <div className='p-6 border border-gray-200 rounded-sm'>
                  <h4 className='text-xl font-serif mb-4 text-red-600'>Special Timings</h4>
                  <ul className='space-y-3 '>
                    <li>• Ladies-only hours: 9:00 AM - 11:00 AM</li>
                    <li>• Maintenance: Monday 2:00 PM - 4:00 PM</li>
                    <li>• Event bookings: 24-hour notice</li>
                    <li>• Extended hours on special occasions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='relative py-24 bg-black overflow-hidden'>
        <div className='container mx-auto px-4 text-center'>
          <div className='max-w-2xl mx-auto'>
            <div className='h-1 w-20 bg-red-600 mx-auto mb-8'></div>
            <h2 className='text-2xl md:text-4xl font-serif text-white mb-6'>Have Questions About Our Rules?</h2>
            <p className='text-gray-300 mb-12'>Our membership team is here to help you understand our club policies and guidelines.</p>
            <Link href="/contact-us" 
              className='inline-block px-10 py-4 bg-red-600 text-white rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Policy categories data

export default Club_policy