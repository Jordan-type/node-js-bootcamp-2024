const  Student = require("../models/Student")
const { handleValidationError } = require("../middleware/errorHandler")

const createStudent = async (req, res) => {
    try {
        const { studentName, registrationNumber, grade } = req.body;

        if (!studentName || !registrationNumber || !grade)   {
            handleValidationError("Please fill in all fields")
        } // $ && > < == logic
        
        const newStudent = await Student.create({
            studentName,
            registrationNumber,
            grade
        })

        res.status(200).json({
            message: "Student created successfully",
            student: newStudent
        })
        } catch (error) {
            res.status(500).json({ message: "Error creating teacher" })
        }
}

// Todo: add createStudent, get, getall, update, delete


module.exports = {
    createStudent
}