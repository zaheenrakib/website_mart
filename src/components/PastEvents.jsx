import { format, parseISO } from 'date-fns';
import Image from 'next/image'

const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const PastEvents = ({filteredEvents, openEventDetails}) => {
    const formatDateTime = (dateString) => {
        try {
            const date = parseISO(dateString);
            return format(date, 'MMMM d, yyyy • h:mm aaa');
        } catch (error) {
            return dateString;
            console.log(error)
        }
    };
    
    return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents?.map((event) => (
                <div 
                    key={event.id} 
                    className="bg-[#1d1d1d] rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-red-900/10 transition-all duration-500 transform hover:-translate-y-2"
                    
                >
                    <div className="relative h-48">
                        <Image
                            src={base_url+event?.image}
                            alt={event.title}
                            fill
                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            loading='lazy'
                            quality={75}
                        />
                        <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                            {event.event_type}
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center gap-2 text-red-500 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {formatDateTime(event.event_date)}
                        </div>
                        <h3 className="text-xl text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
                            {event.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                            {event.short_descrip}
                        </p>
                        <div className="flex items-center justify-between">
                            <button 
                                onClick={() => openEventDetails(event)}
                                className="text-red-500 hover:text-red-400 transition-colors duration-300 flex items-center gap-1 text-sm"
                            >
                                Details
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            <p className='text-red-600 text-xl font-semibold'>{event.rate} ৳</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
    )
}

export default PastEvents;