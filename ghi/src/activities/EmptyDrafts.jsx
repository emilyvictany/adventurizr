import React from "react"
import { Link } from "react-router-dom";

function EmptyDrafts() {

    return (
        <div>
            <h1>nothing here yet!</h1>
            <div>
                <Link to="/activities/create">
                    <button className="btn btn-outline btn-secondary btn">Create an activity!</button>
                </Link>
            </div>
        </div>
    )
}
export default EmptyDrafts;
