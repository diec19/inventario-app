import express from "express";
import db from "./config/db.js"
import indexRouter from "./routes/index.routes.js";
import cors from "cors";
//import dotenv from "dotenv"

//dotenv.config()

const app = express()
app.use(cors());
app.set("port",process.env.PORT || 9000);
app.use(express.json())
//routes

app.use("/", indexRouter);
app.use("*", (req,res)=>{
    res.send("404 not found")
})


app.listen(app.get("port"),()=>{
    console.log("server is runnig on port",app.get("port"))
}) 

db.connect()
.then(()=>{
    console.log("Connected to database")
})
.catch((err)=>{
    console.log("Error",err)
})