import { NavLink } from "react-router-dom";
import React from "react";

function Nav() {
    return (
    // remove "expand" for it to be a hamburger menu at all times
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Adventurizr</NavLink><div
                className="collapse navbar-collapse justify-content-center"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">Signup</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Nav;
