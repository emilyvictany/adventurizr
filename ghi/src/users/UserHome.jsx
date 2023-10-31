import React from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import { Typography } from "@material-tailwind/react";


function UserHome() {
    const { user } = useUser()

    return (
        <div className="w-screen">
            <div className="flex justify-center">
                <div className="w-screen h-screen">
                    <div className=" h-1/2">
                        <h1 className="mb-5 text-6xl font-bold tracking-wide text-center pt-24">Welcome, {user?.first_name}</h1>
                        <p className="black-txtlarge tracking-wide text-center">Lets find an adventure!</p>
                    </div>
                    <div className="bg-lightorange h-1/2">
                        <div className="flex justify-center pt-20">
                            <div className="flex-inital w-64">
                                <Link to="/favorites">
                                    <button className="btn btn-outline btn-secondary btn rounded-full ">Favorited adventures</button>
                                </Link>
                            </div>
                            <div className="flex-inital w-64">
                                <Link to="/activities">
                                    <button className="btn btn-outline btn-secondary btn rounded-full">Find a new adventure</button>
                                </Link>
                            </div>
                            <div className="flex-inital w-64">
                                <Link to="/activities/create">
                                    <button className="btn btn-outline btn-secondary btn rounded-full">Create an activity</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="flex w-full flex-row flex-wrap bg-lightorange items-center justify-center gap-y-12 gap-x-12 text-center md:justify-between">
                <Typography color="blue-gray" className="font-normal text-white pl-3">
                    &copy; 2023 boredom busters
                </Typography>

            </footer>

        </div>
    );
}

export default UserHome;
