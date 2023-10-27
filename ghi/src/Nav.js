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
                }, 2500);
            }
        } catch (error) {
            console.error("Error logging out", error)
            window.location.href = "/home"
        }
    }

    return (
    <div>
        <nav className="navbar bg-navred text-primary-content ">
            <div className="container-fluid">
                {token ? (
                    <NavLink className="btn btn-ghost normal-case text-xl" to="/home">Adventurizr</NavLink>
                ) : (
                    <NavLink className="btn btn-ghost normal-case text-xl" to="/">Adventurizr</NavLink>
                )}
            </div>
            {token ? (
            <div className="flex justify-end">
                <div className="topnav" ><NavLink className="link link-hover text-sm" to="/activities">Find an Adventure</NavLink></div>
                <div className="topnav" ><NavLink className="link link-hover text-sm" to="/favorites">Favorites</NavLink></div>
                <div className="topnav"><NavLink className="link link-hover text-sm" to="/activities/create">Create An Activity</NavLink></div>
                <div className="topnav"><NavLink className="link link-hover text-sm" to="/activities/drafts">Your Drafts</NavLink></div>
                <div className="topnav absolute right-20"><NavLink className="link link-hover text-sm" to="/user">User Profile</NavLink></div>
                <div className="topnav absolute right-0"><NavLink to="/" className="link link-hover text-sm" onClick={handleLogout}>Logout</NavLink></div>
            </div>
            ) :
            <>
                <div className="topnav absolute right-20" ><NavLink className="link link-hover text-sm" to="/signup">Signup</NavLink></div>
                <div className="topnav absolute right-0"><NavLink className="link link-hover text-sm" to="/login">Login</NavLink></div>
            </>
            }
        </nav>
        <div className="alert-container" >
            {logoutSuccess && (
                <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                    {logoutSuccess}
                </div>
            )}
        </div>
    </div>
    )
}

export default Nav;
