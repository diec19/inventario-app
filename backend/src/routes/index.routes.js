import { Router } from "express";
import empleadosRouter from "./empleados.routes.js";

const indexRouter = Router();

const prefix =  "/api";

indexRouter.get(prefix,(req,res)=>{
    res.send("Welcome to Tools API ")
})

indexRouter.use(`${prefix}/empleados`,empleadosRouter)

export default indexRouter