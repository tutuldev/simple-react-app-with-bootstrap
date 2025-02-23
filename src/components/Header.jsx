import React from 'react';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    {/* <a className="navbar-brand">Navbar</a> */}
                     <Link to="/" className="navbar-brand">Navbar</Link>

                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                </nav>
        </div>
    );
};

export default Header;