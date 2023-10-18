import { useState } from 'react';
import useToken from "@galvanize-inc/jwtdown-for-react"
import { useNavigate } from "react-router-dom"

function InputForm(props) {

    const { id, placeholder, labelText, value, onChange, type } = props;

    return (
        <div className="mb-4">
            <label htmlFor={id} className="form-label">{labelText}</label>
            <input value={value} onChange={onChange} required type={type} className="form-control" id={id} placeholder={placeholder}></input>
        </div>
    )
}

const SignUpForm = () => {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { register } = useToken()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const accountData = {
            first_name: first_name,
            last_name: last_name,
            username: email,
            password: password,
        }
        register(
            accountData,
            `${process.env.REACT_APP_API_HOST}/api/users`

        );
        e.target.reset()
        navigate("/home")
    }

    return (
        <div className="card text-bg-light mb-3">
            <h5 className="card-header">Signup</h5>
            <div className="card-body">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-3">
                        <InputForm
                            id="first_name"
                            placeholder="first name"
                            labelText="First name"
                            value={first_name}
                            onChange={e => setFirstName(e.target.value)}
                            type="text" />
                        <InputForm
                            id="last_name"
                            placeholder="last name"
                            labelText="Last name"
                            value={last_name}
                            onChange={e => setLastName(e.target.value)}
                            type="text" />
                        <InputForm
                            id="email"
                            placeholder="you@example.com"
                            labelText="Email address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="email" />
                        <InputForm
                            id="password"
                            placeholder="password"
                            labelText="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password" />
                        <input type="submit" className="btn btn-primary" value="Register" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm
