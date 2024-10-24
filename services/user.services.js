const User = require("../models/Users") // import users model // write a create user function types (9) we have covered - CRUD

// 1. Named function - camelCase specifically the async 
// * object param - called userData - { username, first_name, last_name, email, phone_number, county, country, password }
// * note - learn more about objects - making things dynamic 
// * comments - 2 types - inline comment and paragraph 
//  1. Create 
function createUser(userData) {
    try {
    const user = new User(userData);
    return user.save();
    } catch (error) {
        console.log(error);
    }
}

// 2. Async for read 
// get a list of users from db
// Mongodb key words - save() -saves a document or a user, find() -returns all users, findOne  returns one user- SQL - FIND, WHERE, etc
// Read
const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (errors) {
        console.log(errors);
    }
}

// Read to get specific user by email
// params - email Home Work find user using either phoneNumber or username 
const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });

        if (!user) {
            console.log('User not found');
            return null;
        }

        return user;
    } catch (errors) {
        console.log(errors);
        throw new Error('Could not find user by email');
    }
}


// get one user 
const getUser = async (id) => {
    try {
        const user = await User.findById(id);
        if (!user) {
            console.log('User not found');
            return null;
        }

        return user;
    } catch (errors) {
        console.log(errors);
        throw new Error('Could not find user');
    }

}

// update and delete - delete(), deleteOne(), deleteMany(), findByIdAndDelete(), update(), updateOne(), insertMany(), findByIdAndUpdate()

// Update - modify existing data
// params - id, userData { username, first_name, last_name, email, phone_number, county, country, password }
const updateUser = async (id, userUpdateData) => { 
    try { 
        const user = await User.findByIdAndUpdate(id, userUpdateData, { new: true });
        return user;
    } catch (error) {
        console.log(error);
        throw new Error('Could not update user');
    }
}


// delete 
// params - id
const deleteUser = async (id) => { 
    try {
        const user = await User.findByIdAndDelete(id);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error('Could not delete user');

    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUserByEmail,
    getUser,
    updateUser,
    deleteUser
}




// create the user data object
// const newUser = {
//     username: "jDoe",
//     first_name: "Jordan",
//     last_name: "Muthemba",
//     email: "johndoe@gmail.com",
//     phone_number: "0712345678", // phone code (country code for our case its +254 - xxx-000)
//     county: "Nairobi",
//     country: "Kenya",
//     password: "password12345"
// }


// user Id '6717ee01c22fbea575e7a390'
// const userId = '6717ee01c22fbea575e7a390'
// const updateUserData = {
//     username: "ruto_",
//     first_name: "Jordan",
//     last_name: "Muthemba",
//     email: "jordanmuthemba25@gmail.com",
//     phone_number: "0712380880", // phone code (country code for our case its +254 - xxx-000)
//     county: "Nairobi",
//     country: "Kenya",
//     password: "passwordless"
// }


// calling function and  // pass the object to the function
// createUser(newUser)
// .then(user => console.log("user uploaded to db", user))
// .catch(err => console.log("error uploading user to db", err))

// getAllUsers()
// .then(users => console.log("all users", users))
// .catch(err => console.log("error fetching all users", err))

// updateUser(userId, updateUserData)
// .then(result => console.log('Update Result:', result))
// .catch(err => console.error('Error:', err));

// deleteUser(userId)

// const email = newUser.email
// getUserByEmail(email)
// .then(user => {
//     if (user) {
//         console.log("user found", user)
//     } else {
//         console.log("user not found")
//     }
// })
// .catch(err => console.log("error fetching all users", err))