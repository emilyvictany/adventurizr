import React from "react"
import { Link } from "react-router-dom";

function LoginError() {

    return (
        <div className="divspace flex flex-col items-center justify-center w-screen">
            <br></br>
            <h1 className="divlargespace text-center text-2xl font-bold">Uh-oh, looks like you're not logged in yet!</h1>
            <div className="flex justify-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://evinzenginhome.files.wordpress.com/2019/01/boy.gif" alt="boy flying a kite" /></figure>
                </div>
            </div>
            <div className="flex place-content-center gap-x-4 mt-12">
                <Link to="/login">
                    <button className="btn btn-lg btn-outline btn-accent">Log In</button>
                </Link>
                <Link to="/signup">
                    <button className="btn btn-lg btn-outline btn-secondary">Sign Up</button>
                </Link>
            </div>
        </div>
    )
}
export default LoginError;
