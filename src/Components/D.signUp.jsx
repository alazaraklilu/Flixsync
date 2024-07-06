import React, { useState } from 'react';
import axios from 'axios';

const signUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/users/signup', {
                username,
                email,
                firstName,
                lastName,
                password,
            });
            // Redirect to login page on successful sign up
            window.location.href = '/login';
        } catch (error) {
            // Display error message on sign up failure
            setError('Error signing up. Please try again.');
        }
    };

    return (
        <div>
            <h1 className="heading">Flixwe</h1>
            <h5 className="subheading">Simplify your moviegoing experience. Sign up below.</h5>
            <div className='wrapper'>
                <form onSubmit={handleSignUp}>
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
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
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
                        <button type="submit" className="button">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default signUp;