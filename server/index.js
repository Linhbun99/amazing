const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./routes/auth')
require('dotenv').config()

const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@amazing.krl6ms9.mongodb.net/?retryWrites=true&w=majority`
const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('MongoDB connect successfully')
    } catch (error) {
        console.log(error.message || 'MongoDB connect failed')
        process.exit(1)
    }
}

connectDB()

const app = express();

app.use(express.json())

app.use('/api/v1/auth', userRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
