import { useNavigate } from "react-router-dom";
import DeleteUser from "./DeleteUser";
import useUser from "../hooks/useUser";
import mountains from "../images/mountains.png";


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
                            <div className=" text-secondary rounded-full w-20">
                                <span className="text-2xl">
                                </span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width=".75" stroke="currentColor" class="w-20">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-center overflow-x-auto h-96 pl-16 pr-16">
                            <table className="table ">
                                <thead>
                                    <tr>
                                        <th >First name:</th>
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
                        <div className="pt-14 flex justify-center pb-10">
                            <DeleteUser user={user} />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default UserProfile;
