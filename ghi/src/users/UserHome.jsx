import React from "react";
import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function UserHome() {
    const { token } = useToken()
    const [userId, setUserId] = useState("")
    const [userFirstName, setUserFirstName] = useState("")

    const fetchUser = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_HOST}/token`, {
        credentials: "include",
    })
    if (response.ok) {
        // const data = await response.json()
        // const userId = data.user
        setUserId(userId)
        setUserFirstName(userFirstName)
    }
    }

    useEffect(() => {
    const fetchData = async () => {
        await fetchUser()
    }})


    return (
        <div>
            <h1>Welcome, user</h1>
            <div>
                <p>Lets find an adventure!</p>
                {/* Links currently go to landing page -- will replace when other components are working */}
                <Link to="/">
                    <button>See favorited adventures</button>
                </Link>
                <Link to="/">
                    <button>Find a new adventure</button>
                </Link>
                <Link to="/">
                    <button>Create an activity</button>
                </Link>
            </div>
        </div>
    );
}

export default UserHome;
