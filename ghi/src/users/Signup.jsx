import { useState } from 'react';
import useToken from "@galvanize-inc/jwtdown-for-react"
import { useNavigate } from "react-router-dom"
import useUser from '../hooks/useUser'



const SignUpForm = () => {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null);

    const { register } = useToken()
    const navigate = useNavigate()
    const { saveUser } = useUser()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const accountData = {
            first_name: first_name,
            last_name: last_name,
            username: username,
            email: email,
            password: password,
        }

        try {
            await register(accountData, `${process.env.REACT_APP_API_HOST}/api/users`);
            const user = await saveUser()
            if (user) {
                navigate("/home");
                e.target.reset();
            } else {
                setError("Sign up failed!");
                setTimeout(() => setError(), 5000);
            }
        } catch (err) {
            console.log('Error while signing in: ', err)
            setError("Error occurred while signing in.");
        }
    }

    return (
        <div className="w-screen">
            <div className="min-h-screen flex">
                <div className="flex-1 ... bg-lightorange">
                    <div className="card text-bg-light mb-3 divspace">
                        <h5 className="text-red-500 text-2xl divspace">Signup</h5>
                        <div className="card-body">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="pl-5" >
                                    <label className="block text-sm font-normal leading-6 text-gray-900 indent-3">First name</label>
                                    <div className="flex w-full component-preview p-2 items-left justify-left gap-5 font-sans">
                                        <input
                                            value={first_name}
                                            onChange={e => setFirstName(e.target.value)}
                                            type="text"
                                            className="input input-bordered input-error w-full max-w-xs" />
                                    </div>
                                    <label className="block text-sm font-normal leading-6 text-gray-900 indent-3">Last name</label>
                                    <div className="flex w-full component-preview p-2 items-left justify-left gap-5 font-sans">
                                        <input
                                            value={last_name}
                                            onChange={e => setLastName(e.target.value)}
                                            type="text"
                                            className="input input-bordered input-error w-full max-w-xs" />
                                    </div>
                                    <label className="block text-sm font-normal leading-6 text-gray-900 indent-3">Username</label>
                                    <div className="flex w-full component-preview p-2 items-left justify-left gap-5 font-sans">
                                        <input
                                            value={username}
                                            onChange={e => setUsername(e.target.value)}
                                            type="text"
                                            className="input input-bordered input-error w-full max-w-xs" />
                                    </div>
                                    <label className="block text-sm font-normal leading-6 text-gray-900 indent-3">Email</label>
                                    <div className="flex w-full component-preview p-2 items-left justify-left gap-5 font-sans">
                                        <input
                                            labeltext="Email address"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            type="email"
                                            className="input input-bordered input-error w-full max-w-xs" />
                                    </div>
                                    <label className="block text-sm font-normal leading-6 text-gray-900 indent-3">Password</label>
                                    <div className="flex w-full component-preview p-2 items-left justify-left gap-5 font-sans">
                                        <input
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            type="password"
                                            className="input input-bordered input-error w-full max-w-xs" />
                                    </div>

                                    <div className="flex w-full component-preview p-2 items-left justify-right gap-5 font-sans">
                                        <div className="ps-52 pt-6">
                                            <input type="submit" className="btn btn-error text-white" value="Register" />
                                        </div>
                                    </div>
                                    {error && (
                                        <div className="alert alert-danger" role="alert">
                                            {error}
                                        </div>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div></div>
                <div className="flex-1 ..."></div>
            </div>
        </div>
    )
}

export default SignUpForm
