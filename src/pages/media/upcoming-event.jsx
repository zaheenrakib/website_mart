import { useState, useEffect, use } from 'react'
import PageBanner from '../../components/PageBanner'
import Image from 'next/image'
import Link from 'next/link'
import useGetDatas from '../../hooks/useGetData'
import UpcomingEvents from '../../components/UpcomingEvents'
import PastEvents from '../../components/PastEvents'
import { format, parseISO } from 'date-fns'
import { useForm, useWatch } from 'react-hook-form'
import { useAuth } from '../../context/authContext'
import { notifyError, notifySuccess } from '../../utils/toast'
import axios from 'axios'

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const SkeletonLoader = () => (
    <div className="group relative bg-[#1d1d1d] rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-500">
        <div className="relative h-64 bg-gradient-to-r from-gray-700 to-gray-800 animate-pulse"></div>
        <div className="p-8">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 animate-pulse"></div>
                <div className="h-8 w-48 bg-gradient-to-r from-gray-700 to-gray-800 animate-pulse rounded"></div>
            </div>
            <div className="h-4 w-full bg-gradient-to-r from-gray-700 to-gray-800 animate-pulse rounded mb-2"></div>
            <div className="h-4 w-3/4 bg-gradient-to-r from-gray-700 to-gray-800 animate-pulse rounded mb-6"></div>
            <div className="h-4 w-24 bg-gradient-to-r from-gray-700 to-gray-800 animate-pulse rounded"></div>
        </div>
    </div>
);

