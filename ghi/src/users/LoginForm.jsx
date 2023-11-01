import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useUser from '../hooks/useUser'
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../lotties/explore.json";


const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useToken();
    const navigate = useNavigate();
    const { saveUser } = useUser()
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login(username, password);
            const user = await saveUser()

            if (user) {
                navigate("/home");
                e.target.reset();
            } else {
                setError("Login failed! Please check your username and password.");
                setTimeout(() => setError(), 5000);
            }
        } catch (err) {
            console.log('Error while logging in: ', err)
            setError("Error occurred while logging in.");
        }
    };

    return (
        <div className="w-screen">
            <div className="min-h-screen flex">
                <div className="flex-1 ... bg-lightorange">
                    <div className="card text-bg-light mb-3 divspace">
                        <h5 className="text-red-500 text-2xl divspace">Login</h5>
                        <div className="card-body">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="pl-5">
                                    <div className="mb-3">
                                        <label className="block text-sm font-normal leading-6 text-gray-900 indent-3">Username</label>
                                        <div className="flex w-full component-preview p-2 items-left justify-left gap-5 font-sans">
                                            <input
                                                name="username"
                                                type="text"
                                                className="input input-bordered input-error w-full max-w-xs"
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="block text-sm font-normal leading-6 text-gray-900 indent-3">Password</label>
                                        <div className="flex w-full component-preview p-2 items-left justify-left gap-5 font-sans">
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
                                    <div className="flex w-full component-preview p-2 justify-right gap-5 font-sans">
                                        <div className="ps-60 pt-6">
                                            <input className="btn btn-error text-white" type="submit" value="Login" />
                                        </div>
                                    </div>

                                    <br></br>
                                    <div>
                                        <p className="lightblack-txt text-center">Don't have an account?
                                            <Link className="divsmallspace" to="/signup">
                                                <button className="link link-error">Sign Up</button>
                                            </Link>
                                        </p>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div></div>
                <div className="flex-1 ..."></div>
                <div className="flex-none pl-40">
                    <div className="h-2/5 w-2/5 login150-pic js-tilt">
                        <Player src={animationData} loop autoplay />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default LoginForm;
