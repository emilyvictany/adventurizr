import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import { Typography } from "@material-tailwind/react";
import { Player } from "@lottiefiles/react-lottie-player";
import pinkplane from "../lotties/pinkplane.json";



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
            <div className="grid grid-cols-3 grid-rows-2 h-screen">
                <div className="h-fit w-fit login150-pic js-tilt">
                    <Player src={pinkplane} loop autoplay />
                </div>
                <div>
                    <h1 className="mb-5 text-6xl font-bold tracking-wide text-center pt-24">Welcome, {user?.first_name}</h1>
                    <p className="black-txtlarge tracking-wide text-center ">Lets find an adventure!</p>
                </div>
                <div className="h-fit w-fit login150-pic js-tilt">
                    <Player src={pinkplane} loop autoplay />
                </div>
                <div className="flex-none text-center bg-lightorange pt-16 pl-16" >
                    <Link to="/favorites">
                        <button className="btn btn-wide btn-lg btn-secondary  border-2 border-white rounded-full text-white  sm:btn-sm md:btn-md lg:btn-lg"> Favorited adventures </button>
                    </Link>
                </div>
                <div className="flex-none text-center bg-lightorange pt-16 ">
                    <Link to="/activities">
                        <button className="btn btn-wide btn-lg rounded-full text-white border-2 border-white btn-error sm:btn-sm md:btn-md lg:btn-lg">Find a new adventure</button>
                    </Link>
                </div>
                <div className="flex-nonw text-center bg-lightorange  pr-16 pt-16">
                    <Link to="/activities/create">
                        <button className="btn btn-wide btn-lg border-2 border-white rounded-full text-white btn-success sm:btn-sm md:btn-md lg:btn-lg">Create an activity</button>
                    </Link>
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
