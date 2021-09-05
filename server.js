const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/user.routes')

require('dotenv').config({path: './config/.env'})

const app = express()

const corsOptions = {
    origin: process.env.CLIENT,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('*', checkUser)
app.use('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id)
})

app.use('/user', userRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT ${process.env.PORT}`)
})
