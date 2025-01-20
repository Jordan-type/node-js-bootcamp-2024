const  Class =  require("../models/Class")
const { handleValidationError } = require("../middleware/errorHandler")

const createClass = async (req, res) => {
    try {
        const {  grade } = req.body;

        if ( !grade)   {
            handleValidationError("Please fill in all fields")
        } // $ && > < == logic
        
        const newClass = await Class.create({
            grade
        })

        res.status(200).json({
            message: "Student created successfully",
            class: newClass
        })
        } catch (error) {
            res.status(500).json({ message: "Error creating teacher" })
        }
}


module.exports = {
    createClass
}