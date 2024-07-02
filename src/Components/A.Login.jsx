import React from 'react';

const Login = () => {

    return (

        <div>
            <h1 className="heading">Flixsync</h1>
            <h5 className="subheading">Moviegoing with friends, made easy.</h5>
            <div className='wrapper'>
                <form action="">
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Password" required />
                    </div>
                    <button type="submit" className="button">Login</button>
                    <button type="submit" className="button">Sign Up</button>

                    <div className="reset-text">

                        <h6>Forgot password? Reset here</h6>

                    </div>
                </form >
            </div >
        </div>
    );

};

export default Login;