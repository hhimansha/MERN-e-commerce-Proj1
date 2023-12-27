import React from "react";
import { Link } from 'react-router-dom';
import img1 from './images/headerLogo.png';
//import img2 from './images/hero.jpg';

function HeaderPart() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <nav className="flex center py-3">
                <div className="flex items-center space-x-60 mx-auto">
            
                    <Link to="/" className="navbar-brand">
                        <img src={img1} alt="Logo" width="170"  className="d-inline-block align-text-top" />
                    </Link>
                    <form className="d-flex items-center" role="search">
                        <input className="p-2  border border-black rounded-full w-80 pl-5" type="search" placeholder="Search your book here" aria-label="Search" />
                        <button type="submit">
                            <img width="30"src="https://img.icons8.com/ios/100/search--v1.png" alt="search--v1"/>
                        </button>
                    </form>
                    <div className="login-Section">
                        <Link to="/" className="navbar-brand">
                            <button type="button" className="px-5 py-2 text-20 text-black-600 font-semibold rounded-full border border-black hover:text-white hover:bg-grey hover:border-black">Log In</button>
                        </Link>
                        <Link to="/" className="mx-2">
                            <button type="button" className="px-5 py-2 text-20 text-white font-semibold rounded-full border focus:outline-none bg-primary">Sign Up</button>
                        </Link>
                    </div>
                </div>
                
            </nav>

            <div className="flex items-center justify-center space-x-10 mx-auto bg-grey text-white p-4 text-lg ">
                <Link to="/" className="transition duration-900 ease-in-out hover:underline">
                    Home
                </Link>
                <Link to="/about" className="navbar-brand hover:text-black hover:bg-primary">
                    Magazines
                </Link>
                <Link to="/services" className="navbar-brand hover:text-ff8400">
                    Books
                </Link>
                <Link to="/contact" className="navbar-brand hover:text-ff8400">
                    Audiobooks
                </Link>
                <Link to="/contact" className="navbar-brand hover:text-ff8400">
                    Pages
                </Link>
                </div>

        </nav>
        
    );
}

export default HeaderPart;
