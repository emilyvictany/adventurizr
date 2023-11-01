import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DeleteUser from "./DeleteUser";
import useUser from "../hooks/useUser";
import { Typography } from "@material-tailwind/react";

function UserProfile() {
    const { user } = useUser()
    const navigate = useNavigate();
    function editButton(e) {
        e.preventDefault();
        navigate("/user/edit");
    }

    useEffect(() => {
        if (!user) {
            navigate("/login_error");
        }
    }, [user, navigate])

    return (
        <div className="w-screen">
            <div className="min-h-screen flex">
                <div className="w-2/5 justify-start bg-lightorange">
                    <div className="flex-initial w-300">
                        <h1 className="pt-6 flex justify-center text-3xl">User Profile</h1>
                        <div className="p-8 flex justify-center avatar placeholder">
                            <div className=" text-secondary rounded-full w-20">
                                <span className="text-2xl">
                                </span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth=".75" stroke="currentColor" className="w-20">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-center overflow-x-auto h-96">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>First name:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>{user?.first_name}</td></tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>Last name:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>{user?.last_name}</td></tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>Username:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>{user?.username}</td></tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>Email:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>{user?.email}</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="pt-12 flex justify-center pl-30">
                            <button onClick={editButton} className="btn btn-error btn text-base-100" type="button">Edit</button>
                        </div>
                        <div className="pt-28 flex justify-center">
                            <DeleteUser user={user} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <footer className="flex justify-center">
                    <Typography color="blue-gray" className="font-normal">
                        &copy; 2023 boredom busters
                    </Typography>
                </footer>
            </div>
        </div>
    );
}

export default UserProfile;
