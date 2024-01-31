import React from "react";
import { useState } from "react";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";

function HeaderPart() {
  const { Logout } = useLogout();
  const { user } = useAuthContext();
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleClick = () => {
    Logout();
  };

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <Link to='/cart'>
            <div className="cart-img p-1 mx-2 bg-grey-mid rounded-full items-center">
                <svg class="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3"/>
                </svg>
            </div>
        </Link>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse m-0">
            <button
              onClick={toggleNav}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`items-center w-full md:flex md:w-auto md:order-1 ${isNavVisible ? 'block' : 'hidden'}`}
          id="navbar-sticky"
        >
           <ul className="flex flex-col p-4 md:p-0 mt-4 mx-6 font-medium border border-gray-100 rounded-lg bg-grey md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-grey dark:bg-grey md:dark:bg-grey ">
            <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded  md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:text-white  dark:hover:text-white dark:border-gray-700">Home</a>
            </li>
            <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:text-white  dark:hover:text-white ">About</a>
            </li>
            <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded   md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:text-white dark:hover:text-primary  ">Services</a>
            </li>
            <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded  md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:text-white  ">Contact</a>
            </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderPart;
