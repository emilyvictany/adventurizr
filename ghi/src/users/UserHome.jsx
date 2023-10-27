import React from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import { Typography } from "@material-tailwind/react";


function UserHome() {
    const { user } = useUser()

    return (
        <div className="w-screen">
            <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.pinimg.com/564x/b6/f1/e1/b6f1e1222894d8ebe8edc2eb0573613c.jpg)' }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">

                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold tracking-wide ">Welcome, {user?.first_name}</h1>
                        <p className="black-txtlarge tracking-wide">Lets find an adventure!</p>
                        <div className="divlargespace"></div>

                        <div className="grid grid-cols-3 gap-10">
                            <Link to="/favorites">
                                <button className="btn btn-outline btn-secondary btn rounded-full ">Favorited adventures</button>
                            </Link>
                            <Link to="/activities">
                                <button className="btn btn-outline btn-secondary btn rounded-full">Find a new adventure</button>
                            </Link>
                            <Link to="/activities/create">
                                <button className="btn btn-outline btn-secondary btn rounded-full">Create an activity</button>
                            </Link>
                        </div>
                    </div>

                </div>


            </div>
            <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
                <Typography color="blue-gray" className="font-normal">
                    &copy; 2023 boredom busters
                </Typography>
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            About Us
                        </Typography>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default UserHome;
