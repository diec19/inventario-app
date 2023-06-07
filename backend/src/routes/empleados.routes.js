import { Router } from "express";
import {
     getEmpleado,
     getEmpleados,
     createEmpleados,
     updateEmpleados,
     deleteEmpleados } from "../controllers/empleados.controller.js";

const empleadosRouter = Router();

empleadosRouter.get("/",getEmpleados)

empleadosRouter.get("/:id",getEmpleado)

empleadosRouter.post("/",createEmpleados)

empleadosRouter.put("/:id",updateEmpleados)

empleadosRouter.delete("/:id",deleteEmpleados)


export default empleadosRouter;