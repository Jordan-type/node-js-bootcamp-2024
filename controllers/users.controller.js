const { createUser, getAllUsers, getUserByEmail, getUser, updateUser, deleteUser } = require("../services/user.services")


// post - http req = request and res = response - status (201 - success), (404 - Not found) (500 - server error)
// creating user - params { username, first_name, last_name, email, phone_number, county, country, password }
const createUserController = async (req, res) => {
    try {
        const userData = req.body // { username, first_name, last_name, email, phone_number, county, country, password }
        const user = await createUser(userData)

        res.status(201).json({ message: 'User created successfully', user });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// add the the other controllers here


module.exports = {
    createUserController
}
