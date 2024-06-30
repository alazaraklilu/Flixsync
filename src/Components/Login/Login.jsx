import React from 'react';
import './LoginForm.css';

const Login = () => {

    return (

        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Password" required />
                </div>
                <button type="submit">Login</button>
                <button type="submit">Sign Up</button>
            </form >
        </div >
    )

}

export default Login;