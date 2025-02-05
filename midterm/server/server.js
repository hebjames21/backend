const exprees = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express()

dotenv.config()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000

