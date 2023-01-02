import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"


const app = express();
export default app

dotenv.config({
    path: "./config/config.env"
})

// Middlewares
app.use(cors());
app.use(bodyParser.json({ extended: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Importing routes

import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoute.js"
import paymentRoute from "./routes/paymentRoute.js"

app.use('/api/v1' , userRoutes)
app.use('/api/v1' , productRoutes)
app.use('/api/v1', paymentRoute )

