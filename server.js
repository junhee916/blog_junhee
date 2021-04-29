require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

const connectDB = require('./config/database')
connectDB()

const userRouter = require('./router/user')

app.use(cors())
app.use(morgan("dev"))

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use('/user', userRouter)

const PORT = process.env.PORT || 9000

app.listen(PORT, console.log("connected server..."))