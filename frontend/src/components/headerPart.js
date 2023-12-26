import React from "react";
import { Link } from 'react-router-dom';
import img1 from './images/headerLogo.png';

function HeaderPart() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={img1} alt="Logo" width="170"  className="d-inline-block align-text-top" />
                    </Link>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div className="login-Section">
                        <Link to="/" className="navbar-brand">
                            <button type="button" class="btn btn-outline-warning">Login</button>
                        </Link>
                        <Link to="/" className="navbar-brand">
                            <button type="button" class="btn btn-warning">Register</button>
                        </Link>
                    </div>
                    


                </div>
            </nav>

        </nav>
    );
}

export default HeaderPart;
