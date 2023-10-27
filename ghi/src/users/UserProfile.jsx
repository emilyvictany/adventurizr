import { useNavigate } from "react-router-dom";
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

    return (
        <div className="w-screen">
            <div className="min-h-screen flex">
                <div className="w-2/5 justify-start bg-lightorange">
                    <div className="flex-initial w-300">
                        <h1 className="pt-6 flex justify-center text-3xl">User Profile</h1>
                        <div className="p-8 flex justify-center avatar placeholder">
                            <div className="bg-primary-content text-secondary rounded-full w-20">
                                <span className="text-2xl">K</span>
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
