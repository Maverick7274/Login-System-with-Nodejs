const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 4000

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/routes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server Started on Port ${port}`))