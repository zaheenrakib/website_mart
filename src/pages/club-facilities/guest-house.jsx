import React from 'react'
import Layout from '../../components/layout/Layout'
import PageBanner from '../../components/PageBanner'
import Link from 'next/link'
import Image from 'next/image'

function GuestHouse() {
  return (
    <div className="rac_main_wrapper">
      <PageBanner 
        pageTitle={`Guest House`}
        bannerImage="bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3')]"
        pageDescription="Experience luxury accommodation in our premium guest house with world-class amenities and comfort"
      />

      {/* Hero Section with Overlapping Elements */}
      <section className="py-24 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-600/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-cente!!r mb-16">
            <h1 className="text-5xl font-light mb-6">
              Your Home Away
              <span className="block text-red-500 mt-2">From Home</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Welcome to our luxurious guest house, where comfort meets elegance. Experience a perfect blend of modern amenities and warm hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="relative group">
              <div className="overflow-hidden rounded-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1618773928121-c32242e63f39"
                  alt="Luxury Room"
                  width={400}
                  height={500}
                  className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-xl font-medium mb-2">Luxury Rooms</h3>
                <p className="text-sm text-gray-200">Spacious and elegantly furnished rooms</p>
              </div>
            </div>

            <div className="relative group mt-12 md:mt-0">
              <div className="overflow-hidden rounded-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7"
                  alt="Modern Amenities"
                  width={400}
                  height={500}
                  className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-xl font-medium mb-2">Modern Amenities</h3>
                <p className="text-sm text-gray-200">State-of-the-art facilities for your comfort</p>
              </div>
            </div>

            <div className="relative group">
              <div className="overflow-hidden rounded-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461"
                  alt="Dining Experience"
                  width={400}
                  height={500}
                  className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-xl font-medium mb-2">Fine Dining</h3>
                <p className="text-sm text-gray-200">Exquisite dining experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[#161616]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="h-1 w-16 bg-red-600 mb-6"></div>
              <h2 className="text-4xl text-white font-light">Premium<br/><span className="text-red-500">Amenities</span></h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-300 text-lg">
                Discover our range of premium amenities designed to make your stay comfortable and memorable.
              </p>
      </div>
      </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-[#1d1d1d] rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={amenity.image}
                    alt={amenity.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                </div>
                <div className="p-8 border-t border-gray-800">
                  <h3 className="text-xl text-white mb-4 group-hover:text-red-500 transition-colors">{amenity.title}</h3>
                  <p className="text-gray-400 mb-6">{amenity.description}</p>
                  <ul className="space-y-3">
                    {amenity.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#292929] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-40 h-40 bg-red-600 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-red-600 rounded-full opacity-5 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center transform transition-transform hover:scale-105">
              <div className="text-red-600 text-5xl font-bold mb-2 animate-pulse">12</div>
              <p className="text-white text-lg">Luxury Rooms</p>
            </div>
            <div className="text-center transform transition-transform hover:scale-105">
              <div className="text-red-600 text-5xl font-bold mb-2 animate-pulse" style={{animationDelay: '0.5s'}}>24/7</div>
              <p className="text-white text-lg">Room Service</p>
            </div>
            <div className="text-center transform transition-transform hover:scale-105">
              <div className="text-red-600 text-5xl font-bold mb-2 animate-pulse" style={{animationDelay: '1s'}}>4.9</div>
              <p className="text-white text-lg">Guest Rating</p>
            </div>
            <div className="text-center transform transition-transform hover:scale-105">
              <div className="text-red-600 text-5xl font-bold mb-2 animate-pulse" style={{animationDelay: '1.5s'}}>100%</div>
              <p className="text-white text-lg">Satisfaction</p>
            </div>
          </div>  
        </div>
      </section>

      {/* Room Types */}
      <section className="py-20 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-red-600/10"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-red-600/10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-1 w-16 bg-red-600 mb-6"></div>
                <h2 className="text-4xl text-white font-light mb-6">Premium<br/><span className="text-red-500">Suites</span></h2>
                <p className="text-gray-300 mb-8">
                  Experience luxury in our premium suites, designed for ultimate comfort and relaxation. Each suite offers a unique blend of elegance and modern amenities.
                </p>
                <ul className="space-y-4 mb-8">
                  {roomFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304"
                    alt="Premium Suite"
                    width={600}
                    height={800}
                    className="w-full object-cover rounded-lg"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-red-600 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <Image 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
          alt="Guest House Interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-xl">
            <div className="h-1 w-16 bg-red-600 mb-8"></div>
            <h2 className="text-5xl text-white mb-6 font-light">Begin Your<br/>Luxury Stay</h2>
            <p className="text-gray-300 text-lg mb-8">
              Experience the perfect blend of comfort and luxury. Book your stay today and create unforgettable memories.
            </p>
            <div className="flex flex-wrap gap-4">
                <Link href="/contact-us" className="rac_btn">
                Book Now
              </Link>
            </div>
          </div>
      </div>
      </section>
    </div>
  ) 
}

// Data
const amenities = [
  {
    title: "Luxury Rooms",
    description: "Spacious and elegantly furnished rooms with premium amenities",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
    features: [
      "King Size Beds",
      "Premium Linens",
      "Smart TV",
      "Climate Control"
    ]
  },
  {
    title: "Dining Experience",
    description: "Exquisite dining options with international cuisine",
    image: "https://images.pexels.com/photos/27626759/pexels-photo-27626759/free-photo-of-fancy-cafe-and-restaurant.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "24/7 Room Service",
      "Restaurant",
      "Bar & Lounge",
      "Special Diets"
    ]
  },
  {
    title: "Modern Facilities",
    description: "State-of-the-art facilities for your comfort",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
    features: [
      "High-speed WiFi",
      "Business Center",
      "Fitness Center",
      "Parking"
    ]
  },
  {
    title: "Wellness Center",
    description: "Rejuvenate yourself with our wellness facilities",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
    features: [
      "Spa Services",
      "Swimming Pool",
      "Sauna",
      "Yoga Room"
    ]
  },
  {
    title: "Event Spaces",
    description: "Perfect venues for your special occasions",
    image: "/assets/images/guest-house/Picture1.jpg",
    features: [
      "Conference Rooms",
      "Banquet Hall",
      "Event Planning",
      "Catering"
    ]
  },
  {
    title: "Concierge Services",
    description: "Personalized assistance for all your needs",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    features: [
      "24/7 Assistance",
      "Tour Planning",
      "Transportation",
      "Reservations"
    ]
  }
]

const roomFeatures = [
  "Luxurious King Size Beds",
  "Private Balcony with View",
  "En-suite Bathroom",
  "Mini Bar & Coffee Station",
  "High-speed Internet",
  "Room Service"
]

export default GuestHouse;