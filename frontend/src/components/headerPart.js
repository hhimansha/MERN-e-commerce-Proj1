import React from "react";
import { Link } from 'react-router-dom';
import img1 from './images/headerLogo.png';
import img2 from './images/hero.jpg';

function HeaderPart() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <nav className="flex center">
                <div className="flex items-center space-x-80 mx-auto">
            
                    <Link to="/" className="navbar-brand">
                        <img src={img1} alt="Logo" width="170"  className="d-inline-block align-text-top" />
                    </Link>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div className="login-Section">
                        <Link to="/" className="navbar-brand">
                            <button type="button" className="px-5 py-2 text-20 text-black-600 font-semibold rounded-full border border-black hover:text-white hover:bg-black hover:border-black">Login</button>
                        </Link>
                        <Link to="/" className="mx-2">
                            <button type="button" className="px-5 py-2 text-20 text-white font-semibold rounded-full border border-black focus:outline-none bg-black">Register</button>
                        </Link>
                    </div>
                </div>
                
            </nav>

            <div className="flex items-center justify-center space-x-10 mx-auto bg-black text-white">
                <Link to="/" className="navbar-brand hover:text-ff8400">
                    Home
                </Link>
                <Link to="/about" className="navbar-brand hover:text-ff8400">
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
            <img src={img2} alt="Logo" className="w-100" />

        </nav>
        
    );
}

export default HeaderPart;
