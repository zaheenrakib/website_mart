import React, { useState, useMemo } from 'react'
import Image from 'next/image'

function Event() {
    const [activeCategory, setActiveCategory] = useState('all')

    // Memoize filtered images to prevent unnecessary recalculation
    const filteredImages = useMemo(() => {
        return activeCategory === 'all' 
            ? galleryImages 
            : galleryImages.filter(img => img.category === activeCategory)
    }, [activeCategory])

    // Handler for category change
    const handleCategoryChange = (categoryValue) => {
        setActiveCategory(categoryValue)
    }

    return (
        <div className="rac_main_wrapper">

            {/* Hero Section */}
            <section className="py-12 bg-[#2A2A2A] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-red-600/5 animate-pulse"></div>
                    <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-red-600/5 animate-pulse"></div>
                </div>
                <div className="container mx-auto px-4 relative">
                    <div className="text-center pb-4">
                        <div className="h-1 w-20 bg-red-600 mx-auto mb-6"></div>
                        <h2 className="text-4xl md:text-5xl text-white font-light mb-4 md:mb-5">Our Memories</h2>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        Browse through our collection of photographs capturing the essence of our club's events and activities
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16" role="tablist">
                        {categories.map((category) => (
                            <button
                                key={category.value}
                                onClick={() => handleCategoryChange(category.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault()
                                        handleCategoryChange(category.value)
                                    }
                                }}
                                role="tab"
                                aria-selected={activeCategory === category.value}
                                aria-controls={`gallery-${category.value}`}
                                tabIndex={activeCategory === category.value ? 0 : -1}
                                className={`px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-[#0f0f0f] ${
                                    activeCategory === category.value
                                        ? 'bg-red-500 text-white'
                                        : 'bg-[#1d1d1d] text-gray-300 hover:bg-red-500/10'
                                } transition-all duration-300`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[minmax(400px,auto)]"
                        role="tabpanel"
                        id={`gallery-${activeCategory}`}
                    >
                        {filteredImages.map((image, index) => (
                            <div 
                                key={image.title}
                                className="group relative"
                                tabIndex={0}
                            >
                                <div className={`relative rounded-lg overflow-hidden ${index % 3 === 0 ? 'h-[500px]' : 'h-[400px]'}`}>
                                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg overflow-hidden">
                                        <div className="h-full w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer" style={{ backgroundSize: '400% 100%' }}></div>
                                    </div>
                                    <Image
                                        src={image.url}
                                        alt={image.title}
                                        fill
                                        loading={"eager" }
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        placeholder="blur"
                                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjhAOEA4Qi4tMkYwRjlDSEhIWUNQTUhNSElISkj/2wBDAQoLCw4NDhwQEBxIIiAmSEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                                        quality={75}
                                        priority={index < 6}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
                                        onLoad={(event) => {
                                            const img = event.target;
                                            img.classList.remove('opacity-0');
                                            img.classList.add('opacity-100');
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-xl text-white mb-2">{image.title}</h3>
                                        <div className="flex items-center gap-4">
                                            <span className="text-gray-300 text-sm">{image.date}</span>
                                            <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                                            <span className="text-gray-300 text-sm capitalize">{image.category}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    ) 
}

// Data - Optimized with proper typing and organization
const categories = [
    { label: 'All Events', value: 'all' },
    { label: 'Sports', value: 'sports' },
    { label: 'Cultural', value: 'cultural' },
    { label: 'Social', value: 'social' },
    { label: 'Celebrations', value: 'celebrations' }
]

const galleryImages = [
    {
        title: "Annual Gala Dinner 2023",
        category: "celebrations",
        date: "Dec 15, 2023",
        url: "https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        title: "Tennis Tournament Finals",
        category: "sports",
        date: "Nov 28, 2023",
        url: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg"
    },
    {
        title: "Cultural Night Performance",
        category: "cultural",
        date: "Nov 15, 2023",
        url: "https://images.pexels.com/photos/2372945/pexels-photo-2372945.jpeg"
    },
    {
        title: "Members' Meet & Greet",
        category: "social",
        date: "Oct 30, 2023",
        url: "https://images.pexels.com/photos/7180617/pexels-photo-7180617.jpeg"
    },
    {
        title: "Swimming Competition",
        category: "sports",
        date: "Oct 15, 2023",
        url: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg"
    },
    {
        title: "Art Exhibition",
        category: "cultural",
        date: "Oct 1, 2023",
        url: "https://images.pexels.com/photos/3004909/pexels-photo-3004909.jpeg"
    },
    {
        title: "Club Anniversary Celebration",
        category: "celebrations",
        date: "Sept 25, 2023",
        url: "https://images.pexels.com/photos/698907/pexels-photo-698907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        title: "Yoga Workshop",
        category: "sports",
        date: "Sept 15, 2023",
        url: "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg"
    },
    {
        title: "Music Night",
        category: "cultural",
        date: "Sept 1, 2023",
        url: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg"
    }
]

// const stats = [
//     {
//         value: "1000+",
//         label: "Photos"
//     },
//     {
//         value: "50+",
//         label: "Events Covered"
//     },
//     {
//         value: "5", 
//         label: "Categories"
//     }
// ]

export default Event;