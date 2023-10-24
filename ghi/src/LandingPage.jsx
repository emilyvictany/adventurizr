import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

function LandingPage() {
    return (
        <div >
            <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.pinimg.com/564x/b6/f1/e1/b6f1e1222894d8ebe8edc2eb0573613c.jpg)' }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold tracking-wide ">Bored?</h1>
                        <p className="black-txtlarge tracking-wide">Anything can be an adventure!</p>

                    </div>
                </div>
            </div>
            <div className="text-center">
                <p className="black-txt">Your next adventure awaits...</p>
                <div className="divsmallspace"></div>
                <Link to="/signup">
                    <button className="btn btn-lg btn-error">sign up now!</button>
                </Link>
            </div>
            <br></br>
            <div className="text-center">
                <p className="lightblack-txt">Already have an account? Log in

                    <Link className="divsmallspace" to="/login">
                        <button className="link link-error" >here</button>
                    </Link>

                </p>
            </div >
            <div className="divlargespace"></div>
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
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            License
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Contribute
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Contact Us
                        </Typography>
                    </li>
                </ul>
            </footer>
        </div >
    );
}

export default LandingPage;
