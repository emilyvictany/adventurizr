import { useState } from 'react';
import useToken from "@galvanize-inc/jwtdown-for-react"
import { useNavigate } from "react-router-dom"
import useUser from '../hooks/useUser'

function InputForm(props) {

    const { id, placeholder, value, onChange, type } = props;

    return (
        <div className="form-control">

            <input value={value} onChange={onChange} required type={type} className="input input-bordered input-error w-full max-w-xs" id={id} placeholder={placeholder}></input>

        </div>

    )
}

const SignUpForm = () => {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
        await register(accountData, `${process.env.REACT_APP_API_HOST}/api/users`);
        await saveUser()
        e.target.reset()
        navigate("/home")
    }

    return (
        <div>
            <div className="min-h-screen flex">
                <div className="flex-1 ... bg-lightorange">
                    <div className="card text-bg-light mb-3 divspace">
                        <h5 className="text-red-500 text-2xl divspace" >Signup</h5>
                        <div className="card-body">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="divspace" >
                                    <label htmlFor="first_name" className="form-label divspace">First name</label>
                                    <div className="flex w-full component-preview p-4 items-left justify-left gap-5 font-sans">
                                        <InputForm
                                            placeholder="first name"
                                            value={first_name}
                                            onChange={e => setFirstName(e.target.value)}
                                            type="text" />
                                    </div>
                                    <label htmlFor="last_name" className="form-label divspace">Last name</label>
                                    <div className="flex w-full component-preview p-4 items-left justify-left gap-5 font-sans">
                                        <InputForm
                                            placeholder="last name"
                                            value={last_name}
                                            onChange={e => setLastName(e.target.value)}
                                            type="text" />
                                    </div>
                                    <label htmlFor="username" className="form-label divspace">Username</label>
                                    <div className="flex w-full component-preview p-4 items-left justify-left gap-5 font-sans">
                                        <InputForm
                                            placeholder="username"
                                            value={username}
                                            onChange={e => setUsername(e.target.value)}
                                            type="text" />
                                    </div>
                                    <label htmlFor="email" className="form-label divspace">Email</label>
                                    <div className="flex w-full component-preview p-4 items-left justify-left gap-5 font-sans">
                                        <InputForm
                                            placeholder="you@example.com"
                                            labelText="Email address"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            type="email" />
                                    </div>
                                    <label htmlFor="password" className="form-label divspace">Password</label>
                                    <div className="flex w-full component-preview p-4 items-left justify-left gap-5 font-sans">
                                        <InputForm
                                            placeholder="password"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            type="password" />
                                    </div>
                                    <div className="divspace">
                                        <input type="submit" className="btn btn-error text-white" value="Register" />
                                    </div>
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
