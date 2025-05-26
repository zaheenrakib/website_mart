import React from 'react'
import Layout from '../../components/layout/Layout'
import PageBanner from '../../components/PageBanner'

function Buffet() {
    return (
        <Layout>
        <div className="rac_main_wrapper">

            <PageBanner 
            pageTitle={`Buffet`}
            bannerImage="bg-[url('/assets/images/pageBanner/pageBanner-2.jpg')]"
            pageDescription="Experience culinary excellence with our premium buffet service. From international cuisines to local delicacies, our master chefs create memorable dining experiences perfect for corporate events, weddings, and special celebrations. Discover our diverse menu selections and impeccable presentation."
            />
        </div>
        </Layout>
    ) 
}

export default Buffet;