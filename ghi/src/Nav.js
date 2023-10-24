import { NavLink } from "react-router-dom";
import React, { useState } from "react"
import useToken from "@galvanize-inc/jwtdown-for-react"


function Nav() {
    const [logoutSuccess, setLogoutSuccess] = useState(false)
    const { logout, token } = useToken()

    const handleLogout = async () => {
        try {
            if (token) {
                await logout()
                localStorage.removeItem('user')
                setLogoutSuccess(true)
            }
        } catch (error) {
            console.error("Error logging out", error)
            window.location.href = "/home"
        }
    }

    return (
        <nav className="navbar">
            <div className="navbar bg-base-100">
            <div className="container-fluid">
                <NavLink className="nav-link" to="/">Adventurizr</NavLink>
            </div>
            <div className="navbar-collapse justify-content-end align-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">Signup</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/user">User Profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/activities/drafts">Your Drafts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
                    </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/activities/filtered">Find an Adventure</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/create">Create An Activity</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" onClick={handleLogout}>Logout</NavLink>
                    </li>
                </ul>
            </div>
            <div className="custom-alert-bg">
                {logoutSuccess && (
                <div className="alert alert-danger px-0 mb-0" role="alert">
                    User logged out successfully.
                </div>
                )}
            </div>
            </div>
        </nav>
    )
}

export default Nav;
