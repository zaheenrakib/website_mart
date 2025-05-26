import React from 'react'
import PageBanner from '../../components/PageBanner'
import Blogs from '../../components/Blogs';

function News() {
    return (
        <div className="rac_main_wrapper">

            <PageBanner 
            pageTitle={`News`}
            bannerImage="bg-[url('/assets/images/pageBanner/pageBanner-2.jpg')]"
            pageDescription="Stay informed with the latest updates from UMCL."
            />
            <Blogs/>
        
        </div>
    ) 
}

export default News;