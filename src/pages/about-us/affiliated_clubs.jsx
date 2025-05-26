import React from 'react'
import PageBanner from '../../components/PageBanner'
import Image from 'next/image'
import Link from 'next/link'

function affiliated_clubs() {
  return (
    <div className="rac_main_wrapper">
      <PageBanner 
        pageTitle={`Affiliated Clubs`}
        bannerImage="bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3')]"
        pageDescription="Discover our network of prestigious partner clubs and the exclusive benefits of our global affiliations"
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-[#0f0f0f] to-[#161616] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-red-600/5 animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-red-600/5 animate-pulse" ></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="h-1 w-20 bg-red-600"></div>
              <h2 className="text-4xl md:text-5xl text-white font-light leading-tight">
                Global Network of
                <span className="block text-red-500 mt-3">Excellence</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Experience world-class hospitality across our network of affiliated clubs. Our partnerships span continents, offering members exclusive access to premier facilities and services worldwide.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-500 group">
                  <div className="text-red-500 text-4xl font-light mb-3 group-hover:scale-110 transition-transform duration-500">50+</div>
                  <p className="text-gray-300">Partner Clubs</p>
                </div>
                <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800 hover:border-red-500 transition-all duration-500 group">
                  <div className="text-red-500 text-4xl font-light mb-3 group-hover:scale-110 transition-transform duration-500">20+</div>
                  <p className="text-gray-300">Countries</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-8">
              <div className="space-y-6 md:space-y-8">
                <div className="relative h-80 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-700 shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018"
                    alt="Club Interior"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-56 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-700 shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce"
                    alt="Club Facilities"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 md:space-y-8 transform translate-y-16">
                <div className="relative h-56 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-700 shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c"
                    alt="Club Event"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-80 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-700 shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1606402179428-a57976d71fa4"
                    alt="Club Meeting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clubs Section */}
      <section className="py-14 bg-gradient-to-b from-[#161616] to-[#0f0f0f]">
        <div className="container mx-auto px-4">

          <div className="text-center md:pb-10 pb-8">
              <div className="h-1 w-20 bg-red-600 mx-auto mb-6"></div>
              <h2 className="text-4xl md:text-5xl text-white font-light mb-4 md:mb-5">Featured Partners</h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Explore our network of prestigious affiliated clubs offering world-class facilities and exclusive experiences
              </p>
          </div>

          <div className="space-y-12">
            {featuredClubs.map((club, index) => (
              <div key={index} 
                className="bg-[#1d1d1d] rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-500 shadow-xl group"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative h-80 md:h-auto overflow-hidden">
                    <Image
                      src={club.image}
                      alt={club.name}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                  </div>
                  <div className="md:w-2/3 p-6 md:p-12">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-red-500 text-lg">{club.location}</span>
                      <div className="h-0.5 w-12 bg-red-500/30"></div>
                    </div>
                    <h3 className="text-3xl text-white mb-4 group-hover:text-red-500 transition-colors duration-300">{club.name}</h3>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">{club.description}</p>
                    <div className="grid grid-cols-2 gap-6">
                      {club.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-4 group/item">
                          <div className="w-2 h-2 bg-red-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                          <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">{amenity}</span>
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

      {/* Benefits Section */}
      <section className="pb-10 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-red-600/5 animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-red-600/5 animate-pulse" ></div>
        </div>
        <div className="container mx-auto px-4 relative">

          <div className="text-center md:pb-10 pb-8">
              <div className="h-1 w-20 bg-red-600 mx-auto mb-6"></div>
              <h2 className="text-4xl md:text-5xl text-white font-light mb-4 md:mb-5">Member Benefits</h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Enjoy exclusive privileges and access to premium facilities across our network

              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative">
                <div className="bg-[#1d1d1d] rounded-lg p-6 md:p-10 h-full border border-gray-800 hover:border-red-500 transition-all duration-500 group">
                  <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-red-500/20 transition-colors duration-500">
                    <span className="text-red-500 text-2xl font-light group-hover:scale-125 transition-transform duration-500">{benefit.icon}</span>
                  </div>
                  <h3 className="text-2xl text-white mb-4 group-hover:text-red-500 transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40">
        <Image 
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018"
          alt="Club Interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="h-1 w-20 bg-red-600 mb-12"></div>
            <h2 className="text-4xl md:text-5xl text-white mb-8 font-light leading-tight">Experience Global<br/><span className="text-red-500">Club Benefits</span></h2>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
            The club may enter into reciprocal affiliation on mutual understanding. The club would like to enhance its fellowship and friendship and allow members of other clubs to use its facilities and amenities for a limited period of the year.
            The present Executive Committee desired to have some affiliation with renowned social clubs in the country and abroad.
            </p>
            <Link href="/membership" className="rac_btn">
              Explore Membership
            </Link>
          </div>
        </div>
      </section>
    </div>
  ) 
}

// Data
const featuredClubs = [
  {
    name: "The Metropolitan Club",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
    description: "A prestigious urban retreat in the heart of Manhattan, offering world-class amenities and spectacular city views.",
    amenities: [
      "Fine Dining Restaurant",
      "Business Center",
      "Fitness Facilities",
      "Event Spaces"
    ]
  },
  {
    name: "Royal County Club",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce",
    description: "Historic club combining traditional British elegance with modern luxury, set in beautiful countryside grounds.",
    amenities: [
      "Golf Course",
      "Tennis Courts",
      "Spa & Wellness",
      "Members' Lounge"
    ]
  },
  {
    name: "Pacific Heights Club",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1606402179428-a57976d71fa4",
    description: "Contemporary luxury club featuring state-of-the-art facilities and panoramic views of the city skyline.",
    amenities: [
      "Infinity Pool",
      "Executive Suites",
      "Fine Dining",
      "Sports Facilities"
    ]
  }
]

const benefits = [
  {
    icon: "🌏",
    title: "Global Access",
    description: "Enjoy reciprocal access to affiliated clubs worldwide, expanding your networking opportunities"
  },
  {
    icon: "⭐",
    title: "Premium Facilities",
    description: "Access exclusive amenities and services at partner clubs, from golf courses to fine dining"
  },
  {
    icon: "🤝",
    title: "Network Benefits",
    description: "Connect with an international community of distinguished members and professionals"
  }
]

export default affiliated_clubs