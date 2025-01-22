const Teacher = require("../models/Teacher")
const { handleValidationError } = require("../middleware/errorHandler")

const createTeacher = async (req, res) => {
    try {
        const { teacherName, email, subject } = req.body;

        if (teacherName || !email || !subject)   {
            handleValidationError("Please fill in all fields")
        } // $ && > < == logic
        
        const newTeacher = await Teacher.create({
            teacherName,
            email,
            subject
        })

        res.status(200).json({
            message: "Teacher created successfully",
            teacher: newTeacher
        })
        } catch (error) {
            res.status(500).json({ message: "Error creating teacher" })
            }
}

// Todo: add createTeacher, get, getall, update, delete

module.exports = {
    createTeacher
}
