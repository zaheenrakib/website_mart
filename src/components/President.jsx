import Image from 'next/image'
import React from 'react'

const President = () => {
  return (
    <div className='my-7'>
        <div className='flex flex-col md:flex-row w-full justify-center items-center min-h-[300px] px-4'>
            <div className='bg-black px-4 md:px-5 gap-4 border-solid border-b-2 border-t-0 border-l-0 border-r-0 border-b-red-600 h-auto md:h-[230px] w-full md:w-[600px] md:mr-20 mb-6 md:mb-0 py-8 md:py-6 flex flex-col justify-center items-center space-y-1 rounded-lg'>
                <h2 className='text-white text-2xl md:text-4xl'>S M Masud Alam Tapan</h2>
                <p className='text-red-600 text-sm md:text-base text-center'>
                    President, Constitution, Membership, Discipline, Development & Maintenance, and Internal Audit
                </p>
            </div>
            <Image
                src="/assets/images/members/1. S M Masud Alam Tapan AC- 0043 FL President.jpg"
                alt="1. S M Masud Alam Tapan AC- 0043 FL President"
                width={1000}
                height={2000}
                className='w-[400px] md:w-[300px] md:h-[360px] rounded-lg'
            />
        </div>
    </div>
    
  )
}

export default President