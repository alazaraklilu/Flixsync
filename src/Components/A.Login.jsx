import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {

        e.preventDefault();
        try {
            const response = await axios.post('/api/users/login', { username, password });
            console.log(response.data);
            // Handle successful login, e.g., store token, redirect user, etc.
        } catch (error) {
            console.error('Login error', error);
            // Handle login error
        }

    };

    return (

        <div>
            <h1 className="heading">Flixwe</h1>
            <h5 className="subheading">Moviegoing with friends, made easy.</h5>
            <div className='wrapper'>
                <form onSubmit={handleLogin}>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="button-group">
                        <button type="submit" className="button">Login</button>
                        <button type="button" className="button" onClick={() => window.location.href = '/signup'}>Sign Up</button>
                    </div>
                    <div className="reset-text">
                        <h6 id="reset-text">Forgot password? <b>Reset here</b></h6>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;