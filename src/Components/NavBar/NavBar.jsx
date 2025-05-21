import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
function NavBar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);
  const handelClickEvent = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setShowSidebar(false);
    }
  };
  useEffect(() => {
    if (showSidebar) {
      document.addEventListener("mousedown", handelClickEvent);
      // document.body.style.backgroundBlendMode = "blur(20px)";
      // document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
      document.removeEventListener("mouseenter", handelClickEvent);
    }

    return () => {
      document.removeEventListener("mousedown", handelClickEvent);
    };
  }, [showSidebar]);
  return (
    <>
      <div className="min-w-full  flex-row ">
        <nav className="w-full h-16 xl:px-12 xl:h-[5.4rem]  flex justify-between items-center px-5">
          <FaBars
            className="xl:hidden inline-block text-xl"
            onClick={() => {
              setShowSidebar(true);
            }}
          />
          <div className="brand-logo h-10 xl:h-14 xl:w-auto flex items-center">
            <img src="asset 0.png" alt="" srcset="" className="h-full" />
          </div>
          <FaCartShopping className=" inline-block text-xl xl:hidden" />
          <div className="nav-links hidden xl:w-6/12 justify-between text-base xl:flex">
            <a href="#">BUY GEAR</a>
            <a href="#">SELL GEAR</a>
            <a href="#">CONNECT</a>
            <a href="#">OUR STORY</a>
            <a href="#">EVENTS</a>
            <a href="#">TESTIMONIALS</a>
          </div>
          <div className="menu-sections w-36 hidden xl:flex  font-d text-2xl justify-between">
            <CiSearch />
            <CiUser />
            <CiHeart />
            <IoBagHandleOutline />
          </div>
        </nav>
        <hr className="xl:hidden block " />
        <div className=" w-full h-16 xl:hidden  px-5 py-3">
          <input
            type="search"
            className=" block w-full h-full rounded-md text-base bg-gray-100 px-2 shadow-md shadow-blue-200"
            placeholder="Enter your keyword..."
          />
        </div>
      </div>

      {/* sidebar */}

      <div
        class={`fixed top-0 left-0 h-screen w-80  bg-white text-white z-50 xl:hidden transition shadow-md shadow-blue-300 ${
          showSidebar ? "translate-x-0" : "-translate-x-96"
        } `}
        ref={sidebarRef}
      >
        <div class="p-4 bg-blue-900">
          <div class="flex items-center space-x-4 ">
            <div class="rounded-full bg-white p-2">
              <img src="asset 23.png" class="h-10 w-10 text-blue-950" />
            </div>
            <div>
              <h3 class="text-2xl font-semibold">Welcome!</h3>
              <p class="text-base">
                <a href="#" class="hover:underline">
                  Sign In
                </a>{" "}
                /{" "}
                <a href="#" class="hover:underline">
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>

        <nav class="mt-8 px-4 space-y-4 text-black">
          <a href="#" class="block  hover:text-gray-400">
            BUY GEAR
          </a>
          <a href="#" class="block  hover:text-gray-400">
            SELL GEAR
          </a>
          <a href="#" class="block  hover:text-gray-400">
            CONNECT
          </a>
          <a href="#" class="block  hover:text-gray-400">
            OUR STORY
          </a>
          <a href="#" class="block  hover:text-gray-400">
            EVENTS
          </a>
          <a href="#" class="block  hover:text-gray-400">
            TESTIMONIALS
          </a>
        </nav>
      </div>
    </>
  );
}
export default NavBar;
