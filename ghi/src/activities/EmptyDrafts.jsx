import React from "react"
import { Link } from "react-router-dom";

function EmptyDrafts() {

    return (
        <div className="divspace">
            <h1 className="divlargespace text-center text-2xl font-bold">Your Activity Drafts</h1>
            <div className="flex justify-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className="card-title justify-center">Nothing here yet!</p>
                    </div>
                    <figure><img src="https://i.pinimg.com/originals/f0/6a/8b/f06a8bc52f88cafa9a5aa1e1c86fea6e.gif" alt="cute ghost" /></figure>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="flex justify-center">
                <Link to="/activities/create">
                    <button className="btn btn-outline btn-secondary btn">Create an activity!</button>
                </Link>
            </div>
        </div>
    )
}
export default EmptyDrafts;
