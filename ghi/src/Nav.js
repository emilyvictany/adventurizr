import { NavLink } from "react-router-dom";
import React, { useState } from "react"
import useToken from "@galvanize-inc/jwtdown-for-react"


function Nav() {
    const [logoutSuccess, setLogoutSuccess] = useState();
    const { logout, token } = useToken()

    const handleLogout = async () => {
        try {
            if (token) {
                await logout()
                localStorage.removeItem('user')
                setLogoutSuccess("User logged out successfully!")
                setTimeout(() => {
                    setLogoutSuccess(null);
                }, 2000);
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
                        <NavLink className="nav-link" to="/activities">Find an Adventure</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/activities/create">Create An Activity</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" onClick={handleLogout}>Logout</NavLink>
                    </li>
                </ul>
            </div>
            <div className="custom-alert-bg">
                {logoutSuccess && (
                    <div className="alert alert-danger" role="alert">
                        {logoutSuccess}
                    </div>
                )}
            </div>
            </div>
        </nav>
    )
}

export default Nav;
