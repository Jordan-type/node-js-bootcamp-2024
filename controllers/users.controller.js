const { createUser, getAllUsers, getUserByEmail, getUser, updateUser, deleteUser } = require("../services/user.services")

// auth function - sigup, signin, signout, forgot password, reset password, 
// change password, 
// TODO: change email, change username, change phone number, change profile picture(Research on how to do this) - cloundinary, multer

// validations are check your data before you send it to the server 
// check if the data is valid before you send it to the server - if email or the userdata is missing or its not empty - 
// check if the password is strong enough (contain 6 or 8 char) - check if the email is valid - check if the user already exists
// public route
const signUp = async (req, res) => {
    try {
        const userData = req.body // { username, first_name, last_name, email, phone_number, county, country, password }

        // check if the email already exists
        const userExists = await getUserByEmail(userData.email)
        if (userExists) {
            return res.status(400).json({ 
                message: 'User already exists' 
            });
        }

        // check if the password is strong enough
        if (userData.password.length < 6) {
            return res.status(400).json({ 
                message: 'Password must be at least 6 characters' 
            });
        }

        const user = await createUser(userData)

        res.status(201).json({ 
            message: 'User created successfully', 
            user 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// signin - login - check if the user exists - check if the password is correct - generate a token(session token - 30days) - send the token to the user
// session are important - they are used to keep the user logged in - they are used to know who have access to your account - devices logged in
// check if the user is logged in - check if the user is an admin - check if the user is a student - check if the user is a teacher
// public route
const signIn = async (req, res) => {
    try {
        const { email, password } = req.body // phone_number, password

        // check if the user exists
        const user = await getUserByEmail(email)
        if (!user) {
            return res.status(400).json({ 
                message: 'User not found' 
            });
        }

        // check if the password is correct
        if (password !== user.password) {
            return res.status(400).json({ 
                message: 'Invalid password or Incorrect password' 
            });
        }

        // generate a token
        const token = jwt.sign({ email: user.email, id: user._id },  'your_jwt_secret', { expiresIn: '10d' })

        res.status(200).json({ 
            message: 'User logged in successfully', 
            token 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// signout - logout - remove the token from the user 
// - remove the token from the user's device - remove the token from the user's browser
const signOut = async (req, res) => {
    try {
        // remove the token from the user
        res.status(200).json({ 
            message: 'User logged out successfully' 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// forgot password - send the user an email with a link to reset the password - (nodemailer - sendgrid - mailgun) - public route
// - send the user a code to reset the password(000-000) - send the user a link to reset the password (http://localhost:3000/reset-password)
const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body // phone_number

        // check if the user exists
        const user = await getUserByEmail(email)
        if (!user) {
            return res.status(400).json({ 
                message: 'User not found' 
            });
        }

        // TODO: send the user an email with a link to reset the password - (nodemailer - sendgrid - mailgun)
        // TODO: send the user a code to reset the password(000-000)
        // TODO: send the user a link to reset the password (http://localhost:3000/reset-password)

        res.status(200).json({
            message: 'Password reset link sent successfully'
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// reset password - change the user's password - check if the user exists - check if the password is strong enough
// - check if the password is correct - check if the password is the same as the old password - public route
const resetPassword = async (req, res) => {
    try {
        const { email, password, confirmPassword } = req.body // phone_number, password, confirmPassword

        // check if the user exists
        const user = await getUserByEmail(email)
        if (!user) {
            return res.status(400).json({ 
                message: 'User not found' 
            });
        }

        // check if the password is strong enough
        if (password.length < 6) {
            return res.status(400).json({ 
                message: 'Password must be at least 6 characters' 
            });
        }

        // check if the password is correct rockers == rockers (equal to)  - rockers!== Rockers (not equal to)
        if (password !== confirmPassword) {
            return res.status(400).json({ 
                message: 'Passwords do not match' 
            });
        }

        // check if the password is the same as the old password
        if (password === user.password) {
            return res.status(400).json({ 
                message: 'New password must be different from the old password' 
            });
        }

        // change the user's password - easy way for updating spefic filed  the user's password
        user.password = password
        await user.save()
        res.status(200).json({
            message: 'Password reset successfully'
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// change password - change the user's password - check if the user exists - check if the password is strong enough
// this is the same as the reset password but the user must be logged in to change the password - its a private route
const changePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword, confirmPassword } = req.body // phone_number, password, confirmPassword

        // check if the user exists
        const user = await getUserByEmail(email)
        if (!user) {
            return res.status(400).json({ 
                message: 'User not found' 
            });
        }

        // check if the password is strong enough
        if (newPassword.length < 6) {
            return res.status(400).json({ 
                message: 'Password must be at least 6 characters' 
            });
        }

        // check if the password is correct
        if (newPassword !== confirmPassword) {
            return res.status(400).json({ 
                message: 'Passwords do not match' 
            });
        }

        // check if the password is the same as the old password
        if (newPassword === user.password) {
            return res.status(400).json({ 
                message: 'New password must be different from the old password' 
            });
        }

        // change the user's password - easy way for updating spefic filed  the user's password
        user.password = newPassword
        await user.save()
        res.status(200).json({
            message: 'Password changed successfully'
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}









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
    signUp,
    signIn,
    signOut,
    forgotPassword,
    resetPassword,
    changePassword,
    createUserController
}
