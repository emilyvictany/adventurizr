import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState } from "react";
import useUser from "../hooks/useUser";

function EditUserProfile() {
    const { user } = useUser();
    const { token } = useToken();
    const [firstName, setFirstName] = useState(user?.first_name || '');
    const [lastName, setLastName] = useState(user?.last_name || '');
    const [username, setUsername] = useState(user?.username || '');
    const [email, setEmail] = useState(user?.email || '');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState();

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


    return (
        <div>
            <form onSubmit={handleEdit}>
                <h1>Edit User Profile</h1>
                <div>
                    <div>
                        <label>
                            first name
                        </label>
                        <input name="first_name" value={firstName} onChange={handleFirstNameChange} placeholder={user?.first_name}/>
                    </div>
                    <div>
                        <label>
                            last name
                        </label>
                        <input name="last_name" value={lastName} onChange={handleLastNameChange} placeholder={user?.last_name}/>
                    </div>
                    <div>
                        <label>
                            username
                        </label>
                        <input name="username" value={username} onChange={handleUsernameChange} placeholder={user?.username}/>
                    </div>
                    <div>
                        <label>
                            email
                        </label>
                        <input name="email" value={email} onChange={handleEmailChange} placeholder={user?.email}/>
                    </div>
                    <div>
                        <label>
                            New password
                        </label>
                        <input name="password" value={password} onChange={handlePasswordChange} placeholder="enter new password"/>
                    </div>
                    <div>
                        <button type="submit">Update</button>
                    </div>
                </div>
            </form>
            {successMessage && (
                <div className="alert alert-success" role="alert">
                    {successMessage}
                </div>
            )}
        </div>
    );
};

export default EditUserProfile;
