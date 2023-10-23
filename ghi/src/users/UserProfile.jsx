import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import DeleteUser from "./DeleteUser";

function UserProfile() {
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserData() {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_API_HOST}/token`,
                    { credentials: "include" }
                );
                if (response.ok) {
                    const data = await response.json();
                    setUserData(data.account);
                } else {
                    console.log("Failed to fetch user data");
                }
            } catch (error) {
                console.error(error);
            }
        }

        getUserData();
    }, []);

    console.log("user data", userData);

    function editButton(e) {
        e.preventDefault();
        navigate("/user/edit");
    }

    return (
        <div>
            <h1>User Profile</h1>
            <div>
                <ul>
                    <p>First name: {userData.first_name}</p>
                    <p>Last name: {userData.last_name}</p>
                    <p>username: {userData.username}</p>
                    <p>email: {userData.email}</p>
                </ul>
                <div>
                    <button onClick={editButton} type="button">edit</button>
                    {/* <DeleteUser user={userData} /> */}
                </div>
            </div>
        </div>
    );
};


export default UserProfile;
