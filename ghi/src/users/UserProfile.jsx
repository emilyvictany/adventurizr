import { useNavigate } from "react-router-dom";
import DeleteUser from "./DeleteUser";
import useUser from "../hooks/useUser";

function UserProfile() {
    const { user } = useUser()
    const navigate = useNavigate();

    function editButton(e) {
        e.preventDefault();
        navigate("/user/edit");
    }

    return (
        <div>
            <h1>User Profile</h1>
            <div>
                <ul>
                    <p>First name: {user?.first_name}</p>
                    <p>Last name: {user?.last_name}</p>
                    <p>username: {user?.username}</p>
                    <p>email: {user?.email}</p>
                </ul>
                <div>
                    <button onClick={editButton} type="button">edit</button>
                    <DeleteUser user={user} />
                </div>
            </div>
        </div>
    );
};


export default UserProfile;
