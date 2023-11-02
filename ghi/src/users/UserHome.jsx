import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import { Typography } from "@material-tailwind/react";
import LoginError from "../other/LoginError";


function UserHome() {
    const { user, saveUser } = useUser()

    useEffect(() => {
        if (!user) {
            saveUser();
        }
    }, [user, saveUser]);

    if (!user) {
        return <LoginError to="/login_error" />;
    }

    return (
        <div className="w-screen">
            <div className="flex justify-center">
                <div className="w-screen h-screen">
                    <div className=" h-1/2">
                        <h1 className="mb-5 text-6xl font-bold tracking-wide text-center pt-24">Welcome, {user?.first_name}</h1>
                        <p className="black-txtlarge tracking-wide text-center">Lets find an adventure!</p>
                    </div>
                    <div className="bg-lightorange h-1/2 w-screen">
                        <div className="flex justify-center pt-24 ">
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
            <footer className="flex w-full flex-row flex-wrap bg-lightorange items-center justify-center gap-x-12 text-center md:justify-between">
                <Typography color="blue-gray" className="font-normal text-white pl-3">
                    &copy; 2023 boredom busters
                </Typography>
            </footer>

        </div>
    );
}

export default UserHome;
