const { createUser, getAllUsers, getUserByEmail, getUser, updateUser, deleteUser } = require("../services/user.services")

// post - http req = request and res = response - status (201 - success), (404 - Not found) (500 - server error)
// creating user - params { username, first_name, last_name, email, phone_number, county, country, password }
const createUserProfile = async (req, res) => {
    try {
        const userData = req.body // { username, first_name, last_name, email, phone_number, county, country, password }
        const user = await createUser(userData)

        res.status(201).json({ message: 'User created successfully', user });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// fetch user profile - get user by email || id || phone number || username
// getUserByEmail 
// @params email
// @returns user details - { username, first_name, last_name, email, phone_number, county, country, password }
const getUserProfile = async (req, res) => {
    try {
        const { email } = req.params
        const user = await getUserByEmail(email)

        res.status(200).json({ user });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// fetch all users
// getAllUsers
// @returns users details
const getUsersProfiles = async (req, res) => {
    try {
        const users = await getAllUsers()

        res.status(200).json({
            users
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

// update user profile - update user by email || id || phone number || username
// updateUser
// @params email
// @returns user details - { username, first_name, last_name, email, phone_number, county, country, password }
const updateUserProfile = async (req, res) => {
    try {
        const { email } = req.params
        const userData = req.body
        const user = await updateUser(email, userData)

        res.status(200).json({ message: 'User updated successfully', user });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// delete user profile - delete user by email || id || phone number || username
// deleteUser
// @params email
// @returns user details - { username, first_name, last_name, email, phone_number, county, country, password } - account be suspended, deleted && deleted completly
const deleteUserProfile = async (req, res) => {
    try {
        const { email } = req.params
        const user = await deleteUser(email)

        res.status(200).json({ message: 'User deleted successfully', user });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// add the the other controllers here


module.exports = {
    createUserProfile,
    getUserProfile,
    getUsersProfiles,
    updateUserProfile,
    deleteUserProfile
}
