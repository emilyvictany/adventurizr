import React from "react"
import { Link } from "react-router-dom";

function EmptyFavorites() {

    return (
        <div className="divspace">
            <h1 className="divlargespace text-center text-2xl font-bold">Favorites</h1>
            <div className="flex justify-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className="card-title justify-center">Nothing here yet!</p>
                    </div>
                    <figure><img src="https://64.media.tumblr.com/0d853a1bffcbd20f676b6d3e9e7c2ac0/tumblr_oybc1lIzAt1vbdodoo1_500.gif" alt="cute ghost" /></figure>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="flex justify-center">
                <Link to="/activities">
                    <button className="btn btn-outline btn-secondary btn">Find a new adventure!</button>
                </Link>
            </div>
        </div>

    )
}
export default EmptyFavorites;
