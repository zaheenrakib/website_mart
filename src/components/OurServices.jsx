import Image from "next/image";
import { useState } from "react";
import useGetDatas from "../hooks/useGetData";
import Link from "next/link";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const OurServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const { data } = useGetDatas("/events/all","events");

  const formatDate = (dateString) => {
    if (!dateString) return 'TBA';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };


  const closeDialog = () => {
    setSelectedService(null);
  };

  return (
    <section className="py-12 bg-[#2A2A2A] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-red-600/5 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-red-600/5 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center pb-12">
          <div className="h-1 w-20 bg-red-600 mx-auto mb-8"></div>
          <h2 className="text-4xl md:text-5xl text-white font-light mb-8">Our Services</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Experience exceptional service and unforgettable moments with our range of event offerings
          </p>
        </div>

        {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data?.map((service) => (
              <div
                key={service.id}
                className="group relative h-[400px] rounded-lg overflow-hidden"
              >
                <Image
                  src={baseURL+service.image}
                  alt={service.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8">
            <div className="space-y-4">
              <h3 className="cursor-pointer text-2xl text-red-600 font-semibold group-hover:text-red-500 transition-colors duration-300"
              onClick={() => setSelectedService(service)}
              >
                {service.title}
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                {service.subtitle}
              </p>
              <div className="flex justify-center">
                <Link
                  href={`/#book-us`}
                  className="mt-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-red-500/50"
                >
                  Book Now
                </Link>
              </div>
            </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dialog Box */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-[#1d1d1d] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
              {/* Close Button */}
              <button
                onClick={closeDialog}
                className="absolute top-4 right-4 text-gray-700transition-colors duration-300 bg-zinc-50 rounded-full p-2 hover:bg-red-600 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Dialog Content */}
              <div className="p-12">
                <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={baseURL+selectedService.image}
                    alt={selectedService.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-3xl text-red-600 font-semibold transform hover:scale-105 transition-transform">
                    {selectedService.title}
                  </h3>
                  <p className="text-gray-300">
                    {selectedService.subtitle}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">                    
                    
                    <div className="bg-[#2a2a2a] p-4 rounded-lg hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300">
                      <div className="flex items-center space-x-3 text-gray-200">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium">Event Date:</span>
                        <span className="text-gray-300">{formatDate(selectedService.eventDate)}</span>
                      </div>
                    </div>

                    <div className="bg-[#2a2a2a] p-4 rounded-lg hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300">
                      <div className="flex items-center space-x-3 text-gray-200">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">Event Time:</span>
                        <span className="text-gray-300">{selectedService.eventTime}</span>
                      </div>
                    </div>

                    <div className="bg-[#2a2a2a] p-4 rounded-lg hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300">
                      <div className="flex items-center space-x-3 text-gray-200">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">Price:</span>
                        <span className="text-gray-300">৳{selectedService.price}</span>
                      </div>
                    </div>

                    <div className="bg-[#2a2a2a] p-4 rounded-lg hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300">
                      <div className="flex items-center space-x-3 text-gray-200">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="font-medium">Capacity:</span>
                        <span className="text-gray-300">{selectedService.capacity} people</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-xl text-gray-200 font-medium mb-2">Description</h4>
                    <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: selectedService.description }} />
                  </div>

                  <Link
                    href={`/#book-us`}
                    className="rac_btn px-3 text-lg"
                  >
                    <span className="flex items-center space-x-2">
                      <span>Book Now</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurServices;
