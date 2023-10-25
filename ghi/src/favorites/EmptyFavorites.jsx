import React from "react"
import { Link } from "react-router-dom";

function EmptyFavorites() {

    return (
        <div>
            <h1>nothing here yet!</h1>
            <div>
                <Link to="/activities">
                    <button className="btn btn-outline btn-secondary btn">Find a new adventure!</button>
                </Link>
            </div>
        </div>
    )
}
export default EmptyFavorites;
