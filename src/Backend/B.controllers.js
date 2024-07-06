// controller for functionality of components 

/*
Purpose: Controllers handle the logic for processing requests. 
They receive input from the routers, interact with the models to perform operations on the data, and send responses back to the client.
Functionality: They act as an intermediary between the routers and models, ensuring that the right operations are performed based on the request.
*/

const bcrypt = require('bcrypt');
const { User } = require('./C.models');
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
    const { username, email, firstName, lastName, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            username,
            email,
            firstName,
            lastName,
            password: hashedPassword,
        });

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ userId: user.userId }, 'your_jwt_secret', { expiresIn: '1h' });

        res.json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { signUp, login };