function UpcomingEvent() {    
    const [selectedEvent, setSelectedEvent] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [showContactModal, setShowContactModal] = useState(false);
    const [activeTab, setActiveTab] = useState('upcoming');


    const {register, handleSubmit,control, formState: { errors }} = useForm();
    const eventDescription = useWatch({control, name: "description"});

    const { user } = useAuth();
    const { data: devents, isLoading} = useGetDatas("/upcoming-events/","upcoming-events")   

    const formatDateTime = (dateString) => {
        try {
            const date = parseISO(dateString);
            return format(date, 'MMMM d, yyyy • h:mm aaa');
        } catch (error) {
            return dateString;
        }
    };

    
    const upcomingE = devents?.upcoming || [];
    const pastE = devents?.past || [];

    useEffect(() => {
        if (upcomingE.length === 0 && pastE.length > 0) {
            setActiveTab('past');
        }
    }, [upcomingE.length, pastE.length])

    

    const openEventDetails = (event) => {
        setSelectedEvent(event)
        setShowModal(true)
        setShowContactModal(false);
        // Prevent scrolling when modal is open
        document.body.style.overflow = 'hidden'
    }

    const closeEventDetails = () => {
        setShowModal(false)
        // Re-enable scrolling
        document.body.style.overflow = 'auto'
    }

    const openEventContact = () => {
        setShowContactModal(true);
        document.body.style.overflow     = 'hidden';
    }

    const closeEventContact = () => {
        setShowContactModal(false);
        document.body.style.overflow = 'hidden';
    }

    const onEventBookSubmit = async (data, user_id, event_id) => {
        const formData = {
            ...data,
            userId: user_id,
            events: event_id,
        }
        // console.log(formData);

        try {
            const res = await axios.post(`${base_url}/upcoming-bookings/add`, formData)
            if(res.status === 201) {
                notifySuccess("Your slot has been Secured successfully");
                setShowContactModal(false);
                setShowModal(true);
                console.log("Booking successful:", res);

            }else{
                notifyError("Error booking event. Please try again later.");    
                console.error("Error booking event:", res);
            }
        } catch (error) {
            notifyError("Error booking event. Please try again later.");
            console.error("Error booking event:", error);
            
        }
    }



    return (
        <div className="rac_main_wrapper">
            <PageBanner 
                pageTitle="Upcoming Events"
                bannerImage="bg-[url('https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg')]"
                pageDescription="Stay updated with our exciting events and activities"
            />

            {/* Hero Section */}
            <section className="py-12 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-red-600/5 animate-pulse"></div>
                    <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-red-600/5 animate-pulse" ></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-red-500/10 animate-[spin_60s_linear_infinite]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-red-500/5 animate-[spin_40s_linear_infinite_reverse]"></div>
                </div>

                <div className="container mx-auto px-4 relative">

                    {/* Events Tabs */}
                    <div className="mb-12">
                        <div className="flex justify-center mb-16">
                            <div className="inline-flex bg-[#1d1d1d] rounded-full p-1">
                                {
                                    upcomingE && upcomingE.length>0 && (
                                        <button 
                                            onClick={() => setActiveTab('upcoming')}
                                            className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                                                activeTab === 'upcoming' 
                                                    ? 'bg-red-500 text-white shadow-lg' 
                                                    : 'text-gray-400 hover:text-white'
                                            }`}
                                        >
                                            Upcoming Events
                                        </button>
                                    )
                                }
                                {
                                    pastE && pastE.length > 0 && (

                                        <button 
                                            onClick={() => setActiveTab('past')}
                                            className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                                                activeTab === 'past' 
                                                    ? 'bg-red-500 text-white shadow-lg' 
                                                    : 'text-gray-400 hover:text-white'
                                            }`}
                                        >
                                            Past Events
                                        </button>
                                    )
                                }
                                
                            </div>
                        </div>
                        {activeTab === 'upcoming' && <UpcomingEvents filteredEvents={upcomingE} openEventDetails = {openEventDetails}/>}
                        
                        {activeTab === 'past' && <PastEvents filteredEvents={pastE} openEventDetails = {openEventDetails} />}
                        
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-12 bg-[#161616] relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center gap-2 mb-6">
                            <div className="h-[1px] w-10 bg-red-500"></div>
                            <span className="text-red-500 uppercase tracking-wider text-sm font-medium">Stay Updated</span>
                            <div className="h-[1px] w-10 bg-red-500"></div>
                        </div>
                        <h2 className="text-4xl text-white font-light mb-6">Never Miss an Event</h2>
                        <p className="text-gray-300 mb-10">
                            Subscribe to our newsletter to receive updates about upcoming events and activities
                        </p>
                        <Link className="border-1 border-solid border-red-600 text-red-600 hover:bg-red-600 hover:text-zinc-50 px-4 py-3 text-xl whitespace-nowrap"
                        href={"/#book-us"}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Event Details Modal */}
            {showModal && selectedEvent && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300">
                    <div 
                        className="bg-gradient-to-b from-[#1d1d1d] to-[#252525] w-[100%]  md:w-[80%] max-w-6xl max-h-[80vh] rounded-2xl overflow-y-auto shadow-2xl shadow-black/50 animate-fadeIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative">
                            {/* Close button */}
                            <button 
                                onClick={closeEventDetails}
                                className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-red-500 text-white p-2 rounded-full transition-colors duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Image section */}
                            <div className="relative h-80">
                                <Image
                                    src={base_url + selectedEvent.image}
                                    alt={selectedEvent.title}
                                    fill
                                    className="object-cover"
                                    sizes="80vw"
                                    quality={90}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] to-transparent"></div>
                                <div className="absolute bottom-4 left-8">
                                    <span className="bg-red-500 text-white text-sm font-medium  px-4 py-1 rounded-full">
                                        {selectedEvent.event_type}
                                    </span>
                                </div>
                            </div>

                            {/* Content section */}
                            {
                                !showContactModal ? (

                                    <div className="p-3 md:p-8">
                                        <h2 className="text-3xl md:text-4xl text-white font-light mb-6">{selectedEvent.title}</h2>
                                        
                                        <div className="flex flex-wrap gap-6 mb-8">
                                            <div className="flex items-center gap-2 text-gray-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {formatDateTime(selectedEvent.event_date)}
                                            </div>
                                            
                                        </div>
                                        
                                        <div className="mb-8">
                                            <h3 className="text-xl text-white mb-4">About This Event</h3>
                                            <p className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedEvent?.description }}/>
                                            
                                        </div>

                                        {/* Footer with price and register button */}
                                        <div className="pt-6 flex justify-between items-center border-t border-gray-800">
                                            <div className="text-gray-400">
                                                {selectedEvent.rate ? `Price: ${selectedEvent.rate}` : 'Free Entry for Members'}
                                            </div>
                                            <button 
                                                href={"#"} 
                                                onClick={openEventContact}
                                                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                                            >
                                                Book Now
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ):(
                                    <div className='p-3 md:p-8'>
                                        <form onSubmit={handleSubmit((data)=> onEventBookSubmit(data, user.id, selectedEvent.id))} className='flex flex-col'>
                                            <div className='flex flex-col items-center text-center mb-3'>
                                                <h2 className='text-4xl text-white'>Book Your Slot</h2>
                                                <p className='text-2xl font-medium'>for</p>
                                                <h1 className='text-2xl md:text-3xl text-red-600'>{selectedEvent.title}</h1>
                                            </div>

                                            <div className='flex flex-col'>
                                                <label htmlFor="numberOfPeople" className='text-lg my-3'>Number Of People</label>
                                                <input
                                                    {...register("peopleNum", {
                                                        required: "Number of people are required",
                                                        min: {
                                                        value: 10,
                                                        message: "Minimum 10 people should be added."
                                                        }
                                                    })}
                                                    type="number"
                                                    id="numberOfPeople"
                                                    className="h-14 text-lg md:text-xl bg-black text-slate-50 focus:border focus:border-solid focus:border-red-600 px-3 mb-3"
                                                    placeholder="Enter the number of people"
                                                    />

                                                {
                                                    errors.peopleNum && (
                                                        <p className="text-sm text-red-600">{errors.peopleNum.message}</p>
                                                    )
                                                }
                                            </div>
                                            <div className='flex flex-col '>
                                                <div className='flex'>
                                                    <label htmlFor="desciption" className='text-lg my-3'>Description</label>
                                                    <p className="text-sm text-red-400 w-full text-right my-3">
                                                        {eventDescription?.length || 0}/250     characters
                                                    </p>
                                                </div>
                                                <textarea {...register("description",
                                                    {required: "Description is required"}
                                                )} 
                                                maxLength={250}
                                                type="text" 
                                                id="desciption" 
                                                className='p-3 h-32 bg-black text-slate-50 focus:border focus:border-solid  focus:border-red-600 text-lg md:text-xl mb-3' placeholder='Enter you message' />
                                                {
                                                    errors.description && (
                                                        <p className="text-sm text-red-600 mb-6">{errors.description.message}</p>
                                                    )
                                                }
                                            </div>
                                            <div className='flex justify-between'>

                                                <button className='bg-slate-50 text-[#000] text-lg py-1 md:py-2     px-3 border-1 border-solid border-red-600 hover:bg-black hover:text-slate-50 font-medium' onClick={closeEventContact}>Cancel</button>
                                                <button className='rac_btn rounded-none font-bold' >Book Now</button>
                                            </div>
                                        </form>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    ) 
}



// Add keyframes animation for modal
const modalAnimation = `
@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
}
.animate-fadeIn {
    animation: fadeIn 0.3s ease-out forwards;
}
`;

// Add the animation to the document head
if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.innerHTML = modalAnimation;
    document.head.appendChild(style);
}

export default UpcomingEvent