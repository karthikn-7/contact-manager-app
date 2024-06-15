const express = require('express')
const connectDB = require('./config/dbConnection')
const app = express()
const dotenv = require('dotenv').config()

connectDB()
const port = process.env.PORT || 5000

// middleware json inbuilt
app.use(express.json())

// routes
app.use("/api/contacts", require('./routes/contactRoutes'))


// App server running
app.listen(port, () => {
    console.log("Server is alive on: http://localhost:"+port)
})