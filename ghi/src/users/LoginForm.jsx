import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUser from '../hooks/useUser'

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { token, login } = useToken();
    const navigate = useNavigate();
    const { saveUser } = useUser()
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login(username, password);
            await saveUser()

            if (token) {
                navigate("/home");
                e.target.reset();
            } else {
                setError("Login failed! Please check your username and password.");
            }

        } catch (err) {
            console.log('Error while logging in: ', err)
            setError("Error occurred while logging in.");
        }
    };

    return (
        <div className="card text-bg-light mb-3">
            <h5 className="card-header">Login</h5>
            <div className="card-body">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-3">
                        <label className="form-label">Username:</label>
                        <input
                            name="username"
                            type="text"
                            className="form-control"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}
                    <div>
                        <input className="btn btn-primary" type="submit" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
