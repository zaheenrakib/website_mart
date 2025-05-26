import React from 'react'
import Layout from '../../components/layout/Layout'
import PageBanner from '../../components/PageBanner'

function Lunch() {
    return (
        <Layout>
        <div className="rac_main_wrapper">

            <PageBanner 
            pageTitle={`Lunch`}
            bannerImage="bg-[url('/assets/images/pageBanner/pageBanner-2.jpg')]"
            pageDescription="Experience our exceptional lunch service featuring a delightful array of dishes crafted by expert chefs. From business lunches to special occasions, we offer diverse menu options combining local favorites and international cuisines. Enjoy our carefully curated selections in an elegant setting with impeccable service."
            />
        </div>
        </Layout>
    ) 
}

export default Lunch;