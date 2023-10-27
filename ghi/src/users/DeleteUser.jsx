import useToken from "@galvanize-inc/jwtdown-for-react";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";

function DeleteUser() {
    const { user } = useUser()
    const { token, logout } = useToken();
    const navigate = useNavigate();

    const confirmDelete = () => {
        const result = window.confirm("Are you sure you want to delete your account?");

        if (result) {
            deleteAccount();
        }
    };

    const deleteAccount = async () => {
        const deleteUrl = `${process.env.REACT_APP_API_HOST}/api/users/${user?.id}`;
        const fetchConfig = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        };
        try {
            const response = await fetch(deleteUrl, fetchConfig);
            if (response.ok) {
                logout();
                navigate("/");
            } else {

            }
        } catch (error) {
            console.error("Could not delete user account: ", error);
        }
    };

    return (
        <button className="btn btn-error btn-xs text-base-100" onClick={confirmDelete}>
            Delete Account
        </button>
    );
}
export default DeleteUser;
