import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/login', { username, password });
            if (response.data.token) {
                // Redirect to homepage on successful login
                window.location.href = '/homepage';
            }
        } catch (error) {
            // Display error message on login failure
            setError('Invalid username or password');
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
                    {error && <p style={{ color: 'red' }}>{error}</p>}
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