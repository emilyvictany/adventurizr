import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { Player } from "@lottiefiles/react-lottie-player";
import pinkplane from "../lotties/paper-airplane.json";


function LandingPage() {

    return (
        <div className="w-screen">
            <div className="grid grid-cols-3 grid-rows-2 h-screen">
                <div className="h-fit w-fit login150-pic js-tilt">
                    <Player src={pinkplane} loop autoplay />
                </div>
                <div>
                    <h1 className="mb-5 text-6xl font-bold tracking-wide text-center pt-24">Bored?</h1>
                    <p className="black-txtlarge tracking-wide text-center ">Anything can be an adventure!</p>
                </div>
                <div className="h-fit w-fit login150-pic js-tilt">
                    <Player src={pinkplane} loop autoplay />
                </div>
                <div className="flex-none text-center bg-lightorange pt-16 pl-16" >
                </div>
                <div className="flex-none text-center bg-lightorange pt-16">

                    <p className="pb-5 black-txt">Your next adventure awaits...</p>
                    <Link to="/signup">
                        <button className="btn btn-wide btn-lg rounded-full text-white btn-error sm:btn-sm md:btn-md lg:btn-lg">sign up now!</button>

                    </Link>

                    <p className="lightblack-txt pt-5">Already have an account? Log in
                        <Link className="divsmallspace" to="/login">
                            <button className="link link-error" >here</button>
                        </Link>
                    </p>
                </div>
                <div className="flex-nonw text-center bg-lightorange  pr-16 pt-16">
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

export default LandingPage;
