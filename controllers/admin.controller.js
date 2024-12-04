import Admin from "../models/Admin"
import { handleValidationError } from "../middleware/errorHandler"

const adminSignup = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            handleValidationError("Please fill all the fields!")
        }

        // check if the admin already exists in the database
        const existingAdmin = await Admin.findOne({ email })
        if (existingAdmin) {
            return res.status(400).json({
                message: "Admin already exists with this email!"
            })
        }

        const admin = await Admin.create({
            email,
            password
        })

        res.status(200).json({
            message: "Admin created successfully!",
            data: admin
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
            })
    }
}

export {
    adminSignup
}