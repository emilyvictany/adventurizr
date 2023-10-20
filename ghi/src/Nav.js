import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react"
import useToken from "@galvanize-inc/jwtdown-for-react"


function Nav() {
    const [userId, setUserId] = useState(null)
    const [logoutSuccess, setLogoutSuccess] = useState(false)
    const { logout, token } = useToken()

    const fetchUser = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_HOST}/token`, {
                credentials: "include",
            })
            if (response.ok) {
                const data = await response.json()
                if (data) {
                    const userId = data.user
                    setUserId(userId)
                }
            }
        } catch (error) {
            console.error("Error fetching user account", error)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [userId])

    const handleLogout = async () => {
        try {
            if (token) {
                await logout()
                setLogoutSuccess(true)
                setUserId(null)
            }
        } catch (error) {
            console.error("Error logging out", error)
            window.location.href = "/home"
        }
    }

    return (
        <nav className="navbar">
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
                        <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
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
        </nav>
    )
}

export default Nav;
