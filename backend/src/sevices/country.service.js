import db from "../config/db.js";

export const getCountries=()=>{
    return new Promise((resolve,reject)=>{
        const query='SELECT * FROM ciudades';
        db.execute(query)

        .then((result)=>resolve(result))
        .catch((err)=>reject(err))

    });
    
};

export const getCountry=(id)=>{
    return new Promise((resolve,reject)=>{
        const query='SELECT * FROM ciudades WHERE id=?';
        db.execute(query,[id])

        .then((result)=>resolve(result))
        .catch((err)=>reject(err))

    });
    
};

export const createCountry=(ciudades)=>{
    return new Promise((resolve,reject)=>{
        const query='INSERT INTO ciudades (name,capital,currency) VALUES (?,?,?) ';

        const {name,capital,currency}=ciudades
        db.execute(query,[name,capital,currency])

        .then((result)=>resolve(result))
        .catch((err)=>reject(err))

    });
    
};

export const updateCountry=(id,ciudades)=>{
    return new Promise((resolve,reject)=>{
        const query='UPDATE ciudades SET name=?, capital=?, currency=? WHERE id=?';

        const {name,capital,currency}=ciudades

        db.execute(query,[name,capital,currency,id])

        .then((result)=>resolve(result))
        .catch((err)=>reject(err))

    });
    
};

export const deleteCountry=(id)=>{
    return new Promise((resolve,reject)=>{
        const query='DELETE FROM ciudades WHERE id=?';

        

        db.execute(query,[id])

        .then((result)=>resolve(result))
        .catch((err)=>reject(err))

    });
    
};