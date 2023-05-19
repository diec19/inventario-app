import { Router } from "express";
import countryRouter from "./country.routes.js";

const indexRouter = Router();

const prefix =  "/api";

indexRouter.get(prefix,(req,res)=>{
    res.send("Welcome to PlanetScale API ")
})

indexRouter.use(`${prefix}/ciudades`,countryRouter)

export default indexRouter