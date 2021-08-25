import { useState } from "react";
import { Redirect } from "react-router-dom";
const axios = require('axios');

function LogInPage({ setUser, user }){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_API_URL}/login`, {
            email: email,
            password: password
        }, {withCredentials: true})
        .then(function (response) {
            if(response.data.error){
                alert(response.data.error)
            }
            else{
                setUser(response.data)
            }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    if(user){
        return (
            <Redirect to='/' />
        )
    }else{
        return (
            <div id = 'login-form-wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <label>
                        Email:
                        <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required />
                    </label>
                    <br/>

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
        )
    }
}

export default LogInPage;