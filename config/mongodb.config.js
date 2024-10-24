const mongoose =  require("mongoose") 
const dotenv = require("dotenv")
dotenv.config()

const mongodbOptions = {
    useUnifiedTopology: true,
}

const connectDB = async () => {
    try {
        const connectionResult = await mongoose.connect(process.env.DEV_MONGO_URI, mongodbOptions)

        console.log("Connected to MongoDB:", connectionResult.connections[0].name)

    } catch (error) {

        console.log("Failed to connect to DB:", error)
    }
}


module.exports = {
    connectDB,
}

