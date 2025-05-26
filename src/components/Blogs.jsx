import React, { useState } from 'react';
import Image from 'next/image';
import useGetDatas from '../hooks/useGetData';

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const Blogs = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const {data} = useGetDatas("/news/all", "news");

    const openBlogDetails = (blog) => {
        setSelectedBlog(blog);
        setShowModal(true);
        document.body.style.overflow = 'hidden';
    };

    const closeBlogDetails = () => {
        setShowModal(false);
        document.body.style.overflow = 'auto';
    };

    const formatDateTime = (dateString, timeString) => {
      if (!dateString) return { date: 'TBA', time: 'TBA' };
      
      const date = new Date(dateString);
      const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    
      const formattedTime = timeString || date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      });
    
      return { date: formattedDate, time: formattedTime };
    };

    return (
        <section className="py-32 from-[#0f0f0f] relative overflow-hidden">

            <div className="container mx-auto px-4 relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="h-[1px] w-10 bg-red-500"></div>
                        <span className="text-red-500 uppercase tracking-wider text-sm font-medium">Latest Updates</span>
                        <div className="h-[1px] w-10 bg-red-500"></div>
                    </div>
                    <h2 className="text-4xl text-white font-light mb-6">News And Blog</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">Stay informed with our latest news, updates, and stories from the club community.</p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data?.map((blog) => (
                        <div 
                            key={blog.id} 
                            className="bg-[#1d1d1d] rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-red-900/10 transition-all duration-500 transform hover:-translate-y-2"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={base_url+blog?.image}
                                    alt={blog?.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    loading='lazy'  
                                    quality={75}
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-red-500 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {formatDateTime(blog?.date, blog?.time).date} • {formatDateTime(blog?.date, blog?.time).time}
                                </div>
                                <h3 className="text-xl text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
                                    {blog?.title}
                                </h3>
                                <p className="text-gray-400 w-full text-sm mb-4 line-clamp-2 truncate" dangerouslySetInnerHTML={{ __html: blog?.description }}/>
                                <div className="flex items-center justify-between">
                                    
                                    <button 
                                        onClick={() => openBlogDetails(blog)}
                                        className="text-red-500 hover:text-red-400 transition-colors duration-300 flex items-center gap-1 text-sm"
                                    >
                                        Read More
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Blog Details Modal */}
                {showModal && selectedBlog && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center md:p-4 bg-black/70 backdrop-blur-sm ">
                        <div 
                            className="bg-gradient-to-b from-[#1d1d1d] to-[#252525] w-[80%] max-w-6xl max-h-[80vh] rounded-2xl overflow-y-auto shadow-2xl shadow-black/50 animate-fadeIn "
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative">
                                {/* Close button */}
                                <button 
                                    onClick={closeBlogDetails}
                                    className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-red-500 text-white p-2 rounded-full transition-colors duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                {/* Image section */}
                                <div className="relative h-80">
                                    <Image
                                        src={base_url+selectedBlog?.image}
                                        alt={selectedBlog?.title}
                                        fill
                                        className="object-cover"
                                        sizes="80vw"
                                        quality={90}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] to-transparent"/>
                                </div>

                                {/* Content section */}
                                <div className="p-8 md:p-8">
                                    <div className="flex items-center gap-4 text-gray-300 mb-6">
                                        <div className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {formatDateTime(selectedBlog?.date, selectedBlog?.time).date} • {formatDateTime(selectedBlog?.date, selectedBlog?.time).time}
                                        </div>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl text-white font-light mb-6">{selectedBlog?.title}</h2>
                                    <div className="prose prose-invert max-w-none">
                                        <p className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedBlog?.description }}/>
                                    </div>
                                    {selectedBlog?.link && (

                                        <iframe
                                            className="w-4/5 mt-3 relative left-[50%] top-[50%] translate-x-[-50%] md:h-[300px] border border-gray-700 rounded-2xl"
                                            src={`https://www.youtube.com/embed/${selectedBlog?.link.substr(16,)}`}
                                            title="We Dropped 1000 Basketballs from an Airplane"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        ></iframe>
                                    )}
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blogs;
