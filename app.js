import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { dbConnection } from "./db/dbConnection.js"
import { errorMiddleware } from "./error/error.js"

const app = express()

dotenv.config({
    path: './.env'
})

app.use(
    cors({ //cors : allow a trusted frontend to interact with your backend server 
    origin:  process.env.FRONTEND_URL,
    methods: "POST", 
    credentials: true,
}))

app.use(express.json()); //the code we give to it is in json string form --> json object 
app.use(express.urlencoded({ extended: true }));

//routes import
import reservationRouter from './routes/reservation.route.js'
//http://localhost:4000/api/v1/reservation
app.use('/api/v1/reservation', reservationRouter)

dbConnection()

// app.use(errorMiddleware)

export default app;