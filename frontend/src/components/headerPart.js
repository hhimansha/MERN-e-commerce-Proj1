import React, { useState, useEffect } from 'react';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { Link } from 'react-router-dom';
import img1 from './images/headerLogoW.png';
import { useCart } from '../hooks/useCart';

function HeaderPart() {
  const { Logout } = useLogout();
  const { user } = useAuthContext();
  const { cart } = useCart(); // Use the cart state from CartContext

  const handleClick = () => {
    Logout();
  };

  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (
    <nav className="bg-white dark:bg-grey z-20 sticky top-0 w-full border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-1">
      <Link to="/" className="navbar-brand">
                    <div>
                        <img src={img1} alt="Logo" width="170" className="d-inline-block align-text-top" />
                    </div>
                </Link>
        <div className="flex md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse items-center">
            
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
          className={`items-center w-full md:flex md:w-auto md:order-2 ${isNavVisible ? 'block text-center' : 'hidden'}`}
          id="navbar-sticky"
        >
           <ul className="items-center flex flex-col p-4 md:p-0 mt-4 mx-2 font-medium -100 rounded-lg bg-grey md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-grey dark:bg-grey md:dark:bg-grey ">
            <li>
                <a href="/" className="block py-2 px-3 text-gray-900 rounded  md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:text-white  dark:hover:text-white dark:border-gray-700">Home</a>
            </li>
            <li>
                <a href="/" className="block py-2 px-3 text-gray-900 rounded md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:text-white  dark:hover:text-white ">Categories</a>
            </li>
            <li>
                <a href="/" className="block py-2 px-3 text-gray-900 rounded   md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:text-white dark:hover:text-primary  ">About</a>
            </li>
            <li>
                <a href="/" className="block py-2 px-3 text-gray-900 rounded  md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:text-white  ">Contact</a>
            </li>
            <li>
            <div className="relative">
              <div className="flex flex-row cart-img  rounded-full items-center px-2 justify-center">
                <Link to='/cart'>
                  <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3"/>
                  </svg>
                </Link>
              </div>
              {cart.length > 0 && (
                    <span className="absolute top-0 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                      {cart.length}
                    </span>
                  )}
            </div>

  </li>
            
        </ul>
        
        {user && (<>
                        <div className="user justify-center">
                            <Link to="/user">
                                <div className="flex items-center mx-1 rounded-full px-2 justify-center">
                            
                                    <svg class="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                    </svg>
                                    <span className="p-2 font-semibold text-primary">{user.email.split('@')[0]}</span>
                                </div>
                            </Link>
                        </div>

                        <div className="logout">
                            <Link to="/" className="mx-2">
                                <button type="button" onClick={handleClick} className="px-5 py-2 text-20 text-white  font-semibold rounded-full border border-primary transition duration-1000 ease-in-out hover:text-white hover:bg-primary hover:border-black">Log Out</button>
                            </Link>
                        
                        </div>
                    </>
                )}
   
   {!user && (
                    <Link to="/login" className="navbar-brand">
                        <button type="button" className="px-5 py-2 sm: text-20  text-white font-semibold rounded-full bg-primary  transition duration-1000 ease-in-out hover:text-white ">Log In</button>
                    </Link>
                            
                )}
        

       
        </div>
      </div>
    </nav>
    
  );
}

export default HeaderPart;
