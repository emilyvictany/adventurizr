import React from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";


function UserHome() {
    const { user } = useUser()

    return (
        <div>
            <h1>Welcome, {user?.first_name}</h1>
            <div>
                <p>Lets find an adventure!</p>
                {/* Links currently go to landing page -- will replace when other components are working */}
                <Link to="/favorites">
                    <button className="btn btn-outline btn-secondary btn">See favorited adventures</button>
                </Link>
                <Link to="/">
                    <button className="btn btn-outline btn-secondary btn">Find a new adventure</button>
                </Link>
                <Link to="/create">
                    <button className="btn btn-outline btn-secondary btn">Create an activity</button>
                </Link>
            </div>
        </div>
    );
}

export default UserHome;
