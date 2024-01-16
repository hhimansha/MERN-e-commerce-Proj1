import React from "react";
import { Link, useLocation } from 'react-router-dom';
import img1 from './images/headerLogo.png';
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
//import img2 from './images/hero.jpg';

function HeaderPart() {

    const {Logout} = useLogout()
    const {user} = useAuthContext()

    const handleClick = () => {
        Logout();
    }
    

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <nav className="flex center py-3">
                <div className="flex items-center mx-auto">
            
                    <Link to="/" className="navbar-brand">
                        <img src={img1} alt="Logo" width="170"  className="d-inline-block align-text-top" />
                    </Link>
                    <form className="d-flex items-center mx-60" role="search">
                        <input className="p-2  border border-gray-300 rounded-full w-80 pl-5" type="search" placeholder="Search your book here" aria-label="Search" />
                        <button type="submit">
                            <img width="30"src="https://img.icons8.com/ios/100/search--v1.png" alt="search--v1" className=" -mb-2.5 ml-2"/>
                        </button>
                    </form>
                    <div className="login-Section">
                        {user && (
                        <><span className="p-5">{user.email}</span><Link to="/" className="mx-2">
                                <button type="button" onClick={handleClick} className="px-5 py-2 text-20 text-black-600 font-semibold rounded-full border border-black transition duration-1000 ease-in-out hover:text-white hover:bg-grey hover:border-black">Log Out</button>
                            </Link></>
                        )}
                        {!user && (
                        <><Link to="/login" className="navbar-brand">
                                <button type="button" className="px-5 py-2 text-20 text-black-600 font-semibold rounded-full border border-black transition duration-1000 ease-in-out hover:text-white hover:bg-grey hover:border-black">Log In</button>
                            </Link><Link to="/signup" className="mx-2">
                                    <button type="button" className="px-5 py-2 text-20 text-white font-semibold rounded-full border focus:outline-none bg-primary">Sign Up</button>
                            </Link></>
                        )}
                        
                    </div>
                </div>
                
            </nav>

            <div className="flex items-center justify-center mx-auto bg-grey text-white text-lg">
                <Link to="/" className="navbar-brand hover:bg-primary p-2 px-6 rounded-full transition duration-200 ease-in-out">
                    Home
                </Link>
                <Link to="/about" className="navbar-brand hover:bg-primary p-2 px-6 rounded-full transition duration-200 ease-in-out">
                    Magazines
                </Link>
                <Link to="/services" className="navbar-brand hover:bg-primary p-2 px-6 rounded-full transition duration-200 ease-in-out">
                    Books
                </Link>
                <Link to="/contact" className="navbar-brand hover:bg-primary p-2 px-6 rounded-full transition duration-200 ease-in-out">
                    Audiobooks
                </Link>
                <Link to="/contact" className="navbar-brand hover:bg-primary p-2 px-6 rounded-full transition duration-200 ease-in-out">
                    Pages
                </Link>
                </div>

        </nav>
        
    );
}

export default HeaderPart;
