import React from 'react';

const Login = () => {

    return (

        <div>
            <h1 className="heading">Flixwe</h1>
            <h5 className="subheading">Moviegoing with friends, made easy.</h5>
            <div className='wrapper'>
                <form action="">
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Password" required />
                    </div>
                    <div className="button-group">
                        <button type="submit" className="button">Login</button>
                        <button type="submit" className="button">Sign Up</button>
                    </div>
                    <div className="reset-text">
                        <h6 id="reset-text">Forgot password? <b>Reset here</b></h6>

                    </div>
                </form >
            </div >
        </div>
    );

};

export default Login;