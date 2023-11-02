import React from "react"
import { Link } from "react-router-dom";

function ErrorPage() {

    return (
        <div className="divspace flex flex-col items-center justify-center w-screen">
            <br></br>
            <h1 className="divlargespace text-center text-2xl font-bold">Oops, nothing here!</h1>
            <div className="flex justify-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif" alt="404" /></figure>
                </div>
            </div>
            <div className="flex place-content-center gap-x-8 mt-12">
                <Link to="/home">
                    <button className="btn btn-lg btn-outline btn-secondary">Take me home</button>
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage;
