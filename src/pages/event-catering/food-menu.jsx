import React from 'react'
import PageBanner from '../../components/PageBanner'
import FoodMenu from "../../components/FoodMenu";

function Foodmenu() {
    return (
        <div className="rac_main_wrapper">

            <PageBanner 
            pageTitle={`Food Menu`}
            bannerImage="bg-[url('/assets/images/pageBanner/pageBanner-2.jpg')]"
            pageDescription="Explore our exquisite food menu crafted by expert chefs. "
            />

            <FoodMenu />
        </div>
    ) 
}

export default Foodmenu