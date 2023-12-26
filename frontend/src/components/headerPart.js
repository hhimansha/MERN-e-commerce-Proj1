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
                </div>
            </nav>
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/add" className="nav-link active">Add student</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HeaderPart;
