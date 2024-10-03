"use client";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
// import ClientRegistration from "./toggle-modals/ClientRegistration";
import { useUser } from "@/app/UserContext";
import { logoutUser } from "@/lib/Fetcher/auth/Logout";
import toast from "react-hot-toast";
import ClientRegistration from "./toggle-auth-models/MainAuthModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();
  const [user, setUser] = useState<object | null>(null);
const {authUser}=useUser()

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogin = (userData: object) => {
    setUser(userData); // Update user state when login is successful
    localStorage.setItem('user', JSON.stringify(userData)); // Store the user data in localStorage
  };

  const handleScroll = React.useCallback(() => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos < 10) {
      setVisible(true);
    } else if (prevScrollPos > currentScrollPos) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const headers = [
    { name: "Home", href: "/", to: "home", isExternal: true },
    { name: "About", href: "/#about", to: "about" },
    { name: "Booking", href: "/#booking", to: "booking" },
    { name: "Contact", href: "/#footer", to: "footer" },
  ];

  const handleLinkClick = (href: string, isExternal: boolean = false) => {
    if (pathname !== "/" && !isExternal) {
      window.location.href = href;
    }
  };


  const {setAuthUser}=useUser()
  const handleLogout = async () => {

    console.log("function is called")
    const response = await logoutUser();

    if (response.success) {
      
        setAuthUser(null);

       toast.success("Logout successful",{
         duration: 3000
       })
 
    } else {
        console.error(response.message);
        // Optionally show an error message to the user
    }
};

  const AuthButton = () => {

    return(
      <main>
         <div >
      {authUser ? (
        <div>
          <div className="">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn hover:bg-white bg-white"
              >
                <Image
                  src="/images/User/user.png"
                  alt="logo"
                  width={50}
                  height={10}
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Bookings</a>
                </li>
                <li>
                  <a
                    onClick={handleLogout}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          {/* <ClientRegistration handleLogin={handleLogin} /> */}
          <ClientRegistration />
        </div>
      )}
    </div>
      </main>
    )
  }


  return (
    <header>
      <nav
        className={`fixed top-0 left-0 w-full bg-white z-50 transition-transform duration-300 shadow-lg ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto p-4">
          {/* Desktop View */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center gap-6 text-gray-700 text-lg mx-auto">
              {headers.slice(0, 2).map((item, index) => (
                <li
                  key={index}
                  className="hover:text-blue-600 font-medium transition duration-200 cursor-pointer"
                >
                  <ScrollLink to={item.to} smooth={true} duration={500}>
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
              <li className="text-center flex flex-col items-center">
                <span className="text-blue-600 text-xl font-semibold">
                  Dr. Kevin
                </span>
                <span className="block text-gray-500 text-sm font-medium">
                  Health Specialist
                </span>
              </li>
              {headers.slice(2).map((item, index) => (
                <li
                  key={index + 2}
                  className="hover:text-blue-600 font-medium transition duration-200 cursor-pointer"
                >
                  <ScrollLink
                    href={item.href}
                    to={item.to}
                    smooth={true}
                    duration={500}
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
            {/* <div className="flex items-center gap-4">
              <LoginModal/>
             
              <RegisterModal/>
            </div> */}
          </div>

          {/* Mobile View */}
          <div className="md:hidden flex items-center justify-between">
            <div className="flex flex-col items-center">
              <Link href="/" className="text-blue-500 text-2xl font-semibold">
                Dr. Kevin
              </Link>
              <span className="text-gray-500 text-sm font-medium ml-2">
                Health Specialist
              </span>
            </div>
            <button
              aria-label="Toggle Menu"
              onClick={handleMenuToggle}
              className="focus:outline-none"
            >
              {isMenuOpen ? (
                <ImCross  size={28} />
              ) : (
                <GiHamburgerMenu size={28} />
              )}
            </button>
          </div>

          {/* Mobile Menu Items */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg mt-4 rounded-lg">
              <ul className="flex flex-col items-center gap-4 p-4 text-gray-700 text-lg">
                {headers.map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-blue-600 font-medium transition duration-200 cursor-pointer"
                  >
                    {item.isExternal || pathname !== "/" ? (
                      <Link
                        href={item.href}
                        onClick={() =>
                          handleLinkClick(item.href, item.isExternal)
                        }
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <ScrollLink
                        to={item.to}
                        smooth={true}
                        duration={500}
                        onClick={handleMenuToggle}
                      >
                        {item.name}
                      </ScrollLink>
                    )}
                  </li>
                ))}
               {/* <ClientRegistration handleLogin={handleLogin} /> */}
               <AuthButton/>

              </ul>
            </div>
          )}
        </div>
     <div className="  flex gap-2 absolute top-3 right-10">
      {/* <ScheduleButton/> */}
    <div  className="hidden md:block"> <AuthButton/></div>
     </div>
      </nav>
    </header>
  );
};

export default Navbar;
