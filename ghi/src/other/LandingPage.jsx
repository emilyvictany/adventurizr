import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
function LandingPage() {
    return (
        <div className="w-screen">
            <div>
                <div className="flex justify-center py-20">
                    <div>
                        <h1 className="mb-5 text-5xl ps-20 p-3 font-bold tracking-wide">Bored?</h1>
                        <p className="black-txtlarge tracking-wide">Anything can be an adventure!</p>
                    </div>
                </div>
            </div>
            <div className="py-20 bg-lightorange">
                <div className="text-center">
                    <p className="pb-5 black-txt">Your next adventure awaits...</p>
                    <div className="divsmallspace"></div>
                    <Link to="/signup">
                        <button className="btn btn-wide btn-lg rounded-full text-white btn-error sm:btn-sm md:btn-md lg:btn-lg">sign up now!</button>
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
            </div>
            <footer className="flex justify-center">
                <Typography color="blue-gray" className="font-normal">
                    &copy; 2023 boredom busters
                </Typography>
            </footer>
        </div >
    );
}
export default LandingPage;
