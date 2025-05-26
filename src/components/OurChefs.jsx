import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OurChefs = () => {
  const members = [
    {
      id: 2,
      name: "Md. Mostafa Sorowar (Tito)",
      designation: "Administration & Human Resource Development",
      image: "/assets/images/members/2. Md. Mostofa Sorowar (Tito) AC-0042 FL Member-in-charge-Administration & HRD.jpeg.jpg"
    },
    {
      id: 3,
      name: "Engr. Md. Abdul Momin",
      designation: "Finance",
      image: "/assets/images/members/engineerabdulmomin.jpg"
    },
    {
      id: 4,
      name: "Mohammed Shahin",
      designation: "Estate & Procurement, Tambola & Annual Picnic",
      image: "/assets/images/members/4. Mohammed Shahin AC-0019 FL Estate & Procurement, Tambola & Annual Picnic.jpg"
    },
    {
      id: 5,
      name: "S M Belal Hossain",
      designation: "Card Room",
      image: "/assets/images/members/5. S M Belal Hossain AC-0020 FL Card Room.jpg"
    },
    {
      id: 6,
      name: "Heroic Freedom Fighter A. K. M. Mostafa (Salim)",
      designation: "Hall Room, Restaurant, Food & Beverage",
      image: "/assets/images/members/6. Heroic Freedom Fighter A. K. M. Mostafa (Salim) Hall Room, Restaurant, Food & Beverage (F&B).jpg"
    },
    {
      id: 7,
      name: "Mohammad Aktaruzzaman",
      designation: "Printing & Publication",
      image: "/assets/images/members/7. Mohammad Aktaruzzaman AC- 0069 Printing & Publication (P&P).jpg"
    },
    {
      id: 8,
      name: "Md. Nurul Hoque",
      designation: "Billiard, Gymnasium, Swimming Pool & Table Tennis",
      image: "/assets/images/members/8. Md. Nurul Hoque AC- 0133 D Billiard, Gymnasium, Swimming Pool & Table Tennis.jpg"
    },
    {
      id: 9,
      name: "Mohiuddin Taher",
      designation: "Entertainment & Cultural Affairs",
      image: "/assets/images/members/9. Mohiuddin Taher AC-0224 Entertainment & Cultural Affairs.jpg"
    },
    {
      id: 10,
      name: "Shahanaz Panna",
      designation: "Games & Sports, Beauty Parlor, Library, Ladies & Children Affairs",
      image: "/assets/images/members/10. Shahanaz Panna AC-0271 Games & Sports, Beauty Parlor (Men’s & Women’s), Library, Ladies & Children Affairs.jpg"
    },
    
    
    {
      id: 11,
      name: "Md. Matiul Haque",
      designation: "Welfare & Lounge",
      image: "/assets/images/members/11. Md. Matiul Haque AC- 0317 Welfare & Lounge.jpg"
    },
  ];

  return (
    <section className="py-4 bg-gradient-to-b from-[#202020] to-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
          <h2 className="text-4xl md:text-5xl text-white font-light mb-4 md:mb-5">
            Executive Committee (2023-2025)
          </h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div 
              key={member.id} 
              className="group flex flex-col rounded-xl overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-96 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform bg-top duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Text Container */}
              <div className="bg-[#1D1D1D] p-6 flex-1">
                <h3 className="text-xl font-semibold text-red-500 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {member.designation}
                </p>
                <div className="flex space-x-4">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <Link href={`mailto:${member?.email}`} className="underline text-gray-300 text-sm hover:text-red-500 transition duration-200">
                      demo@gmail.com
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurChefs;