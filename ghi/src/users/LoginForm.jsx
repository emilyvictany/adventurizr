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


            if (token) {
                navigate("/home");
                e.target.reset();
            } else {
                setError("Login failed! Please check your username and password.");
            }

        } catch (err) {
            console.log('Error while logging in: ', err)
            setError("Error occurred while logging in.");
            setError("Error occurred while logging in.");
        }
    };

    return (

        <div>
            <div className="min-h-screen flex">
                <div className="flex-1 ... bg-lightorange">
                    <div className="card text-bg-light mb-3 divspace">
                        <h5 className="text-red-500 text-2xl divspace">Login</h5>
                        <div className="card-body">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="mb-3">
                                    <label className="form-label divspace">Username:</label>
                                    <div className="flex w-full component-preview p-4 items-left justify-left gap-5 font-sans">
                                        <input
                                            name="username"
                                            type="text"
                                            className="form-control input input-bordered input-error w-full max-w-xs"
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label divspace">Password:</label>
                                    <div className="flex w-full component-preview p-4 items-left justify-left gap-5 font-sans">
                                        <input
                                            name="password"
                                            type="password"
                                            className="form-control input input-bordered input-error w-full max-w-xs"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                                {error && (
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                )}
                                <div className="divspace">
                                    <input className="btn btn-error text-white" type="submit" value="Login" />
                                </div>
                            </form>
                        </div>
                    </div></div>
                <div className="flex-1 ..."></div>
            </div>
        </div>
    );
};

export default LoginForm;
