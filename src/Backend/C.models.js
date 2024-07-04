// database implementation

/*
Purpose: Models represent the data structure and handle interactions with the database. 
They define the schema for the data and provide methods for querying and manipulating the data.
Functionality: They abstract the database interactions and provide a clean API for the controllers to use when performing CRUD operations.
*/

const { User } = require('../models');

const createUer = async (req, res) => {

    try {

        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password
        });

        res.status(201); json(user);

    } catch (error) {

        res.status(400).json({ error: error.message });

    }

}