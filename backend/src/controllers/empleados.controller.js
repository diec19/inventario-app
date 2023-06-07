import * as empleadosServices from "../sevices/empleados.service.js"

export const getEmpleados=(req, res)=>{
    empleadosServices
    .getEmpleados()
    .then((result)=>{

        res.status(200).json({
            message:"empleado sastifactoriamente",
            data: result[0]
        })
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

export const getEmpleado=(req, res)=>{
    const {id}=req.params
    empleadosServices
    .getempleado(id)
    .then((result)=>{

        res.status(200).json({
            message:"Empleado",
            data: result[0]
        })
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

export const createEmpleados=(req, res)=>{
    const empleados=req.body;
    empleadosServices
    .createEmpleados(empleados)
    .then((result)=>{

        res.status(200).json({
            message:"Empleados ",
            data: result[0]
        })
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

export const updateEmpleados=(req, res)=>{
    const empleados=req.body;
    const {id}=req.params
    empleadosServices
    .updateEmpleados(id,empleados)
    .then((result)=>{

        res.status(200).json({
            message:"UPDATE Empleados ",
            data: result[0]
        })
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

export const deleteEmpleados=(req, res)=>{
    const {id}=req.params
    empleadosServices
    .deleteEmpleados(id)
    .then((result)=>{

        res.status(200).json({
            message:"Borrado Empleados ",
            data: result[0]
        })
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}