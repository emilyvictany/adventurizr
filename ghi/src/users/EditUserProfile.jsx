import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState, useEffect } from "react";
import useUser from "../hooks/useUser";
import { Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import LoginError from "../other/ErrorPage";

function EditUserProfile() {
    const { user, saveUser } = useUser();
    const { token } = useToken();
    const [firstName, setFirstName] = useState(user?.first_name || '');
    const [lastName, setLastName] = useState(user?.last_name || '');
    const [username, setUsername] = useState(user?.username || '');
    const [email, setEmail] = useState(user?.email || '');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState();

    useEffect(() => {
        if (!user) {
            saveUser();
        }
    }, [user, saveUser]);

    const handleEdit = async (e) => {
        e.preventDefault();

        const data = {};

        data.first_name = firstName;
        data.last_name = lastName;
        data.username = username;
        data.email = email;
        data.password = password;

        const editUrl = `${process.env.REACT_APP_API_HOST}/api/users/${user?.id}`;
        const response = await fetch(editUrl, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        console.log("edit data:", data)
        if (response.ok) {
            setSuccessMessage("Changes were successfully made!");

            setTimeout(() => {
                setSuccessMessage();
            }, 5000);

        }
    }

    function handleFirstNameChange(e) {
        const { value } = e.target;
        setFirstName(value);
    }

    function handleLastNameChange(e) {
        const { value } = e.target;
        setLastName(value);
    }

    function handleUsernameChange(e) {
        const { value } = e.target;
        setUsername(value);
    }

    function handleEmailChange(e) {
        const { value } = e.target;
        setEmail(value);
    }

    function handlePasswordChange(e) {
        const { value } = e.target;
        setPassword(value);
    }

    if (!user) {
        return <LoginError to="/login_error" />;
    }

    return (
        <div className="w-screen">
            <div className="min-h-screen flex">
                <div className="w-2/5 justify-end bg-lightorange">
                    <h1 className="pb-8 pt-6 flex justify-center text-3xl">User Profile</h1>
                    <div className="flex-initial w-300 flex justify-center">
                        <form onSubmit={handleEdit} id="edit-user-profile-form">
                            <div className="mt-2 text-center">
                                <br></br>
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        first name
                                    </label>
                                <div>
                                    <input
                                        name="first_name" value={firstName} onChange={handleFirstNameChange} placeholder={user?.first_name}
                                        className="input input-sm input-bordered input-secondary w-full max-w-xs"
                                    />
                                </div>
                                <br></br>
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        last name
                                    </label>
                                <div>
                                    <input
                                        name="last_name" value={lastName} onChange={handleLastNameChange} placeholder={user?.last_name}
                                        className="input input-sm  input-bordered input-secondary w-full max-w-xs"
                                    />
                                </div>
                                <br></br>
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        username
                                    </label>
                                <div>
                                    <input
                                        name="username" value={username} onChange={handleUsernameChange} placeholder={user?.username}
                                        className="input input-sm  input-bordered input-secondary w-full max-w-xs"
                                    />
                                </div>
                                <br></br>
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        email
                                    </label>
                                <div>
                                    <input
                                        name="email" value={email} onChange={handleEmailChange} placeholder={user?.email}
                                        className="input input-sm input-bordered input-secondary w-full max-w-xs"
                                    />
                                </div>
                                <br></br>
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        New password
                                    </label>
                                <div>
                                    <input
                                        name="password" value={password} onChange={handlePasswordChange} placeholder="enter new password"
                                        className="input input-sm input-bordered input-secondary w-full max-w-xs"
                                    />
                                </div>
                                <br></br>
                                <div className="py-2 flex justify-center">
                                    <button type="submit" className="btn btn-error btn text-base-100">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {successMessage && (
                <div className="alert alert-success" role="alert">
                    {successMessage}
                </div>
            )}
            <div>
                <footer className="flex justify-center">
                    <Typography color="blue-gray" className="font-normal">
                        &copy; 2023 boredom busters
                    </Typography>
                </footer>
            </div>
        </div>
    );
};

export default EditUserProfile;
