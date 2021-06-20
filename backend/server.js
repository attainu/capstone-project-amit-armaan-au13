import express from'express'
import dotenv from'dotenv'
import connectDB from './config/db.js'


import productRoutes from './routes/productRoutes.js'
import userRoutes from "./routes/userRoutes.js";


dotenv.config()
const app = express()

connectDB()
app.get('/',(req,res)=>{
    res.send("health check done...")
})

app.use(express.json())

app.use('/api/products',productRoutes)
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`server running on ${PORT}`))