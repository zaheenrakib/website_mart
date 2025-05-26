import React from 'react'
import PageBanner from '../../components/PageBanner'
import Image from 'next/image'
import OurChefs from '../../components/OurChefs'
import President from '../../components/President'


const executiveMembers = () => {
  return (
        <div className="rac_main_wrapper">

            <PageBanner 
                pageTitle={`Executive Members`}
                bannerImage="bg-[url('/assets/images/pageBanner/pageBanner-2.jpg')]"
                pageDescription="Meet the distinguished leaders who guide our club's vision and operations. "
            />
            
            <President />

            <OurChefs />
        </div>
  )
}

export default executiveMembers