import React, { useState } from 'react';
import axios from 'axios';

const signUp = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post('/api/users/signup', {

                username,
                email,
                firstName,
                lastName,
                password,

            });

            console.log(response.data);
            window.location.href = '/login';

        } catch (error) {

            console.error('Error signing up', error);
        }
    };

    return (
        <div>
            <h1 className="heading">Flixwe</h1>
            <h5 className="subheading">Join us and start watching movies with friends.</h5>
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
                    <div className="button-group">
                        <button type="submit" className="button">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default signUp;
