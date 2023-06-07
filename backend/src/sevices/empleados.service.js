import db from "../config/db.js";

export const getEmpleados=()=>{
    return new Promise((resolve,reject)=>{
        const query='SELECT * FROM empleados';
        db.execute(query)

        .then((result)=>resolve(result))
        .catch((err)=>reject(err))

    });
    
};

export const getempleado=(id)=>{
    return new Promise((resolve,reject)=>{
        const query='SELECT * FROM empleados WHERE id=?';
        db.execute(query,[id])

        .then((result)=>resolve(result))
        .catch((err)=>reject(err))

    });
    
};

export const createEmpleados=(empleados)=>{
    return new Promise((resolve,reject)=>{
        const query='INSERT INTO empleados (nombre,edad,pais,cargo,anios) VALUES (?,?,?,?,?) ';

        const {nombre,edad,pais,cargo,anios}=empleados
        db.execute(query,[nombre,edad,pais,cargo,anios])

        .then((result)=>resolve(result))
        .catch((err)=>reject(err))

    });
    
};

export const updateEmpleados=(id,empleados)=>{
    return new Promise((resolve,reject)=>{
        const query='UPDATE empleados SET nombre=?, edad=?, pais=?, cargo=?, anios=? WHERE id=?';

        const {nombre,edad,pais,cargo,anios}=empleados

        db.execute(query,[nombre,edad,pais,cargo,anios,id])

        .then((result)=>resolve(result))
        .catch((err)=>reject(err))

    });
    
};

export const deleteEmpleados=(id)=>{
    return new Promise((resolve,reject)=>{
        const query='DELETE FROM empleados WHERE id=?';

        

        db.execute(query,[id])

        .then((result)=>resolve(result))
        .catch((err)=>reject(err))

    });
    
};