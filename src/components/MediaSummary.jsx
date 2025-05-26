import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MediaSummary = () => {
    const mediaHighlights = [
        {
            title: "Upcoming Events",
            category: "Events",
            description: "Discover and register for upcoming club events and activities",
            image: "/assets/images/media/upcoming-events.jpg",
            link: "/media/upcoming-event"
        },
        {
            title: "Photo Gallery",
            category: "Gallery",
            description: "Browse through memories of our past events and celebrations",
            image: "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=600",
            link: "/media/gallery"
        },
        {
            title: "Notice Board",
            category: "Notices",
            description: "Stay informed with important club announcements and updates",
            image: "/assets/images/media/notice.jpg",
            link: "/media/notice"
        }
    ];

    return (
        <section className="py-4 bg-gradient-to-b from-[#202020] to-[#000000]">
            <div className="container mx-auto px-4">
                
                <div className="text-center mb-10">
                    <div className="h-1 w-20 bg-red-600 mx-auto mb-6"></div>
                    <h2 className="text-4xl md:text-5xl text-white font-light mb-6">Stay Connected</h2>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        Stay informed about our latest events, memories, and important announcements
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {mediaHighlights.map((section, index) => (
                        <Link href={section?.link} key={index}>
                            <div className="group relative h-[400px] rounded-lg overflow-hidden">
                                <Image
                                    src={section.image}
                                    alt={section.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 w-full p-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-[2px] bg-red-500"></div>
                                            <span className="text-red-500">{section.category}</span>
                                        </div>
                                        <h3 className="text-2xl text-white group-hover:text-red-500 transition-colors duration-300">
                                            {section.title}
                                        </h3>
                                        <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                                            {section.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MediaSummary;