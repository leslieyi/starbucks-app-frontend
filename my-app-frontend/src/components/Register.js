import { useState } from "react";
import { Redirect } from "react-router-dom";
const axios = require('axios');

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [successfullyRegistered, setSuccessfullyRegistered] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`${process.env.REACT_APP_API_URL}/register`, {
            name: name,
            email: email,
            password: password
        })
        .then(function (response) {
            if(response.data.error){
                alert(response.data.error)
                
            }else {
                console.log(response)
                setSuccessfullyRegistered(true)
            }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    if(successfullyRegistered) {
        return (
            <Redirect to="/login" />
        )
    }else{
        return (
            <div id = 'register-form-wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <label>
                    First Name:
                    <input
                    name="firstName"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required />
                </label>

                <label>
                    Email:
                    <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required />
                </label>

                <label>
                    Password:
                    <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required />
                </label>

                <button>Submit</button>
            </form>
        </div>
    )}
}