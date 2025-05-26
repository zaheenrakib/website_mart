import React, { useState } from 'react'
import PageBanner from '../../components/PageBanner'
import Link from 'next/link'
import useGetDatas from '../../hooks/useGetData';
import { format, parseISO } from 'date-fns';
import { notifyError } from '../../utils/toast';

function Notice() {
    const [selectedNotice, setSelectedNotice] = useState(null);
    const [showDescription, setShowDescription] = useState(false);
    const {data:noticeData} = useGetDatas("/notices/active", "notices");
    console.log(noticeData)

    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    const formatDateTime = (dateString) => {
        try {
            const date = parseISO(dateString);
            return format(date, 'MMMM d, yyyy • h:mm aaa');
        } catch (error) {
            return dateString;
        }
    };

    const handleReadMore = (notice) => {
        setSelectedNotice(notice);
        setShowDescription(true);
    }

    const handleDownload = async (attachment) => {
        try {
            const response = await fetch(BASE_URL + '/uploads/notices/' + attachment);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = attachment;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            notifyError("Error downloading attachment");
            console.error("Error downloading attachment:", error);
        }
    };

    return (
        <div className="rac_main_wrapper">
            <PageBanner 
                pageTitle="Notice Board"
                bannerImage="bg-[url('/assets/images/pageBanner/pageBanner-2.jpg')]"
                pageDescription="Stay informed with important club announcements, updates, and information for members"
            />

            {/* Notices Section */}
            <section className="py-20 bg-[#0f0f0f]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="h-1 w-20 bg-red-600 mx-auto mb-6"></div>
                        <h2 className="text-4xl text-white font-light mb-6">Important Announcements</h2>
                        <p className="text-gray-300 max-w-3xl mx-auto">
                            Stay updated with the latest notices and announcements from our club
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {noticeData?.data?.map((notice) => (
                            <div 
                                key={notice.id} 
                                className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-300 group"
                            >
                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className=" py-1 rounded-full text-sm">
                                        {notice?.type === 1 ? (
                                            <span className="px-3 py-1 bg-green-600 text-white rounded-full">
                                                Meeting
                                            </span>
                                        ): notice?.type === 2 ? (
                                            <span className="px-3 py-1 bg-red-600 text-white rounded-full">
                                                Membership
                                            </span>
                                        ): notice?.type === 3 ? (
                                            <span className="px-3 py-1 bg-yellow-600 text-white rounded-full">
                                                Schedule
                                            </span>
                                        ): ( 
                                            <span className="px-3 py-1 bg-gray-600 text-white rounded-full">
                                                Announcement
                                            </span>
                                        )}
                                        </span>
                                        <span className="text-gray-400 text-sm font-medium">
                                            {formatDateTime(notice.createdAt)}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
                                        {notice.title}
                                    </h3>
                                    <div 
                                        className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors duration-300 cursor-pointer"
                                        onClick={() => handleReadMore(notice)}
                                    >
                                        Read more 
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Archive Section */}
            <section className="py-16 bg-[#161616]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-8 md:mb-0">
                            <h3 className="text-2xl text-white mb-2">Looking for older notices?</h3>
                            <p className="text-gray-300">Browse our complete archive of past announcements</p>
                        </div>
                        <Link href="#" className="rac_btn">
                            View Archive
                        </Link>
                    </div>
                </div>
            </section>

            {/* Notice Popup */}
            {selectedNotice && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#1a1a1a] p-8 rounded-lg w-[80%] h-[80%] relative overflow-y-auto">
                        <button 
                            onClick={() => {
                                setSelectedNotice(null);
                                setShowDescription(false);
                            }}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="flex items-center justify-between mb-4">
                            <span className="px-3 py-1 bg-red-600/10 text-red-500 rounded-full text-sm">
                                {selectedNotice.category}
                            </span>
                            {selectedNotice.attachment && (
                                <button
                                    onClick={() => handleDownload(selectedNotice.attachment)}
                                    className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download Attachment
                                </button>
                            )}
                        </div>
                        <h2 className="text-3xl text-white mb-4">{selectedNotice.title}</h2>
                        <p className="text-gray-400 mb-4 font-medium">
                            Posted on {formatDateTime(selectedNotice.createdAt)}
                        </p>
                        {showDescription && (
                            <p className="text-gray-300 mb-6">{selectedNotice.description}</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    ) 
}

export default Notice;