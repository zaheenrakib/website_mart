import React from 'react';
import PageBanner from "../components/PageBanner";
import Contacts from "../components/contacts"

export default function ContactUs() {
  return (
    <div className="rac_main_wrapper">
      <PageBanner 
        pageTitle="Contact Us"
        bannerImage="bg-[url('/assets/images/pageBanner/pageBanner-2.jpg')]"
        pageDescription="Get in touch with us for any inquiries or assistance. We're here to help you with all your club-related needs."
      />
      <Contacts />
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21202.27961207174!2d90.3340533316866!3d23.85936773509127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c387fd42964b%3A0x9b6e94d11c1c407!2sUttara%20Model%20Club%20Permanent%20Premises%20(under%20construction)!5e1!3m2!1sen!2sbd!4v1744418663900!5m2!1sen!2sbd" 
        width="100%" 
        height="450" 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className='border-t-4 border-b-4 border-r-0 border-l-0 border-solid border-red-600'
      ></iframe>
    </div>
  );
}
