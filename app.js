import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { dbConnection } from "./db/dbConnection.js"

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
app.use(express.urlencoded({ extended: true }))

dbConnection()

export default app;