import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/A.Login';
import Homepage from './Components/B.Homepage';
import SignUp from './Components/D.signUp';


const App = () => {

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/homepage" element={<Homepage />} />
                    <Route path="/" element={<Login />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;