import React from "react";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars, faCircleUser } from "@fortawesome/free-solid-svg-icons";
// import Spinner from "../Spinner";
import Link from "next/link";
import { useRouter } from "next/router";
// import Shop from "../Shop";
import { UserContext } from "../../context/UseContext";
import Image from "next/image";
import { useAuth } from "../../context/authContext";
import About_dropdown from "../About_dropdown";
import Club_facilities_dropdown from "../Club_facilities_dropdown";
import MediaDropdown from "../MediaDropdown";
import EventCateringDropdown from "../EventCateringDropdown";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import dynamic from 'next/dynamic'
// import CartDrawer from "./CartDrawer";
const CartDrawer = dynamic(() => import('./CartDrawer'),{ssr: false});



const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const Header = () => {
  const { cart } = useContext(UserContext);

  const [hasMounted, setHasMounted] = useState(false);
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isCart, setCart] = useState(false);
  const { user, logout } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [sidebarDropdowns, setSidebarDropdowns] = useState({
    about: false,
    clubfacilities: false,
    media: false,
    eventcatering: false
  });


  useEffect(() => {
    setHasMounted(true);
  }, []);

  const toggleSidebarDropdown = (key) => {
    setSidebarDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  useEffect(() => {

    if(user) {
      setUserLoggedIn(true);
    }else{
      setUserLoggedIn(false);
    }

    if(cart.length > 0) {
      setCart(true);
    }else{
      setCart(false);
    }

    
  },[user, userLoggedIn,cart, isCart]) ;
  

  const menus = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about-us" },
    { title: "Club Facilities", link: "/club-facilities" },
    { title: "Shop", link: "/products" },
    { title: "lounges", link: "/lounges" },
    { title: "Event Catering", link: "/event-catering" },
    { title: "Media", link: "/media" },
    { title: "Contact Us", link: "/contact-us" },
  ];

  // const [loading, setLoading] = useState(true);
  // const [selectedMenu, setSelectedMenu] = useState(pathname);
  const selectedMenu = pathname;
  // const [showShopDiv, setShowShopDiv] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isClubFacilitiesOpen, setIsClubFacilitiesOpen] = useState(false);
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  


  let aboutDropdownTimeout;
  let clubFacilitiesTimeout;
  let MediaTimeout;
  let eventsTimeout;



    // Dropdown handlers for "About"
    const handleMouseEnter = () => {
      clearTimeout(aboutDropdownTimeout);
      setIsAboutOpen(true);
    };
  
    const handleMouseLeave = () => {
      aboutDropdownTimeout = setTimeout(() => {
        setIsAboutOpen(false);
      }, 200);
    };
  
    // Dropdown handlers for "club_facilities_dropdown"
  
    const handleClubFacilitiesMouseEnter = () => {
      clearTimeout(clubFacilitiesTimeout);
      setIsClubFacilitiesOpen(true);
    };
    const handleClubFacilitiesMouseLeave = () => {
      clubFacilitiesTimeout = setTimeout(() => {
        setIsClubFacilitiesOpen(false);
      }, 200);
    };
  
    //Dropdown handlers for "Media"
  
    const handleMediaEnter = () => {
      clearTimeout(MediaTimeout);
      setIsMediaOpen(true);
    }
    const handleMediaLeave = () => {
      MediaTimeout = setTimeout(() => {
      setIsMediaOpen(false);
      }, 200);
    }

    //Dropdown handlers for "Events catering"
    
    const handleEventsEnter = () => {
      clearTimeout(eventsTimeout);
      setIsEventsOpen(true);
    }
    const handleEventsLeave = () => {
      eventsTimeout = setTimeout(() => {
      setIsEventsOpen(false);
      }, 200);
    }
  


  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      const sidebar = document.querySelector('.rac_about_wrapper');
      const profileMenu = document.querySelector('.profile-dropdown');
      const profileButton = document.querySelector('.profile-button');

      // Handle sidebar click outside
      if (sidebar && !sidebar.contains(event.target) && 
          !event.target.closest('.rac_toggle_btn')) {
        setIsNavOpen(false);
      }

      // Handle profile menu click outside
      if (profileMenu && !profileMenu.contains(event.target) &&
          !profileButton.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    const timer = setTimeout(() => {

    }, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      clearTimeout(timer);
    };
  }, []);


  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };


  return (
    <header>
      <div className={`rac_top_icon ${isScrolled ? "show" : ""}`}>
        <Link
          id="go-to-top"
          onClick={() => window.scrollTo  ({ top: 0, behavior: "smooth" })}
          href={"#"}
        >
          <Image
            height={100}
            width={200}
            src="/assets/images/demo/gototop.svg"
            className="img-fluid"
            alt="Go to top"
          />
        </Link>
      </div>

      <div
        id="custom-header-section"
        className={`rac_header_wrapper min-h-[75px] ${isScrolled ? "fixed top-0 z-50 shadow-md" : ""}`}
      >
        <div className="rac_container container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="rac_navbar">
                <div className="rac_logo">
                  <Link href="/">
                    <Image
                      height={200}
                      width={100}
                      src="/assets/images/UMCL_logo.png"
                      className="img-fluid w-[48px] md:w-[68px] "
                      alt="Logo"
                    />
                  </Link>
                </div>
                <div className="rac_nav_item">
                <ul className={`flex ${isNavOpen ? "block" : "hidden"} md:flex`}>
                  {menus.map((menu, index) => (
                    <li
                      key={index}
                      className="relative flex mr-[-19px] group"
                      onMouseEnter={
                        menu.title === "About"
                          ? handleMouseEnter
                          : menu.title === "Club Facilities"
                          ? handleClubFacilitiesMouseEnter
                          : menu.title === "Media"
                          ? handleMediaEnter
                          : menu.title === "Event Catering"
                          ? handleEventsEnter
                          : undefined
                      }
                      onMouseLeave={
                        menu.title === "About"
                          ? handleMouseLeave
                          : menu.title === "Club Facilities"
                          ? handleClubFacilitiesMouseLeave
                          : menu.title === "Media"
                          ? handleMediaLeave
                          : menu.title === "Event Catering"
                          ? handleEventsLeave
                          : undefined
                      }
                    >
                      {/* Conditional Rendering Based on Menu Title */}
                      {menu.title === "About" ? (
                        <>
                          <Link href={menu.link}>{menu.title}</Link>
                          {isAboutOpen && <About_dropdown/>}
                        </>
                      ) : menu.title === "Club Facilities" ? (
                        <>
                          <Link href={menu.link}>{menu.title}</Link>
                          {isClubFacilitiesOpen && <Club_facilities_dropdown />}
                        </>
                    ) : menu.title === "Media" ? (
                        <>
                          <Link href={menu.link}>{menu.title}</Link>
                          {isMediaOpen && <MediaDropdown />}
                        </>
                      ) : menu.title === "Event Catering" ? (
                        <>
                          <Link href={menu.link}>{menu.title}</Link>
                          {isEventsOpen && <EventCateringDropdown/>}
                        </>
                      ) : (
                        <Link
                          className={`block ${
                            selectedMenu === menu.link ? "font-bold" : ""
                          }`}
                          href={menu.link}
                        >
                          {menu.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
                  <div className="rac_nav_btn">
                    <ul className="flex items-center justify-end gap-6">
                      {user ? (
                        <>
                          <li className="relative">
                            {user?.profileImage ? (
                              <Image
                                src={`${baseUrl}${user?.profileImage}`}
                                onClick={toggleProfileMenu}
                                alt="user"
                                width={10}
                                height={10}
                                className="h-10 w-10 rounded-full cursor-pointer profile-button"
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faCircleUser}
                                className="text-white h-9 cursor-pointer profile-button"
                                onClick={toggleProfileMenu}
                              />
                            )}
                            {isProfileOpen && (
                              <div className="flex flex-col absolute bg-[#292929] w-[220px] top-12 -right-[90px] border-2 border-solid border-red-600 rounded-lg p-3 gap-2 z-50 profile-dropdown">
                                <div className="flex flex-col items-center gap-2">
                                  {user?.profileImage ? (
                                    <Image
                                      src={`${baseUrl}${user?.profileImage}`}
                                      alt="user"
                                      width={100}
                                      height={100}
                                      className="h-20 w-20 rounded-full"
                                    />
                                  ) : (
                                    <FontAwesomeIcon icon={faCircleUser} className="text-white h-20 w-20 rounded-full" />
                                  )}
                                  <h1 className="font-bold text-red-600">{user?.fullName}</h1>
                                  <p className="text-sm">{user?.email}</p>
                                </div>
                                <hr className="pb-2"></hr>
                                <Link href="/dashboard" className="flex items-center gap-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z"/></svg>
                                  <h2 className="font-semibold">Dashboard</h2>
                                </Link>
                                <div className="flex cursor-pointer items-center gap-2" onClick={logout}>
                                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
                                  <button className="font-semibold">Logout</button>
                                </div>
                              </div>
                            )}
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="hidden md:mr-[-18px] md:flex gap-2">
                            <Link
                              href="/signin"
                              className="text-white md:py-1.5 md:px-3 rounded bg-[#ee2e2e] hover:bg-[#d72626]"
                            >
                              Sign In
                            </Link>
                            <Link
                              href="/membership"
                              className="text-white md:py-1.5 md:px-3 rounded bg-[#292929] hover:bg-[#3a3a3a] border border-red-600"
                            >
                              Register
                            </Link>
                          </li>
                        </>
                      )}
                      <li
                        className="flex items-center md:-mr-12 cursor-pointer"
                        onClick={() => setIsCartOpen(!isCartOpen)}
                      >
                        <LuShoppingCart className="text-2xl text-white" />
                        {hasMounted && cart.length > 0 && (
                          <span className="text-white h-5 w-5 rounded-full bg-red-600 text-sm flex justify-center items-center relative -top-3 -left-2">
                            {cart.length}
                          </span>
                        )}
                      </li>
                      <li>  
                        <button
                          className="rac_toggle_btn"
                          onClick={toggleNav}
                          aria-label={isNavOpen ? "Close menu" : "Open menu"}
                        >
                          
                          <FontAwesomeIcon
                            className="font-semibold text-2xl text-white relative top-1"
                            icon={faBars}
                          />
                          
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`rac_about_wrapper fixed inset-y-0 right-0 z-[9999] w-64 bg-[#212121] text-white shadow-lg transition-transform transform overflow-y-auto ${isNavOpen ? 'translate-x-0' : 'translate-x-full'} `}
      >
        <div className="relative">
          <button
            className="rac_toggle_btn absolute top-4 right-4 p-2 hover:bg-[#3a3a3a] rounded-full transition-colors"
            onClick={toggleNav}
            aria-label={isNavOpen ? "Close menu" : "Open menu"}
          >
            <FontAwesomeIcon
              className="font-semibold text-2xl text-white"
              icon={faXmark}
            />
          </button>
        </div>
        <div className="rac_header_wrapper flex flex-col mt-14 rounded-xl p-4 space-y-4">
          {menus.map((menu, index) => (
            <div key={index} className="relative">
              {menu.title === "About" || menu.title === "Club Facilities" || menu.title === "Media" || menu.title === "Event Catering" ? (
                <div>
                  <div
                    className={`block p-2 hover:text-[#ee2e2e] cursor-pointer ${selectedMenu === menu.link ? 'font-bold' : ''}`}
                    onClick={() => toggleSidebarDropdown(menu.title.toLowerCase().replace(' ', ''))}
                  >
                    {menu.title}
                    <IoIosArrowDown className={`inline-block text-white ml-2 transition-transform ${sidebarDropdowns[menu.title.toLowerCase().replace(' ', '')] ? 'rotate-180' : ''}`} />
                  </div>
                  <div className={`ml-4 mt-2 space-y-2 ${sidebarDropdowns[menu.title.toLowerCase().replace(' ', '')] ? 'block' : 'hidden'}`}>
                    {menu.title === "About" && (
                      <>
                        <Link href="/about-us/umcl-history" onClick={toggleNav} className="block p-2 hover:text-[#ee2e2e]">UMCL History</Link>
                        <Link href="/about-us/president-message" onClick={toggleNav} className="block p-2 hover:text-[#ee2e2e]">President Message</Link>
                        <Link href="/about-us/executive-members" onClick={toggleNav} className="block p-2 hover:text-[#ee2e2e]">Executive Members</Link>
                        <Link href="/about-us/past-president" onClick={toggleNav} className="block p-2 hover:text-[#ee2e2e]">Past President</Link>
                        <Link href="/about-us/affiliated_clubs" onClick={toggleNav} className="block p-2 hover:text-[#ee2e2e]">Affiliated Clubs</Link>
                        <Link href="/about-us/membership_info" onClick={toggleNav} className="block p-2 hover:text-[#ee2e2e]">Membership Information</Link>
                        <Link href="/about-us/club_policy" onClick={toggleNav} className="block p-2 hover:text-[#ee2e2e]">Club Rules</Link>
                      </>
                    )}
                    {menu.title === "Club Facilities" && (
                      <>
                        <Link href="/club-facilities/guest-house" onClick={toggleNav} className="block p-2 hover:text-[#ee2e2e]">Guest House</Link>
                        <Link href="/club-facilities/swimming-pool" onClick={toggleNav} className="block p-2 hover:text-[#ee2e2e]">Swimming Pool</Link>
                        <Link href="/club-facilities/sports" onClick={toggleNav} className="block p-2 hover:text-[#ee2e2e]">Sports (Indoor & Out Door)</Link>
                        <Link href="/club-facilities/health-center" onClick={toggleNav} className="block p-2 hover:text-[#ee2e2e]">Health Center & Gym</Link>
                        <Link href="/club-facilities/library" onClick={toggleNav} className="block p-2 hover:text-[#ee2e2e]">Library</Link>
                        <Link href="/club-facilities/saloon" onClick={toggleNav} className="block p-2 hover:text-[#ee2e2e]">Saloon</Link>
                        <Link href="/club-facilities/beauty-parlor" onClick={toggleNav} className="block p-2 hover:text-[#ee2e2e]">Beauty Parlor</Link>
                        <Link href="/club-facilities/laundry-service" onClick={toggleNav} className="block p-2 hover:text-[#ee2e2e]">Laundry Service</Link>
                      </>
                    )}
                    {menu.title === "Media" && ( 
                      <>
                        <Link href="/media/upcoming-event" onClick={toggleNav} className="block p-2 hover:text-[#ee2e2e]">Upcoming Event</Link>
                        <Link href="/media/gallery" onClick={toggleNav} className="block p-2 hover:text-[#ee2e2e]">Gallery</Link>
                        <Link href="/media/news" onClick={toggleNav} className="block p-2 hover:text-[#ee2e2e]">News</Link>
                        <Link href="/media/notice" onClick={toggleNav} className="block p-2 hover:text-[#ee2e2e]">Notice Board</Link>
                      </>
                    )}
                    {menu.title === "Event Catering" && (
                      <> 
                        <Link href="/event-catering/food-menu?category=All" onClick={toggleNav} className="block p-2 hover:text-[#ee2e2e]">Food Menu</Link>
                        <Link href="/event-catering/food-menu?category=Lunch" onClick={toggleNav} className="block p-2 hover:text-[#ee2e2e]">Lunch</Link>
                        <Link href="/event-catering/food-menu?category=Buffet" onClick={toggleNav} className="block p-2 hover:text-[#ee2e2e]">Buffet</Link>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <Link
                  href={menu.link}
                  className={`block p-2 hover:text-[#ee2e2e] ${selectedMenu === menu.link ? 'font-bold' : ''}`}
                  onClick={toggleNav}
                >
                  {menu.title}
                </Link>
              )}
            </div>
          ))}
          {/* Sign In and Register Buttons - Visible only in Sidebar */}
          {!user && (
            <div className="mt-4 space-y-2">
              <Link
                href="/signin"
                className="block text-center py-2 px-4 bg-[#ee2e2e] hover:bg-[#d72626] rounded text-white font-semibold"
                onClick={toggleNav}
              >
                Sign In
              </Link>
              <Link
                href="/membership"
                className="block text-center py-2 px-4 bg-[#292929] hover:bg-[#3a3a3a] rounded text-white font-semibold border border-red-600"
                onClick={toggleNav}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* cart drawer  */}

      <div
        className={`fixed inset-y-0 right-0 z-[1000] w-full md:w-96 bg-[#292929] text-white shadow-lg transition-transform transform ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      > 
        <CartDrawer setIsCartOpen={setIsCartOpen}/>
      </div>
    </header>
  );
};

export default Header;
